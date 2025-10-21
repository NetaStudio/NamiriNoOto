// =================================================================
// 1. データ定義: 全てのカテゴリとボイスデータをJSON形式で管理します。
// =================================================================

const VOICE_DATA =
[
    {
        id: "category-greeting",
        name: "挨拶",
        en_name: "Greeting",
        folder: "01_greeting",
        voices:
        [
            { text: "おはよう", file: "baka1.wav" },
            { text: "こんにちは", file: "baka2.wav" }
        ]
    },
    {
        id: "category-positive",
        name: "肯定",
        en_name: "Positive",
        folder: "02_positive",
        voices:
        [
            { text: "いいねいいねいいねいいねいいねいいね！", file: "baka2.wav" },
            { text: "うんうん", file: "baka3.wav" },
            { text: "それはすごい", file: "baka1.wav" },
        ]
    },
    {
        id: "category-negative",
        name: "否定",
        en_name: "Negative",
        folder: "03_negative",
        voices:
        [
            { text: "そうじゃない", file: "denial1.wav" },
            { text: "だめ！", file: "denial2.wav" },
            { text: "それは違う", file: "denial3.wav" }
        ]
    }
];

// =================================================================
// 2. お気に入り機能の管理 (Arrayに変更し、順序を保持)
// =================================================================

const FAVORITES_KEY = 'voiceLibraryFavorites';
let favorites = [];
let draggedItem = null;

// ドロップ位置情報を記憶するフラグ（今回は常に「前」に挿入するため、このフラグは視覚フィードバックの判定にのみ使用する）
let isDroppingAfterTarget = false;

/**
 * ローカルストレージからお気に入りデータを読み込む
 */
function loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (savedFavorites) {
        try {
            const parsed = JSON.parse(savedFavorites);
            // Arrayとして読み込む (順序維持)
            if (Array.isArray(parsed)) {
                favorites = parsed;
            }
        } catch (e) {
            console.error("Failed to parse favorites from localStorage", e);
            favorites = [];
        }
    }
}

/**
 * お気に入りデータをローカルストレージに保存する
 */
function saveFavoritesToLocalStorage() {
    // Arrayを保存
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

/**
 * お気に入りに登録されているかチェック
 * @param {string} voiceId - ボイスのユニークID
 */
function isFavorite(voiceId) {
    return favorites.includes(voiceId);
}

/**
 * お気に入り状態を切り替える (アイコン同期と登録順維持に対応)
 * @param {string} voiceId - ボイスのユニークID (folder/file.wav)
 * @param {Event} event - クリックイベント
 */
function toggleFavorite(voiceId, event) {
    if (event) {
        event.stopPropagation();
    }

    const index = favorites.indexOf(voiceId);

    if (index > -1) {
        // 削除: ArrayからIDを削除
        favorites.splice(index, 1);
    } else {
        // 追加: Arrayの末尾に追加 (挿入順を維持)
        favorites.push(voiceId);
    }

    saveFavoritesToLocalStorage();
    // Point 1: 全てのボタンの状態を更新
    updateAllVoiceButtonStates();
    
    // Point 2: お気に入りカテゴリの表示を更新 (登録順に再描画)
    updateFavoriteCategory();

    // ★修正★: 現在アクティブなカテゴリがお気に入りの場合、空になったらメッセージが表示されるよう再描画を強制する
    const activeLink = document.querySelector('.category-link.selected');
    if (activeLink && activeLink.getAttribute('data-category-id') === 'category-favorites') {
        showCategory('category-favorites');
    }
}

/**
 * 全てのボイスボタンのお気に入りアイコンの状態を更新する (Point 1対応)
 */
function updateAllVoiceButtonStates() {
    // DOMにあるすべてのボイスボタンを取得
    const allVoiceButtons = document.querySelectorAll('.voice-button');

    allVoiceButtons.forEach(button => {
        const voiceId = button.getAttribute('data-sound');
        const iconElement = button.querySelector('.favorite-icon');

        if (iconElement) {
            const isFav = isFavorite(voiceId);

            if (isFav) {
                iconElement.textContent = '★';
                iconElement.classList.remove('text-gray-300');
                iconElement.classList.add('text-yellow-400');
            } else {
                iconElement.textContent = '☆';
                iconElement.classList.remove('text-yellow-400');
                iconElement.classList.add('text-gray-300');
            }
        }
    });
}

/**
 * お気に入りに追加されているボイスデータを取得する (Point 2対応: 登録順にデータを取得)
 */
function getFavoriteVoices() {
    const favoriteList = [];

    // 全ボイスデータをフラット化し、マップを作成 (効率的なルックアップのため)
    const voiceMap = new Map();
    VOICE_DATA.forEach(category => {
        category.voices.forEach(voice => {
            const voiceId = `${category.folder}/${voice.file}`;
            voiceMap.set(voiceId, { voice, folder: category.folder });
        });
    });

    // favorites配列 (登録順/並び替え後の順序) に従ってデータを取得
    favorites.forEach(voiceId => {
        const item = voiceMap.get(voiceId);
        if (item) {
            favoriteList.push(item);
        }
    });

    return favoriteList;
}

/**
 * ★更新機能★: お気に入りリストをクリアする
 */
function clearFavorites() {
    // 1. favorites配列を空にする
    favorites = [];

    // 2. ローカルストレージを更新
    saveFavoritesToLocalStorage();

    // 3. 全てのボタンの状態を更新 (★マークを☆マークに戻す)
    updateAllVoiceButtonStates();

    // 4. お気に入りカテゴリの表示を更新 (「お気に入りなし」の状態にする)
    updateFavoriteCategory();

    // 5. 現在アクティブなカテゴリがお気に入りの場合、クリア後の画面を強制的に再表示
    const activeLink = document.querySelector('.category-link.selected');
    if (activeLink && activeLink.getAttribute('data-category-id') === 'category-favorites') {
        showCategory('category-favorites');
    }
}


// =================================================================
// 3. UI生成ロジック
// =================================================================

/**
 * 個別のボイスボタンを作成する
 * @param {string} categoryFolder - カテゴリフォルダ名
 * @param {Object} voice - { text: string, file: string }
 * @param {boolean} isDraggable - ドラッグ可能かどうか
 */
function createVoiceButton(categoryFolder, voice, isDraggable = false) {
    const voiceId = `${categoryFolder}/${voice.file}`;
    const button = document.createElement('button');
    // 音声ボタンの縦幅を調整
    button.className = `voice-button flex items-center justify-between p-3 rounded-xl shadow-lg transition-all duration-200 ease-in-out`;
    button.setAttribute('data-sound', voiceId);
    button.setAttribute('data-text', voice.text);
    // ボタン全体でのクリックを音声再生に割り当て
    button.setAttribute('onclick', `handleVoiceButtonClick('${voiceId}')`);

    // ドラッグ＆ドロップ用属性 (お気に入りカテゴリでのみ有効)
    if (isDraggable) {
        button.setAttribute('draggable', 'true');
    }

    // テキストコンテンツ
    const textContent = document.createElement('span');
    // text-contentクラスにはuser-select: none;とpointer-events: none;を適用している
    textContent.className = 'text-content text-left text-white'; 
    textContent.textContent = voice.text;
    button.appendChild(textContent);

    // お気に入りアイコン
    const iconSpan = document.createElement('span');
    iconSpan.className = 'favorite-icon text-xl transition-colors duration-150';
    
    const isFav = isFavorite(voiceId);

    if(isFav)
    {
        iconSpan.textContent = '★';
        // お気に入りの場合は黄色を適用
        iconSpan.classList.add('text-yellow-400'); 
    }else
    {
        iconSpan.textContent = '☆';
        iconSpan.classList.add('text-gray-300');
    }

    //お気に入りボタンのクリックイベントはトグル機能のみを実行
    iconSpan.setAttribute('onclick', `toggleFavorite('${voiceId}', event)`);

    button.appendChild(iconSpan);
    return button;
}

/**
 * 通常カテゴリのセクションを作成する
 * @param {Object} category - カテゴリデータ
 */
function createCategorySection(category) {
    const section = document.createElement('section');
    section.id = category.id;
    section.className = 'category-section hidden';

    const titleContainer = document.createElement('h2');
    titleContainer.className = 'text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200';
    
    // 日本語タイトル
    const jpTitle = document.createElement('span');
    jpTitle.textContent = category.name;
    jpTitle.className = 'mr-2';
    titleContainer.appendChild(jpTitle);
    
    // 英語名 (en_name) を取得し、薄い文字で表示
    const enTitle = document.createElement('span');
    enTitle.textContent = `(${category.en_name})`;
    enTitle.className = 'text-lg font-normal text-gray-400'; // 薄い文字色とフォントサイズ
    titleContainer.appendChild(enTitle);

    section.appendChild(titleContainer);

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
    section.appendChild(grid);

    category.voices.forEach(voice => {
        grid.appendChild(createVoiceButton(category.folder, voice, false));
    });

    return section;
}

/**
 * お気に入りカテゴリのセクションを作成する (登録順に表示)
 * @param {Array<Object>} favoriteVoices - 登録順に並んだお気に入りのボイスデータ
 */
function createFavoriteCategorySection(favoriteVoices) {
    const section = document.createElement('section');
    section.id = 'category-favorites';
    section.className = 'category-section hidden';

    const titleContainer = document.createElement('h2');
    titleContainer.className = 'text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200';
    
    // 日本語タイトル
    const jpTitle = document.createElement('span');
    jpTitle.textContent = 'お気に入り';
    jpTitle.className = 'mr-2';
    titleContainer.appendChild(jpTitle);
    
    // お気に入り (Bookmark) の英語表記を追加
    const enTitle = document.createElement('span');
    enTitle.textContent = `(Bookmark)`;
    enTitle.className = 'text-lg font-normal text-gray-400'; // 薄い文字色とフォントサイズ
    titleContainer.appendChild(enTitle);
    
    section.appendChild(titleContainer);

    if(favoriteVoices.length === 0)
    {
        // お気に入りが一つもない場合のメッセージ
        const message = document.createElement('p');
        message.className = 'text-gray-500 mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200';
        message.textContent = 'お気に入りのボイスはまだ登録されていません。☆マークを押して登録できます。';
        section.appendChild(message);
    }
    else
    {
        //お気に入りがある場合、ドラッグ可能なボタンをグリッド表示
        const grid = document.createElement('div');
        grid.id = 'favorites-grid';
        grid.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
        section.appendChild(grid);

        favoriteVoices.forEach(item => {
            // お気に入りのボイスボタンはドラッグ可能に設定
            grid.appendChild(createVoiceButton(item.folder, item.voice, true));
        });

        // ドラッグ＆ドロップのイベントリスナーを設定
        setupDragAndDrop(grid);
    }

    return section;
}

/**
 * お気に入りカテゴリの内容を更新・再描画する
 */
function updateFavoriteCategory() {
    const mainContent = document.getElementById('main-content');
    const oldFavoriteSection = document.getElementById('category-favorites');

    // 既存のお気に入りセクションを削除
    if (oldFavoriteSection) {
        mainContent.removeChild(oldFavoriteSection);
    }

    // 新しいお気に入りセクションを作成して挿入
    const favoriteVoices = getFavoriteVoices();
    const newFavoriteSection = createFavoriteCategorySection(favoriteVoices);
    // メインコンテンツの最後に挿入
    mainContent.appendChild(newFavoriteSection);
}

/**
 * カテゴリ一覧とコンテンツセクションを生成してDOMに挿入する
 * @param {Array<Object>} data - VOICE_DATA
 */
function generateAppStructure(data) {
    const categoryNav = document.getElementById('category-nav');
    const mainContent = document.getElementById('main-content');
    let firstCategoryId = ''; // 最初に表示するカテゴリIDを保持

    // 既存のコンテンツをクリア
    categoryNav.innerHTML = '';
    mainContent.innerHTML = '';

    // 1. 通常カテゴリのナビゲーションリンクとコンテンツを作成
    data.forEach(category =>
        {
        // ナビゲーションリンク
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'category-link block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150 mb-1';
        link.textContent = category.name;
        link.setAttribute('data-category-id', category.id);
        link.onclick = (e) => {
            e.preventDefault();
            showCategory(category.id);
        };
        categoryNav.appendChild(link);

        // コンテンツセクション
        mainContent.appendChild(createCategorySection(category));

        // 最初のカテゴリを設定 (お気に入り以外の最初のカテゴリをデフォルトとする)
        if (!firstCategoryId) {
            firstCategoryId = category.id;
        }
    });

    // 2. 通常カテゴリとお気に入りの間に区切り線を追加
    const separator = document.createElement('div');
    separator.className = 'border-t border-gray-200 my-2 pt-2'; // 線の色とマージンを設定
    categoryNav.appendChild(separator);

    // 3. お気に入りカテゴリのナビゲーションリンクを作成 (カテゴリリストの最後に移動)
    const favoriteLink = document.createElement('a');
    favoriteLink.href = '#';
    favoriteLink.className = 'category-link block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150 mb-1';
    // リンク内の「★」を黄色にする 
    favoriteLink.innerHTML = '<span class="text-yellow-500">★</span> お気に入り'; 
    favoriteLink.setAttribute('data-category-id', 'category-favorites');
    favoriteLink.onclick = (e) => {
        e.preventDefault();
        showCategory('category-favorites');
    };
    categoryNav.appendChild(favoriteLink);

    // 4. お気に入りカテゴリのコンテンツを作成 (最初に一度だけ生成、以降は更新)
    updateFavoriteCategory();


    // 5. 初期表示カテゴリを設定 (お気に入り以外の最初のカテゴリ)
    if (firstCategoryId) {
        showCategory(firstCategoryId);
    }
}


// =================================================================
// 4. ドラッグ＆ドロップ機能 (常にターゲットの前に挿入するように修正)
// =================================================================

/**
 * ドラッグ&ドロップイベントリスナーを設定
 * @param {HTMLElement} grid - お気に入りボタンを含むコンテナ (favorites-grid)
 */
function setupDragAndDrop(grid) {
    if (!grid) return;

    // --- Drag Start ---
    grid.addEventListener('dragstart', (e) => {
        const target = e.target.closest('.voice-button');
        if (target) {
            draggedItem = target;
            // Safari/Firefoxでghostイメージをクリア
            e.dataTransfer.effectAllowed = 'move';
            // Chromeの挙動を安定させるため、ダミーデータをセット
            e.dataTransfer.setData('text/plain', target.getAttribute('data-sound'));
            setTimeout(() => target.classList.add('opacity-40'), 0); // 遅延させて半透明化
        }
    });

    // --- Drag End ---
    grid.addEventListener('dragend', (e) => {
        if (draggedItem) {
            draggedItem.classList.remove('opacity-40');
            draggedItem = null;
        }
        // ホバーエフェクトのリセット
        // ★修正★ drag-over-bottom も含めてリセット
        grid.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
            el.classList.remove('drag-over-top', 'drag-over-bottom');
        });
    });

    // --- Drag Over (常に上側に視覚フィードバックを表示するように修正) ---
    grid.addEventListener('dragover', (e) => {
        e.preventDefault(); // ドロップを許可するために必要
        if (draggedItem && draggedItem !== e.target.closest('.voice-button')) {
            const target = e.target.closest('.voice-button');
            const targetGrid = e.target.closest('#favorites-grid');

            // ホバーエフェクトのリセット
            targetGrid.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
                el.classList.remove('drag-over-top', 'drag-over-bottom');
            });

            if (target) {
                // ★修正★: 常に上側 (前に挿入) のフィードバックのみを表示
                target.classList.add('drag-over-top');
            }
            e.dataTransfer.dropEffect = 'move';
        }
    });

    // --- Drop (常にターゲットの前に挿入するように修正) ---
    grid.addEventListener('drop', (e) => {
        e.preventDefault();
        const target = e.target.closest('.voice-button');

        if (draggedItem && target && draggedItem !== target) {
            const draggedId = draggedItem.getAttribute('data-sound');
            const targetId = target.getAttribute('data-sound');

            // 1. favorites配列の更新 (常にターゲットの前に挿入)
            const draggedIndex = favorites.indexOf(draggedId);
            const targetIndex = favorites.indexOf(targetId);

            if (draggedIndex > -1 && targetIndex > -1) {
                // (a) 配列からドラッグされた要素を削除
                favorites.splice(draggedIndex, 1);
                
                // (b) ターゲット要素の現在のインデックスを取得 (これが挿入位置となる)
                let newTargetIndex = favorites.indexOf(targetId);
                
                // (c) 挿入位置を決定
                // ★修正★: 常にターゲットのインデックス（すなわちターゲットの前）に挿入
                const newIndex = newTargetIndex; 

                // (d) 挿入
                favorites.splice(newIndex, 0, draggedId);
                
                // (e) ローカルストレージに保存
                saveFavoritesToLocalStorage();
            }

            // 2. DOMの操作 (常にターゲットの前に挿入)
            // ★修正★: 常にターゲットの前に挿入
            target.parentNode.insertBefore(draggedItem, target);


            // ホバーエフェクトのリセット
            target.classList.remove('drag-over-top', 'drag-over-bottom');
        }

        // ドラッグ元の要素の透明度を戻す
        if (draggedItem) {
            draggedItem.classList.remove('opacity-40');
        }
        draggedItem = null;
    });
}


// =================================================================
// 5. UI操作ロジック
// =================================================================

/**
 * 表示するカテゴリを切り替える
 * @param {string} categoryId - 表示するカテゴリのID (例: 'category-favorites', 'category-greeting')
 */
function showCategory(categoryId) {
    // 全てのカテゴリセクションを非表示にする
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.add('hidden');
    });

    // 指定されたカテゴリセクションを表示する
    const targetSection = document.getElementById(categoryId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // ナビゲーションリンクのアクティブ状態を切り替える
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('selected', 'bg-blue-50', 'font-semibold');
    });

    const activeLink = document.querySelector(`.category-link[data-category-id="${categoryId}"]`);
    if (activeLink) {
        activeLink.classList.add('selected', 'bg-blue-50', 'font-semibold');
    }
}


// =================================================================
// 6. 音声再生ロジック
// =================================================================

/**
 * ボイスボタンがクリックされた時の処理
 * @param {string} soundPath - ボイスのユニークID (folder/file.wav)
 */
function handleVoiceButtonClick(soundPath) {
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
        if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.warn(`[Warning] Audio play restricted. Path: ${url}. (User interaction required)`);
        } else if (retries > 0) {
            const delay = Math.pow(2, 3 - retries) * 500;
            console.warn(`[Retry] Failed to load audio ${url}. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            playAudioWithRetry(url, retries - 1);
        } else {
            console.error(`[Error] Failed to load audio after all retries: ${url}`, error);
        }
    }
}


// =================================================================
// 7. 初期化 (DOMContentLoadedイベントハンドラ)
// =================================================================

// DOMのロード完了を待ってから実行
document.addEventListener('DOMContentLoaded', () => {
    loadFavoritesFromLocalStorage(); // 最初にローカルストレージからお気に入りを読み込む
    generateAppStructure(VOICE_DATA);

    // 初期化時に全てのボタンの星の状態を同期
    updateAllVoiceButtonStates();
});