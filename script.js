// =================================================================
// 1. データ定義: 全てのカテゴリとボイスデータをJSON形式で管理します。
// 音声ファイルを追加・修正する場合は、この配列を編集してください。
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
        id: "category-question",
        name: "疑問",
        folder: "04_question",
        en_name: "Question",
        voices: [
            { text: "え、そうなの？", file: "baka1.wav" },
            { text: "なぜ？", file: "baka2.wav" }
        ]
    },
    {
        id: "category-cheer",
        name: "応援",
        folder: "05_cheer",
        en_name: "Cheer",
        voices: [
            { text: "頑張れ！", file: "baka1.wav" },
            { text: "ファイト！", file: "baka2.wav" },
            { text: "やればできる！", file: "baka1.wav" }
        ]
    }
];


// =================================================================
// 2. グローバル変数と初期設定
// =================================================================

// ユーザーが現在選択しているカテゴリを追跡するID
let currentCategoryId = VOICE_DATA[0].id;

// ローカルストレージキー
const STORAGE_KEY = 'voiceCollectionFavorites';

// カテゴリ全体 (標準データ + お気に入りデータ) を保持
let allCategories = [...VOICE_DATA];

// オーディオ要素を保持するためのグローバル変数
let currentAudio = null;


// =================================================================
// 3. データ操作: ローカルストレージ
// =================================================================

/**
 * ローカルストレージからお気に入りデータを読み込む
 */
function loadFavoritesFromStorage() {
    try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            
            // 既存のお気に入りカテゴリをクリア
            allCategories = allCategories.filter(cat => !cat.isFavorite);

            // 読み込んだデータをallCategoriesにマージ
            const loadedFavorites = parsedData.filter(fav => fav.isFavorite);
            allCategories.push(...loadedFavorites);
        }
    } catch (e) {
        console.error("Error loading favorites from localStorage:", e);
    }
}

/**
 * お気に入りデータをローカルストレージに保存する
 */
function saveFavoritesToStorage() {
    try {
        // お気に入りフォルダのみをフィルタリングして保存
        const favoritesToSave = allCategories.filter(cat => cat.isFavorite);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesToSave));
    } catch (e) {
        console.error("Error saving favorites to localStorage:", e);
    }
}


// =================================================================
// 4. UI構築: カテゴリサイドバー
// =================================================================

/**
 * サイドバーのカテゴリリストを構築する
 */
function renderSidebar() {
    const categoryNav = document.getElementById('category-nav');
    if (!categoryNav) return;

    // 一旦クリア
    categoryNav.innerHTML = '';

    // 1. 標準カテゴリのレンダリング
    const standardCategories = allCategories.filter(cat => !cat.isFavorite);
    standardCategories.forEach(category => {
        categoryNav.appendChild(createCategoryLink(category));
    });

    // 2. お気に入りセクションのレンダリング
    const favoritesHeader = document.createElement('h4');
    favoritesHeader.className = 'font-bold text-gray-700 mt-4 mb-2 border-b pb-1 flex justify-between items-center';
    favoritesHeader.innerHTML = '★ お気に入り';

    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.className = 'text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors p-1 leading-none';
    addButton.title = '新しいお気に入りフォルダを作成';
    addButton.addEventListener('click', createNewFavoriteCategory);

    favoritesHeader.appendChild(addButton);
    categoryNav.appendChild(favoritesHeader);
    
    // 3. お気に入りフォルダのレンダリング
    const favoriteCategories = allCategories.filter(cat => cat.isFavorite);
    favoriteCategories.forEach(category => {
        categoryNav.appendChild(createCategoryLink(category));
    });

    // 選択状態を復元
    updateSelectedCategoryLink();
    renderVoiceButtons();
}

/**
 * カテゴリリンク要素を作成する
 * @param {object} category - カテゴリデータオブジェクト
 * @returns {HTMLButtonElement} カテゴリボタン要素
 */
function createCategoryLink(category) {
    const button = document.createElement('button');
    button.id = `cat-${category.id}`;
    button.className = 'category-link'; // style.cssで定義
    button.textContent = category.name;
    button.setAttribute('data-category-id', category.id);

    if (category.isFavorite) {
        // お気に入りフォルダの場合、特別なクラスを適用
        button.classList.add('favorite-link');

        // フォルダの編集・削除ボタンを追加するコンテナ
        const controls = document.createElement('span');
        controls.className = 'float-right space-x-2 hidden'; // 初期状態では非表示
        
        // 削除ボタン
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.className = 'text-red-500 hover:text-red-700 text-sm leading-none';
        deleteBtn.title = 'お気に入りフォルダを削除';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // カテゴリ切り替えを防ぐ
            deleteCategory(category.id);
        });

        // 編集ボタン
        const editBtn = document.createElement('button');
        editBtn.textContent = '...';
        editBtn.className = 'text-gray-500 hover:text-gray-700 text-sm leading-none';
        editBtn.title = 'フォルダ名を編集';
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // カテゴリ切り替えを防ぐ
            renameCategory(category.id);
        });

        controls.appendChild(editBtn);
        controls.appendChild(deleteBtn);
        button.appendChild(controls);

        // ホバー時にコントロールを表示
        button.addEventListener('mouseenter', () => controls.classList.remove('hidden'));
        button.addEventListener('mouseleave', () => controls.classList.add('hidden'));

    }
    
    // イベントリスナーを設定
    button.addEventListener('click', () => {
        currentCategoryId = category.id;
        renderVoiceButtons();
        updateSelectedCategoryLink();
    });

    return button;
}

/**
 * サイドバーの選択状態を更新する
 */
function updateSelectedCategoryLink() {
    document.querySelectorAll('.category-link').forEach(link => {
        if (link.getAttribute('data-category-id') === currentCategoryId) {
            link.classList.add('selected');
        } else {
            link.classList.remove('selected');
        }
    });
}


// =================================================================
// 5. UI構築: ボイスボタン
// =================================================================

/**
 * 選択中のカテゴリに基づいてボイスボタンをレンダリングする
 */
function renderVoiceButtons() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    // 現在選択されているカテゴリを取得
    const category = allCategories.find(cat => cat.id === currentCategoryId);

    mainContent.innerHTML = ''; // コンテンツをクリア

    if (!category) {
        mainContent.innerHTML = '<p class="text-gray-500 p-8">カテゴリが見つかりません。</p>';
        return;
    }
    
    // カテゴリ名を表示
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 p-6 pb-4 border-b border-gray-200';
    title.textContent = category.name;
    mainContent.appendChild(title);
    
    // ボイスボタンコンテナ
    const gridContainer = document.createElement('div');
    gridContainer.className = 'voice-grid grid grid-cols-3 gap-4 p-6'; // voice-gridはCSSでレスポンシブ調整

    category.voices.forEach(voice => {
        gridContainer.appendChild(createVoiceButton(voice, category.folder, category.isFavorite));
    });

    mainContent.appendChild(gridContainer);
}

/**
 * 単一のボイスボタン要素を作成する
 * @param {object} voice - ボイスデータ {text, file}
 * @param {string} folder - 親カテゴリのフォルダ名
 * @param {boolean} isFavoriteCategory - お気に入りフォルダ内のボタンか
 * @returns {HTMLButtonElement} ボイスボタン要素
 */
function createVoiceButton(voice, folder, isFavoriteCategory) {
    const button = document.createElement('button');
    button.className = 'voice-button relative'; // style.cssで定義
    button.setAttribute('data-sound', `${folder}/${voice.file}`);
    button.addEventListener('click', handleVoiceButtonClick);

    // 1. テキスト
    const span = document.createElement('span');
    span.className = 'text-base truncate mr-1'; // 文字サイズをtext-base (16px) に設定
    span.textContent = voice.text;
    button.appendChild(span);

    // 2. お気に入りボタン (標準カテゴリでのみ表示)
    if (!isFavoriteCategory) {
        const favoriteButton = document.createElement('button');
        favoriteButton.className = 'absolute top-2 right-2 p-1 text-xl leading-none';
        
        // アイコン
        const icon = document.createElement('span');
        icon.className = 'favorite-icon'; // style.cssで定義
        icon.textContent = getFavoriteStatus(voice, folder) ? '★' : '☆'; // お気に入り状態に応じてアイコンを切り替え

        if (getFavoriteStatus(voice, folder)) {
            icon.classList.add('text-yellow-400'); // お気に入り登録済み
        }

        favoriteButton.appendChild(icon);
        
        favoriteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 音声再生を防ぐ
            toggleFavorite(voice, folder, icon);
        });

        button.appendChild(favoriteButton);
    }
    
    // 3. 削除ボタン (お気に入りフォルダでのみ表示)
    if (isFavoriteCategory) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.className = 'absolute top-0 right-1 text-red-500 hover:text-red-700 text-lg p-1 leading-none opacity-0 transition-opacity';
        deleteButton.title = 'このボイスをお気に入りから削除';
        
        // ホバーで削除ボタンを表示
        button.addEventListener('mouseenter', () => deleteButton.classList.remove('opacity-0'));
        button.addEventListener('mouseleave', () => deleteButton.classList.add('opacity-0'));

        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 音声再生を防ぐ
            removeVoiceFromFavorite(currentCategoryId, voice, folder);
        });
        
        button.appendChild(deleteButton);
    }

    return button;
}

// =================================================================
// 6. お気に入り (Favorite) 機能
// =================================================================

/**
 * 指定されたボイスが既にお気に入りに登録されているかチェック
 * @param {object} voice - ボイスデータ
 * @param {string} folder - 元のカテゴリフォルダ名
 * @returns {boolean} - 登録されているかどうか
 */
function getFavoriteStatus(voice, folder) {
    // 全てのお気に入りカテゴリを走査
    const favorites = allCategories.filter(cat => cat.isFavorite);
    const targetPath = `${folder}/${voice.file}`;

    return favorites.some(favCat => 
        favCat.voices.some(favVoice => 
            `${favVoice.folder}/${favVoice.file}` === targetPath
        )
    );
}

/**
 * ボイスのお気に入り登録/解除を切り替える
 * @param {object} voice - ボイスデータ
 * @param {string} folder - 元のカテゴリフォルダ名
 * @param {HTMLElement} iconElement - アイコン要素
 */
function toggleFavorite(voice, folder, iconElement) {
    const isFavorited = getFavoriteStatus(voice, folder);

    if (isFavorited) {
        // 登録済みの場合: 全てのお気に入りフォルダから削除
        const favorites = allCategories.filter(cat => cat.isFavorite);
        const targetPath = `${folder}/${voice.file}`;

        favorites.forEach(favCat => {
            favCat.voices = favCat.voices.filter(favVoice => 
                `${favVoice.folder}/${favVoice.file}` !== targetPath
            );
        });
        
        iconElement.textContent = '☆';
        iconElement.classList.remove('text-yellow-400');
        console.log(`[Favorite] Removed: ${voice.text}`);
    } else {
        // 未登録の場合: 最初の（またはデフォルトの）お気に入りフォルダに追加
        let defaultFavorite = allCategories.find(cat => cat.isFavorite);

        if (!defaultFavorite) {
            // お気に入りフォルダが存在しない場合は自動で作成
            const newId = `favorite-${Date.now()}`;
            defaultFavorite = {
                id: newId,
                name: "マイ・お気に入り",
                folder: "favorites", // お気に入りボイスは元のフォルダ情報を保持
                isFavorite: true,
                voices: []
            };
            allCategories.push(defaultFavorite);
            console.log("[Favorite] Auto-created default favorite folder.");
            renderSidebar(); // サイドバーを更新して新しいフォルダを表示
        }
        
        // ボイスを保存する際は、元のフォルダ情報も保持
        defaultFavorite.voices.push({
            text: voice.text,
            file: voice.file,
            folder: folder // 元のカテゴリフォルダ名を記録
        });

        iconElement.textContent = '★';
        iconElement.classList.add('text-yellow-400');
        console.log(`[Favorite] Added to ${defaultFavorite.name}: ${voice.text}`);
    }

    saveFavoritesToStorage(); // 変更を保存
    renderSidebar(); // サイドバーを更新
    renderVoiceButtons(); // ボタン表示を更新（アイコン変更のため）
}

/**
 * 新しいお気に入りフォルダを作成する
 */
function createNewFavoriteCategory() {
    // 新しいお気に入りの名前をユーザーに尋ねる
    const rawName = prompt("新しいお気に入りフォルダの名前を入力してください (日本語・英語可):");
    
    // null (キャンセル) または、前後の空白を除去した結果が空文字列の場合は処理を終了
    const newFavoriteName = rawName ? rawName.trim() : null;

    if (!newFavoriteName) {
        console.log("[Favorite] Folder creation cancelled or name was empty.");
        return;
    }

    // フォルダ名が既に存在するかチェック
    const exists = allCategories.some(cat => cat.isFavorite && cat.name === newFavoriteName);
    if (exists) {
        alert("その名前のお気に入りフォルダは既に存在します。");
        return;
    }

    // 新しいフォルダを追加
    addCategory({
        id: `favorite-${Date.now()}`,
        name: newFavoriteName, // trim()後の文字列を使用
        folder: "favorites", 
        isFavorite: true,
        voices: []
    });
}


/**
 * カテゴリをallCategoriesに追加し、UIとストレージを更新する
 * @param {object} newCategory - 新しいカテゴリデータ
 */
function addCategory(newCategory) {
    allCategories.push(newCategory);
    saveFavoritesToStorage();
    renderSidebar();
}

/**
 * お気に入りフォルダの名前を変更する
 * @param {string} categoryId - 変更するカテゴリのID
 */
function renameCategory(categoryId) {
    const category = allCategories.find(cat => cat.id === categoryId);
    if (!category || !category.isFavorite) return;

    const newName = prompt(`「${category.name}」の新しい名前を入力してください:`);
    const trimmedNewName = newName ? newName.trim() : null;

    if (!trimmedNewName || trimmedNewName === category.name) {
        return; // キャンセル、空、または変更なし
    }
    
    // フォルダ名が既に存在するかチェック
    const exists = allCategories.some(cat => cat.isFavorite && cat.name === trimmedNewName);
    if (exists) {
        alert("その名前のお気に入りフォルダは既に存在します。");
        return;
    }

    category.name = trimmedNewName;
    saveFavoritesToStorage();
    renderSidebar();
    renderVoiceButtons(); // タイトル表示を更新
}

/**
 * お気に入りフォルダを削除する
 * @param {string} categoryId - 削除するカテゴリのID
 */
function deleteCategory(categoryId) {
    const categoryIndex = allCategories.findIndex(cat => cat.id === categoryId && cat.isFavorite);
    if (categoryIndex === -1) return;

    // 削除確認 (注意: alert/confirmは使用しないルールのため、ここでは単純に処理します。本来はカスタムモーダルを使用すべきです)
    if (!confirm(`お気に入りフォルダ「${allCategories[categoryIndex].name}」を削除してもよろしいですか？`)) {
        return;
    }

    allCategories.splice(categoryIndex, 1);
    
    // 削除したカテゴリが現在選択中のカテゴリだった場合、デフォルトに戻す
    if (currentCategoryId === categoryId) {
        currentCategoryId = allCategories.find(cat => !cat.isFavorite)?.id || (allCategories[0] ? allCategories[0].id : null);
    }
    
    saveFavoritesToStorage();
    renderSidebar();
}

/**
 * お気に入りフォルダから特定のボイスを削除する
 * @param {string} favoriteId - ターゲットのお気に入りフォルダID
 * @param {object} voice - 削除するボイスデータ
 * @param {string} folder - 元のカテゴリフォルダ名
 */
function removeVoiceFromFavorite(favoriteId, voice, folder) {
    const favoriteCategory = allCategories.find(cat => cat.id === favoriteId);
    if (!favoriteCategory) return;

    const targetPath = `${folder}/${voice.file}`;

    // 該当ボイスをフィルタリングして削除
    favoriteCategory.voices = favoriteCategory.voices.filter(favVoice => 
        `${favVoice.folder}/${favVoice.file}` !== targetPath
    );
    
    saveFavoritesToStorage();
    renderVoiceButtons(); // 表示を更新
    
    // 標準カテゴリのアイコンも更新するために全再描画
    const standardCategories = allCategories.filter(cat => !cat.isFavorite);
    standardCategories.forEach(cat => {
        // 標準カテゴリが選択されていたらボタンを再描画
        if (cat.id === currentCategoryId) {
            renderVoiceButtons();
        }
    });

    console.log(`[Favorite] Removed voice from folder ${favoriteCategory.name}: ${voice.text}`);
}


// =================================================================
// 7. 音声再生処理
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
    // お気に入りから再生する場合、voiceオブジェクトにfolderプロパティを追加しているため、
    // data-sound属性には常に正しいパスが入っています。
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
// 8. 初期化
// =================================================================

/**
 * アプリケーションの初期化
 */
function initializeApp() {
    loadFavoritesFromStorage(); // お気に入りデータを読み込み
    renderSidebar(); // サイドバーを構築
}

// ページロード完了後に初期化を実行
window.onload = initializeApp;
