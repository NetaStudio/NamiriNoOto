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
            { text: "いいねいいねいいねいいねいいねいいね！", file: "baka2.wav" },
            { text: "うんうん", file: "baka3.wav" },
            { text: "それはすごい", file: "baka1.wav" },
        ]
    },
    {
        id: "category-denial",
        name: "否定",
        folder: "03_denial", // sounds/03_denial/
        en_name: "Denial",
        voices: [
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
// Array of voice IDs (e.g., "03_denial/denial1.wav")
let favorites = [];
let draggedItem = null; // ドラッグ中の要素を保持

// ドラッグオーバー時のドロップ位置情報を記憶するフラグ
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

// =================================================================
// 3. UI生成ロジック
// =================================================================

/**
 * ボイスボタン要素を生成する
 * @param {object} voice - ボイスデータオブジェクト { text, file }
 * @param {string} folder - カテゴリフォルダ名 (例: '01_greeting')
 * @returns {HTMLElement} - 生成されたボタン要素
 */
function createVoiceButton(voice, folder) {
    const voiceId = `${folder}/${voice.file}`;
    const isFav = isFavorite(voiceId);

    const button = document.createElement('button');
    // 修正: voice-button-text-12px を削除し、text-contentのスタイルに任せる。
    // flex items-center px-4 py-2 hover:shadow-lg transition duration-200 は維持。
    button.className = 'voice-button sm:text-base flex items-center px-4 py-2 hover:shadow-lg transition duration-200';
    button.setAttribute('data-sound', voiceId);
    button.onclick = handleVoiceButtonClick;

    // ボイス名 (この span に text-content クラスを追加)
    const textSpan = document.createElement('span');
    textSpan.textContent = voice.text;
    textSpan.className = 'text-content'; // テキストがアイコンを避けるためのスタイルを適用

    // お気に入りアイコン
    const iconSpan = document.createElement('span');
    iconSpan.className = 'favorite-icon text-lg absolute right-3 cursor-pointer ' + (isFav ? 'text-yellow-400' : 'text-gray-300');
    iconSpan.textContent = isFav ? '★' : '☆';
    iconSpan.onclick = (e) => toggleFavorite(voiceId, e);

    button.appendChild(textSpan);
    button.appendChild(iconSpan);

    return button;
}

/**
 * カテゴリセクション（ボイスボタンのコンテナ）を生成する
 * @param {object} category - カテゴリデータオブジェクト
 * @returns {HTMLElement} - 生成されたセクション要素
 */
function createCategorySection(category) {
    const section = document.createElement('section');
    section.id = category.id;
    section.className = 'category-section hidden'; // 初期状態は非表示
    section.innerHTML = `
        <h2 class="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
            ${category.name} <span class="text-xl text-gray-500 font-normal">(${category.en_name})</span>
        </h2>
        <div class="voice-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        </div>
    `;

    const grid = section.querySelector('.voice-grid');
    category.voices.forEach(voice => {
        grid.appendChild(createVoiceButton(voice, category.folder));
    });

    return section;
}

/**
 * お気に入りカテゴリを生成・更新する
 */
function createFavoriteCategorySection() {
    const favoriteData = getFavoriteVoices();
    const favoriteCount = favoriteData.length;

    // 既存のお気に入りセクションを取得・作成
    let section = document.getElementById('category-favorites');
    if (!section) {
        section = document.createElement('section');
        section.id = 'category-favorites';
        section.className = 'category-section hidden';
        document.getElementById('main-content').appendChild(section); // main-content直下に挿入
    }

    let contentHTML = '';
    if (favoriteCount === 0) {
        contentHTML = `
            <div class="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <p class="text-lg text-gray-500">お気に入りがありません。★マークを押して追加してください</p>
            </div>
        `;
    } else {
        contentHTML = `
            <div id="favorites-grid" class="voice-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            </div>
        `;
    }

    section.innerHTML = `
        <h2 class="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
            お気に入り <span class="text-xl text-gray-500 font-normal">(Bookmark)</span>
        </h2>
        ${contentHTML}
    `;

    if (favoriteCount > 0) {
        const grid = section.querySelector('#favorites-grid');
        favoriteData.forEach(item => {
            grid.appendChild(createVoiceButton(item.voice, item.folder));
        });

        // Point 3: ドラッグ&ドロップをセットアップ
        setupDragAndDrop(grid);
    }

    return section;
}

/**
 * お気に入りカテゴリの更新をトリガーする
 */
function updateFavoriteCategory() {
    // セクションを再生成 (これが Point 2 の登録順維持を保証する)
    createFavoriteCategorySection();

    // お気に入りカテゴリが表示中の場合、再描画
    if (!document.getElementById('category-favorites').classList.contains('hidden')) {
        showCategory('category-favorites');
    }
}

/**
 * アプリの構造（カテゴリとボタン）を生成する
 * @param {Array<object>} data - ボイスデータ
 */
function generateAppStructure(data) {
    const sidebarNav = document.getElementById('category-nav');
    const mainContent = document.getElementById('main-content');

    // 既存のコンテンツをクリア
    sidebarNav.innerHTML = '';
    // メインコンテンツのカテゴリセクションをクリア
    document.querySelectorAll('.category-section').forEach(section => section.remove());


    // 1. カテゴリボタンとセクションを生成
    data.forEach(category => {
        // サイドバーリンクを生成
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'category-link block px-3 py-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150';
        link.setAttribute('data-target', category.id);
        link.textContent = category.name;
        link.onclick = (e) => {
            e.preventDefault();
            showCategory(category.id);
        };
        sidebarNav.appendChild(link);

        // メインコンテンツのセクションを生成
        mainContent.appendChild(createCategorySection(category));
    });

    // 2. お気に入りリンクとセクションを生成
    const favLink = document.createElement('a');
    favLink.href = '#';
    // 修正: flex items-center は残す
    favLink.className = 'category-link flex items-center px-3 py-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150 border-t mt-4 pt-4 font-semibold';
    favLink.setAttribute('data-target', 'category-favorites');

    // 修正: アイコンのspanに align-middle を追加し、絵文字とテキストのベースラインのずれを修正
    favLink.innerHTML = '<span class="text-yellow-400 mr-2 align-middle">★</span>お気に入り';

    favLink.onclick = (e) => {
        e.preventDefault();
        showCategory('category-favorites');
    };
    sidebarNav.appendChild(favLink);

    createFavoriteCategorySection(); // お気に入りセクションを初期生成

    // 初期表示として、最初のカテゴリを選択
    if (data.length > 0) {
        showCategory(data[0].id);
    }
}


// =================================================================
// 4. ドラッグ＆ドロップ機能 (Point 3)
// =================================================================

/**
 * お気に入りカテゴリのドラッグ&ドロップ機能をセットアップする
 * @param {HTMLElement} grid - お気に入りボタンを格納するグリッドコンテナ
 */
function setupDragAndDrop(grid) {
    // gridの子要素 (voice-button) に対してdraggable属性を設定
    Array.from(grid.children).forEach(button => {
        button.setAttribute('draggable', 'true');
    });

    grid.addEventListener('dragstart', (e) => {
        const target = e.target.closest('.voice-button');
        if (!target) return;

        draggedItem = target;
        // ターゲットを半透明にする
        setTimeout(() => draggedItem.classList.add('opacity-50'), 0);

        e.dataTransfer.setData('text/plain', draggedItem.getAttribute('data-sound'));
    });

    grid.addEventListener('dragend', (e) => {
        // ドラッグが終了したら半透明を解除し、ハイライトも解除
        if (draggedItem) {
            draggedItem.classList.remove('opacity-50');
            draggedItem = null;
        }
        // 解除するハイライトクラスに水平方向のボーダーも追加
        Array.from(grid.children).forEach(child => child.classList.remove(
            'border-t-4', 'border-b-4', 'border-l-4', 'border-r-4', 'border-blue-500'
        ));
        isDroppingAfterTarget = false;
    });

    grid.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!draggedItem) return;

        const target = e.target.closest('.voice-button');

        // ハイライトをリセット
        Array.from(grid.children).forEach(child => child.classList.remove(
            'border-t-4', 'border-b-4', 'border-l-4', 'border-r-4', 'border-blue-500'
        ));

        if (target && target !== draggedItem) {
            const rect = target.getBoundingClientRect();

            // X軸（水平方向）の中央線
            const centerX = (rect.left + rect.right) / 2;
            // Y軸（垂直方向）の中央線
            const centerY = (rect.top + rect.bottom) / 2;

            // 垂直方向の距離と水平方向の距離を比較し、より近い方向で判定を優先する
            // 垂直方向の並び替え（行をまたぐ）か、水平方向の並び替え（同じ行内）かを判断
            const distY = Math.abs(e.clientY - centerY);
            const distX = Math.abs(e.clientX - centerX);

            let shouldInsertAfter = false;

            // Y軸方向の距離がボタンの高さの1/4より小さければ、同じ行内の並び替えと判断しX軸を優先
            // または、水平方向の距離の方が小さい場合にX軸を優先
            if (distX <= distY) {
                // 水平方向（同じ行内）の判定を優先
                if (e.clientX < centerX) {
                    // 左半分: ターゲットの前に挿入
                    target.classList.add('border-l-4', 'border-blue-500');
                    shouldInsertAfter = false;
                } else {
                    // 右半分: ターゲットの後に挿入
                    target.classList.add('border-r-4', 'border-blue-500');
                    shouldInsertAfter = true;
                }
            } else {
                // 垂直方向（行の切り替え）の判定を優先
                if (e.clientY < centerY) {
                    // 上半分: ターゲットの前に挿入
                    target.classList.add('border-t-4', 'border-blue-500');
                    shouldInsertAfter = false;
                } else {
                    // 下半分: ターゲットの後に挿入
                    target.classList.add('border-b-4', 'border-blue-500');
                    shouldInsertAfter = true;
                }
            }

            // グローバルフラグに最終判定結果を保存
            isDroppingAfterTarget = shouldInsertAfter;
        }
    });

    grid.addEventListener('dragleave', (e) => {
        // gridからカーソルが離れたらハイライトを解除
    });

    grid.addEventListener('drop', (e) => {
        e.preventDefault();

        const dropTarget = e.target.closest('.voice-button');

        // 解除するハイライトクラスに水平方向のボーダーも追加
        Array.from(grid.children).forEach(child => child.classList.remove(
            'border-t-4', 'border-b-4', 'border-l-4', 'border-r-4', 'border-blue-500'
        ));

        if (!draggedItem || !dropTarget || draggedItem === dropTarget) {
            return;
        }

        // 1. 必要な情報を取得
        const draggedVoiceId = draggedItem.getAttribute('data-sound');

        const draggedIndex = favorites.indexOf(draggedVoiceId);
        const targetIndex = favorites.indexOf(dropTarget.getAttribute('data-sound')); // ドロップ対象の元のインデックス

        if (draggedIndex === -1 || targetIndex === -1) return;

        // dragoverで記憶したフラグを使って挿入位置を確定
        let insertionIndex;
        if (isDroppingAfterTarget) {
            // ターゲットの後に挿入
            insertionIndex = targetIndex + 1;
        } else {
            // ターゲットの前に挿入
            insertionIndex = targetIndex;
        }

        // 3. 配列からドラッグされた要素を削除
        favorites.splice(draggedIndex, 1);

        // 4. 挿入インデックスの調整 (削除後のインデックスを修正)
        // ドラッグされた要素が挿入位置より前にあった場合、削除によって配列が詰まり、
        // 挿入位置が自動的に1つ前のインデックスにシフトする
        if (draggedIndex < insertionIndex) {
            insertionIndex--;
        }

        // 5. 新しい位置に要素を挿入
        favorites.splice(insertionIndex, 0, draggedVoiceId);

        // 順序が変わったので保存し、お気に入りカテゴリを更新
        saveFavoritesToLocalStorage();
        updateFavoriteCategory();

        // ドロップ後もお気に入りカテゴリが表示されている状態を維持
        showCategory('category-favorites');
    });
}


// =================================================================
// 5. UI操作ロジック
// =================================================================

/**
 * カテゴリセクションの表示/非表示を切り替える
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
// 6. 音声再生ロジック
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
