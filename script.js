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
            { text: "汐空なみりです", file: "汐空なみりです.mp3" },
            { text: "こんなみり～", file: "こんなみり～.mp3" },
            { text: "こんなみりー！", file: "こんなみりー！.mp3" },
            { text: "おはよう", file: "おはよう.mp3" },
            { text: "おはなみり", file: "おはなみり.mp3" },
            { text: "おつなみり～", file: "おつなみり～.mp3" },
            { text: "おつなみり！", file: "おつなみり！.mp3" },
            { text: "聞こえますか～？", file: "聞こえますか～？.mp3" },
            { text: "聞こえてるかなぁ", file: "聞こえてるかなぁ.mp3" },
            { text: "聞こえてそうだね", file: "聞こえてそうだね.mp3" },
            { text: "ただいま", file: "ただいま.mp3" },
            { text: "またね～", file: "またね～.mp3" },
            { text: "またね", file: "またね.mp3" },
            { text: "また！", file: "また！.mp3" },
            { text: "おやすみ～", file: "おやすみ～.mp3" },
            { text: "ばいば～い", file: "ばいば～い.mp3" },
            { text: "君のハート", file: "君のハート.mp3" },
            { text: "びしょぬれ注意だよ？", file: "びしょぬれ注意だよ？.mp3" },
            { text: "誕生日は1月26日", file: "誕生日は1月26日.mp3" },
            { text: "身長は153cmです", file: "身長は153cmです.mp3" },
            { text: "大きいケーキに飛び込みたい", file: "大きいケーキに飛び込みたい.mp3" },
        ]
    },
    {
        id: "category-positive",
        name: "肯定",
        en_name: "Positive",
        folder: "02_positive",
        voices:
        [
            { text: "はーい", file: "はーい.mp3" },
            { text: "はい", file: "はい.mp3" },
            { text: "ん", file: "ん.mp3" },
            { text: "へい", file: "へい.mp3" },
            { text: "いいよ特別ね", file: "いいよ特別ね.mp3" },
        ]
    },
    {
        id: "category-negative",
        name: "否定",
        en_name: "Negative",
        folder: "03_negative",
        voices:
        [
            { text: "ダメ", file: "ダメ.mp3" },
            { text: "ダメです", file: "ダメです.mp3" },
            { text: "だ～め", file: "だ～め.mp3" },
            { text: "やーだね", file: "やーだね.mp3" },
            { text: "やんないよ", file: "やんないよ.mp3" },
            { text: "してな～い", file: "してな～い.mp3" },
            { text: "あ～げない", file: "あ～げない.mp3" },
            { text: "気持ち悪いんだから", file: "気持ち悪いんだから.mp3" },
            { text: "きめー", file: "きめー.mp3" },
            { text: "なに考えてんの全く", file: "なに考えてんの全く.mp3" },
            { text: "なに期待してんのよ", file: "なに期待してんのよ.mp3" },
            { text: "何してんだ！", file: "何してんだ！.mp3" },
            { text: "許しません", file: "許しません.mp3" },
            { text: "そんなバナナー！", file: "そんなバナナー！.mp3" },
        ]
    },
    {
        id: "category-filler",
        name: "繋ぎ",
        en_name: "Filler",
        folder: "04_filler",
        voices:
        [
            { text: "あの→", file: "あの→.mp3" },
            { text: "あの↓", file: "あの↓.mp3" },
            { text: "あ～", file: "あ～.mp3" },
            { text: "え～と", file: "え～と.mp3" },
            { text: "てことで", file: "てことで.mp3" },
            { text: "てことでぇ", file: "てことでぇ.mp3" },
            { text: "もう", file: "もう.mp3" },
            { text: "ん～？", file: "ん～？.mp3" },
            { text: "んしょ～", file: "んしょ～.mp3" },
            { text: "いや、まぁ本当", file: "いや、まぁ本当.mp3" }
        ]
    },
    {
        id: "category-joy",
        name: "喜び",
        en_name: "Joy",
        folder: "05_joy",
        voices:
        [
            { text: "いえーい", file: "いえーい.mp3" },
            { text: "おい見たか", file: "おい見たか.mp3" },
            { text: "よしよしよし", file: "よしよしよし.mp3" },
            { text: "やったーはははは", file: "やったーはははは.mp3" },
            { text: "嬉しいな～ななな～な", file: "嬉しいな～ななな～な.mp3" },
            { text: "ばーーーーか", file: "ばーーーーか.mp3" },
        ]
    },
    {
        id: "category-anger",
        name: "怒り",
        en_name: "Anger",
        folder: "06_anger",
        voices:
        [
            { text: "ふん", file: "ふん.mp3" },
            { text: "まったく", file: "まったく.mp3" },
            { text: "黙れ", file: "黙れ.mp3" },
            { text: "黙りなさい", file: "黙りなさい.mp3" },
            { text: "鎮まれ", file: "鎮まれ.mp3" },
            { text: "静粛に", file: "静粛に.mp3" },
            { text: "あ静かに", file: "あ静かに.mp3" },
            { text: "静かにしなさい", file: "静かにしなさい.mp3" },
            { text: "いい加減にしろ", file: "いい加減にしろ.mp3" },
            { text: "クソ野郎", file: "クソ野郎.mp3" },
            { text: "舐めんじゃねーぞ", file: "舐めんじゃねーぞ.mp3" },
            { text: "ふざけんな", file: "ふざけんな.mp3" },
            { text: "知らないんだから", file: "知らないんだから.mp3" },
            { text: "不機嫌になってきたなぁ", file: "不機嫌になってきたなぁ.mp3" },
            { text: "そういうこと考えてるんだ", file: "そういうこと考えてるんだ.mp3" },
        ]
    },
    {
        id: "category-sad",
        name: "哀しい",
        en_name: "Sad",
        folder: "07_sad",
        voices:
        [
            { text: "悲しいよ", file: "悲しいよ.mp3" },
            { text: "悲しすぎるよ", file: "悲しすぎるよ.mp3" },
            { text: "もうバカ！", file: "もうバカ！.mp3" },
            { text: "この有様でした", file: "この有様でした.mp3" },
        ]
    },
    {
        id: "category-happy",
        name: "楽しい",
        en_name: "Happy",
        folder: "08_happy",
        voices:
        [
            { text: "楽しみだなぁ", file: "楽しみだなぁ.mp3" },
            { text: "わくわくすっぞ", file: "わくわくすっぞ.mp3" },
            { text: "いや～はははは", file: "いや～はははは.mp3" },
            { text: "かはははは", file: "かはははは.mp3" },
            { text: "ふふはは", file: "ふふはは.mp3" },
            { text: "楽しい航海にしてやろうじゃん", file: "楽しい航海にしてやろうじゃん.mp3" },
        ]
    },
    {
        id: "category-thank",
        name: "感謝",
        en_name: "Thank",
        folder: "09_thank",
        voices:
        [
            { text: "ありがとー", file: "ありがとー.mp3" },
            { text: "Thank you", file: "Thank you.mp3" },
            { text: "本当にありがとうございます", file: "本当にありがとうございます.mp3" },
        ]
    },
    {
        id: "category-sorry",
        name: "謝罪",
        en_name: "Sorry",
        folder: "10_sorry",
        voices:
        [
            { text: "すまん", file: "すまん.mp3" },
            { text: "ごめ～んね？", file: "ごめ～んね？.mp3" },
            { text: "気付いてませんでした ", file: "気付いてませんでした.mp3" },
            { text: "もうえぇでしょ", file: "もうえぇでしょ.mp3" },
        ]
    },
    {
        id: "category-inciting",
        name: "煽り",
        en_name: "Inciting",
        folder: "11_inciting",
        voices:
        [
            { text: "へ～", file: "へ～.mp3" },
            { text: "お～い", file: "お～い.mp3" },
            { text: "そんなこともできないの？", file: "そんなこともできないの？.mp3" },
            { text: "ざーーーこ", file: "ざーーーこ.mp3" },
            { text: "残念でした", file: "残念でした.mp3" },
            { text: "そんなこともできないの？", file: "そんなこともできないの？.mp3" },
            { text: "ばーか", file: "ばーか.mp3" },
            { text: "まぁまぁまぁまぁ", file: "まぁまぁまぁまぁ.mp3" },
            { text: "良い子だね？", file: "良い子だね？.mp3" },
        ]
    },
    {
        id: "category-onomatopoeia",
        name: "擬音",
        en_name: "Onomatopoeia",
        folder: "12_onomatopoeia",
        voices:
        [
            { text: "まぎまぎ", file: "まぎまぎ.mp3" },
            { text: "むぎむぎ", file: "むぎむぎ.mp3" },
            { text: "えっほえっほ", file: "えっほえっほ.mp3" },
            { text: "じーーーー", file: "じーーーー.mp3" },
            { text: "どかーん", file: "どかーん.mp3" },
            { text: "わせわせ", file: "わせわせ.mp3" },
        ]
    },
    {
        id: "category-other",
        name: "その他",
        en_name: "Other",
        folder: "13_other",
        voices:
        [
            { text: "起きろ～", file: "起きろ～.mp3" },
            { text: "起きなさ～い", file: "起きなさ～い.mp3" },
            { text: "ちょと待ってね", file: "ちょと待ってね.mp3" },
            { text: "一緒にいこ！", file: "一緒にいこ！.mp3" },
            { text: "戻らなくちゃ", file: "戻らなくちゃ.mp3" },
            { text: "美味しくな～れ", file: "美味しくな～れ.mp3" },
            { text: "はい、あ～ん？", file: "はい、あ～ん？.mp3" },
            { text: "可愛いでしょ？", file: "可愛いでしょ？.mp3" },
            { text: "今のなんか語弊あったかなぁ", file: "今のなんか語弊あったかなぁ.mp3" },
            { text: "何見てんのセクハラ", file: "何見てんのセクハラ.mp3" },
            { text: "忘れろビーム", file: "忘れろビーム.mp3" },
            { text: "満足かな", file: "満足かな.mp3" },
        ]
    }
];

// =================================================================
// 2. 状態管理 (LocalStorageによる永続化)
// =================================================================

const FAVORITES_STORAGE_KEY = 'namiri_oto_favorites';
let favorites = loadFavorites();

/**
 * お気に入り（メモ）データをLocalStorageから読み込む
 * @returns {Array} 読み込んだお気に入りデータ
 */
function loadFavorites() {
    try {
        const json = localStorage.getItem(FAVORITES_STORAGE_KEY);
        // categoryId/folderの情報が不足している旧データの場合に備え、マージ処理を行う
        const loadedFavorites = json ? JSON.parse(json) : [];
        return loadedFavorites.map(fav => {
            if (!fav.categoryId || !fav.folder) {
                // フォルダ名とカテゴリIDをVOICE_DATAから探して補完する
                for (const category of VOICE_DATA) {
                    if (category.voices.some(v => v.file === fav.file)) {
                        fav.categoryId = category.id;
                        fav.folder = category.folder;
                        break;
                    }
                }
            }
            return fav;
        });
    } catch (e) {
        console.error("Failed to load favorites from localStorage:", e);
        return [];
    }
}

/**
 * お気に入り（メモ）データをLocalStorageに保存する
 */
function saveFavorites() {
    try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
        console.error("Failed to save favorites to localStorage:", e);
    }
}


// =================================================================
// 3. UI生成: カテゴリとボイスボタン
// =================================================================

/**
 * カテゴリサイドバーを生成する
 */
function renderCategoryNav() {
    const nav = document.getElementById('category-nav');
    nav.innerHTML = ''; // 初期化

    // 1. お気に入り（メモ）リンク
    const favoriteLink = createCategoryLink('category-favorites', 'メモ', '⭐️ メモ');
    nav.appendChild(favoriteLink);

    // 2. 各カテゴリのリンク
    VOICE_DATA.forEach(category => {
        const link = createCategoryLink(category.id, category.name, category.name);
        nav.appendChild(link);
    });

    // 初期表示として最初のカテゴリを選択
    if (VOICE_DATA.length > 0) {
        const initialCategory = favorites.length > 0 ? 'category-favorites' : VOICE_DATA[0].id;
        showContent(initialCategory);
    }
}

/**
 * カテゴリリンク要素を作成する
 * @param {string} id - カテゴリID
 * @param {string} name - 表示名
 * @param {string} displayName - リンク内の表示テキスト
 * @returns {HTMLAnchorElement} カテゴリリンク要素
 */
function createCategoryLink(id, name, displayName) {
    const link = document.createElement('a');
    link.href = "#";
    link.textContent = displayName;
    link.dataset.categoryId = id;
    link.className = 'category-link block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition duration-150 rounded-lg';
    link.onclick = (e) => {
        e.preventDefault();
        showContent(id);
    };
    return link;
}

/**
 * メインコンテンツエリアに選択されたカテゴリの内容を表示する
 * @param {string} categoryId - 表示するカテゴリのID
 */
function showContent(categoryId) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // コンテンツをクリア

    // 選択状態の更新
    document.querySelectorAll('.category-link').forEach(link => {
        if (link.dataset.categoryId === categoryId) {
            link.classList.add('selected', 'font-semibold', 'bg-blue-100', 'text-blue-700');
            link.classList.remove('hover:bg-gray-100', 'text-gray-600');
        } else {
            link.classList.remove('selected', 'font-semibold', 'bg-blue-100', 'text-blue-700');
            link.classList.add('hover:bg-gray-100', 'text-gray-600');
        }
    });

    // コンテンツの表示
    if (categoryId === 'category-favorites') {
        renderFavorites(mainContent);
    } else {
        const category = VOICE_DATA.find(cat => cat.id === categoryId);
        if (category) {
            renderVoiceSection(mainContent, category);
        }
    }
}

/**
 * 通常のカテゴリセクションをレンダリングする
 * @param {HTMLElement} container - コンテンツを表示する親要素
 * @param {Object} category - カテゴリデータオブジェクト
 */
function renderVoiceSection(container, category) {
    const section = document.createElement('section');
    section.className = 'mb-6';
    section.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            ${category.name} <span class="text-gray-500 text-sm">(${category.en_name})</span>
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3" id="${category.id}-grid">
            <!-- ボイスボタンはJSで挿入されます -->
        </div>
    `;
    container.appendChild(section);

    const grid = document.getElementById(`${category.id}-grid`);
    category.voices.forEach(voice => {
        const isFavorite = favorites.some(fav => fav.file === voice.file);
        // createVoiceButtonにカテゴリIDも渡す
        const button = createVoiceButton(voice, category.folder, category.id, isFavorite, false);
        grid.appendChild(button);
    });
}

/**
 * お気に入り（メモ）セクションをレンダリングする (ドラッグ＆ドロップ対応)
 * @param {HTMLElement} container - コンテンツを表示する親要素
 */
function renderFavorites(container) {
    const section = document.createElement('section');
    section.className = 'mb-6';
    section.innerHTML = `
        <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b pb-2">
            ⭐️ メモ (お気に入り)
        </h2>
        <p class="text-gray-500 mb-4 text-sm">ドラッグ＆ドロップで順番を入れ替えられます。</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3" id="favorites-grid">
            <!-- ボイスボタンはJSで挿入されます -->
        </div>
    `;
    container.appendChild(section);

    const grid = document.getElementById('favorites-grid');
    if (favorites.length === 0) {
        grid.innerHTML = '<p class="text-gray-500 col-span-full">メモにボイスが登録されていません。</p>';
        return;
    }

    favorites.forEach(voice => {
        // お気に入りデータは folder, file, categoryId を持っている
        const button = createVoiceButton(voice, voice.folder, voice.categoryId, true, true);
        grid.appendChild(button);
    });

    // ドラッグ＆ドロップのイベントリスナーを設定
    addDragDropListeners(grid);
}

/**
 * ボイスボタン要素を作成する
 * @param {Object} voice - ボイスデータオブジェクト ({ text, file })
 * @param {string} folder - ボイスが格納されているカテゴリフォルダ名
 * @param {string} categoryId - ボイスが属するカテゴリID (メモからの再生/登録に必要な情報)
 * @param {boolean} isFavorite - お気に入り登録されているか
 * @param {boolean} isDraggable - ドラッグ可能かどうか (メモ専用)
 * @returns {HTMLButtonElement} ボイスボタン要素
 */
function createVoiceButton(voice, folder, categoryId, isFavorite, isDraggable) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `voice-button relative w-full p-3 rounded-xl shadow-md transition transform hover:scale-[1.03] active:scale-[0.98] ${isFavorite ? 'bg-blue-50 border border-blue-300 text-blue-800' : 'bg-white border border-gray-200 text-gray-700'}`;
    button.title = voice.text;
    button.setAttribute('data-file', voice.file);
    button.setAttribute('data-folder', folder);
    button.setAttribute('data-category-id', categoryId); // メモからの再生/登録に必要な情報
    button.setAttribute('onclick', 'playVoice(this)');

    if (isDraggable) {
        button.draggable = true;
    }

    // お気に入りボタン（星）
    const starButton = document.createElement('button');
    starButton.type = 'button';
    starButton.className = 'absolute top-1 right-1 text-lg leading-none p-1 transition duration-150';
    starButton.innerHTML = isFavorite ? '★' : '☆'; // 登録済みなら★、未登録なら☆
    starButton.title = isFavorite ? 'メモから削除' : 'メモに登録';
    starButton.onclick = (e) => {
        e.stopPropagation(); // ボイス再生を防ぐ
        // toggleFavoriteにカテゴリIDとfolderを渡す
        toggleFavorite(voice.file, voice.text, folder, categoryId);
    };

    // ボイス名テキスト
    const textSpan = document.createElement('span');
    textSpan.textContent = voice.text;
    textSpan.className = 'block font-medium truncate pt-1';

    button.appendChild(starButton);
    button.appendChild(textSpan);

    return button;
}

// =================================================================
// 4. お気に入り（メモ）機能
// =================================================================

/**
 * ボイスをお気に入り（メモ）に追加または削除する
 * @param {string} file - ボイスファイル名
 * @param {string} text - ボイステキスト
 * @param {string} folder - カテゴリフォルダ名
 * @param {string} categoryId - カテゴリID
 */
function toggleFavorite(file, text, folder, categoryId) {
    const index = favorites.findIndex(fav => fav.file === file);

    if (index === -1) {
        // 登録: 全ての情報を保存
        favorites.push({ file, text, folder, categoryId });
        favorites.sort((a, b) => a.text.localeCompare(b.text, 'ja')); // 登録時はテキストでソート
        console.log(`[Favorite] Added: ${text}`);
    } else {
        // 削除
        favorites.splice(index, 1);
        console.log(`[Favorite] Removed: ${text}`);
    }

    saveFavorites();

    // UIを更新
    const currentCategoryId = document.querySelector('.category-link.selected')?.dataset.categoryId;
    if (currentCategoryId === 'category-favorites') {
        showContent('category-favorites');
    } else {
        // 現在のカテゴリを再レンダリングして星の状態を更新
        if (currentCategoryId) showContent(currentCategoryId);
    }
}

/**
 * お気に入り（メモ）リストを完全にクリアする
 */
function clearFavorites() {
    // 警告メッセージを表示するカスタムモーダルUI
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-xl w-80">
            <h3 class="text-lg font-bold mb-4">メモの全削除</h3>
            <p class="text-gray-600 mb-6">メモに登録されているボイスを全て削除しますか？この操作は元に戻せません。</p>
            <div class="flex justify-end space-x-3">
                <button id="cancel-clear" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition">キャンセル</button>
                <button id="confirm-clear" class="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition">すべて削除</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('cancel-clear').onclick = () => {
        modal.remove();
    };

    document.getElementById('confirm-clear').onclick = () => {
        favorites = [];
        saveFavorites();
        modal.remove();
        console.log("[Favorite] All favorites cleared.");
        // メモ画面が表示されていたら、空の状態で再レンダリング
        const currentCategoryId = document.querySelector('.category-link.selected')?.dataset.categoryId;
        if (currentCategoryId === 'category-favorites') {
            showContent('category-favorites');
        }
        // 全ボイスボタンの星を☆に戻す
        document.querySelectorAll('.voice-button button').forEach(starBtn => {
             starBtn.innerHTML = '☆';
             starBtn.title = 'メモに登録';
        });
    };
}

// =================================================================
// 5. ドラッグ＆ドロップ (メモの順序入れ替え)
// =================================================================

let draggedItem = null;

/**
 * ドラッグ＆ドロップイベントリスナーをグリッドに追加する
 * @param {HTMLElement} grid - お気に入りボイスボタンの親要素
 */
function addDragDropListeners(grid) {
    grid.addEventListener('dragstart', handleDragStart);
    grid.addEventListener('dragover', handleDragOver);
    grid.addEventListener('dragenter', handleDragEnter);
    grid.addEventListener('dragleave', handleDragLeave);
    grid.addEventListener('drop', handleDrop);
    grid.addEventListener('dragend', handleDragEnd);
}

/**
 * ドラッグ開始時の処理
 */
function handleDragStart(e) {
    if (e.target.classList.contains('voice-button')) {
        draggedItem = e.target;
        e.dataTransfer.effectAllowed = 'move';
        // ドラッグ元のデータ（ファイル名）を転送データとして設定
        e.dataTransfer.setData('text/plain', draggedItem.getAttribute('data-file'));
        // わずかな遅延でドラッグ中の要素を半透明にする
        setTimeout(() => draggedItem.classList.add('opacity-40'), 0);
    }
}

/**
 * ドラッグ要素がドロップターゲットの上にある時の処理
 */
function handleDragOver(e) {
    e.preventDefault(); // ドロップを許可するために必要
    if (e.target.classList.contains('voice-button') && e.target !== draggedItem) {
        const rect = e.target.getBoundingClientRect();
        const y = e.clientY - rect.top; // ボタン内のY座標

        // ボタンの上半分なら上、下半分なら下に挿入
        if (y < rect.height / 2) {
            e.target.classList.add('drag-over-top');
            e.target.classList.remove('drag-over-bottom');
        } else {
            e.target.classList.add('drag-over-bottom');
            e.target.classList.remove('drag-over-top');
        }
    }
    e.dataTransfer.dropEffect = 'move';
}

/**
 * ドラッグ要素がドロップターゲットに入った時の処理
 */
function handleDragEnter(e) {
    e.preventDefault();
}

/**
 * ドラッグ要素がドロップターゲットから離れた時の処理
 */
function handleDragLeave(e) {
    if (e.target.classList.contains('voice-button')) {
        e.target.classList.remove('drag-over-top', 'drag-over-bottom');
    }
}

/**
 * ドロップされた時の処理
 */
function handleDrop(e) {
    e.preventDefault();
    if (!draggedItem) return;

    const targetItem = e.target.closest('.voice-button');
    if (!targetItem || targetItem === draggedItem) {
        // ドロップ先が無効な場合や、自身の場合
        targetItem?.classList.remove('drag-over-top', 'drag-over-bottom');
        return;
    }

    const draggedFile = draggedItem.getAttribute('data-file');
    const targetFile = targetItem.getAttribute('data-file');

    // 1. favorites配列の順序を更新
    const draggedIndex = favorites.findIndex(fav => fav.file === draggedFile);
    const targetIndex = favorites.findIndex(fav => fav.file === targetFile);

    if (draggedIndex !== -1 && targetIndex !== -1) {
        // 移動する要素を配列から取り出す
        const [movedItem] = favorites.splice(draggedIndex, 1);

        // ドロップ位置に基づいて挿入
        if (targetItem.classList.contains('drag-over-top')) {
            favorites.splice(targetIndex, 0, movedItem);
        } else { // drag-over-bottom
            favorites.splice(targetIndex + 1, 0, movedItem);
        }

        saveFavorites(); // 順序を保存
        showContent('category-favorites'); // UIを再描画
    }

    targetItem.classList.remove('drag-over-top', 'drag-over-bottom');
}

/**
 * ドラッグ操作が終了した時の処理
 */
function handleDragEnd(e) {
    draggedItem?.classList.remove('opacity-40');
    draggedItem = null;
    // グリッド内の全てのボタンからドラッグオーバーのクラスを削除
    document.querySelectorAll('.voice-button').forEach(btn => {
        btn.classList.remove('drag-over-top', 'drag-over-bottom');
    });
}

// =================================================================
// 6. ボイス再生 (Audioインスタンスの再利用を導入)
// =================================================================

// ★新規追加: プリロードされたAudioインスタンスを保持するマップ
// キー: '01_greeting/汐空なみりです.mp3' のようなフルパス
// 値: Audioインスタンス
const audioPool = new Map();

// ★新規追加: 現在再生中のAudioオブジェクトを保持するグローバル変数 (排他制御用)
let currentAudio = null;


/**
 * 全ての音声ファイルをプリロードし、Audio Poolを構築する
 */
function preloadAudioPool() {
    console.log("[Audio] Preloading all voices...");
    
    VOICE_DATA.forEach(category => {
        const folder = category.folder;
        category.voices.forEach(voice => {
            const soundPath = `${folder}/${voice.file}`;
            const fullPath = `sounds/${soundPath}`;
            
            if (!audioPool.has(fullPath)) {
                // 既に存在しない場合のみAudioインスタンスを生成
                const audio = new Audio(fullPath);
                
                // Audioインスタンスはメモリに保持されます。
                // ロード完了を待つ必要はないが、ログで確認できると良い
                audio.addEventListener('canplaythrough', () => {
                    console.log(`[Audio Pool] Ready: ${fullPath}`);
                }, { once: true });
                
                audioPool.set(fullPath, audio);
            }
        });
    });
    console.log(`[Audio] Preload complete. ${audioPool.size} instances created in pool.`);
}


/**
 * ボイスを再生する
 * @param {HTMLElement} button - クリックされたボイスボタン要素
 */
function playVoice(button) {
    const folder = button.getAttribute('data-folder');
    const file = button.getAttribute('data-file');
    const soundPath = `${folder}/${file}`;
    const fullPath = `sounds/${soundPath}`;

    // プリロードされたAudioインスタンスを取得して再生
    const audioInstance = audioPool.get(fullPath);

    if (audioInstance) {
        playAudioFromPool(audioInstance, fullPath);
    } else {
        // 万が一プールにない場合 (通常は発生しない) は、新規作成して再生
        console.warn(`[Warning] Audio instance not found in pool for ${fullPath}. Creating new instance.`);
        // 既存のplayAudioWithRetryを利用（排他制御は含まれない）
        playAudioWithRetry(fullPath); 
    }
}

/**
 * Audio Poolから取得したインスタンスを再生する (排他制御あり)
 * @param {HTMLAudioElement} audio - 再生するAudioインスタンス
 * @param {string} url - ログ表示用のURL
 */
async function playAudioFromPool(audio, url) {
    // 1. 排他制御: 現在再生中の音声を停止
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // リセットしてリソース解放を助ける
        currentAudio = null;
    }

    try {
        // 2. インスタンスの再利用: 再生位置を最初に戻す
        audio.currentTime = 0;
        
        // 3. 再生を試行
        await audio.play();
        console.log(`[Success] Audio playing from pool: ${url}`);
        
        // 4. グローバル変数にセット
        currentAudio = audio;

    } catch (error) {
        // AbortError (再生中に新しいAudioが割り込んだ場合) や NotAllowedError (自動再生ブロック)
        if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.warn(`[Warning] Audio play restricted or aborted. Path: ${url}. Error: ${error.name}`);
        } else {
            console.error(`[Error] Failed to play audio from pool: ${url}`, error);
        }
        
        // エラー発生時もcurrentAudioをリセット
        if (currentAudio === audio) {
             currentAudio = null;
        }
    }
}


/**
 * 指数バックオフ付きのAudio新規作成・再生関数 (予備/エラー処理用)
 * ※これはプールに存在しなかった場合のフォールバックです。
 * @param {string} url - 再生する音声ファイルのURL
 * @param {number} retries - 残りのリトライ回数
 */
async function playAudioWithRetry(url, retries = 3) {
    // この関数はプールが使えない場合のフォールバックであり、
    // 長時間利用によるリソース問題は解決しないことに注意。
    
    try {
        const audio = new Audio(url);
        audio.currentTime = 0; 
        
        await audio.play();
        console.log(`[Success] Audio requested and playing (New Instance): ${url}`);

    } catch (error) {
        if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.warn(`[Warning] Audio play restricted or aborted. Path: ${url}. Error: ${error.name}`);
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

document.addEventListener('DOMContentLoaded', () => {
    console.log("App Initializing...");
    
    // ★重要: UI構築前に全Audioインスタンスを生成・プールする
    preloadAudioPool(); 
    
    renderCategoryNav();
});
