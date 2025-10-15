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
    {
        id: "category-reaction",
        name: "リアクション",
        folder: "04_reaction", // sounds/04_reaction/
        en_name: "Reaction",
        voices: [
            { text: "わーい", file: "baka1.wav" },
            { text: "えー！", file: "baka2.wav" }
        ]
    }
];

// お気に入りボイスのデータを格納する配列
// 構造: [{ text: "おはよう", soundPath: "01_greeting/baka1.wav" }, ...]
let FAVORITE_VOICES = [];
const FAVORITE_CATEGORY_ID = 'category-favorite';


// =================================================================
// 2. 初期化処理: HTML要素の生成とイベントリスナーの登録
// =================================================================

let activeCategory = null;

// DOMのロード完了を待ってから実行
document.addEventListener('DOMContentLoaded', () => {
    loadFavoritesFromLocalStorage(); // 最初にローカルストレージからお気に入りを読み込む
    generateAppStructure(VOICE_DATA);
    // attachExportImportListeners() の呼び出しを削除しました
    
    // 初期表示として最初のカテゴリを選択
    if (VOICE_DATA.length > 0) {
        showCategory(VOICE_DATA[0].id);
        const firstLink = document.querySelector(`[data-target="${VOICE_DATA[0].id}"]`);
        if(firstLink) firstLink.classList.add('selected');
    }
});


/**
 * 全てのボイスデータから一意のキー（soundPath）を取得するマップを作成
 * @returns {Map<string, {text: string, soundPath: string}>}
 */
function getFullVoiceMap() {
    const map = new Map();
    VOICE_DATA.forEach(category => {
        category.voices.forEach(voice => {
            const soundPath = `${category.folder}/${voice.file}`;
            map.set(soundPath, { text: voice.text, soundPath: soundPath });
        });
    });
    return map;
}

/**
 * データに基づいてカテゴリナビゲーションとボタンセクションを生成
 * @param {Array} data - VOICE_DATA配列
 */
function generateAppStructure(data) {
    const navContainer = document.getElementById('category-nav');
    const mainContainer = document.getElementById('main-content');
    
    if (!navContainer || !mainContainer) return;

    // 既存のコンテンツをクリア
    navContainer.innerHTML = '';
    mainContainer.innerHTML = '';
    
    // 全てのボイスのマップを取得
    const voiceMap = getFullVoiceMap();

    // 1. 通常カテゴリの生成
    data.forEach(category => {
        // カテゴリリンク
        createCategoryLink(navContainer, category.id, category.name);

        // 音声セクション
        createVoiceSection(mainContainer, category, category.voices);
    });
    
    // 2. お気に入りカテゴリの生成
    createCategoryLink(navContainer, FAVORITE_CATEGORY_ID, "★ お気に入り", true);
    // お気に入りセクションの初期生成 (中身は空。showCategory時に更新される)
    const favoriteCategory = { id: FAVORITE_CATEGORY_ID, name: "お気に入り", en_name: "Favorite", folder: "" };
    createVoiceSection(mainContainer, favoriteCategory, FAVORITE_VOICES, true, voiceMap);

    // 3. お気に入り状態の初期化
    updateFavoriteIcons();
}

/**
 * カテゴリリンクのボタンを生成してサイドバーに追加する
 * @param {HTMLElement} container - navContainer
 * @param {string} id - カテゴリID
 * @param {string} name - 表示名
 * @param {boolean} isFavorite - お気に入りカテゴリかどうか
 */
function createCategoryLink(container, id, name, isFavorite = false) {
    const linkButton = document.createElement('button');
    linkButton.className = 'category-link';
    // お気に入りカテゴリには特別なクラスとスタイルを適用
    if (isFavorite) {
        linkButton.classList.add('favorite-link', 'mt-4', 'font-extrabold', 'text-yellow-600', 'border-t', 'pt-2');
    }
    linkButton.setAttribute('data-target', id);
    linkButton.textContent = name;
    linkButton.addEventListener('click', () => {
        // お気に入りカテゴリの場合はリストを再生成してから表示
        if (isFavorite) {
            updateFavoriteSection();
        }
        showCategory(id);
    });
    container.appendChild(linkButton);
}

/**
 * 音声ボタンのセクションを生成してメインコンテンツに追加する
 * @param {HTMLElement} container - mainContainer
 * @param {object} category - カテゴリデータ
 * @param {Array} voices - 音声データ配列
 * @param {boolean} isFavoriteSection - お気に入りセクションかどうか
 * @param {Map} voiceMap - 全ボイスのマップ (お気に入りセクションでのみ使用)
 */
function createVoiceSection(container, category, voices, isFavoriteSection = false, voiceMap = null) {
    const section = document.createElement('section');
    section.id = category.id;
    section.className = 'category-section hidden';
    
    // タイトル
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-700 mb-4 pb-2 border-b-2 border-blue-400';
    title.textContent = isFavoriteSection ? category.name : `${category.name} (${category.en_name})`;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'voice-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';

    // ボタンの生成
    if (voices && voices.length > 0) {
        voices.forEach(item => {
            const soundPath = isFavoriteSection ? item.soundPath : `${category.folder}/${item.file}`;
            const text = isFavoriteSection ? item.text : item.text;

            // お気に入りセクションの場合、データが存在するか確認
            if (isFavoriteSection && !voiceMap.has(soundPath)) {
                // インポートされたデータが壊れている/古い場合はスキップ
                return;
            }

            const button = document.createElement('button');
            button.className = 'voice-button flex justify-between items-center';
            button.setAttribute('data-sound', soundPath);
            
            // 1. テキスト
            const span = document.createElement('span');
            span.className = 'text-sm truncate'; // 長すぎるテキストを省略
            span.textContent = text;
            button.appendChild(span);

            // 2. お気に入りアイコン
            const favIcon = document.createElement('span');
            favIcon.className = 'favorite-icon transition-colors duration-200 cursor-pointer ml-2 text-xl';
            favIcon.innerHTML = '☆'; // 空の星 (Un-favorited)
            favIcon.setAttribute('data-sound-path', soundPath);
            favIcon.setAttribute('title', 'お気に入りに追加/解除');
            
            // アイコンクリック時は音声再生を停止し、お気に入り操作のみを行う
            favIcon.addEventListener('click', (e) => {
                e.stopPropagation(); // ボタンクリックイベント（音声再生）を停止
                toggleFavorite(soundPath, text);
            });
            button.appendChild(favIcon);

            // 3. 音声再生イベントリスナーを登録 (ボタン全体)
            button.addEventListener('click', handleVoiceButtonClick);

            grid.appendChild(button);
        });
    } else if (isFavoriteSection) {
        // お気に入りセクションでボイスがない場合
        const noVoice = document.createElement('div');
        noVoice.className = 'text-gray-400 mt-4 col-span-full';
        noVoice.textContent = '（お気に入りがありません。★マークを押して追加してください）';
        grid.appendChild(noVoice);
    } else {
        // 通常カテゴリでボイスがない場合
         const noVoice = document.createElement('div');
        noVoice.className = 'text-gray-400 mt-4 col-span-full';
        noVoice.textContent = '（このカテゴリにはまだボイスがありません）';
        grid.appendChild(noVoice);
    }
    
    section.appendChild(grid);
    container.appendChild(section);
}

/**
 * お気に入りセクションをクリアし、現在のFAVORITE_VOICESで再生成する
 */
function updateFavoriteSection() {
    const mainContainer = document.getElementById('main-content');
    const oldSection = document.getElementById(FAVORITE_CATEGORY_ID);
    if (oldSection) {
        oldSection.remove();
    }
    
    // 全てのボイスのマップを取得
    const voiceMap = getFullVoiceMap();
    
    // お気に入りカテゴリの再生成
    const favoriteCategory = { id: FAVORITE_CATEGORY_ID, name: "お気に入り (Bookmark)", folder: "" };
    createVoiceSection(mainContainer, favoriteCategory, FAVORITE_VOICES, true, voiceMap);

    // アイコンの状態を再更新
    updateFavoriteIcons();
}

/**
 * カテゴリセクションの表示/非表示を切り替える
 * (既存関数 - 変更なし)
 * @param {string} targetId - 表示するカテゴリセクションのID
 */
function showCategory(targetId) {
    const categorySections = document.querySelectorAll('.category-section');
    const categoryLinks = document.querySelectorAll('.category-link');

    // すべて非表示
    categorySections.forEach(section => {
        section.classList.add('hidden');
    });

    // ターゲットのみ表示
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // サイドバーの選択状態を更新
    categoryLinks.forEach(l => {
        l.classList.remove('selected');
    });
    const selectedLink = document.querySelector(`[data-target="${targetId}"]`);
    if (selectedLink) {
        selectedLink.classList.add('selected');
    }
    
    // メインコンテンツのスクロールを一番上に戻す
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.scrollTop = 0;
    }
}


// =================================================================
// 3. お気に入り (Favorite) 機能
// =================================================================

/**
 * お気に入りの状態をローカルストレージに保存する
 */
function saveFavoritesToLocalStorage() {
    try {
        const data = JSON.stringify(FAVORITE_VOICES);
        localStorage.setItem('myVoiceFavorites', data);
    } catch (e) {
        console.error("Error saving favorites to local storage:", e);
    }
}

/**
 * ローカルストレージからお気に入りの状態を読み込む
 */
function loadFavoritesFromLocalStorage() {
    try {
        const data = localStorage.getItem('myVoiceFavorites');
        if (data) {
            FAVORITE_VOICES = JSON.parse(data);
        }
    } catch (e) {
        console.error("Error loading favorites from local storage:", e);
    }
}

/**
 * お気に入りの追加または解除を行う
 * @param {string} soundPath - 音声ファイルのパス (例: "01_greeting/baka1.wav")
 * @param {string} text - 音声ボタンのテキスト
 */
function toggleFavorite(soundPath, text) {
    const index = FAVORITE_VOICES.findIndex(item => item.soundPath === soundPath);

    if (index === -1) {
        // お気に入りに追加
        FAVORITE_VOICES.push({ soundPath, text });
        console.log(`Added to favorites: ${text}`);
    } else {
        // お気に入りから解除
        FAVORITE_VOICES.splice(index, 1);
        console.log(`Removed from favorites: ${text}`);
    }

    // 状態を保存
    saveFavoritesToLocalStorage();
    
    // 全てのアイコンの状態を更新
    updateFavoriteIcons();
    
    // 現在お気に入りセクションが表示されている場合は再描画
    const favoriteSection = document.getElementById(FAVORITE_CATEGORY_ID);
    if (favoriteSection && !favoriteSection.classList.contains('hidden')) {
        updateFavoriteSection();
        showCategory(FAVORITE_CATEGORY_ID); // 表示状態を維持
    }
}

/**
 * 全ての音声ボタンのお気に入りアイコンの状態を更新する
 */
function updateFavoriteIcons() {
    const favoritePaths = new Set(FAVORITE_VOICES.map(item => item.soundPath));
    const allIcons = document.querySelectorAll('.favorite-icon');

    allIcons.forEach(icon => {
        const soundPath = icon.getAttribute('data-sound-path');
        if (favoritePaths.has(soundPath)) {
            icon.innerHTML = '★'; // 塗りつぶされた星 (Favorited)
            icon.classList.add('text-yellow-400');
            icon.classList.remove('text-gray-300');
        } else {
            icon.innerHTML = '☆'; // 空の星 (Un-favorited)
            icon.classList.remove('text-yellow-400');
            icon.classList.add('text-gray-300');
        }
    });
}


// =================================================================
// 4. データ書き出し (Export) / 読み込み (Import) 機能 (全て削除)
// =================================================================

/**
 * 書き出し/読み込みボタンにイベントリスナーを付与 (この関数は実行されなくなります)
 */
function attachExportImportListeners() {
    // 関連する処理を全て削除
    console.log("Export/Import listeners are removed.");
}


// =================================================================
// 5. 音声再生ロジック (変更なし)
// =================================================================

/**
 * ボタンクリック時のハンドラ
 */
function handleVoiceButtonClick() {
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
    try {
        const audio = new Audio(url);
        audio.currentTime = 0;
        await audio.play();
        console.log(`[Success] Audio requested: ${url}`);
        
    } catch (error) {
        // play()が拒否された場合（ブラウザの自動再生制限）
        if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.warn(`[Warning] Audio play restricted. Path: ${url}. (User interaction required)`);
        } else if (retries > 0) {
             // その他のエラー（主に404）の場合、リトライ
            const delay = Math.pow(2, 3 - retries) * 100;
            await new Promise(resolve => setTimeout(resolve, delay));
            await playAudioWithRetry(url, retries - 1);
        } else {
            console.error(`[Fatal Error] Failed to load resource (Likely 404 Not Found or unsupported file). Path: ${url}`, error);
        }
    }
}
