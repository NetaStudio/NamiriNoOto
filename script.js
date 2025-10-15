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
            { text: "おはよう", file: "baka1.wav", voice_id: "v1-01" },
            { text: "こんにちは", file: "baka2.wav", voice_id: "v1-02" }
        ]
    },
    {
        id: "category-affirmation",
        name: "肯定",
        folder: "02_positive",
        en_name: "Affirmation",
        voices: [
            { text: "いいね！", file: "baka2.wav", voice_id: "v2-01" },
            { text: "うんうん", file: "baka3.wav", voice_id: "v2-02" },
            { text: "それはすごい", file: "baka1.wav", voice_id: "v2-03" }, 
        ]
    },
    {
        id: "category-denial",
        name: "否定",
        folder: "03_denial", 
        en_name: "Denial",
        voices: [
            { text: "そうじゃない", file: "baka1.wav", voice_id: "v3-01" },
            { text: "だめ！", file: "baka1.wav", voice_id: "v3-02" },
            { text: "それは違う", file: "baka1.wav", voice_id: "v3-03" }
        ]
    }
];

// =================================================================
// 2. Firebase/Firestore 初期化と状態管理
// =================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// グローバル変数
let db;
let auth;
let userId = null;
let currentAudio = null;
let currentCategory = VOICE_DATA[0].id; // デフォルトで最初のカテゴリを表示
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// お気に入り状態を保持するSet（高速な検索のため）
let userFavorites = new Set();
let isAuthReady = false; // 認証準備完了フラグ

/**
 * ユーザー固有のFirestoreドキュメントパスを取得
 * @returns {string} Firestoreドキュメントの参照パス
 */
function getFavoritesDocRef() {
    if (!userId) {
        // userIdがない場合はエラーまたは一時的な処理を検討
        console.error("User ID is not set. Cannot get Firestore path.");
        return null;
    }
    // パス: /artifacts/{appId}/users/{userId}/favorites/data/favoritesDoc
    const docPath = `artifacts/${appId}/users/${userId}/favorites/data/favoritesDoc`;
    return doc(db, docPath);
}

/**
 * お気に入りデータをFirestoreから購読し、リアルタイムで更新
 */
function loadUserFavorites() {
    if (!db || !userId) {
        console.warn("Firestore or User ID is not ready for loading favorites.");
        return;
    }

    const favoritesDocRef = getFavoritesDocRef();
    if (!favoritesDocRef) return;

    // onSnapshotでリアルタイム購読
    onSnapshot(favoritesDocRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            // 配列として保存されたお気に入りIDをSetに変換
            userFavorites = new Set(data.voiceIds || []);
            console.log("Favorites loaded:", userFavorites.size, "items.");
        } else {
            // ドキュメントが存在しない場合、空のSetとして初期化
            userFavorites = new Set();
            console.log("No existing favorites found. Initializing empty set.");
        }
        // お気に入り状態が変更されたら、現在のビューを再描画
        // (これにより、星のアイコンの状態が更新される)
        displayCategory(currentCategory);
    }, (error) => {
        console.error("Error subscribing to favorites:", error);
    });
}

/**
 * お気に入り状態をFirestoreに保存
 */
async function saveFavoritesToFirestore() {
    if (!db || !userId) {
        console.error("Firestore or User ID is not ready for saving favorites.");
        return;
    }

    const favoritesDocRef = getFavoritesDocRef();
    if (!favoritesDocRef) return;

    try {
        // Setを配列に変換して保存
        await setDoc(favoritesDocRef, { voiceIds: Array.from(userFavorites) });
        console.log("Favorites saved successfully.");
    } catch (e) {
        console.error("Error saving favorites to Firestore: ", e);
    }
}

/**
 * Firebaseの初期化と認証処理
 */
async function initializeFirebaseAndAuth() {
    try {
        const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);

        // 認証状態の変更を監視
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                userId = user.uid;
            } else {
                // 匿名サインインを試みる
                const token = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
                if (token) {
                    await signInWithCustomToken(auth, token);
                    userId = auth.currentUser.uid;
                } else {
                    await signInAnonymously(auth);
                    userId = auth.currentUser.uid;
                }
            }
            isAuthReady = true;
            console.log("Firebase Auth Ready. User ID:", userId);
            
            // 認証が完了したら、データの読み込みを開始
            loadUserFavorites();
            renderSidebar();
            displayCategory(currentCategory);

        });
    } catch (error) {
        console.error("Error initializing Firebase:", error);
    }
}


// =================================================================
// 3. UI/イベント処理
// =================================================================

/**
 * お気に入りボタンのトグル処理
 * @param {Event} event - クリックイベント
 */
function toggleFavorite(event) {
    event.stopPropagation(); // ボイスボタンの再生イベントを阻止

    const favoriteButton = event.currentTarget;
    const voiceId = favoriteButton.getAttribute('data-voice-id');

    if (!isAuthReady) {
        console.warn("Authentication not ready. Cannot save favorite.");
        // UI上でフィードバックを与えるべき
        alert("お気に入り機能を使うには、認証が完了するまでお待ちください。"); 
        return;
    }

    if (userFavorites.has(voiceId)) {
        // 削除
        userFavorites.delete(voiceId);
        favoriteButton.classList.remove('is-favorite');
        favoriteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.433-.678 1.48-.678 1.913 0l2.365 3.706a1 1 0 00.842.597h4.085c.783 0 1.096.96.488 1.432l-3.35 2.502a1 1 0 00-.365 1.112l1.286 3.965c.21.65-.547 1.18-.946.726l-3.23-2.316a1 1 0 00-1.077 0l-3.23 2.316c-.399.454-1.156-.076-.946-.726l1.286-3.965a1 1 0 00-.365-1.112l-3.35-2.502c-.608-.472-.295-1.432.488-1.432h4.085a1 1 0 00.842-.597l2.365-3.706z" /></svg>`;
    } else {
        // 追加
        userFavorites.add(voiceId);
        favoriteButton.classList.add('is-favorite');
        favoriteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="yellow"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.433-.678 1.48-.678 1.913 0l2.365 3.706a1 1 0 00.842.597h4.085c.783 0 1.096.96.488 1.432l-3.35 2.502a1 1 0 00-.365 1.112l1.286 3.965c.21.65-.547 1.18-.946.726l-3.23-2.316a1 1 0 00-1.077 0l-3.23 2.316c-.399.454-1.156-.076-.946-.726l1.286-3.965a1 1 0 00-.365-1.112l-3.35-2.502c-.608-.472-.295-1.432.488-1.432h4.085a1 1 0 00.842-.597l2.365-3.706z" /></svg>`;
    }

    // Firestoreに保存
    saveFavoritesToFirestore();
}

/**
 * ボイスボタンを生成
 * @param {Object} voice - ボイスデータオブジェクト
 * @param {string} folder - カテゴリフォルダ名
 * @returns {HTMLElement} ボタン要素
 */
function createVoiceButton(voice, folder) {
    const button = document.createElement('button');
    // data-sound: sounds/フォルダ名/ファイル名 の形式
    const soundPath = `${folder}/${voice.file}`;
    const fullVoiceId = voice.voice_id;

    button.className = 'voice-button flex items-center justify-between px-6 py-4 transition-all duration-150 ease-in-out';
    button.setAttribute('data-sound', soundPath);
    button.setAttribute('data-voice-id', fullVoiceId);

    // テキスト要素
    const textSpan = document.createElement('span');
    textSpan.textContent = voice.text;
    textSpan.className = 'text-lg font-semibold text-white truncate mr-4';
    
    // お気に入りボタンコンテナ
    const favoriteWrapper = document.createElement('div');
    favoriteWrapper.className = 'favorite-wrapper p-1 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-150';
    favoriteWrapper.onclick = toggleFavorite;
    favoriteWrapper.setAttribute('data-voice-id', fullVoiceId); // ラッパーにもIDを設定

    // お気に入りアイコン
    const isFavorited = userFavorites.has(fullVoiceId);
    
    // SVGアイコン
    const starIcon = isFavorited
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="yellow"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.433-.678 1.48-.678 1.913 0l2.365 3.706a1 1 0 00.842.597h4.085c.783 0 1.096.96.488 1.432l-3.35 2.502a1 1 0 00-.365 1.112l1.286 3.965c.21.65-.547 1.18-.946.726l-3.23-2.316a1 1 0 00-1.077 0l-3.23 2.316c-.399.454-1.156-.076-.946-.726l1.286-3.965a1 1 0 00-.365-1.112l-3.35-2.502c-.608-.472-.295-1.432.488-1.432h4.085a1 1 0 00.842-.597l2.365-3.706z" /></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.433-.678 1.48-.678 1.913 0l2.365 3.706a1 1 0 00.842.597h4.085c.783 0 1.096.96.488 1.432l-3.35 2.502a1 1 0 00-.365 1.112l1.286 3.965c.21.65-.547 1.18-.946.726l-3.23-2.316a1 1 0 00-1.077 0l-3.23 2.316c-.399.454-1.156-.076-.946-.726l1.286-3.965a1 1 0 00-.365-1.112l-3.35-2.502c-.608-.472-.295-1.432.488-1.432h4.085a1 1 0 00.842-.597l2.365-3.706z" /></svg>`;
    
    favoriteWrapper.innerHTML = starIcon;
    favoriteWrapper.classList.toggle('is-favorite', isFavorited); // クラスもトグル

    button.appendChild(textSpan);
    button.appendChild(favoriteWrapper);
    button.addEventListener('click', handleVoiceButtonClick); // ボイスボタン自体のクリックイベント
    
    return button;
}

/**
 * 指定されたカテゴリのボイスボタンをメインコンテンツエリアに表示
 * @param {string} categoryId - 表示するカテゴリのID (例: 'category-greeting')
 */
function displayCategory(categoryId) {
    currentCategory = categoryId;
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // コンテンツをクリア

    const categoryData = VOICE_DATA.find(cat => cat.id === categoryId);

    if (categoryData) {
        // カテゴリ名とユーザーIDを表示
        const header = document.createElement('div');
        header.className = 'p-6 pb-2 border-b mb-4';
        header.innerHTML = `
            <h2 class="text-3xl font-bold text-gray-800 mb-1">${categoryData.name}</h2>
            <p class="text-xs text-gray-500 truncate">Category ID: ${categoryId} | User ID: ${userId || 'Loading...'}</p>
        `;
        mainContent.appendChild(header);

        // ボイスボタンをGridレイアウトで配置するコンテナ
        const gridContainer = document.createElement('div');
        gridContainer.className = 'voice-grid grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

        categoryData.voices.forEach(voice => {
            const button = createVoiceButton(voice, categoryData.folder);
            gridContainer.appendChild(button);
        });

        mainContent.appendChild(gridContainer);
    } else {
        // お気に入りなど、特別なビューの処理を呼び出す
        if (categoryId === 'category-favorites') {
            displayFavorites();
        } else {
            mainContent.innerHTML = `<p class="p-4 text-center text-gray-500">カテゴリが見つかりません。</p>`;
        }
    }

    // サイドバーの選択状態を更新
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('is-active');
        if (btn.getAttribute('data-category-id') === categoryId) {
            btn.classList.add('is-active');
        }
    });
}

/**
 * お気に入り登録されたボイスのみを表示
 */
function displayFavorites() {
    currentCategory = 'category-favorites';
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'p-6 pb-2 border-b mb-4';
    header.innerHTML = `
        <h2 class="text-3xl font-bold text-pink-600 mb-1">💖 お気に入り 💖</h2>
        <p class="text-xs text-gray-500 truncate">User ID: ${userId || 'Loading...'}</p>
    `;
    mainContent.appendChild(header);

    const favoriteVoices = [];
    VOICE_DATA.forEach(category => {
        category.voices.forEach(voice => {
            if (userFavorites.has(voice.voice_id)) {
                favoriteVoices.push({ voice, folder: category.folder });
            }
        });
    });

    if (favoriteVoices.length === 0) {
        mainContent.innerHTML += `<p class="p-6 text-center text-gray-500">お気に入りに登録されているボイスはありません。</p>`;
        return;
    }

    const gridContainer = document.createElement('div');
    gridContainer.className = 'voice-grid grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

    favoriteVoices.forEach(item => {
        const button = createVoiceButton(item.voice, item.folder);
        gridContainer.appendChild(button);
    });

    mainContent.appendChild(gridContainer);
    
    // サイドバーの選択状態を更新
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('is-active');
        if (btn.getAttribute('data-category-id') === 'category-favorites') {
            btn.classList.add('is-active');
        }
    });
}

/**
 * サイドバーのカテゴリボタンと「お気に入り」リンクを生成
 */
function renderSidebar() {
    const categoryNav = document.getElementById('category-nav');
    categoryNav.innerHTML = '';
    
    // -------------------
    // 1. お気に入りリンク
    // -------------------
    const favoriteLink = document.createElement('button');
    favoriteLink.textContent = '💖 お気に入り';
    favoriteLink.className = 'category-button w-full text-left py-2 px-3 my-1 rounded-lg transition duration-150 ease-in-out';
    favoriteLink.setAttribute('data-category-id', 'category-favorites');
    favoriteLink.addEventListener('click', () => displayCategory('category-favorites'));
    categoryNav.appendChild(favoriteLink);

    // 区切り線
    const divider = document.createElement('hr');
    divider.className = 'my-3 border-gray-300';
    categoryNav.appendChild(divider);


    // -------------------
    // 2. 通常カテゴリボタン
    // -------------------
    VOICE_DATA.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category.name;
        button.className = 'category-button w-full text-left py-2 px-3 my-1 rounded-lg transition duration-150 ease-in-out';
        button.setAttribute('data-category-id', category.id);
        button.addEventListener('click', () => displayCategory(category.id));
        categoryNav.appendChild(button);
    });
}


// =================================================================
// 4. オーディオ再生処理
// =================================================================

/**
 * ボタンクリック時のハンドラ
 */
function handleVoiceButtonClick() {
    // お気に入りボタン（ラッパー）でのクリックを無視
    if (event.target.closest('.favorite-wrapper')) {
        return;
    }

    const soundPath = this.getAttribute('data-sound');
    if (!soundPath) {
        console.error('Error: data-sound attribute is missing on this button.', this);
        return;
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
    // 既に再生中の音声があれば停止
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

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
// 5. アプリケーション開始
// =================================================================

window.onload = initializeFirebaseAndAuth;
