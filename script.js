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
            { text: "よ～しくお願いします", file: "よ～しくお願いします.mp3" },
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
            { text: "OK", file: "OK.mp3" },
            { text: "OKです", file: "OKです.mp3" },
            { text: "ぜひぜひ", file: "ぜひぜひ.mp3" },
            { text: "歓迎です", file: "歓迎です.mp3" },
            { text: "ありがとー", file: "ありがとー.mp3" },
            { text: "ありがたいです", file: "ありがたいです.mp3" },
            { text: "本当にありがとうございます", file: "本当にありがとうございます.mp3" },
            { text: "Thank you", file: "Thank you.mp3" },
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
            { text: "もうえぇでしょ", file: "もうえぇでしょ.mp3" },
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
            { text: "いや、まぁ本当", file: "いや、まぁ本当.mp3" },
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
            { text: "よしよしよし", file: "よしよしよし.mp3" },
            { text: "やったーはははは", file: "やったーはははは.mp3" },
            { text: "嬉しいな～ななな～な", file: "嬉しいな～ななな～な.mp3" },
            { text: "ばーーーーか", file: "ばーーーーか.mp3" },
            { text: "まじっすか", file: "まじっすか.mp3" },
            { text: "満足かな", file: "満足かな.mp3" },
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
            { text: "そういうこと考えてんだ", file: "そういうこと考えてんだ.mp3" },
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
            { text: "うぇ～へへへ", file: "うぇ～へへへ.mp3" },
            { text: "ク～ッソ", file: "ク～ッソ.mp3" },
            { text: "ハァ", file: "ハァ.mp3" },
            { text: "不安だな", file: "不安だな.mp3" },
            { text: "すまん", file: "すまん.mp3" },
            { text: "気付いてませんでした", file: "気付いてませんでした.mp3" },
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
            { text: "んふふふふ", file: "んふふふふ.mp3" },
            { text: "楽しい航海にしてやろうじゃん", file: "楽しい航海にしてやろうじゃん.mp3" },
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
            { text: "ごめ～んね？", file: "ごめ～んね？.mp3" },
            { text: "ばーか", file: "ばーか.mp3" },
            { text: "おい見たか", file: "おい見たか.mp3" },
            { text: "まぁまぁまぁまぁ", file: "まぁまぁまぁまぁ.mp3" },
            { text: "良い子だね？", file: "良い子だね？.mp3" },
            { text: "キャー怖～いw", file: "キャー怖～いw.mp3" },
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
            { text: "わせわせ", file: "わせわせ.mp3" },
            { text: "グルグル", file: "グルグル.mp3" },
            { text: "バクバク", file: "バクバク.mp3" },
            { text: "ブルブル", file: "ブルブル.mp3" },
            { text: "ドン", file: "ドン.mp3" },
            { text: "どかーん", file: "どかーん.mp3" },
            { text: "えっほえっほ", file: "えっほえっほ.mp3" },
            { text: "じーーーー", file: "じーーーー.mp3" },
            { text: "むにゅ", file: "むにゅ.mp3" },
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
        ]
    }
];

const FAVORITES_KEY = 'shionami_favorites';
const VOICE_BASE_PATH = './voices'; // 音声ファイルのベースパス

// =================================================================
// 2. グローバルなAudio Contextとキャッシュ (Web Audio API用)
// =================================================================

/** @type {AudioContext | null} */
let audioContext = null;

/** @type {Map<string, AudioBuffer>} */
const audioCache = new Map();


// =================================================================
// 3. AudioContextの初期化と制御
// =================================================================

/**
 * AudioContextを初期化または再開します。
 * ユーザー操作が必要な環境で音声を再生するために必須です。
 */
function initAudioContext() {
    if (!audioContext) {
        // クロスブラウザ対応のためにプレフィックスを考慮
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContextClass();
    }

    // Contextが'suspended'状態（多くのブラウザの自動再生ポリシーによる初期状態）の場合、再開を試みる
    if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            console.log("AudioContext resumed successfully.");
        }).catch(err => {
            console.error("Failed to resume AudioContext:", err);
        });
    }
}


// =================================================================
// 4. データ操作 (お気に入り/Local Storage)
// =================================================================

/**
 * お気に入りデータをLocal Storageから取得します。
 * @returns {Array<{category_id: string, text: string, file: string, folder: string}>}
 */
function getFavorites() {
    const favoritesJson = localStorage.getItem(FAVORITES_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
}

/**
 * お気に入りデータをLocal Storageに保存します。
 * @param {Array<{category_id: string, text: string, file: string, folder: string}>} favorites - 保存するお気に入りリスト
 */
function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

/**
 * お気に入りにボイスを追加します。
 * @param {string} categoryId
 * @param {object} voiceData
 */
function addFavorite(categoryId, voiceData) {
    const favorites = getFavorites();
    const isExist = favorites.some(fav => fav.category_id === categoryId && fav.file === voiceData.file);

    if (!isExist) {
        // カテゴリIDとフォルダ情報を追加して保存
        const category = VOICE_DATA.find(cat => cat.id === categoryId);
        if (!category) return;

        favorites.push({
            category_id: categoryId,
            text: voiceData.text,
            file: voiceData.file,
            folder: category.folder
        });
        saveFavorites(favorites);
        renderFavorites();
        showMessage(`「${voiceData.text}」をメモに追加しました！`, 'success');
    } else {
        showMessage(`「${voiceData.text}」は既にメモに登録されています。`, 'info');
    }
}

/**
 * お気に入りからボイスを削除します。
 * @param {string} categoryId
 * @param {string} file
 */
function removeFavorite(categoryId, file) {
    let favorites = getFavorites();
    favorites = favorites.filter(fav => !(fav.category_id === categoryId && fav.file === file));
    saveFavorites(favorites);
    renderFavorites();
    showMessage('メモから削除しました。', 'info');
}

/**
 * お気に入りリストをクリアします。
 */
function clearFavorites() {
    // NOTE: confirm() は非推奨ですが、ここではデモ用途として使用を維持します。
    if (confirm('メモ内の全てのボイスを削除してもよろしいですか？')) { 
        localStorage.removeItem(FAVORITES_KEY);
        // Web Audio APIのキャッシュもクリアする
        audioCache.clear(); 
        renderFavorites();
        showMessage('メモをすべて削除しました。', 'success');
    }
}


// =================================================================
// 5. DOM操作とレンダリング
// =================================================================

/**
 * カテゴリサイドバーをレンダリングします。
 */
function renderCategories() {
    const nav = document.getElementById('category-nav');
    nav.innerHTML = '';

    // 「メモ」ボタン (お気に入り)
    const favoriteButton = createCategoryButton("category-favorites", "メモ (お気に入り)", () => renderFavoritesContent(), true);
    nav.appendChild(favoriteButton);

    // カテゴリごとのボタン
    VOICE_DATA.forEach(category => {
        const button = createCategoryButton(category.id, category.name, () => renderCategoryContent(category), false);
        nav.appendChild(button);
    });

    // 初期表示: 最初のカテゴリ、またはお気に入り
    const initialCategoryId = getFavorites().length > 0 ? "category-favorites" : VOICE_DATA[0].id;
    const initialCategory = initialCategoryId === "category-favorites"
        ? document.getElementById("category-favorites-link")
        : document.getElementById(`${initialCategoryId}-link`);

    if (initialCategory) {
        initialCategory.click();
    }
}

/**
 * カテゴリボタンのDOM要素を作成します。
 * @param {string} id - ボタンのID
 * @param {string} text - ボタンのテキスト
 * @param {Function} clickHandler - クリック時のハンドラ
 * @param {boolean} isFavorite - お気に入りカテゴリかどうか
 * @returns {HTMLAnchorElement}
 */
function createCategoryButton(id, text, clickHandler, isFavorite) {
    const link = document.createElement('a');
    link.id = `${id}-link`;
    link.href = '#';
    link.textContent = text;
    link.className = `category-link block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-150 text-sm ${isFavorite ? 'mt-2 border-t pt-2' : ''}`;
    
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // 選択状態の解除と設定
        document.querySelectorAll('.category-link').forEach(l => l.classList.remove('selected'));
        link.classList.add('selected');
        
        clickHandler();
    });
    return link;
}

/**
 * カテゴリコンテンツをレンダリングします。
 * @param {object} category - カテゴリデータ
 */
function renderCategoryContent(category) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">${category.name} (${category.en_name})</h2>
        <div id="voice-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            ${category.voices.map(voice => createVoiceButtonHTML(category.id, category.folder, voice, false)).join('')}
        </div>
    `;
    // お気に入りの追加/再生イベントリスナーを設定
    addVoiceEventListeners(category.id);
}

/**
 * お気に入り（メモ）コンテンツをレンダリングします。
 */
function renderFavoritesContent() {
    const mainContent = document.getElementById('main-content');
    const favorites = getFavorites();

    mainContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">メモ (お気に入り)</h2>
        <div id="favorites-message" class="text-gray-500 mb-4">${favorites.length === 0 ? 'お気に入りのボイスはありません。' : ''}</div>
        <div id="voice-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4" ondragover="handleDragOver(event)" ondrop="handleDrop(event)">
            ${favorites.map(fav => createVoiceButtonHTML(fav.category_id, fav.folder, fav, true)).join('')}
        </div>
    `;

    // 再生/削除イベントリスナーとD&Dリスナーを設定
    addVoiceEventListeners("category-favorites", true);
    document.querySelectorAll('.voice-button[draggable="true"]').forEach(button => {
        button.addEventListener('dragstart', handleDragStart);
        button.addEventListener('dragenter', handleDragEnter);
        button.addEventListener('dragleave', handleDragLeave);
        button.addEventListener('dragend', handleDragEnd);
    });
}


/**
 * ボイスボタンのHTML文字列を作成します。
 * @param {string} categoryId - カテゴリID
 * @param {string} folder - カテゴリのフォルダ名
 * @param {object} voiceData - ボイスデータ
 * @param {boolean} isFavorite - お気に入りかどうか (削除ボタンを表示するかどうか)
 * @returns {string} HTML文字列
 */
function createVoiceButtonHTML(categoryId, folder, voiceData, isFavorite) {
    const fullPath = `${VOICE_BASE_PATH}/${folder}/${voiceData.file}`;
    const uniqueId = `${categoryId}-${voiceData.file.replace(/\./g, '_')}`;

    const controlButton = isFavorite 
        ? `<button onclick="removeFavorite('${categoryId}', '${voiceData.file}')" class="text-red-500 hover:text-red-700 transition duration-150 p-1 rounded-full absolute top-1 right-1 z-10 opacity-70 hover:opacity-100" title="メモから削除">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
           </button>`
        : `<button onclick="addFavorite('${categoryId}', {text: '${voiceData.text}', file: '${voiceData.file}'})" class="text-yellow-500 hover:text-yellow-700 transition duration-150 p-1 rounded-full absolute top-1 right-1 z-10 opacity-70 hover:opacity-100" title="メモに登録">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.536 1.118l-2.817-2.042a1 1 0 00-1.176 0l-2.817 2.042c-.781.565-1.836-.197-1.536-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.05 8.72a1 1 0 01.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
           </button>`;

    return `
        <div 
            class="voice-button relative bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center text-center group"
            data-path="${fullPath}"
            data-unique-id="${uniqueId}"
            draggable="${isFavorite ? 'true' : 'false'}"
            id="${uniqueId}"
        >
            <span class="text-gray-800 text-sm font-medium pr-6">${voiceData.text}</span>
            ${controlButton}
            <!-- 再生アイコン -->
            <div class="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
    `;
}

/**
 * ボイスボタンにイベントリスナーを設定します。
 * @param {string} currentCategoryId - 現在表示中のカテゴリID
 * @param {boolean} isFavoriteView - お気に入り画面かどうか
 */
function addVoiceEventListeners(currentCategoryId, isFavoriteView = false) {
    document.querySelectorAll('.voice-button').forEach(button => {
        const fullPath = button.getAttribute('data-path');

        // 再生イベント
        button.addEventListener('click', (e) => {
            // コントロールボタン（☆やゴミ箱）のクリックを無視
            if (e.target.closest('button')) {
                return;
            }
            voicePlay(fullPath);
        });
    });
}


/**
 * 画面下部にメッセージを表示します。
 * @param {string} message - 表示するメッセージ
 * @param {'success' | 'info' | 'error'} type - メッセージの種類
 */
function showMessage(message, type = 'info') {
    const container = document.getElementById('message-container');
    const colors = {
        success: 'bg-green-100 border-green-400 text-green-700',
        info: 'bg-blue-100 border-blue-400 text-blue-700',
        error: 'bg-red-100 border-red-400 text-red-700'
    };
    
    const messageElement = document.createElement('div');
    messageElement.className = `fixed bottom-5 right-5 p-4 rounded-lg shadow-xl border ${colors[type]} z-50 transform transition-transform duration-500 ease-in-out`;
    messageElement.textContent = message;

    container.appendChild(messageElement);

    // 3秒後にフェードアウトして削除
    setTimeout(() => {
        messageElement.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => messageElement.remove(), 500);
    }, 3000);
}


// =================================================================
// 6. ドラッグ＆ドロップ機能 (お気に入りの並び替え)
// =================================================================

let draggedElement = null; // ドラッグ中の要素

function handleDragStart(e) {
    draggedElement = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    // 透過度を変更
    setTimeout(() => draggedElement.style.opacity = '0.4', 0);
}

function handleDragEnd(e) {
    draggedElement.style.opacity = '1';
    draggedElement = null;
    document.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
        el.classList.remove('drag-over-top', 'drag-over-bottom');
    });
}

function handleDragOver(e) {
    e.preventDefault(); // ドロップを許可するために必要
    e.dataTransfer.dropEffect = 'move';
    
    const target = e.target.closest('.voice-button');
    if (target && target !== draggedElement) {
        const rect = target.getBoundingClientRect();
        const mouseY = e.clientY;
        
        // ターゲットの上半分か下半分かで挿入位置を判断
        if (mouseY < rect.top + rect.height / 2) {
            target.classList.remove('drag-over-bottom');
            target.classList.add('drag-over-top');
        } else {
            target.classList.remove('drag-over-top');
            target.classList.add('drag-over-bottom');
        }
    }
}

function handleDragEnter(e) {
    // スタイル変更はhandleDragOverで処理
}

function handleDragLeave(e) {
    const target = e.currentTarget;
    target.classList.remove('drag-over-top', 'drag-over-bottom');
}

function handleDrop(e) {
    e.preventDefault();

    const target = e.target.closest('.voice-button');
    if (!draggedElement || !target || draggedElement === target) {
        return;
    }

    const grid = document.getElementById('voice-grid');
    const isTop = target.classList.contains('drag-over-top');

    if (isTop) {
        grid.insertBefore(draggedElement, target);
    } else {
        grid.insertBefore(draggedElement, target.nextSibling);
    }
    
    // ドラッグ＆ドロップ後に並び順をローカルストレージに保存
    saveNewFavoriteOrder();
    
    // スタイルをリセット
    target.classList.remove('drag-over-top', 'drag-over-bottom');
}

/**
 * DOMの並び順に基づいて、お気に入りデータを更新し、Local Storageに保存します。
 */
function saveNewFavoriteOrder() {
    const newOrder = [];
    document.querySelectorAll('#voice-grid .voice-button').forEach(button => {
        const path = button.getAttribute('data-path'); // 例: ./voices/01_greeting/おはよう.mp3
        const parts = path.split('/');
        const folder = parts[parts.length - 2];
        const file = parts[parts.length - 1];
        const categoryId = VOICE_DATA.find(cat => cat.folder === folder).id;
        const voiceData = VOICE_DATA.find(cat => cat.id === categoryId).voices.find(v => v.file === file);
        
        if (voiceData) {
            newOrder.push({
                category_id: categoryId,
                text: voiceData.text,
                file: voiceData.file,
                folder: folder
            });
        }
    });
    saveFavorites(newOrder);
    // console.log("New favorite order saved:", newOrder);
}


// =================================================================
// 7. 音声再生機能 (Web Audio APIを使用) とプリロード
// =================================================================

/**
 * 音声ファイルを取得し、デコードして、キャッシュに保存します。（プリロードのコア機能）
 * @param {string} url - 音声ファイルのURL
 * @param {number} retries - 残りのリトライ回数
 * @returns {Promise<AudioBuffer>} デコードされた音声データ (AudioBuffer)
 */
async function loadAudioToCache(url, retries = 3) {
    // 1. キャッシュチェック
    if (audioCache.has(url)) {
        return audioCache.get(url);
    }

    if (!audioContext) {
        throw new Error("AudioContext is not initialized.");
    }
    
    try {
        // 2. 音声データの取得
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();

        // 3. デコード (Web Audio APIのコア機能)
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        audioCache.set(url, audioBuffer); // キャッシュに保存
        return audioBuffer;

    } catch (error) {
        // エラーハンドリングと指数バックオフ
        if (retries > 0) {
            const delay = Math.pow(2, 3 - retries) * 500;
            console.warn(`[Retry] Failed to load/decode audio ${url}. Retrying in ${delay}ms...`, error.message);
            await new Promise(resolve => setTimeout(resolve, delay));
            // 再帰呼び出しでリトライ
            return loadAudioToCache(url, retries - 1); 
        } else {
            console.error(`[Error] Failed to load audio after all retries: ${url}`, error);
            throw new Error(`Failed to load audio: ${url}`);
        }
    }
}

/**
 * ボイスを再生します。
 * @param {string} fullPath - 再生する音声ファイルのフルパス
 */
async function voicePlay(fullPath) {
    // ユーザー操作によるAudioContextの再開を確実にする
    initAudioContext(); 
    
    // Contextが'suspended'状態なら、ユーザー操作を待つ
    if (audioContext && audioContext.state !== 'running') {
        await audioContext.resume().catch(err => {
            console.error("Failed to resume AudioContext on playback attempt:", err);
            return; // 再開できなければ終了
        });
    }

    try {
        // データをロード（キャッシュにあれば即時返却）
        const audioBuffer = await loadAudioToCache(fullPath);

        // Source Nodeの作成と再生
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start(0); // 0秒から再生開始

        console.log(`[Success] Web Audio requested: ${fullPath}`);
    } catch (error) {
        console.error(`[Error] Playback failed: ${fullPath}`, error);
        showMessage('音声ファイルの再生に失敗しました。', 'error');
    }
}

/**
 * 全てのボイスをプリロードし、キャッシュに保存します。
 */
async function preloadAllVoices() {
    console.log("Preloading all voices...");
    
    // プリロードのためにAudioContextを初期化
    initAudioContext(); 
    if (!audioContext) return;

    // 全てのボイスパスをリストアップ
    const allVoices = VOICE_DATA.flatMap(cat => 
        cat.voices.map(voice => ({
            path: `${VOICE_BASE_PATH}/${cat.folder}/${voice.file}`,
            text: voice.text
        }))
    );
    
    // 全てのロード処理を並行して実行
    const preloadPromises = allVoices.map(voice => 
        loadAudioToCache(voice.path).catch(err => {
            // 失敗しても他のプリロードは続行させる
            console.error(`Preload failed for ${voice.text}:`, err.message);
            return null; 
        })
    );

    await Promise.all(preloadPromises);
    console.log(`Preloading finished. ${audioCache.size} voices are cached.`);
}


// =================================================================
// 8. 初期化 (DOMContentLoadedイベントハンドラ)
// =================================================================

// DOMのロード完了後に初期化処理を実行
document.addEventListener('DOMContentLoaded', () => {
    // プリロードはユーザー操作を待たずに実行可能
    preloadAllVoices(); 
    renderCategories();

    // メッセージコンテナの作成
    const messageContainer = document.createElement('div');
    messageContainer.id = 'message-container';
    document.body.appendChild(messageContainer);
});
