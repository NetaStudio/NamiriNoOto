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
            { text: "気付いてませんでした", file: "気付いてませんでした.mp3" },
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
            { text: "ばいばい", file: "ばいばい.mp3" },
            { text: "ばいばいまたね", file: "ばいばいまたね.mp3" },
            { text: "おやすみ", file: "おやすみ.mp3" },
            { text: "ごめんなさい", file: "ごめんなさい.mp3" },
            { text: "ありがと", file: "ありがと.mp3" },
            { text: "ありがとう", file: "ありがとう.mp3" },
            { text: "すまんな", file: "すまんな.mp3" },
            { text: "わぁ！", file: "わぁ！.mp3" },
            { text: "えへへ", file: "えへへ.mp3" },
            { text: "ん！", file: "ん！.mp3" },
            { text: "ふんす！", file: "ふんす！.mp3" },
        ]
    },
    {
        id: "category-response",
        name: "相槌・反応",
        en_name: "Response",
        folder: "02_response",
        voices:
        [
            { text: "はーい", file: "はーい.mp3" },
            { text: "はい！", file: "はい！.mp3" },
            { text: "はい（真面目）", file: "はい（真面目）.mp3" },
            { text: "うん！", file: "うん！.mp3" },
            { text: "うん", file: "うん.mp3" },
            { text: "いいよ～", file: "いいよ～.mp3" },
            { text: "そうそう", file: "そうそう.mp3" },
            { text: "なるほど", file: "なるほど.mp3" },
            { text: "おぉ…", file: "おぉ….mp3" },
            { text: "え！", file: "え！.mp3" },
            { text: "うそ！", file: "うそ！.mp3" },
            { text: "んー…", file: "んー….mp3" },
            { text: "ねー", file: "ねー.mp3" },
            { text: "えぇ！？", file: "えぇ！？.mp3" },
            { text: "どうして？", file: "どうして？.mp3" },
            { text: "わかる！", file: "わかる！.mp3" },
            { text: "やったー！", file: "やったー！.mp3" },
            { text: "ふふふ", file: "ふふふ.mp3" },
            { text: "すごーい！", file: "すごーい！.mp3" },
        ]
    },
    {
        id: "category-flirting",
        name: "イチャイチャ",
        en_name: "Flirting",
        folder: "03_flirting",
        voices:
        [
            { text: "好き", file: "好き.mp3" },
            { text: "大好きだよ", file: "大好きだよ.mp3" },
            { text: "愛してる", file: "愛してる.mp3" },
            { text: "だーりん", file: "だーりん.mp3" },
            { text: "ちゅ", file: "ちゅ.mp3" },
            { text: "えっちなのはだめっ", file: "えっちなのはだめっ.mp3" },
            { text: "ばか！", file: "ばか！.mp3" },
            { text: "てぇてぇ", file: "てぇてぇ.mp3" },
            { text: "あ～～", file: "あ～～.mp3" },
            { text: "えへへ～", file: "えへへ～.mp3" },
        ]
    },
    {
        id: "category-game",
        name: "ゲーム",
        en_name: "Game",
        folder: "04_game",
        voices:
        [
            { text: "勝った！", file: "勝った！.mp3" },
            { text: "勝ったぜ", file: "勝ったぜ.mp3" },
            { text: "まけた…", file: "まけた….mp3" },
            { text: "次こそ", file: "次こそ.mp3" },
            { text: "ナイス！", file: "ナイス！.mp3" },
            { text: "がんばれ～！", file: "がんばれ～！.mp3" },
            { text: "ファイトー！", file: "ファイトー！.mp3" },
            { text: "どういうこと？", file: "どういうこと？.mp3" },
        ]
    },
    {
        id: "category-food",
        name: "食べ物",
        en_name: "Food",
        folder: "05_food",
        voices:
        [
            { text: "ご飯", file: "ご飯.mp3" },
            { text: "おいしそ～", file: "おいしそ～.mp3" },
            { text: "わくわく", file: "わくわく.mp3" },
            { text: "おなかすいた", file: "おなかすいた.mp3" },
            { text: "いただきます", file: "いただきます.mp3" },
            { text: "ごちそうさま", file: "ごちそうさま.mp3" },
        ]
    },
    {
        id: "category-other",
        name: "その他",
        en_name: "Other",
        folder: "06_other",
        voices:
        [
            { text: "えー", file: "えー.mp3" },
            { text: "なるほどね", file: "なるほどね.mp3" },
            { text: "ふむふむ", file: "ふむふむ.mp3" },
            { text: "え！すごい！", file: "え！すごい！.mp3" },
            { text: "いいなぁ", file: "いいなぁ.mp3" },
            { text: "うー！", file: "うー！.mp3" },
            { text: "ふふ", file: "ふふ.mp3" },
            { text: "よっしゃ！", file: "よっしゃ！.mp3" },
            { text: "へぇ～", file: "へぇ～.mp3" },
            { text: "びっくり", file: "びっくり.mp3" },
            { text: "ははっ", file: "ははっ.mp3" },
            { text: "まぁね", file: "まぁね.mp3" },
        ]
    },
];


// =================================================================
// 2. グローバル変数と定数
// =================================================================

// お気に入り（メモ）機能で使用するLocalStorageのキー
const FAVORITES_KEY = 'namiriVoiceFavorites';

// -----------------------------------------------------------------
// 3. データ操作関数
// -----------------------------------------------------------------

/**
 * LocalStorageからお気に入りボイスの配列を取得します。
 * @returns {Array<Object>} お気に入りボイスデータの配列
 */
function getFavorites() {
    try {
        const json = localStorage.getItem(FAVORITES_KEY);
        // JSONデータが存在しない、または無効な場合は空の配列を返す
        return json ? JSON.parse(json) : [];
    } catch (e) {
        console.error("Failed to parse favorites from localStorage:", e);
        return [];
    }
}

/**
 * お気に入りボイスの配列をLocalStorageに保存します。
 * @param {Array<Object>} favorites - 保存するお気に入りボイスデータの配列
 */
function saveFavorites(favorites) {
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
        console.error("Failed to save favorites to localStorage:", e);
    }
}

/**
 * 指定されたカテゴリIDまたは「メモ」に対応するボイスデータを取得します。
 * @param {string} categoryId - カテゴリIDまたは 'favorites'
 * @returns {Object|null} カテゴリデータ、またはメモデータ（{id: 'favorites', name: 'メモ', folder: '', voices: [...]} 形式）
 */
function getCategoryData(categoryId) {
    if (categoryId === 'favorites') {
        // メモ（お気に入り）データを生成
        return {
            id: 'favorites',
            name: 'メモ',
            en_name: 'Favorites',
            folder: '', // メモにはフォルダは不要
            voices: getFavorites()
        };
    }

    return VOICE_DATA.find(cat => cat.id === categoryId) || null;
}

/**
 * ボイスIDとカテゴリIDからボイスデータを取得します。
 * @param {string} categoryId - カテゴリID
 * @param {string} voiceId - ボイスID (textとfileを合わせた文字列)
 * @returns {Object|null} ボイスデータ
 */
function findVoice(categoryId, voiceId) {
    const category = getCategoryData(categoryId);
    if (!category) return null;

    // voiceIdは text-file の形式でLocalStorageに保存されている
    const parts = voiceId.split('-');
    const text = parts[0];
    const file = parts.slice(1).join('-'); // ファイル名にハイフンが含まれる可能性を考慮

    return category.voices.find(voice => voice.text === text && voice.file === file);
}

// -----------------------------------------------------------------
// 4. UIレンダリング関数
// -----------------------------------------------------------------

/**
 * サイドバーのカテゴリリストをレンダリングします。
 * @param {string} currentCategoryId - 現在選択されているカテゴリID
 */
function renderSidebar(currentCategoryId) {
    const nav = document.getElementById('category-nav');
    if (!nav) return;

    nav.innerHTML = ''; // 一度クリア

    // 1. メモ（お気に入り）リンクを先頭に挿入
    const favoritesLink = createCategoryLink({ id: 'favorites', name: 'メモ' }, currentCategoryId);
    nav.appendChild(favoritesLink);

    // 2. 通常のカテゴリリンクを挿入
    VOICE_DATA.forEach(category => {
        const link = createCategoryLink(category, currentCategoryId);
        nav.appendChild(link);
    });
}

/**
 * カテゴリリンクの要素を作成します。
 * @param {Object} category - カテゴリデータ
 * @param {string} currentCategoryId - 現在選択されているカテゴリID
 * @returns {HTMLElement} カテゴリリンクのaタグ要素
 */
function createCategoryLink(category, currentCategoryId) {
    const a = document.createElement('a');
    a.href = '#';
    a.classList.add('category-link', 'block', 'px-3', 'py-2', 'text-gray-600', 'hover:bg-gray-100', 'rounded-lg', 'transition', 'duration-150');
    a.dataset.categoryId = category.id;
    a.textContent = category.name;

    // 選択中のカテゴリに'selected'クラスを追加
    if (category.id === currentCategoryId) {
        a.classList.add('selected');
    }

    a.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToCategory(category.id);
    });

    return a;
}

/**
 * メインコンテンツエリアにカテゴリのボイスボタンをレンダリングします。
 * @param {string} categoryId - 表示するカテゴリのID
 */
function renderMainContent(categoryId) {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const categoryData = getCategoryData(categoryId);

    if (!categoryData) {
        mainContent.innerHTML = `<div class="text-gray-500">カテゴリが見つかりません。</div>`;
        return;
    }

    // タイトルとグリッドコンテナを生成
    mainContent.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-800 mb-6">${categoryData.name}</h2>
        <div id="voice-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <!-- ボイスボタンはここに挿入されます -->
        </div>
    `;

    const voiceGrid = document.getElementById('voice-grid');

    categoryData.voices.forEach((voice, index) => {
        const button = createVoiceButton(categoryData.id, categoryData.folder, voice, index);
        voiceGrid.appendChild(button);
    });
}

/**
 * ボイスボタンの要素を作成します。
 * @param {string} categoryId - ボイスが属するカテゴリID
 * @param {string} folder - ボイスファイルがあるフォルダ名
 * @param {Object} voice - ボイスデータ ({text, file})
 * @param {number} index - 配列内のインデックス (favorites用)
 * @returns {HTMLElement} ボイスボタンの要素
 */
function createVoiceButton(categoryId, folder, voice, index) {
    const button = document.createElement('button');
    // ボイスを一意に識別するためのID (textとfileを結合)
    const voiceId = `${voice.text}-${voice.file}`;
    const isFavorite = categoryId === 'favorites';

    button.type = 'button';
    button.classList.add(
        'voice-button', 'flex', 'items-center', 'justify-between', 'w-full', 'p-3', 'rounded-xl', 'shadow-md', 'text-sm', 'font-medium', 'text-gray-800', 'bg-white', 'hover:bg-blue-50', 'active:bg-blue-100', 'transition', 'duration-150', 'ease-in-out'
    );
    button.dataset.voiceText = voice.text;
    button.dataset.voiceFile = voice.file;
    button.dataset.folder = folder;

    // ボイス再生機能
    button.addEventListener('click', () => {
        // ☆ボタンがクリックされた場合は再生しない（イベントバブリングを止める）
        if (event.target.closest('.favorite-button')) return;
        playVoice(folder, voice.file);
    });

    // テキストコンテンツ
    const textSpan = document.createElement('span');
    textSpan.textContent = voice.text;
    button.appendChild(textSpan);

    // お気に入り(☆)ボタン
    const favButton = document.createElement('button');
    favButton.type = 'button';
    favButton.classList.add(
        'favorite-button', 'ml-3', 'text-lg', 'focus:outline-none', 'transition', 'duration-150'
    );
    favButton.dataset.categoryId = categoryId;
    favButton.dataset.voiceId = voiceId;

    if (isFavorite) {
        // メモ（お気に入り）表示時: 削除ボタン (×)
        favButton.innerHTML = '❌';
        favButton.classList.add('text-red-500');
        favButton.addEventListener('click', () => {
            removeFavorite(voiceId);
        });

        // メモ（お気に入り）専用のD&D設定
        button.draggable = true;
        button.dataset.index = index; // 現在のインデックスを保存
        button.addEventListener('dragstart', handleDragStart);
        button.addEventListener('dragover', handleDragOver);
        button.addEventListener('dragleave', handleDragLeave);
        button.addEventListener('drop', handleDrop);
        button.addEventListener('dragend', handleDragEnd);

    } else {
        // 通常カテゴリ表示時: お気に入り登録/解除ボタン (☆)
        const isCurrentlyFavorite = getFavorites().some(fav => fav.text === voice.text && fav.file === voice.file);

        if (isCurrentlyFavorite) {
            favButton.innerHTML = '★'; // 登録済み
            favButton.classList.add('text-yellow-500');
        } else {
            favButton.innerHTML = '☆'; // 未登録
            favButton.classList.add('text-gray-400', 'hover:text-yellow-400');
        }

        favButton.addEventListener('click', () => {
            toggleFavorite(folder, voice);
        });
    }

    button.appendChild(favButton);

    return button;
}

// -----------------------------------------------------------------
// 5. お気に入り（メモ）操作関数
// -----------------------------------------------------------------

/**
 * お気に入り（メモ）の登録/解除を切り替えます。
 * @param {string} folder - ボイスファイルがあるフォルダ名
 * @param {Object} voice - ボイスデータ ({text, file})
 */
function toggleFavorite(folder, voice) {
    const favorites = getFavorites();
    // voiceIdは text-file の形式
    const voiceId = `${voice.text}-${voice.file}`;
    const index = favorites.findIndex(fav => fav.text === voice.text && fav.file === voice.file);

    if (index > -1) {
        // 解除
        favorites.splice(index, 1);
        console.log(`[Favorites] Removed: ${voiceId}`);
    } else {
        // 登録
        // 新しいお気に入りオブジェクトを作成 (folder情報も保持)
        const newFavorite = { text: voice.text, file: voice.file, folder: folder };
        favorites.push(newFavorite);
        console.log(`[Favorites] Added: ${voiceId}`);
    }

    saveFavorites(favorites);

    // 現在のカテゴリが「メモ」の場合は再レンダリング
    const currentCategoryId = document.querySelector('.category-link.selected')?.dataset.categoryId;
    if (currentCategoryId === 'favorites') {
        renderMainContent('favorites');
    } else {
        // 通常カテゴリの場合はボタンの表示を更新
        updateFavoriteButton(voice.text, voice.file, index === -1);
    }
}

/**
 * お気に入り（メモ）からボイスを削除します。（メモ表示画面専用）
 * @param {string} voiceId - 削除するボイスのID (text-file)
 */
function removeFavorite(voiceId) {
    const favorites = getFavorites();
    const parts = voiceId.split('-');
    const text = parts[0];
    const file = parts.slice(1).join('-');

    const index = favorites.findIndex(fav => fav.text === text && fav.file === file);

    if (index > -1) {
        favorites.splice(index, 1);
        saveFavorites(favorites);
        console.log(`[Favorites] Removed via memo screen: ${voiceId}`);
        // メモ表示を更新
        navigateToCategory('favorites');
    }
}

/**
 * 特定のボイスボタンのお気に入りアイコンを更新します。
 * @param {string} text - ボイスのテキスト
 * @param {string} file - ボイスのファイル名
 * @param {boolean} isAdded - 追加された場合はtrue、削除された場合はfalse
 */
function updateFavoriteButton(text, file, isAdded) {
    const voiceId = `${text}-${file}`;
    // 現在表示されているコンテンツから該当のボタンを探す
    const favButton = document.querySelector(`.favorite-button[data-voice-id="${voiceId}"]`);

    if (favButton) {
        if (isAdded) {
            favButton.innerHTML = '★';
            favButton.classList.remove('text-gray-400', 'hover:text-yellow-400');
            favButton.classList.add('text-yellow-500');
        } else {
            favButton.innerHTML = '☆';
            favButton.classList.remove('text-yellow-500');
            favButton.classList.add('text-gray-400', 'hover:text-yellow-400');
        }
    }
}

/**
 * 全てのお気に入りをクリアします。（「メモ削除」ボタン用）
 */
function clearFavorites() {
    // ユーザーに確認を求める（実際にはカスタムモーダルを使うべきだが、今回は便宜上window.confirmを使用）
    // NOTE: キャンバス環境の制約により、window.confirm()は使用できません。
    // 代わりにカスタムの確認メッセージを表示します。
    // UIの制約上、確認モーダルは実装せず、今回はコンソールに警告を出力し、直接削除を行うように変更します。
    
    // 実際には以下のような処理が必要:
    // if (!confirm('全てのお気に入りを削除しますか？')) { return; }

    const confirmMessage = "全てのお気に入りを削除しますか？";
    if (!window.confirm(confirmMessage)) {
        return;
    }

    localStorage.removeItem(FAVORITES_KEY);
    console.log('[Favorites] All favorites cleared.');

    // 現在のカテゴリが「メモ」の場合は再レンダリングして空にする
    const currentCategoryId = document.querySelector('.category-link.selected')?.dataset.categoryId;
    if (currentCategoryId === 'favorites') {
        navigateToCategory('favorites');
    }
    
    // 全ての通常カテゴリのお気に入りボタンを更新
    document.querySelectorAll('.favorite-button').forEach(btn => {
        if (btn.dataset.categoryId !== 'favorites') {
            btn.innerHTML = '☆';
            btn.classList.remove('text-yellow-500');
            btn.classList.add('text-gray-400', 'hover:text-yellow-400');
        }
    });
}


// -----------------------------------------------------------------
// 6. ナビゲーションと音声再生
// -----------------------------------------------------------------

/**
 * 指定されたカテゴリIDにコンテンツを切り替えます。
 * @param {string} categoryId - ターゲットのカテゴリID
 */
function navigateToCategory(categoryId) {
    // 1. URLのハッシュを更新
    history.pushState(null, '', `#${categoryId}`);

    // 2. サイドバーを更新
    renderSidebar(categoryId);

    // 3. メインコンテンツを更新
    renderMainContent(categoryId);
}

/**
 * 音声を再生します。
 * @param {string} folder - フォルダ名
 * @param {string} soundPath - ファイル名
 */
function playVoice(folder, soundPath) {
    // Canvas環境の構造に合わせてパスを構築
    // 例: 'sounds/01_greeting/汐空なみりです.mp3'
    const fullPath = 'sounds/' + folder + '/' + soundPath;

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


// -----------------------------------------------------------------
// 7. D&D機能 (メモ内での並び替え)
// -----------------------------------------------------------------

let draggedItem = null;

function handleDragStart(e) {
    draggedItem = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    // voiceId (text-file) をデータとして保持
    e.dataTransfer.setData('text/plain', draggedItem.dataset.voiceId);

    // ドラッグ中のスタイル
    setTimeout(() => {
        draggedItem.classList.add('opacity-50', 'shadow-xl');
    }, 0);
}

function handleDragEnd(e) {
    e.currentTarget.classList.remove('opacity-50', 'shadow-xl');
    draggedItem = null;

    // 全ての要素からドラッグオーバーのマークを削除
    document.querySelectorAll('.voice-button').forEach(item => {
        item.classList.remove('drag-over-top', 'drag-over-bottom');
    });

    // 最後にメモの再レンダリングを行う（並び替えが適用されたことを確認するため）
    navigateToCategory('favorites');
}


function handleDragOver(e) {
    e.preventDefault(); // これがないとdropイベントが発生しない
    e.dataTransfer.dropEffect = 'move';
    
    const targetItem = e.currentTarget;

    if (draggedItem && draggedItem !== targetItem) {
        // 全ての要素からクラスを一旦削除
        document.querySelectorAll('.voice-button').forEach(item => {
            item.classList.remove('drag-over-top', 'drag-over-bottom');
        });

        // ドロップ位置を計算
        const rect = targetItem.getBoundingClientRect();
        const y = e.clientY - rect.top; // ボタン上端からの相対Y座標
        const isBefore = y < rect.height / 2; // 上半分ならtrue

        if (isBefore) {
            targetItem.classList.add('drag-over-top');
            targetItem.classList.remove('drag-over-bottom');
        } else {
            targetItem.classList.add('drag-over-bottom');
            targetItem.classList.remove('drag-over-top');
        }
    }
}

function handleDragLeave(e) {
    // ドラッグ対象から離れたらクラスを削除
    e.currentTarget.classList.remove('drag-over-top', 'drag-over-bottom');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation(); // 親要素へのイベント伝播を止める

    const voiceId = e.dataTransfer.getData('text/plain');
    const droppedOnItem = e.currentTarget;

    if (!draggedItem || draggedItem === droppedOnItem) {
        // 何もドロップしない、または同じ要素にドロップ
        droppedOnItem.classList.remove('drag-over-top', 'drag-over-bottom');
        return;
    }

    const favorites = getFavorites();

    // 既存のインデックスを取得
    const draggedIndex = parseInt(draggedItem.dataset.index);
    const droppedIndex = parseInt(droppedOnItem.dataset.index);
    
    // 配列からドラッグされた要素を取り出す
    const [movedItem] = favorites.splice(draggedIndex, 1);
    
    // ドロップ先のインデックスを調整
    let newIndex = droppedIndex;

    // ドロップ位置（上半分か下半分か）を判定
    const rect = droppedOnItem.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const isBefore = y < rect.height / 2; // 上半分ならtrue

    if (isBefore) {
        // ドロップされた要素の前に挿入するため、インデックスはそのまま
        newIndex = droppedIndex;
    } else {
        // ドロップされた要素の後に挿入するため、インデックスを+1
        newIndex = droppedIndex + 1;
    }

    // 配列の長さを超えないように調整
    if (newIndex > favorites.length) {
        newIndex = favorites.length;
    }
    
    // 新しい位置に挿入
    favorites.splice(newIndex, 0, movedItem);

    // LocalStorageに保存して、UIを更新
    saveFavorites(favorites);
    
    // 再レンダリング（インデックスの再設定と表示の更新）
    // NOTE: handleDragEndでnavigateToCategory('favorites')を呼んでいるため、ここでは不要。
    // ここで呼ぶと、ドラッグ中にカーソルが移動した際に一瞬UIがちらつく可能性がある。
    // navigateToCategory('favorites');
}


// -----------------------------------------------------------------
// 8. 初期化 (DOMContentLoadedイベントハンドラ)
// -----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // 1. 初期カテゴリの決定 (URLハッシュまたはデフォルト)
    const hash = window.location.hash.substring(1);
    const initialCategoryId = hash || VOICE_DATA[0].id; // ハッシュがない場合は最初のカテゴリ

    // 2. 初期コンテンツの表示
    navigateToCategory(initialCategoryId);

    // 3. ウィンドウサイズ変更時にサイドバーの高さを再計算 (必要であれば)
    // 現在のCSSとTailwindでflex-growとoverflow-hiddenを使っているので、基本的にJSでの高さ調整は不要だが、
    // 将来的な互換性のため残しておく
    window.addEventListener('resize', () => {
        // 特に複雑なロジックは不要なため、ここでは空
    });
});

// `clearFavorites` 関数は、HTMLのonclick属性から直接呼び出されるため、グローバルスコープに残す
window.clearFavorites = clearFavorites;

// `MapsToCategory` 関数も、必要に応じてグローバルスコープに残しておく
window.navigateToCategory = navigateToCategory;
