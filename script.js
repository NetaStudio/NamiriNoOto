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
        // ドラッグオーバーのクラスを削除
        item.classList.remove('drag-over-top', 'drag-over-bottom');
    });
    
    // ドロップターゲット要素
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

    // 移動元要素を配列から一時的に取り除く
    const movedItem = favorites.splice(oldIndex, 1)[0];
    
    // ターゲットの場所に移動する要素を挿入する（ターゲットの直前に挿入される = 入れ替え動作）
    let insertionIndex = newIndex;

    // 配列の境界チェックと調整 (念のため)
    if (insertionIndex > favorites.length) {
        insertionIndex = favorites.length;
    } else if (insertionIndex < 0) {
        insertionIndex = 0;
    }

    // 新しい位置に要素を挿入
    favorites.splice(insertionIndex, 0, movedItem);

    // ローカルストレージに保存
    saveFavoritesToLocalStorage();

    // 1. メモカテゴリを更新・再描画する (DOM要素を置き換える)
    updateFavoriteCategory(); 
    
    // 2. メモカテゴリに切り替える（置き換えたDOM要素を可視化する）
    showCategory('category-favorites'); 

    // 3. 全てのボタンの星アイコンの状態を更新 (再描画されたDOM要素に対して行う)
    updateAllVoiceButtonStates(); 
    
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
    let wasFavorite = index > -1;

    if (wasFavorite) {
        // 登録済みなら削除
        favorites.splice(index, 1);
    } else {
        // 未登録なら追加
        favorites.push(voiceId);
    }

    saveFavoritesToLocalStorage();

    // 現在アクティブなカテゴリIDを取得
    const activeLink = document.querySelector('.category-link.selected');
    const activeCategoryId = activeLink ? activeLink.getAttribute('data-category-id') : null;

    // 1. メモカテゴリを更新・再描画する
    updateFavoriteCategory();

    // 2. もしメモカテゴリがアクティブだった場合、表示を更新する
    if (activeCategoryId === 'category-favorites') {
        // メモカテゴリが再描画されたので、アクティブ表示を維持するために再実行する
        showCategory('category-favorites'); 
    }

    // 3. 全てのカテゴリボタンの状態を更新 (再描画されたDOM要素に対して行う)
    updateAllVoiceButtonStates();
}

/**
 * 全てのボイスボタンのメモアイコンの状態を更新する
 * (メモカテゴリ再描画後に呼び出すことが重要)
 */
function updateAllVoiceButtonStates() {
    // 現在DOMに存在する全ての.voice-button要素を取得
    // querySelectorAllはライブノードリストではないため、この時点で存在する要素を正確に取得します。
    const allVoiceButtons = document.querySelectorAll('.voice-button');

    allVoiceButtons.forEach(button => {
        const voiceId = button.getAttribute('data-sound');
        // .voice-button内に .favorite-icon が含まれていることを確認
        const iconElement = button.querySelector('.favorite-icon');

        if (iconElement) {
            const isFav = isFavorite(voiceId);

            if (isFav) {
                // お気に入り登録済みの場合: ★ (塗りつぶし)
                iconElement.textContent = '★';
                iconElement.classList.remove('text-gray-300', 'hover:text-yellow-400');
                iconElement.classList.add('text-yellow-400', 'hover:text-yellow-500');
            } else {
                // 未登録の場合: ☆ (枠線)
                iconElement.textContent = '☆';
                iconElement.classList.remove('text-yellow-400', 'hover:text-yellow-500');
                iconElement.classList.add('text-gray-300', 'hover:text-yellow-400');
            }
        } else {
            // アイコン要素がない場合は、コンポーネントの作成に問題がある可能性
            console.warn(`[Warning] Favorite icon element not found for voiceId: ${voiceId}`);
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
    // カスタムモーダルに置き換え
    showCustomConfirm("本当にメモリストを全て削除しますか？", () => {
        favorites = [];
        saveFavoritesToLocalStorage();
        
        updateFavoriteCategory();
        updateAllVoiceButtonStates();
        
        const activeLink = document.querySelector('.category-link.selected');
        if (activeLink && activeLink.getAttribute('data-category-id') === 'category-favorites') {
            showCategory('category-favorites');
        }
    });
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
    button.setAttribute('onclick', `handleVoiceButtonClick('${voiceId}')`); // ★修正ポイント: この関数が定義されていなかった

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
    
    const enName = document.createElement('span');
    enName.textContent = `(Bookmark)`;
    enName.className = 'text-lg font-normal text-gray-400'; 
    titleContainer.appendChild(enName);
    
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
            // メモカテゴリではドラッグ可能にする
            grid.appendChild(createVoiceButton(item.folder, item.voice, true));
        });

        // ドラッグ＆ドロップのイベントリスナーを設定
        setupDragAndDrop(grid);
    }

    return section;
}

/**
 * メモカテゴリの内容を更新・再描画する
 * (既存のメモカテゴリセクションを削除し、新しいセクションに置き換える)
 */
function updateFavoriteCategory() {
    const mainContent = document.getElementById('main-content');
    const oldFavoriteSection = document.getElementById('category-favorites');
    const favoriteVoices = getFavoriteVoices();
    const newFavoriteSection = createFavoriteCategorySection(favoriteVoices);

    if (oldFavoriteSection) {
        // 古い要素を新しい要素で置き換える
        mainContent.replaceChild(newFavoriteSection, oldFavoriteSection);
    } else {
        // 初回ロード時や要素がまだない場合
        mainContent.appendChild(newFavoriteSection);
    }
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

    // --- Drag Enter/Over/Leave (視覚フィードバックのロジックは削除し、dropのみに集中) ---
    grid.addEventListener('dragover', (e) => {
        e.preventDefault(); // ドロップを許可するために必要
        e.dataTransfer.dropEffect = 'move';
        
        // --- 視覚フィードバックの制御 ---
        const targetItem = e.target.closest('.voice-button');

        // 全てのアイテムから強調表示を削除
        grid.querySelectorAll('.voice-button').forEach(item => {
            item.classList.remove('drag-over-top', 'drag-over-bottom');
        });
        
        // ターゲットアイテムにのみ強調表示を追加
        if (targetItem && targetItem !== draggedItem) {
            // 上下どちらでも同じ効果を出すために drag-over-top を使用
            targetItem.classList.add('drag-over-top');
        }
    });

    grid.addEventListener('dragleave', (e) => {
        // grid外に出た場合のみクリア
        if (e.relatedTarget && e.relatedTarget.closest('#favorites-grid') === grid) {
            return;
        }
        grid.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
            el.classList.remove('drag-over-top', 'drag-over-bottom');
        });
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

    // --- Drop ---
    grid.addEventListener('drop', handleDrop);
}


// =================================================================
// 6. 汎用機能・表示切り替え
// =================================================================

/**
 * カテゴリセクションの表示を切り替える
 * @param {string} categoryId - 表示するカテゴリのID
 */
function showCategory(categoryId) {
    // 全てのカテゴリセクションを非表示にする
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.add('hidden');
    });

    // 指定されたカテゴリを表示する
    const activeSection = document.getElementById(categoryId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }

    // ナビゲーションリンクの選択状態を更新する
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('selected', 'bg-blue-100', 'font-semibold');
        link.classList.add('text-gray-700', 'hover:bg-gray-100');

        if (link.getAttribute('data-category-id') === categoryId) {
            link.classList.add('selected', 'bg-blue-100', 'font-semibold');
            link.classList.remove('text-gray-700', 'hover:bg-gray-100');
        }
    });
}

/**
 * 画面中央にカスタム確認ダイアログを表示する
 * @param {string} message - 表示するメッセージ
 * @param {function} onConfirm - 「はい」がクリックされたときのコールバック
 */
function showCustomConfirm(message, onConfirm) {
    const modal = document.getElementById('custom-modal');
    const modalMessage = document.getElementById('modal-message');
    const confirmBtn = document.getElementById('modal-confirm-btn');
    const cancelBtn = document.getElementById('modal-cancel-btn');

    // モーダルの表示設定
    modal.classList.remove('hidden');
    modalMessage.textContent = message;

    // イベントリスナーをクリア
    confirmBtn.onclick = null;
    cancelBtn.onclick = null;

    // 「はい」ボタンの処理
    confirmBtn.onclick = () => {
        modal.classList.add('hidden');
        onConfirm();
    };

    // 「いいえ」ボタンの処理
    cancelBtn.onclick = () => {
        modal.classList.add('hidden');
    };
    
    // モーダルの外側をクリックしても閉じられるようにする
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    };
}

/**
 * AudioContextをユーザー操作に基づいて初期化（アンロック）する
 */
function unlockAudioContext(voiceId) {
    if (isAudioContextUnlocked) {
        return;
    }

    // Web Audio APIの利用可能性をチェック
    if (!window.AudioContext && !window.webkitAudioContext) {
        console.error("Web Audio API is not supported in this browser.");
        return;
    }

    // AudioContextの初期化
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // iOS/Safariなどの制約解除のための処理
    const buffer = audioContext.createBuffer(1, 1, 22050);
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
    source.stop(0);

    // ユーザー操作があったため、フラグを設定
    isAudioContextUnlocked = true;
    console.log("[Info] AudioContext unlocked successfully.");
    
    // 初めてのクリックでAudioContextをアンロックしたら、本来の音声再生処理を改めて実行
    // これにより、アンロックのために音声再生がスキップされることを防ぐ
    playVoice(voiceId);
}

// =================================================================
// 7. 音声再生ロジック
// =================================================================

/**
 * ★★★ 修正ポイント ★★★
 * HTMLのボタンから呼び出されるクリックハンドラ
 * @param {string} voiceId - 再生するボイスのユニークID
 */
function handleVoiceButtonClick(voiceId) {
    // ボタン全体がクリックされた場合、お気に入りアイコンのクリックではないことを確認
    // お気に入りアイコンのクリックは、stopPropagationでボタンクリックイベントの発生を防ぐべき
    playVoice(voiceId);
}

/**
 * 指定されたボイスIDの音声ファイルを再生する
 * @param {string} voiceId - 再生するボイスのユニークID (例: 01_greeting/file.mp3)
 */
function playVoice(voiceId) {
    if (!isAudioContextUnlocked) {
        unlockAudioContext(voiceId);
        return; // 初回はアンロック処理のみを行い、再実行はunlockAudioContext内で行う
    }
    
    const BASE_URL = 'https://raw.githubusercontent.com/shiosoranami-studio/shiosoranami-sound-assets/main/voice';
    const fullPath = `${BASE_URL}/${voiceId}`;
    
    // Web Audio APIを使わず、シンプルなHTML5 Audioで再生する (ロードの複雑さを避けるため)
    playAudioWithRetry(fullPath);
}

/**
 * 指数バックオフ付きのFetch関数 (音声再生)
 * @param {string} url - 再生する音声ファイルのURL
 * @param {number} retries - 残りのリトライ回数
 */
async function playAudioWithRetry(url, retries = 3) {
    try {
        // 現在再生中の音声があれば停止させるための処理
        const existingAudio = document.getElementById('current-audio-player');
        if (existingAudio) {
            existingAudio.pause();
            // 完全にDOMから削除
            existingAudio.remove(); 
        }

        const audio = new Audio(url);
        audio.id = 'current-audio-player'; // 識別用のIDを設定
        audio.preload = 'auto'; // 事前ロードを指示

        // ロード完了を待つ（ネットワークエラーをここで捕捉できる）
        await new Promise((resolve, reject) => {
            audio.addEventListener('canplaythrough', resolve, { once: true });
            audio.addEventListener('error', (e) => {
                // エラーイベントから詳細情報を抽出
                reject(new Error(`Audio load error: ${e.target.error.code || 'Unknown error'}`));
            }, { once: true });
            // タイムアウトも設定
            const timeoutId = setTimeout(() => reject(new Error('Audio load timed out (5s)')), 5000); 
            
            // ロードが成功または失敗した場合、タイムアウトをクリア
            const cleanUp = () => clearTimeout(timeoutId);
            audio.addEventListener('canplaythrough', cleanUp, { once: true });
            audio.addEventListener('error', cleanUp, { once: true });

            audio.load();
        });

        audio.currentTime = 0;
        await audio.play();
        console.log(`[Success] Audio requested: ${url}`);

        // 再生終了時に要素を削除
        audio.addEventListener('ended', () => {
            audio.remove();
        }, { once: true });

    } catch (error) {
        // エラー名またはメッセージに基づいて処理
        if (error.name === "NotAllowedError" || error.name === "AbortError" || error.message.includes("timed out")) {
            console.warn(`[Warning] Audio play restricted or Load timeout. Path: ${url}. (Error: ${error.message})`);
        } else if (retries > 0) {
            const delay = Math.pow(2, 3 - retries) * 500;
            console.warn(`[Retry] Failed to load audio ${url}. Retrying in ${delay}ms... (Error: ${error.message})`);
            await new Promise(resolve => setTimeout(resolve, delay));
            playAudioWithRetry(url, retries - 1);
        } else {
            console.error(`[Error] Failed to load audio after all retries: ${url}`, error);
        }
    }
}


// =================================================================
// 8. 初期化 (DOMContentLoadedイベントハンドラ)
// =================================================================

// DOMのロード完了後に実行
document.addEventListener('DOMContentLoaded', () => {
    // 1. メモデータをローカルストレージから読み込む
    loadFavoritesFromLocalStorage();

    // 2. アプリのUI構造を生成し、初期カテゴリを表示する
    generateAppStructure(VOICE_DATA);

    // 3. 全てのボイスボタンの★/☆マークの状態を更新する
    // (generateAppStructureでボタンがDOMに追加された後に実行する必要がある)
    updateAllVoiceButtonStates();
});
