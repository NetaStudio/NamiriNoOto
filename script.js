// =================================================================
// 1. データ定義: 全てのカテゴリとボイスデータをJSON形式で管理します。
// =================================================================

const VOICE_DATA = [
    {
        id: "category-greeting",
        name: "挨拶",
        folder: "01_greeting",
        en_name: "Greeting",
        voices: [
            { text: "おはよう", file: "baka1.wav" },
            { text: "こんにちは", file: "baka2.wav" }
        ]
    },
    {
        id: "category-affirmation",
        name: "肯定",
        folder: "02_positive",
        en_name: "Affirmation",
        voices: [
            { text: "いいね！", file: "baka2.wav" },
            { text: "うんうん", file: "baka3.wav" },
            { text: "それはすごい", file: "baka1.wav" }, // 新しいボイスを追加
        ]
    },
    {
        id: "category-denial",
        name: "否定",
        folder: "03_denial", // sounds/03_denial/
        en_name: "Denial",
        voices: [
            { text: "そうじゃない", file: "baka1.wav" },
            { text: "だめ！", file: "baka1.wav" },
            { text: "それは違う", file: "baka1.wav" }
        ]
    },
];

// Firestoreの設定と認証
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot, collection, query, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// グローバル変数
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
let db, auth;
let userId = null;
let favoriteVoiceIds = new Set();
let currentAudio = null;

// =================================================================
// 2. 初期化処理: Firebaseの設定と認証、初期UIの構築
// =================================================================

document.addEventListener('DOMContentLoaded', async () => {
    try {
        if (Object.keys(firebaseConfig).length > 0) {
            const app = initializeApp(firebaseConfig);
            db = getFirestore(app);
            auth = getAuth(app);

            // 認証処理
            const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
            if (initialAuthToken) {
                await signInWithCustomToken(auth, initialAuthToken);
            } else {
                await signInAnonymously(auth);
            }

            // 認証状態の監視
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    userId = user.uid;
                    console.log("Authenticated with user ID:", userId);
                    initializeDataListeners();
                } else {
                    // 匿名認証が失敗した場合などのフォールバック
                    userId = `anon-${crypto.randomUUID()}`;
                    console.warn("Authentication failed, using anonymous ID:", userId);
                }
            });
        } else {
            // Firebase設定がない場合のフォールバック（機能限定）
            console.warn("Firebase config not found. Running in local mode.");
            // ダミーのuserIdを設定
            userId = `anon-${crypto.randomUUID()}`;
            // 認証待ちがないため、すぐにUI構築を開始
            initializeDataListeners();
        }

    } catch (e) {
        console.error("Error during Firebase initialization or authentication:", e);
        // エラー時もUIは最低限表示
        initializeDataListeners();
    }

    // 初期カテゴリのレンダリング
    renderCategories();
});

/**
 * データリスナーを設定し、初期データをレンダリングする
 */
function initializeDataListeners() {
    // お気に入りデータのリスナー設定
    if (db && userId) {
        const favoriteDocRef = doc(db, 'artifacts', appId, 'users', userId, 'config', 'favorites');
        onSnapshot(favoriteDocRef, (doc) => {
            if (doc.exists()) {
                const data = doc.data();
                favoriteVoiceIds = new Set(data.voices || []);
            } else {
                favoriteVoiceIds = new Set();
            }
            // データが更新されたら、現在表示されているボタンを再描画
            renderVoiceButtons(currentCategoryId);
            // お気に入りカテゴリのボタンの状態も更新
            renderCategories(); 
        }, (error) => {
            console.error("Error listening to favorites:", error);
        });
    }

    // デフォルトで最初のカテゴリを表示
    let initialCategory = VOICE_DATA[0];
    if (initialCategory) {
        currentCategoryId = initialCategory.id;
        renderVoiceButtons(currentCategoryId);
    }
}

// =================================================================
// 3. UIレンダリング
// =================================================================

let currentCategoryId = null;
const mainContent = document.getElementById('main-content');

/**
 * カテゴリボタンをサイドバーに描画する
 */
function renderCategories() {
    const categoryNav = document.getElementById('category-nav');
    if (!categoryNav) return;
    categoryNav.innerHTML = '';

    // 1. お気に入りフォルダの追加
    const favoriteFolder = createFavoriteFolder();
    categoryNav.appendChild(favoriteFolder);

    // 2. 通常カテゴリの追加
    VOICE_DATA.forEach(category => {
        const button = document.createElement('button');
        button.className = `category-button ${category.id === currentCategoryId ? 'active' : ''}`;
        button.textContent = category.name;
        button.setAttribute('data-category-id', category.id);
        button.addEventListener('click', () => {
            currentCategoryId = category.id;
            renderVoiceButtons(category.id);
            renderCategories(); // active状態を更新するために再描画
        });
        categoryNav.appendChild(button);
    });
}

/**
 * お気に入りフォルダを作成する
 */
function createFavoriteFolder() {
    const folderDiv = document.createElement('div');
    folderDiv.className = `favorite-folder ${currentCategoryId === 'favorites' ? 'active' : ''}`;
    folderDiv.setAttribute('data-category-id', 'favorites');
    
    // アイコン（Font AwesomeのスターアイコンをSVGで代替）
    const starIcon = `<svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.046a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.046a1 1 0 00-1.175 0l-2.817 2.046c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 000-.364-1.118L2.022 8.73c-.783-.57-.381-1.81.588-1.81h3.461a1 1 000.95-.69l1.07-3.292z"></path></svg>`;

    folderDiv.innerHTML = `
        <span class="flex items-center">
            ${starIcon}
            お気に入り (${favoriteVoiceIds.size})
        </span>
    `;

    folderDiv.addEventListener('click', () => {
        currentCategoryId = 'favorites';
        renderVoiceButtons('favorites');
        renderCategories(); // active状態を更新するために再描画
    });

    return folderDiv;
}


/**
 * 選択されたカテゴリIDに基づいてボイスボタンを描画する
 * @param {string} categoryId - 選択されたカテゴリのID ('favorites'を含む)
 */
function renderVoiceButtons(categoryId) {
    if (!mainContent) return;
    
    mainContent.innerHTML = '';
    
    // 描画するボイスデータを決定
    let voicesToRender = [];
    if (categoryId === 'favorites') {
        // お気に入り
        VOICE_DATA.forEach(category => {
            category.voices.forEach(voice => {
                const voiceId = `${category.folder}/${voice.file}`;
                if (favoriteVoiceIds.has(voiceId)) {
                    voicesToRender.push({ ...voice, categoryFolder: category.folder, voiceId: voiceId });
                }
            });
        });
        
        // お気に入りが空の場合
        if (voicesToRender.length === 0) {
            mainContent.innerHTML = `
                <div class="p-6 text-center text-gray-500">
                    <p class="mb-2">お気に入りリストは空です。</p>
                    <p>他のカテゴリから星マークを押して追加できます。</p>
                </div>
            `;
            return;
        }

    } else {
        // 通常カテゴリ
        const category = VOICE_DATA.find(c => c.id === categoryId);
        if (category) {
            voicesToRender = category.voices.map(v => ({
                ...v, 
                categoryFolder: category.folder,
                voiceId: `${category.folder}/${v.file}`
            }));
        } else {
            return; // カテゴリが見つからない場合は終了
        }
    }

    // Gridコンテナの作成
    const grid = document.createElement('div');
    grid.className = 'voice-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4';
    
    voicesToRender.forEach(voice => {
        const button = createVoiceButton(voice);
        grid.appendChild(button);
    });
    
    mainContent.appendChild(grid);
}

/**
 * 個別の音声ボタン要素を作成する
 * @param {object} voice - ボイスデータオブジェクト
 * @returns {HTMLButtonElement}
 */
function createVoiceButton(voice) {
    const button = document.createElement('button');
    button.className = 'voice-button relative'; // relativeを追加
    button.setAttribute('data-sound', `${voice.categoryFolder}/${voice.file}`);

    // ★修正点 3: ボタン内の構造を修正★
    // テキストとアイコンをFlexアイテムとして配置
    const isFavorite = favoriteVoiceIds.has(voice.voiceId);
    
    // お気に入りボタン（星マーク）
    const favoriteIcon = document.createElement('span');
    favoriteIcon.className = `favorite-icon`;
    
    // アイコンSVG (lucide-reactのstar/star-offをSVGで代替)
    favoriteIcon.innerHTML = isFavorite 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-yellow-300 transition-colors duration-100"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-white opacity-50 transition-colors duration-100 hover:text-yellow-300 hover:opacity-100"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

    // テキスト要素
    const textSpan = document.createElement('span');
    textSpan.textContent = voice.text;
    textSpan.className = "flex-grow text-left"; // テキストを左寄せにする

    // ボタンに要素を追加 (アイコンとテキストの順番を入れ替え)
    button.appendChild(favoriteIcon);
    button.appendChild(textSpan);

    // クリックイベントの設定
    button.addEventListener('click', handleVoiceButtonClick);
    
    // お気に入りアイコンのクリックは音声を再生せずにお気に入り状態を切り替える
    favoriteIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // ボタン自体の再生イベントを停止
        toggleFavorite(voice.voiceId);
    });

    return button;
}

// =================================================================
// 4. 機能ロジック
// =================================================================

/**
 * お気に入り状態を切り替える
 * @param {string} voiceId - お気に入りに追加/削除するボイスのID (例: "01_greeting/baka1.wav")
 */
async function toggleFavorite(voiceId) {
    if (!db || !userId) {
        showModal('エラー', 'お気に入り機能は現在利用できません。');
        return;
    }

    // セットをコピーして操作
    const newFavorites = new Set(favoriteVoiceIds);
    if (newFavorites.has(voiceId)) {
        newFavorites.delete(voiceId);
    } else {
        newFavorites.add(voiceId);
    }

    try {
        const favoriteDocRef = doc(db, 'artifacts', appId, 'users', userId, 'config', 'favorites');
        await setDoc(favoriteDocRef, { voices: Array.from(newFavorites) }, { merge: true });
        
        // setDocが成功するとonSnapshotが発火し、自動でUIが更新される
        console.log(`Favorite toggled successfully for ${voiceId}`);

    } catch (e) {
        console.error("Error toggling favorite:", e);
        showModal('エラー', 'お気に入り設定の保存に失敗しました。');
    }
}


/**
 * ボタンクリック時のハンドラ
 */
function handleVoiceButtonClick() {
    const soundPath = this.getAttribute('data-sound');
    if (!soundPath) {
        console.error('Error: data-sound attribute is missing on this button.', this);
        return;
    }
    
    // 他の音声を停止
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    // フルパスを構築 (例: "sounds/01_greeting/baka1.wav")
    const fullPath = 'sounds/' + soundPath;
    
    playAudioWithRetry(fullPath);
}

/**
 * 指数バックオフ付きのFetch関数 (音声再生)
 * @param {string} url - 再生する音声ファイルのURL
 * @param {number} retries - 残りのリトライ回数
 */
async function playAudioWithRetry(url, retries = 3) {
    try {
        const audio = new Audio(url);
        currentAudio = audio; // 現在のAudioオブジェクトを保存
        audio.currentTime = 0;
        await audio.play();
        console.log(`[Success] Audio requested: ${url}`);
        
        // 再生終了時にcurrentAudioをクリア
        audio.onended = () => {
            if (currentAudio === audio) {
                currentAudio = null;
            }
        };

    } catch (error) {
        // play()が拒否された場合（ブラウザの自動再生制限）
        if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.warn(`[Warning] Audio play restricted. Path: ${url}. (User interaction required)`);
        } else if (retries > 0) {
             // その他のエラー（主に404）の場合、リトライ
            const delay = Math.pow(2, 3 - retries) * 500; // 500ms, 1000ms, 2000ms
            console.warn(`[Retry] Retrying fetch for ${url} in ${delay}ms. Retries left: ${retries - 1}`);
            await new Promise(resolve => setTimeout(resolve, delay));
            await playAudioWithRetry(url, retries - 1);
        } else {
            console.error(`[Error] Failed to load audio after multiple retries: ${url}`, error);
        }
    }
}


// =================================================================
// 5. ユーティリティ (カスタムモーダル)
// =================================================================

/**
 * カスタムモーダルを表示する
 * @param {string} title - モーダルのタイトル
 * @param {string} message - モーダルのメッセージ
 */
function showModal(title, message) {
    // 既存のモーダルがあれば削除
    const existingModal = document.querySelector('.modal-backdrop');
    if (existingModal) existingModal.remove();

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    
    const content = document.createElement('div');
    content.className = 'modal-content';
    
    content.innerHTML = `
        <h4 class="text-xl font-bold text-gray-800 mb-3">${title}</h4>
        <p class="text-gray-600">${message}</p>
        <div class="modal-buttons">
            <button class="px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-150 shadow-md" id="modal-ok">OK</button>
        </div>
    `;
    
    backdrop.appendChild(content);
    document.body.appendChild(backdrop);
    
    document.getElementById('modal-ok').addEventListener('click', () => {
        backdrop.remove();
    });

    // 背景クリックで閉じる
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            backdrop.remove();
        }
    });
}
