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
            { text: "こんなみり～(元気)", file: "こんなみり～(元気).mp3" },
            { text: "こんなみり～(癒し)", file: "こんなみり～(癒し).mp3" },
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
            { text: "君のハート", file: "君のハート.mp3" },
            { text: "びしょぬれ注意だよ？", file: "びしょぬれ注意だよ？.mp3" },
            { text: "誕生日は1月26日", file: "誕生日は1月26日.mp3" },
            { text: "身長は153cmです", file: "身長は153cmです.mp3" },
            { text: "大きいケーキに飛び込みたい", file: "大きいケーキに飛び込みたい.mp3" }
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
            { text: "いいよ特別ね", file: "いいよ特別ね.mp3" }
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
            { text: "してな～い", file: "してな～い.mp3" },
            { text: "気持ち悪いんだから", file: "気持ち悪いんだから.mp3" },
            { text: "きめー", file: "きめー.mp3" },
            { text: "何考えてんの全く", file: "何考えてんの全く.mp3" },
            { text: "何してんだ！", file: "何してんだ！.mp3" },
            { text: "許しません", file: "許しません.mp3" },
            { text: "やんないよ", file: "やんないよ.mp3" }
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
            { text: "え～と", file: "え～と.mp3" },
            { text: "てことで", file: "てことで.mp3" },
            { text: "てことでぇ", file: "てことでぇ.mp3" },
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
            { text: "ばーーーーか", file: "ばーーーーか.mp3" }
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
            { text: "不機嫌になってきたなぁ", file: "不機嫌になってきたなぁ.mp3" },
            { text: "黙れ", file: "黙れ.mp3" },
            { text: "鎮まれ", file: "鎮まれ.mp3" },
            { text: "静粛に", file: "静粛に.mp3" },
            { text: "あ静かに", file: "あ静かに.mp3" },
            { text: "静かにしなさい", file: "静かにしなさい.mp3" },
            { text: "舐めんじゃねーぞ", file: "舐めんじゃねーぞ.mp3" },
            { text: "ざーーーこ", file: "ざーーーこ.mp3" },
            { text: "知らないんだから", file: "知らないんだから.mp3" }
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
            { text: "もうバカ！", file: "もうバカ！.mp3" }
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
            { text: "ふふはは", file: "ふふはは.mp3" }
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
            { text: "本当にありがとうございます", file: "本当にありがとうございます.mp3" }
        ]
    },
    {
        id: "category-sorry",
        name: "謝罪",
        en_name: "Sorry",
        folder: "10_sorry",
        voices:
        [
            { text: "すまん", file: "すまん.mp3" }
        ]
    },
    {
        id: "category-onomatopoeia",
        name: "擬音",
        en_name: "Onomatopoeia",
        folder: "11_onomatopoeia",
        voices:
        [
            { text: "まぎまぎ", file: "まぎまぎ.mp3" },
            { text: "むぎむぎ", file: "むぎむぎ.mp3" },
            { text: "えっほえっほ", file: "えっほえっほ.mp3" },
            { text: "どかーん", file: "どかーん.mp3" }
        ]
    },
    {
        id: "category-other",
        name: "その他",
        en_name: "Other",
        folder: "12_other",
        voices:
        [
            { text: "はい、あ～ん？", file: "はい、あ～ん？.mp3" },
            { text: "ちょと待ってね", file: "ちょと待ってね.mp3" },
            { text: "起きなさ～い", file: "起きなさ～い.mp3" },
            { text: "起きろ～", file: "起きろ～.mp3" },
            { text: "可愛いでしょ？", file: "可愛いでしょ？.mp3" },
            { text: "ちょと待ってね", file: "ちょと待ってね.mp3" },
            { text: "戻らなくちゃ", file: "戻らなくちゃ.mp3" },
            { text: "今のなんか語弊あったかなぁ", file: "今のなんか語弊あったかなぁ.mp3" },
            { text: "忘れろビーム", file: "忘れろビーム.mp3" },
            { text: "満足かな", file: "満足かな.mp3" }
        ]
    }
];

// =================================================================
// 2. メモ機能の管理 (Arrayに変更し、順序を保持)
// =================================================================

const FAVORITES_KEY = 'voiceLibraryFavorites';
let favorites = [];
let draggedItem = null;

// ドロップ位置情報を記憶するフラグ（今回は常に「前」に挿入するため、このフラグは視覚フィードバックの判定にのみ使用する）
let isDroppingAfterTarget = false;


function handleDragStart(e) {
    draggedItem = this; // ドラッグされている要素を保持
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.voiceId);
    
    // ドラッグ要素に半透明と影を適用
    this.classList.add('opacity-40', 'shadow-2xl');
}

function handleDragEnd(e) {
    this.classList.remove('opacity-40', 'shadow-2xl');
    // ドラッグオーバーのハイライトを全て除去
    document.querySelectorAll('.voice-button').forEach(item => {
        item.classList.remove('drag-over-top', 'drag-over-bottom');
    });
    draggedItem = null;
}

function handleDragOver(e) {
    e.preventDefault(); // これが重要！ドロップを許可するために必要。

    const targetItem = e.target.closest('.voice-button');
    if (targetItem && targetItem !== draggedItem) {
        // ドロップターゲットがボタンの場合、カーソル位置による上下判定はここでは行わない
        // ロジックはシンプルに、ターゲット全体にドロップとして扱う
    }
}

/**
 * ドラッグ要素がドロップターゲットから離れたときの処理
 * @param {Event} e
 */
 function handleDragLeave(e) {
    // 離れた要素からクラスを削除
    const item = e.target.closest('.voice-button');
    if (item) {
        item.classList.remove('drag-over-top', 'drag-over-bottom');
    }
}



/**
 * ドラッグ要素がドロップされたときの処理
 * (配列の順序を変更し、UIを再描画する)
 * @param {Event} e
 */
 function handleDrop(e) {
    e.stopPropagation(); // ブラウザデフォルトの処理を止める

    // ドラッグオーバーのハイライトをリセット
    document.querySelectorAll('.voice-button').forEach(item => {
        item.classList.remove('drag-over-top', 'drag-over-bottom');
    });
    
    // ドロップされたターゲット要素（voice-button要素全体）を取得
    const targetItem = e.target.closest('.voice-button');
    
    // 状態をリセットする関数 (処理失敗時にも呼び出すため)
    const resetDragState = () => {
        if (draggedItem) {
            draggedItem.classList.remove('opacity-40', 'shadow-2xl'); 
        }
        draggedItem = null;
    };

    if (!draggedItem) {
        console.warn("[DEBUG] Drop skipped: draggedItem is null.");
        return;
    }

    if (!targetItem || draggedItem === targetItem) {
        console.warn("[DEBUG] Drop skipped: Invalid target or self-drop.");
        resetDragState();
        return;
    }
    
    // IDを正しく取得
    const voiceIdToMove = draggedItem.getAttribute('data-sound');
    const targetVoiceId = targetItem.getAttribute('data-sound');
    
    const oldIndex = favorites.indexOf(voiceIdToMove);
    const newIndex = favorites.indexOf(targetVoiceId);

    if (oldIndex === -1 || newIndex === -1) {
        console.error(`Drag/Drop failed: Voice ID not found in favorites array. Drag ID: ${voiceIdToMove}, Target ID: ${targetVoiceId}`);
        resetDragState();
        return; 
    }

    // ------------------------------------------------------------------
    // ★★★★ 【最終修正ロジック】: ターゲットの直後に挿入
    // ------------------------------------------------------------------
    
    // 1. 移動元要素を配列から取り出す（削除）
    const movedItem = favorites.splice(oldIndex, 1)[0];
    
    // 2. 挿入するインデックスを計算する
    let insertionIndex;

    if (oldIndex < newIndex) {
        // 例: 1を3へ移動 (2314)。
        // 1を削除すると3のインデックスは 2-1=1 となる。元の3の位置 (newIndex=2) に挿入すればOK。
        insertionIndex = newIndex; 
    } else {
        // 例: 3を1へ移動 (3124)。
        // 3を削除しても1のインデックスは 0 のまま。1の直後(インデックス1)に挿入したい。
        // ★修正★: ターゲットのインデックス newIndex の位置に挿入する。
        // splice(newIndex, 0, movedItem)とすると、movedItemはnewIndexの要素の前に挿入される。
        // ターゲット(1)の前に挿入し、ターゲットを後ろにずらすことで、「ターゲットの直後」を実現する。
        // favorites.splice(0, 0, 3) -> [3, 1, 2, 4] となる。
        insertionIndex = newIndex; 
    }
    
    // 3. 新しい位置に要素を挿入
    favorites.splice(insertionIndex, 0, movedItem);

    // 4. UIを再レンダリング
    updateFavoriteCategory(); 
    showCategory('category-favorites'); 

    // 5. ローカルストレージに保存
    saveFavoritesToLocalStorage();

    // 6. 状態をリセット
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
 * メモデータをローカルストレージに保存する
 */
function saveFavoritesToLocalStorage() {
    // Arrayを保存
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
    
    // Point 2: メモカテゴリの表示を更新 (登録順に再描画)
    updateFavoriteCategory();

    // ★修正★: 現在アクティブなカテゴリがメモの場合、空になったらメッセージが表示されるよう再描画を強制する
    const activeLink = document.querySelector('.category-link.selected');
    if (activeLink && activeLink.getAttribute('data-category-id') === 'category-favorites') {
        showCategory('category-favorites');
    }
}

/**
 * 全てのボイスボタンのメモアイコンの状態を更新する (Point 1対応)
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
 * メモに追加されているボイスデータを取得する (Point 2対応: 登録順にデータを取得)
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
 * ★更新機能★: メモリストをクリアする
 */
function clearFavorites() {
    // 1. favorites配列を空にする
    favorites = [];

    // 2. ローカルストレージを更新
    saveFavoritesToLocalStorage();

    // 3. 全てのボタンの状態を更新 (★マークを☆マークに戻す)
    updateAllVoiceButtonStates();

    // 4. メモカテゴリの表示を更新 (「メモなし」の状態にする)
    updateFavoriteCategory();

    // 5. 現在アクティブなカテゴリがメモの場合、クリア後の画面を強制的に再表示
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

    // ドラッグ＆ドロップ用属性 (メモカテゴリでのみ有効)
    if (isDraggable) {
        button.setAttribute('draggable', 'true');
    }

    // テキストコンテンツ
    const textContent = document.createElement('span');
    // text-contentクラスにはuser-select: none;とpointer-events: none;を適用している
    textContent.className = 'text-content text-left text-white'; 
    textContent.textContent = voice.text;
    button.appendChild(textContent);

    // メモアイコン
    const iconSpan = document.createElement('span');
    iconSpan.className = 'favorite-icon text-xl transition-colors duration-150';
    
    const isFav = isFavorite(voiceId);

    if(isFav)
    {
        iconSpan.textContent = '★';
        // メモの場合は黄色を適用
        iconSpan.classList.add('text-yellow-400'); 
    }else
    {
        iconSpan.textContent = '☆';
        iconSpan.classList.add('text-gray-300');
    }

    //メモボタンのクリックイベントはトグル機能のみを実行
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
 * メモカテゴリのセクションを作成する (登録順に表示)
 * @param {Array<Object>} favoriteVoices - 登録順に並んだメモのボイスデータ
 */
function createFavoriteCategorySection(favoriteVoices) {
    const section = document.createElement('section');
    section.id = 'category-favorites';
    section.className = 'category-section hidden';

    const titleContainer = document.createElement('h2');
    titleContainer.className = 'text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200';
    
    // 日本語タイトル
    const jpTitle = document.createElement('span');
    jpTitle.textContent = 'メモ';
    jpTitle.className = 'mr-2';
    titleContainer.appendChild(jpTitle);
    
    // メモ (Bookmark) の英語表記を追加
    const enTitle = document.createElement('span');
    enTitle.textContent = `(Bookmark)`;
    enTitle.className = 'text-lg font-normal text-gray-400'; // 薄い文字色とフォントサイズ
    titleContainer.appendChild(enTitle);
    
    section.appendChild(titleContainer);

    if(favoriteVoices.length === 0)
    {
        // メモが一つもない場合のメッセージ
        const message = document.createElement('p');
        message.className = 'text-gray-500 mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200';
        message.textContent = 'ボイスがメモされてません';
        section.appendChild(message);
    }
    else
    {
        //メモがある場合、ドラッグ可能なボタンをグリッド表示
        const grid = document.createElement('div');
        grid.id = 'favorites-grid';
        grid.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
        section.appendChild(grid);

        favoriteVoices.forEach(item => {
            // メモのボイスボタンはドラッグ可能に設定
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

    // 既存のメモセクションを削除
    if (oldFavoriteSection) {
        mainContent.removeChild(oldFavoriteSection);
    }

    // 新しいメモセクションを作成して挿入
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

        // 最初のカテゴリを設定 (メモ以外の最初のカテゴリをデフォルトとする)
        if (!firstCategoryId) {
            firstCategoryId = category.id;
        }
    });

    // 2. 通常カテゴリとメモの間に区切り線を追加
    const separator = document.createElement('div');
    separator.className = 'border-t border-gray-200 my-2 pt-2'; // 線の色とマージンを設定
    categoryNav.appendChild(separator);

    // 3. メモカテゴリのナビゲーションリンクを作成 (カテゴリリストの最後に移動)
    const favoriteLink = document.createElement('a');
    favoriteLink.href = '#';
    favoriteLink.className = 'category-link block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150 mb-1';
    // リンク内の「★」を黄色にする 
    favoriteLink.innerHTML = '<span class="text-yellow-500">★</span> メモ'; 
    favoriteLink.setAttribute('data-category-id', 'category-favorites');
    favoriteLink.onclick = (e) => {
        e.preventDefault();
        showCategory('category-favorites');
    };
    categoryNav.appendChild(favoriteLink);

    // 4. メモカテゴリのコンテンツを作成 (最初に一度だけ生成、以降は更新)
    updateFavoriteCategory();


    // 5. 初期表示カテゴリを設定 (メモ以外の最初のカテゴリ)
    if (firstCategoryId) {
        showCategory(firstCategoryId);
    }
}


// =================================================================
// 4. ドラッグ＆ドロップ機能 (常にターゲットの前に挿入するように修正)
// =================================================================

/**
 * ドラッグ&ドロップイベントリスナーを設定
 * @param {HTMLElement} grid - メモボタンを含むコンテナ (favorites-grid)
 */
 function setupDragAndDrop(grid) {
    if (!grid) return;

    // --- Drag Start ---
    grid.addEventListener('dragstart', (e) => {
        const target = e.target.closest('.voice-button');
        if (target) {
            draggedItem = target;
            e.dataTransfer.effectAllowed = 'move';
            
            // data-sound属性からIDを正しく取得してセット
            e.dataTransfer.setData('text/plain', target.getAttribute('data-sound')); 
            
            // 半透明化と影の追加
            setTimeout(() => target.classList.add('opacity-40', 'shadow-2xl'), 0); 
        }
    });

    // --- Drag End ---
    grid.addEventListener('dragend', (e) => {
        if (draggedItem) {
            // opacity-40とshadow-2xlの両方をリセット
            draggedItem.classList.remove('opacity-40', 'shadow-2xl');
        }
        // ホバーエフェクトのリセット
        grid.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
            el.classList.remove('drag-over-top', 'drag-over-bottom');
        });
        draggedItem = null; // handleDropでもリセットされるが、念のため
    });

    // --- Drag Over (視覚フィードバック) ---
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
                // ドロップ位置の Y 座標を取得
                const rect = target.getBoundingClientRect();
                const targetMiddleY = rect.top + rect.height / 2;
                
                // ドロップ時のカーソル位置をフィードバックに反映 (直後/直前)
                if (e.clientY > targetMiddleY) {
                    target.classList.add('drag-over-bottom'); // 直後に挿入のフィードバック
                } else {
                    target.classList.add('drag-over-top'); // 直前に挿入のフィードバック
                }
            }
            e.dataTransfer.dropEffect = 'move';
        }
    });

    // --- Drop (★最終修正★: DOM操作を削除し、handleDrop 関数に処理を委譲) ---
    grid.addEventListener('drop', (e) => {
        e.preventDefault();

        // 配列操作、DOM再描画、状態リセットは全て handleDrop 内で行います。
        handleDrop(e); 
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
    loadFavoritesFromLocalStorage(); // 最初にローカルストレージからメモを読み込む
    generateAppStructure(VOICE_DATA);

    // 初期化時に全てのボタンの星の状態を同期
    updateAllVoiceButtonStates();

});



