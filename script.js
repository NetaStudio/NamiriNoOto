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

// =================================================================
// 2. Web Audio API関連のグローバル変数
// =================================================================

/** @type {AudioContext | null} Web Audio APIのコンテキスト */
let audioContext = null; 

/** @type {Map<string, AudioBuffer>} ロードされた音声データを格納するマップ */
const audioBufferMap = new Map();

/** @type {boolean} AudioContextが起動（アンロック）されたかどうかのフラグ */
let isAudioContextUnlocked = false; 

// =================================================================
// 3. メモ機能の管理 (Arrayに変更し、順序を保持)
// =================================================================

const FAVORITES_KEY = 'namiri_oto_favorites';
let favorites = [];
let draggedItem = null;

/**
 * ドラッグ要素がドロップされたときの処理 (配列の順序を変更し、UIを再描画する)
 * @param {Event} e
 */
 function handleDrop(e) {
    e.stopPropagation();

    // ドラッグオーバーの視覚フィードバックを全てクリア
    document.querySelectorAll('.voice-button').forEach(item => {
        item.classList.remove('drag-over-top', 'drag-over-bottom');
    });
    
    const targetItem = e.target.closest('.voice-button');
    
    const resetDragState = () => {
        if (draggedItem) {
            draggedItem.classList.remove('opacity-40', 'shadow-2xl'); 
        }
        draggedItem = null;
    };

    if (!draggedItem || !targetItem || draggedItem === targetItem) {
        resetDragState();
        return;
    }
    
    // 移動元と移動先のボイスIDを取得
    const voiceIdToMove = draggedItem.getAttribute('data-sound');
    const targetVoiceId = targetItem.getAttribute('data-sound');
    
    // 配列内でのインデックスを取得
    const oldIndex = favorites.indexOf(voiceIdToMove);
    const newIndex = favorites.indexOf(targetVoiceId);

    if (oldIndex === -1 || newIndex === -1) {
        resetDragState();
        return; 
    }

    // 移動元要素を配列から取り出す
    const movedItem = favorites.splice(oldIndex, 1)[0];
    
    // 挿入するインデックスを計算
    let insertionIndex;

    const rect = targetItem.getBoundingClientRect();
    const targetMiddleY = rect.top + rect.height / 2;
    
    if (e.clientY > targetMiddleY) {
        // ターゲットの下半分にドロップした場合 (ターゲットの直後に挿入)
        insertionIndex = (oldIndex < newIndex) ? newIndex : newIndex + 1;
    } else {
        // ターゲットの上半分にドロップした場合 (ターゲットの直前に挿入)
        insertionIndex = (oldIndex < newIndex) ? newIndex : newIndex;
    }

    // 配列の境界チェックと調整
    if (insertionIndex > favorites.length) {
        insertionIndex = favorites.length;
    }


    // 新しい位置に要素を挿入
    favorites.splice(insertionIndex, 0, movedItem);

    // UIを再レンダリング (メモカテゴリの再描画)
    updateFavoriteCategory(); 
    // 現在の表示をメモカテゴリに切り替える
    showCategory('category-favorites'); 
    // 全てのボタンの星アイコンの状態を更新 (追加: ここで全ボタンの状態を更新することで、星の非表示問題を解決)
    updateAllVoiceButtonStates(); 

    // ローカルストレージに保存
    saveFavoritesToLocalStorage();

    // 状態をリセット
    resetDragState();
}


/**
 * ローカルストレージからメモデータを読み込む
 */
function loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (savedFavorites) {
        try {
            const parsed = JSON.parse(savedFavorites);
            if (Array.isArray(parsed)) {
                favorites = parsed;
            }
        } catch (e) {
            favorites = [];
        }
    }
}

/**
 * メモデータをローカルストレージに保存する
 */
function saveFavoritesToLocalStorage() {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

/**
 * メモに登録されているかチェック
 * @param {string} voiceId - ボイスのユニークID
 */
function isFavorite(voiceId) {
    return favorites.includes(voiceId);
}

/**
 * メモ状態を切り替える (アイコン同期と登録順維持に対応)
 * @param {string} voiceId - ボイスのユニークID (folder/file.wav)
 * @param {Event} event - クリックイベント
 */
function toggleFavorite(voiceId, event) {
    if (event) {
        // ボタンクリックイベントが親ボタンに伝播しないようにする
        event.stopPropagation();
    }

    const index = favorites.indexOf(voiceId);

    if (index > -1) {
        // 登録済みなら削除
        favorites.splice(index, 1);
    } else {
        // 未登録なら追加
        favorites.push(voiceId);
    }

    saveFavoritesToLocalStorage();
    // 全てのカテゴリボタンの状態を更新
    updateAllVoiceButtonStates();
    // メモカテゴリを更新
    updateFavoriteCategory();

    // もしメモカテゴリが表示中なら再表示して更新を反映
    const activeLink = document.querySelector('.category-link.selected');
    if (activeLink && activeLink.getAttribute('data-category-id') === 'category-favorites') {
        showCategory('category-favorites');
    }
}

/**
 * 全てのボイスボタンのメモアイコンの状態を更新する
 */
function updateAllVoiceButtonStates() {
    const allVoiceButtons = document.querySelectorAll('.voice-button');

    allVoiceButtons.forEach(button => {
        const voiceId = button.getAttribute('data-sound');
        const iconElement = button.querySelector('.favorite-icon');

        if (iconElement) {
            const isFav = isFavorite(voiceId);

            if (isFav) {
                iconElement.textContent = '★';
                iconElement.classList.remove('text-gray-300', 'hover:text-yellow-400');
                iconElement.classList.add('text-yellow-400', 'hover:text-yellow-500');
            } else {
                iconElement.textContent = '☆';
                iconElement.classList.remove('text-yellow-400', 'hover:text-yellow-500');
                iconElement.classList.add('text-gray-300', 'hover:text-yellow-400');
            }
        }
    });
}

/**
 * メモに追加されているボイスデータを取得する
 */
function getFavoriteVoices() {
    const favoriteList = [];

    // 検索を高速化するためのマップを構築
    const voiceMap = new Map();
    VOICE_DATA.forEach(category => {
        category.voices.forEach(voice => {
            const voiceId = `${category.folder}/${voice.file}`;
            voiceMap.set(voiceId, { voice, folder: category.folder });
        });
    });

    // favorites配列の順序に従ってボイスデータを取得
    favorites.forEach(voiceId => {
        const item = voiceMap.get(voiceId);
        if (item) {
            favoriteList.push(item);
        }
    });

    return favoriteList;
}

/**
 * メモリストをクリアする
 */
function clearFavorites() {
    // ユーザーに確認を求める (alert/confirmは使用不可のため、ここでは直接実行)
    // 実際のアプリではモーダルで確認が必要です
    const confirmed = window.confirm("本当にメモリストを全て削除しますか？");
    if (!confirmed) {
        return;
    }

    favorites = [];
    saveFavoritesToLocalStorage();
    updateAllVoiceButtonStates();
    updateFavoriteCategory();

    const activeLink = document.querySelector('.category-link.selected');
    if (activeLink && activeLink.getAttribute('data-category-id') === 'category-favorites') {
        // メモカテゴリが表示中なら、空の状態で再表示
        showCategory('category-favorites');
    }
}


// =================================================================
// 4. UI生成ロジック
// =================================================================

/**
 * 個別のボイスボタンを作成する
 */
function createVoiceButton(categoryFolder, voice, isDraggable = false) {
    const voiceId = `${categoryFolder}/${voice.file}`;
    const button = document.createElement('button');
    button.className = `voice-button bg-blue-500 hover:bg-blue-600 active:bg-blue-700 flex items-center justify-between p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-in-out w-full`;
    button.setAttribute('data-sound', voiceId);
    button.setAttribute('data-text', voice.text);
    // AudioContextが動作するように、クリック時にAudioContextの初期化を試みる
    button.setAttribute('onclick', `handleVoiceButtonClick('${voiceId}')`);

    if (isDraggable) {
        button.setAttribute('draggable', 'true');
    }

    const textContent = document.createElement('span');
    textContent.className = 'text-content text-left font-medium text-white select-none'; 
    textContent.textContent = voice.text;
    button.appendChild(textContent);

    const iconSpan = document.createElement('span');
    iconSpan.className = 'favorite-icon text-2xl ml-2 transition-colors duration-150 cursor-pointer';
    
    // アイコンの状態は updateAllVoiceButtonStates で同期される
    // ここでは初期イベントを設定
    iconSpan.setAttribute('onclick', `toggleFavorite('${voiceId}', event)`);

    button.appendChild(iconSpan);
    return button;
}

/**
 * 通常カテゴリのセクションを作成する
 */
function createCategorySection(category) {
    const section = document.createElement('section');
    section.id = category.id;
    section.className = 'category-section hidden';

    const titleContainer = document.createElement('h2');
    titleContainer.className = 'text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200';
    
    const jpTitle = document.createElement('span');
    jpTitle.textContent = category.name;
    jpTitle.className = 'mr-2';
    titleContainer.appendChild(jpTitle);
    
    const enTitle = document.createElement('span');
    enTitle.textContent = `(${category.en_name})`;
    enTitle.className = 'text-lg font-normal text-gray-400';
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
 * メモカテゴリのセクションを作成する
 */
function createFavoriteCategorySection(favoriteVoices) {
    const section = document.createElement('section');
    section.id = 'category-favorites';
    section.className = 'category-section hidden';

    const titleContainer = document.createElement('h2');
    titleContainer.className = 'text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200';
    
    const jpTitle = document.createElement('span');
    jpTitle.textContent = 'メモ';
    jpTitle.className = 'mr-2';
    titleContainer.appendChild(jpTitle);
    
    const enTitle = document.createElement('span');
    enTitle.textContent = `(Bookmark)`;
    enTitle.className = 'text-lg font-normal text-gray-400'; 
    titleContainer.appendChild(enTitle);
    
    section.appendChild(titleContainer);

    if(favoriteVoices.length === 0)
    {
        const message = document.createElement('p');
        message.className = 'text-gray-500 mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200';
        message.textContent = 'ボイスがメモされていません。☆マークをクリックして登録してください。';
        section.appendChild(message);
    }
    else
    {
        const grid = document.createElement('div');
        grid.id = 'favorites-grid';
        grid.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
        section.appendChild(grid);

        favoriteVoices.forEach(item => {
            grid.appendChild(createVoiceButton(item.folder, item.voice, true));
        });

        // ドラッグ＆ドロップのイベントリスナーを設定
        setupDragAndDrop(grid);
    }

    return section;
}

/**
 * メモカテゴリの内容を更新・再描画する
 */
function updateFavoriteCategory() {
    const mainContent = document.getElementById('main-content');
    const oldFavoriteSection = document.getElementById('category-favorites');

    if (oldFavoriteSection) {
        mainContent.removeChild(oldFavoriteSection);
    }

    const favoriteVoices = getFavoriteVoices();
    const newFavoriteSection = createFavoriteCategorySection(favoriteVoices);
    mainContent.appendChild(newFavoriteSection);
}

/**
 * カテゴリ一覧とコンテンツセクションを生成してDOMに挿入する
 */
function generateAppStructure(data) {
    const categoryNav = document.getElementById('category-nav');
    const mainContent = document.getElementById('main-content');
    let firstCategoryId = '';

    categoryNav.innerHTML = '';
    mainContent.innerHTML = '';

    // 通常カテゴリの生成
    data.forEach(category =>
        {
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

        mainContent.appendChild(createCategorySection(category));

        if (!firstCategoryId) {
            firstCategoryId = category.id;
        }
    });

    // メモカテゴリのリンク生成
    const separator = document.createElement('div');
    separator.className = 'border-t border-gray-200 my-2 pt-2';
    categoryNav.appendChild(separator);

    const favoriteLink = document.createElement('a');
    favoriteLink.href = '#';
    favoriteLink.className = 'category-link block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150 mb-1';
    favoriteLink.innerHTML = '<span class="text-yellow-500">★</span> メモ'; 
    favoriteLink.setAttribute('data-category-id', 'category-favorites');
    favoriteLink.onclick = (e) => {
        e.preventDefault();
        showCategory('category-favorites');
    };
    categoryNav.appendChild(favoriteLink);

    // メモカテゴリのセクションを更新・生成
    updateFavoriteCategory();

    // 最初のカテゴリを表示
    if (firstCategoryId) {
        showCategory(firstCategoryId);
    }
}


// =================================================================
// 5. ドラッグ＆ドロップ機能 (メモカテゴリ内の並び替え)
// =================================================================

/**
 * ドラッグ&ドロップイベントリスナーを設定
 */
 function setupDragAndDrop(grid) {
    if (!grid) return;

    // --- Drag Start ---
    grid.addEventListener('dragstart', (e) => {
        const target = e.target.closest('.voice-button');
        if (target) {
            draggedItem = target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', target.getAttribute('data-sound')); 
            // 次のイベントループでクラスを追加し、ドラッグ中の要素を非表示にする
            setTimeout(() => target.classList.add('opacity-40', 'shadow-2xl'), 0); 
        }
    });

    // --- Drag End ---
    grid.addEventListener('dragend', (e) => {
        // ドラッグが終了したら、元のスタイルと状態をリセット
        if (draggedItem) {
            draggedItem.classList.remove('opacity-40', 'shadow-2xl');
        }
        grid.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
            el.classList.remove('drag-over-top', 'drag-over-bottom');
        });
        draggedItem = null;
    });

    // --- Drag Over (視覚フィードバックとドロップ許可) ---
    grid.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        
        const target = e.target.closest('.voice-button');
        const targetGrid = e.target.closest('#favorites-grid');

        if (targetGrid) {
            // 全てのフィードバックをクリア
            targetGrid.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
                el.classList.remove('drag-over-top', 'drag-over-bottom');
            });
        }

        if (draggedItem && target && draggedItem !== target) {
            // ドロップエフェクトを設定
            e.dataTransfer.dropEffect = 'move';
            
            // ドロップ位置の判定と視覚フィードバックの追加
            const rect = target.getBoundingClientRect();
            const targetMiddleY = rect.top + rect.height / 2;
            
            if (e.clientY > targetMiddleY) {
                target.classList.add('drag-over-bottom'); 
            } else {
                target.classList.add('drag-over-top'); 
            }
        }
    });

    // --- Drop ---
    grid.addEventListener('drop', (e) => {
        e.preventDefault();
        handleDrop(e); 
    });
}


// =================================================================
// 6. UI操作ロジック
// =================================================================

/**
 * 表示するカテゴリを切り替える
 */
function showCategory(categoryId) {
    // 全てのセクションを非表示
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(categoryId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // 全てのリンクから選択状態を解除
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('selected', 'bg-blue-50', 'font-semibold');
    });

    // アクティブなリンクを選択状態にする
    const activeLink = document.querySelector(`.category-link[data-category-id="${categoryId}"]`);
    if (activeLink) {
        activeLink.classList.add('selected', 'bg-blue-50', 'font-semibold');
    }
}


// =================================================================
// 7. 音声再生（Web Audio API版 - 低遅延再生）
// =================================================================

/**
 * ボイスボタンがクリックされた時の処理
 * @param {string} soundPath - ボイスのユニークID (folder/file.wav)
 */
function handleVoiceButtonClick(soundPath) {
    // AudioContextが未初期化なら初期化を試みる
    if (!audioContext) {
        initializeAudioContext();
    }
    
    const fullPath = 'sounds/' + soundPath;
    playAudioBuffer(fullPath);
}

/**
 * 事前ロードされたAudioBufferを再生する
 * @param {string} url - AudioBufferのキー (full path)
 */
function playAudioBuffer(url) {
    if (!audioContext) {
        console.error("[Error] AudioContext is not initialized.");
        return;
    }

    // AudioContextが停止している場合、再開を試みる (モバイル対策)
    if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            console.log("[Success] AudioContext resumed.");
            // 再開後に改めて再生処理を行う
            _performPlayback(url);
        }).catch(e => {
            console.error("[Error] Failed to resume AudioContext:", e);
        });
    } else {
        _performPlayback(url);
    }
}

/**
 * 実際の再生ロジック（_performPlaybackで即座に再生することで低遅延を実現）
 * @param {string} url - AudioBufferのキー (full path)
 */
function _performPlayback(url) {
    const buffer = audioBufferMap.get(url);

    if (buffer && audioContext && audioContext.state === 'running') {
        // 1. AudioBufferSourceNodeを作成
        const source = audioContext.createBufferSource();
        // 2. ロード済みのAudioBufferをセット
        source.buffer = buffer;
        // 3. 出力先を設定
        source.connect(audioContext.destination);
        // 4. 即座に再生開始
        source.start(0); 
        
        console.log(`[Success] AudioBuffer played: ${url}`);
    } else if (!buffer) {
        console.warn(`[Warning] AudioBuffer not yet loaded or failed to load: ${url}`);
        // ロードが完了していない場合は、ブラウザ標準のAudioを使って代替再生を試みる（遅延の可能性あり）
        try {
            const tempAudio = new Audio(url);
            tempAudio.play().catch(e => console.warn("Fallback audio play failed:", e));
        } catch (e) {
            console.error("Failed to fallback play audio:", e);
        }
    } else {
        console.warn(`[Warning] AudioContext state is not 'running': ${audioContext.state}`);
    }
}


// -----------------------------------------------------------------
// 8. AudioContextとバッファの初期化処理
// -----------------------------------------------------------------

/**
 * AudioContextを初期化し、モバイルでの制限解除を試みる
 */
function initializeAudioContext() {
    if (!audioContext) {
        // 標準的なAudioContextを生成
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        // サンプルレートを標準的な44100Hzに指定
        audioContext = new AudioContext({ sampleRate: 44100 });
        console.log("[Init] AudioContext created.");
    }

    // AudioContextが停止している状態（モバイルでよくある初期状態）であれば、
    // ユーザー操作による再開（アンロック）リスナーを設定する
    if (audioContext.state === 'suspended' && !isAudioContextUnlocked) {
        console.log("[Init] AudioContext is suspended. Setting up resume listener.");
        
        const resumeContext = () => {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume().then(() => {
                    console.log("[Success] AudioContext resumed (unlocked).");
                    isAudioContextUnlocked = true;
                    // アンロック後はリスナーを解除
                    document.removeEventListener('click', resumeContext);
                    document.removeEventListener('touchend', resumeContext);
                }).catch(e => {
                    console.error("[Error] Failed to resume AudioContext:", e);
                });
            }
        };

        // DOMContentLoaded後、最初のクリック/タッチでアンロックを試みる
        document.addEventListener('click', resumeContext, { once: true });
        document.addEventListener('touchend', resumeContext, { once: true });
    }
}


/**
 * 全ての音声ファイルをWeb Audio APIのAudioBufferとして事前にロードする
 */
async function preloadAllAudioBuffers() {
    const allVoicePaths = [];
    VOICE_DATA.forEach(category => {
        category.voices.forEach(voice => {
            allVoicePaths.push('sounds/' + category.folder + '/' + voice.file);
        });
    });

    // AudioContextが初期化されていない場合は、ここで初期化を試みる
    if (!audioContext) {
        initializeAudioContext();
    }

    const loadingPromises = allVoicePaths.map(async (fullPath) => {
        try {
            // 1. ArrayBufferとして音声ファイルをフェッチ
            const response = await fetch(fullPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const arrayBuffer = await response.arrayBuffer();

            // 2. AudioContextでデコード（非同期処理）
            // audioContextが存在しない可能性があるためチェック
            if (!audioContext) {
                 console.error("[Preload Error] AudioContext is null during decoding.");
                 return;
            }
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            
            // 3. マップに保存
            audioBufferMap.set(fullPath, audioBuffer);
            // console.log(`[Preload] Loaded: ${fullPath}`);
        } catch (error) {
            console.error(`[Preload Error] Failed to load or decode audio: ${fullPath}`, error);
        }
    });
    
    // 全てのリソースのロードが完了するのを待つ
    await Promise.all(loadingPromises);
    console.log(`[Init] All ${audioBufferMap.size} audio buffers preloaded.`);
}


// =================================================================
// 9. 初期化 (DOMContentLoadedイベントハンドラ)
// =================================================================

// DOMのロード完了を待ってから実行
document.addEventListener('DOMContentLoaded', () => {
    // 最初にAudioContextの初期化とアンロック設定を行う
    initializeAudioContext();
    // 全ての音声ファイルを非同期でロード開始
    preloadAllAudioBuffers();

    loadFavoritesFromLocalStorage(); 
    generateAppStructure(VOICE_DATA);
    updateAllVoiceButtonStates();
});
