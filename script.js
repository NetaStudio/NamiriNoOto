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

// メモ（お気に入り）カテゴリのID
const FAVORITES_ID = "category-favorites";
// ローカルストレージで使用するキー
const STORAGE_KEY = 'namiri_voice_board_favorites';
// ドラッグ＆ドロップでデータ転送に使うキー
const DRAG_DATA_KEY = 'text/plain';


// =================================================================
// 2. 状態管理
// =================================================================

/**
 * 現在選択中のカテゴリIDを保持する変数
 * 初期値は最初のカテゴリID
 */
let currentCategoryId = VOICE_DATA[0].id;


// =================================================================
// 3. ローカルストレージ操作 (メモ/お気に入り)
// =================================================================

/**
 * ローカルストレージからお気に入りボイスの配列を取得します。
 * @returns {Array<Object>} お気に入りボイスデータの配列
 */
function loadFavorites() {
    const json = localStorage.getItem(STORAGE_KEY);
    try {
        return json ? JSON.parse(json) : [];
    } catch (e) {
        console.error("Failed to parse favorites from storage:", e);
        return [];
    }
}

/**
 * お気に入りボイスの配列をローカルストレージに保存します。
 * @param {Array<Object>} favorites - 保存するお気に入りボイスデータの配列
 */
function saveFavorites(favorites) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

/**
 * 指定されたボイスをメモ/お気に入りに登録します。
 * @param {string} categoryId - ボイスが属するカテゴリID
 * @param {string} file - ボイスのファイル名
 * @param {string} text - ボイスの表示テキスト
 */
function toggleFavorite(categoryId, file, text) {
    const favorites = loadFavorites();
    const voiceKey = `${categoryId}:${file}`; // 一意のキー
    const index = favorites.findIndex(f => f.voiceKey === voiceKey);

    if (index === -1) {
        // 未登録の場合は追加
        favorites.push({
            voiceKey: voiceKey,
            categoryId: categoryId,
            file: file,
            text: text,
            folder: VOICE_DATA.find(c => c.id === categoryId).folder // フォルダ情報も保存
        });
        console.log(`[Favorite] Added: ${text}`);
    } else {
        // 登録済みの場合は削除
        favorites.splice(index, 1);
        console.log(`[Favorite] Removed: ${text}`);
    }

    saveFavorites(favorites);
    // 現在メモ画面が表示されている場合は再描画
    if (currentCategoryId === FAVORITES_ID) {
        renderContent(FAVORITES_ID);
    }
}

/**
 * お気に入りボイスリストを完全にクリアします。
 */
function clearFavorites() {
    // ユーザーに確認を促すモーダルを表示する代わりに、メッセージを表示
    console.log("favorites cleared.");
    localStorage.removeItem(STORAGE_KEY);

    // 現在メモ画面が表示されている場合は再描画して空にする
    if (currentCategoryId === FAVORITES_ID) {
        renderContent(FAVORITES_ID);
    }

    // 削除が完了したことをユーザーに知らせるUIメッセージを一時的に表示
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        const message = document.createElement('div');
        // Tailwindクラスを使って以前のシンプルなメッセージを再現
        message.className = 'absolute top-0 right-0 m-4 p-3 bg-red-100 text-red-700 rounded-lg shadow-lg';
        message.textContent = '🗑️ メモがすべて削除されました。';
        mainContent.appendChild(message);
        setTimeout(() => message.remove(), 3000);
    }
}


// =================================================================
// 4. UI描画ロジック
// =================================================================

/**
 * 指定されたカテゴリIDに基づいてメインコンテンツを描画します。
 * @param {string} categoryId - 描画するカテゴリID
 */
function renderContent(categoryId) {
    currentCategoryId = categoryId;
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // コンテンツをクリア

    // サイドバーの選択状態を更新
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('selected');
    });
    const selectedLink = document.getElementById(`link-${categoryId}`);
    if (selectedLink) {
        selectedLink.classList.add('selected');
    }

    let voices = [];
    let categoryName = '';

    if (categoryId === FAVORITES_ID) {
        // メモ/お気に入り
        voices = loadFavorites();
        categoryName = 'お気に入り (メモ)';
    } else {
        // 通常のカテゴリ
        const category = VOICE_DATA.find(c => c.id === categoryId);
        if (!category) return;
        voices = category.voices;
        categoryName = category.name;
    }

    // 1. タイトル描画
    const titleHtml = `
        <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-2">
            ${categoryName}
            <span class="text-sm font-normal text-gray-500 ml-2">(${voices.length} 件)</span>
        </h2>
    `;
    mainContent.insertAdjacentHTML('beforeend', titleHtml);

    // 2. ボイスボタンのコンテナ描画
    const container = document.createElement('div');
    // 元のグリッドクラスを復元 (grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4)
    container.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4';

    if (categoryId === FAVORITES_ID) {
        // お気に入りの場合はD&Dイベントを設定
        container.addEventListener('dragover', handleDragOver);
        container.addEventListener('drop', handleDrop);
        container.addEventListener('dragleave', handleDragLeave);
        container.id = 'voice-container'; // D&D用にIDを設定
    }

    mainContent.appendChild(container);

    // 3. ボイスボタンの描画
    if (voices.length === 0) {
        container.innerHTML = `
            <p class="text-gray-500 col-span-full py-8 text-center">
                ${categoryId === FAVORITES_ID ? 'メモにボイスが登録されていません。<br>カテゴリーからボイスを☆で追加してください。' : 'このカテゴリにはまだボイスがありません。'}
            </p>
        `;
    } else {
        voices.forEach(voice => {
            // カテゴリIDがメモではない場合は、元のカテゴリIDを使用
            const originalCategoryId = categoryId === FAVORITES_ID ? voice.categoryId : categoryId;
            const button = createVoiceButton(voice, originalCategoryId);
            container.appendChild(button);
        });
    }

    // ドラッグ中の要素がメインコンテンツ外でドロップされた場合に備えて、documentにもリスナーを設定
    if (categoryId === FAVORITES_ID) {
        document.addEventListener('dragend', handleDragEnd);
    } else {
        document.removeEventListener('dragend', handleDragEnd);
    }
}

/**
 * 個別のボイスボタン要素を生成します。
 * @param {Object} voice - ボイスデータオブジェクト
 * @param {string} originalCategoryId - ボイスが属する元のカテゴリID
 * @returns {HTMLElement} 生成されたボタン要素
 */
function createVoiceButton(voice, originalCategoryId) {
    // === ここが前の正しいUIロジックです。この構造を復元し、UIクラスは変更しません ===
    const isFavorite = loadFavorites().some(f => f.voiceKey === `${originalCategoryId}:${voice.file}`);
    const voiceKey = `${originalCategoryId}:${voice.file}`;
    const folder = voice.folder || VOICE_DATA.find(c => c.id === originalCategoryId).folder;
    const voiceText = voice.text;

    const button = document.createElement('div');
    // style.css に定義された `.voice-button` クラスを使用し、UIをCSSに委ねます
    button.className = 'voice-button';
    button.onclick = () => playVoice(folder, voice.file);
    button.dataset.voiceKey = voiceKey;
    button.dataset.categoryId = originalCategoryId;
    button.dataset.file = voice.file;
    button.dataset.text = voiceText;
    button.dataset.folder = folder;

    // 現在のカテゴリがメモ(FAVORITES_ID)の場合、ドラッグ可能にする
    if (currentCategoryId === FAVORITES_ID) {
        button.draggable = true;
        button.addEventListener('dragstart', handleDragStart);
    }


    // 星アイコンのSVG要素を生成 (Tailwindクラスを直接使用し、style.cssと連携)
    const starIcon = isFavorite ?
        `<svg class="star-icon fill-current text-yellow-500" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>` :
        `<svg class="star-icon fill-current text-gray-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`;

    // ボタンのHTML構造を再構築 (前回の失敗で壊れた要素を修復)
    button.innerHTML = `
        <span class="voice-text">${voiceText}</span>
        <button
            class="favorite-button"
            onclick="event.stopPropagation(); toggleFavorite('${originalCategoryId}', '${voice.file}', '${voiceText.replace(/'/g, "\\'")}')"
            aria-label="${isFavorite ? 'メモから削除' : 'メモに追加'}"
        >
            ${starIcon}
        </button>
    `;

    // D&D用にドロップターゲットのロジックを追加
    if (currentCategoryId === FAVORITES_ID) {
        button.addEventListener('dragenter', handleDragEnter);
        button.addEventListener('dragleave', handleDragLeave);
        button.addEventListener('dragover', handleDragOverOnButton);
    }

    return button;
    // =========================================================================
}

/**
 * サイドバーのナビゲーションを描画します。
 */
function renderSidebar() {
    const navContainer = document.getElementById('category-nav');
    navContainer.innerHTML = '';

    // カテゴリのリンクを生成
    VOICE_DATA.forEach(category => {
        // 元のデザインのクラスを維持
        const linkHtml = `
            <a
                href="#"
                id="link-${category.id}"
                class="category-link block p-2 mt-1 text-sm text-gray-700 hover:bg-gray-100 transition duration-100 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis"
                onclick="event.preventDefault(); renderContent('${category.id}')"
            >
                ${category.name}
            </a>
        `;
        navContainer.insertAdjacentHTML('beforeend', linkHtml);
    });

    // お気に入り(メモ)のリンクを生成
    // 元のデザインのクラスを維持
    const favoritesLinkHtml = `
        <a
            href="#"
            id="link-${FAVORITES_ID}"
            class="category-link block p-2 mt-3 text-sm font-bold text-blue-700 border-t border-blue-200 hover:bg-blue-50 transition duration-100 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis"
            onclick="event.preventDefault(); renderContent('${FAVORITES_ID}')"
        >
            ⭐ お気に入り (メモ)
        </a>
    `;
    navContainer.insertAdjacentHTML('beforeend', favoritesLinkHtml);

    // 初期カテゴリを選択状態にする
    const initialLink = document.getElementById(`link-${currentCategoryId}`);
    if (initialLink) {
        initialLink.classList.add('selected');
    }
}


// =================================================================
// 5. ドラッグ＆ドロップロジック (メモ/お気に入りの並び替え)
// =================================================================

let draggedEl = null;

/**
 * ドラッグ開始時の処理
 * @param {DragEvent} e
 */
function handleDragStart(e) {
    draggedEl = e.currentTarget;
    draggedEl.classList.add('dragging');
    // ドラッグするボイスのkeyをセット
    e.dataTransfer.setData(DRAG_DATA_KEY, draggedEl.dataset.voiceKey);
    // ドラッグ&ドロップ操作中に要素が移動することを許可する
    e.dataTransfer.effectAllowed = 'move';
}

/**
 * ドラッグ終了時の処理 (どこにドロップされても呼ばれる)
 * @param {DragEvent} e
 */
function handleDragEnd(e) {
    if (draggedEl) {
        draggedEl.classList.remove('dragging');
        draggedEl = null;
    }
    // 全てのドロップオーバー状態をリセット
    document.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
        el.classList.remove('drag-over-top', 'drag-over-bottom');
    });
}

/**
 * ドロップターゲット上でのドラッグオーバー処理 (コンテナ)
 * @param {DragEvent} e
 */
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    // ボイスボタン要素以外のドロップオーバー状態をリセット
    document.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
        if (!el.classList.contains('voice-button')) {
            el.classList.remove('drag-over-top', 'drag-over-bottom');
        }
    });
}

/**
 * ドロップターゲット上でのドラッグオーバー処理 (ボタン)
 * @param {DragEvent} e
 */
function handleDragOverOnButton(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    const targetEl = e.currentTarget;
    if (targetEl === draggedEl) return;

    // 現在のマウス位置が要素の上半分か下半分かを判定
    const rect = targetEl.getBoundingClientRect();
    const isOverTopHalf = e.clientY < rect.top + rect.height / 2;

    // ドロップインジケータのクラスを設定/リセット
    document.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
        if (el !== targetEl) {
            el.classList.remove('drag-over-top', 'drag-over-bottom');
        }
    });

    if (isOverTopHalf) {
        targetEl.classList.add('drag-over-top');
        targetEl.classList.remove('drag-over-bottom');
    } else {
        targetEl.classList.add('drag-over-bottom');
        targetEl.classList.remove('drag-over-top');
    }
}

/**
 * ドロップターゲットからドラッグ要素が離れた時の処理
 * @param {DragEvent} e
 */
function handleDragLeave(e) {
    // コンテナから離れた場合にのみ、インジケータをリセット
    if (e.currentTarget.id === 'voice-container') {
        e.currentTarget.classList.remove('drag-over-top', 'drag-over-bottom');
    }
    // ボタンから離れた場合、関連するクラスを削除
    if (e.currentTarget.classList.contains('voice-button')) {
        setTimeout(() => {
            const relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            if (!relatedTarget || (!relatedTarget.closest('.voice-button') && relatedTarget.id !== 'voice-container')) {
                e.currentTarget.classList.remove('drag-over-top', 'drag-over-bottom');
            }
        }, 0);
    }
}

/**
 * ドロップ時の処理 (コンテナ)
 * @param {DragEvent} e
 */
function handleDrop(e) {
    e.preventDefault();

    const container = e.currentTarget;
    let targetEl = e.target.closest('.voice-button'); // ドロップされた位置のボタン要素

    if (!draggedEl) {
        container.classList.remove('drag-over-top', 'drag-over-bottom');
        if (targetEl) targetEl.classList.remove('drag-over-top', 'drag-over-bottom');
        return;
    }

    if (draggedEl === targetEl) {
        container.classList.remove('drag-over-top', 'drag-over-bottom');
        if (targetEl) targetEl.classList.remove('drag-over-top', 'drag-over-bottom');
        return;
    }

    const favorites = loadFavorites();
    const draggedKey = draggedEl.dataset.voiceKey;
    const draggedIndex = favorites.findIndex(f => f.voiceKey === draggedKey);

    // ドラッグ対象の要素をリストから削除
    const [voiceToMove] = favorites.splice(draggedIndex, 1);

    if (targetEl) {
        // ボタン上にドロップされた場合
        const targetKey = targetEl.dataset.voiceKey;
        const targetIndex = favorites.findIndex(f => f.voiceKey === targetKey);

        const isOverTopHalf = targetEl.classList.contains('drag-over-top');

        if (targetIndex !== -1) {
            // ドロップインジケータに基づいて挿入位置を決定
            const insertIndex = isOverTopHalf ? targetIndex : targetIndex + 1;
            favorites.splice(insertIndex, 0, voiceToMove);
        }

        // クラスをリセット
        targetEl.classList.remove('drag-over-top', 'drag-over-bottom');

    } else {
        // コンテナの何もない部分にドロップされた場合 (リストの最後に移動と見なす)
        favorites.push(voiceToMove);
    }

    // 更新された配列を保存し、コンテンツを再描画
    saveFavorites(favorites);
    renderContent(FAVORITES_ID);
}


// =================================================================
// 6. 音声再生ロジック
// =================================================================

/**
 * ボイスを再生します。
 * @param {string} folderName - ボイスファイルが格納されているフォルダ名 (例: '01_greeting')
 * @param {string} fileName - ボイスファイル名 (例: '汐空なみりです.mp3')
 */
function playVoice(folderName, fileName) {
    const soundPath = `${folderName}/${fileName}`;
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
            // ユーザー操作が必要な場合 (多くのブラウザの自動再生ポリシー)
            console.warn(`[Warning] Audio play restricted. Path: ${url}. (User interaction required)`);
        } else if (retries > 0) {
            // リトライ処理
            const delay = Math.pow(2, 3 - retries) * 500;
            console.warn(`[Retry] Failed to load audio ${url}. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            playAudioWithRetry(url, retries - 1);
        } else {
            // 全てのリトライが失敗
            console.error(`[Error] Failed to load audio after all retries: ${url}`, error);
        }
    }
}


// =================================================================
// 7. 初期化 (DOMContentLoadedイベントハンドラ)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("Application started.");
    renderSidebar(); // サイドバーのカテゴリを描画
    // 初期表示カテゴリを決定 (メモが空でない場合はメモを、そうでなければ最初のカテゴリ)
    if (loadFavorites().length > 0) {
        currentCategoryId = FAVORITES_ID;
    }
    renderContent(currentCategoryId); // メインコンテンツを描画
});
