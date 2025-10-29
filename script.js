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
// 2. グローバル変数 (Web Audio API関連)
// =================================================================

let audioContext = null;
// 音声ファイルを一度読み込んだらキャッシュするためのオブジェクト
const audioCache = {};

// =================================================================
// 3. ユーティリティ関数
// =================================================================

/**
 * Web Audio APIのコンテキストを初期化/再開する
 * モバイルブラウザでの自動再生制限回避のため、ユーザーの最初の操作時に呼び出す
 */
function initializeAudioContext() {
    // 既に初期化済みの場合は何もしない
    if (audioContext === null) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Web Audio APIのコンテキストがサスペンドされている場合、再開を試みる
    if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            console.log('AudioContext resumed successfully.');
        }).catch(err => {
            console.error('Failed to resume AudioContext:', err);
        });
    }

    // イベントリスナーを一度実行したら削除する
    document.removeEventListener('click', initializeAudioContext);
    document.removeEventListener('touchstart', initializeAudioContext);
}

/**
 * 指定されたURLの音声をデコードし、AudioBufferを返す (キャッシュ利用)
 * これにより、毎回ファイルを取得・デコードするコストを削減し、安定性を高めます。
 * @param {string} url - 音声ファイルのURL
 * @returns {Promise<AudioBuffer>}
 */
async function loadAudio(url) {
    if (audioCache[url]) {
        return audioCache[url];
    }

    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        audioCache[url] = audioBuffer;
        return audioBuffer;

    } catch (error) {
        console.error(`[Error] Failed to load or decode audio: ${url}`, error);
        throw error;
    }
}

/**
 * Web Audio APIを使用して音声を再生する (モバイルの頭切れ不具合対応)
 * @param {string} url - 再生する音声ファイルのURL
 */
async function playAudioBuffer(url) {
    try {
        // 1. AudioContextの初期化/再開を確実に行う
        // ※この関数が呼び出される前に、初期化イベントリスナーで一度は実行されているはずだが、念のため状態を確認
        if (audioContext && audioContext.state === 'suspended') {
            await audioContext.resume();
        }

        // 2. 音声データの読み込みとデコード (キャッシュ利用)
        const buffer = await loadAudio(url);

        // 3. AudioBufferSourceNodeを作成し、再生する
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start(0); // Web Audio APIは正確に0秒から再生を開始

        console.log(`[Success] Audio buffer played: ${url}`);

    } catch (error) {
        if (error.name === "NotAllowedError" || error.name === "AbortError" || error.message.includes('autoplay')) {
            console.warn(`[Warning] Audio play restricted. Path: ${url}. (User interaction required)`);
        } else {
            console.error(`[Error] Failed to play audio using Web Audio API: ${url}`, error);
        }
    }
}


// =================================================================
// 4. メインロジック
// =================================================================

/**
 * 音声再生開始 (メインの呼び出し関数)
 * ※以前の playAudioWithRetry を置き換え
 * @param {string} soundPath - ボイスのファイルパス (folder/file)
 */
function playVoice(soundPath) {
    // AudioContextが未初期化の場合は、警告を出して処理を停止（通常は最初のクリックで初期化される）
    if (!audioContext) {
        console.warn('AudioContext not initialized. Please click the screen first.');
        // 代替として以前のnew Audio()ロジックをフォールバックとして残すことも可能だが、
        // 根本解決のためWeb Audio APIを推奨
        const fullPath = 'sounds/' + soundPath;
        playAudioBuffer(fullPath); // Web Audio APIで再生を試みる
        return;
    }

    const fullPath = 'sounds/' + soundPath;

    // Web Audio APIベースの安定した再生関数を呼び出す
    playAudioBuffer(fullPath);
}

/**
 * お気に入りボイス再生
 * @param {string} path - お気に入りボイスの完全パス (例: 01_greeting/こんぬづわ.mp3)
 */
function playFavoriteVoice(path) {
    playVoice(path);
}


// =================================================================
// 5. お気に入り (メモ) 機能
// =================================================================

const FAVORITES_KEY = 'namiri-voice-favorites';

/**
 * お気に入りボイスリストを取得 (ローカルストレージから)
 * @returns {Array<Object>}
 */
function getFavorites() {
    const data = localStorage.getItem(FAVORITES_KEY);
    try {
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error("Failed to parse favorites from localStorage.", e);
        return [];
    }
}

/**
 * お気に入りボイスリストを保存 (ローカルストレージへ)
 * @param {Array<Object>} favorites
 */
function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

/**
 * 指定されたボイスをお気に入りに追加/削除
 * @param {string} categoryId - カテゴリID
 * @param {string} voiceText - ボイスの表示テキスト
 * @param {string} voiceFile - ボイスのファイル名
 * @returns {boolean} - true: 追加, false: 削除
 */
function toggleFavorite(categoryId, voiceText, voiceFile) {
    const favorites = getFavorites();
    const voicePath = `${getCategoryFolder(categoryId)}/${voiceFile}`;
    const index = favorites.findIndex(fav => fav.path === voicePath);
    const starIcon = document.querySelector(`#${categoryId} .voice-button[data-file="${voiceFile}"] .favorite-star`);
    const starIconFav = document.querySelector(`#favorites-list .voice-button[data-file="${voiceFile}"] .favorite-star`); // メモリスト内の星

    if (index === -1) {
        // 追加
        favorites.push({
            id: categoryId,
            text: voiceText,
            file: voiceFile,
            path: voicePath
        });
        saveFavorites(favorites);
        if (starIcon) starIcon.classList.add('is-favorite');
        renderVoiceButtons(currentCategoryId); // メモリストを更新
        return true;
    } else {
        // 削除
        favorites.splice(index, 1);
        saveFavorites(favorites);
        if (starIcon) starIcon.classList.remove('is-favorite');
        // メモリストから削除された場合は、現在のカテゴリリストも更新が必要
        if (currentCategoryId === 'favorites') {
             renderVoiceButtons('favorites');
        } else {
             // 削除時にメモリストも更新
             renderVoiceButtons(currentCategoryId);
        }

        // メモリスト内のボタンから削除された場合、カテゴリ内の星もリセット
        const categoryVoiceButton = document.querySelector(`#${getVoiceContainerId(categoryId)} .voice-button[data-file="${voiceFile}"] .favorite-star`);
        if (categoryVoiceButton) categoryVoiceButton.classList.remove('is-favorite');

        return false;
    }
}

/**
 * お気に入り（メモ）リストを完全にクリア
 */
function clearFavorites() {
    if (confirm('本当にメモリスト（お気に入り）を全て削除しますか？')) {
        localStorage.removeItem(FAVORITES_KEY);
        // 全ての星アイコンを非選択状態にする
        document.querySelectorAll('.favorite-star.is-favorite').forEach(star => {
            star.classList.remove('is-favorite');
        });
        // 表示を更新
        renderVoiceButtons(currentCategoryId);
    }
}


// =================================================================
// 6. DOM操作とイベントハンドリング
// =================================================================

let currentCategoryId = 'category-greeting'; // 初期表示カテゴリ

/**
 * カテゴリのfolder名を返す
 * @param {string} categoryId - カテゴリID
 * @returns {string} - folder名
 */
function getCategoryFolder(categoryId) {
    if (categoryId === 'favorites') return ''; // お気に入りにはフォルダなし

    const category = VOICE_DATA.find(cat => cat.id === categoryId);
    return category ? category.folder : '';
}

/**
 * ボイスコンテナIDを生成
 * @param {string} categoryId - カテゴリID
 * @returns {string} - コンテナID
 */
function getVoiceContainerId(categoryId) {
    return `voice-container-${categoryId}`;
}

/**
 * カテゴリボタンとメモリンクをサイドバーにセットアップ
 */
function setupCategoryButtons() {
    const nav = document.getElementById('category-nav');
    nav.innerHTML = '';

    // カテゴリボタンの生成
    VOICE_DATA.forEach(category => {
        const button = document.createElement('a');
        button.href = '#';
        button.className = `category-link block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition duration-150`;
        button.setAttribute('data-category-id', category.id);
        button.textContent = `${category.name} (${category.en_name})`;
        button.addEventListener('click', (e) => {
            e.preventDefault();
            changeCategory(category.id);
        });
        nav.appendChild(button);
    });

    // メモ (お気に入り) リンクの生成
    const favLink = document.createElement('a');
    favLink.href = '#';
    favLink.id = 'favorites-link';
    favLink.className = `category-link block px-3 py-2 rounded-lg text-sm font-bold mt-3 border-t pt-3 text-blue-700 hover:bg-blue-50 transition duration-150`;
    favLink.setAttribute('data-category-id', 'favorites');
    favLink.innerHTML = `🌟 メモ (お気に入り)`;
    favLink.addEventListener('click', (e) => {
        e.preventDefault();
        changeCategory('favorites');
    });
    nav.appendChild(favLink);
}

/**
 * カテゴリの切り替え処理
 * @param {string} categoryId - 切り替えるカテゴリID
 */
function changeCategory(categoryId) {
    currentCategoryId = categoryId;
    const mainContent = document.getElementById('main-content');

    // 選択状態の更新
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('selected');
        if (link.getAttribute('data-category-id') === categoryId) {
            link.classList.add('selected');
        }
    });

    // コンテンツの描画
    renderVoiceButtons(categoryId);

    // メモクリアボタンの表示制御
    const clearButton = document.getElementById('clear-favorites-button');
    if (categoryId === 'favorites') {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }

    // ページトップへ戻る
    mainContent.scrollTop = 0;
}


/**
 * ボイスボタンを描画
 * @param {string} categoryId - カテゴリID
 */
function renderVoiceButtons(categoryId) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // コンテンツをクリア

    let voicesToRender = [];
    let title = '';
    let isFavorites = categoryId === 'favorites';

    if (isFavorites) {
        voicesToRender = getFavorites();
        title = '🌟 メモ (お気に入り)';
    } else {
        const category = VOICE_DATA.find(cat => cat.id === categoryId);
        if (category) {
            voicesToRender = category.voices.map(voice => ({
                id: category.id,
                text: voice.text,
                file: voice.file,
                path: `${category.folder}/${voice.file}`
            }));
            title = `${category.name} (${category.en_name})`;
        } else {
            mainContent.innerHTML = `<h2 class="text-xl font-bold mb-4">エラー</h2><p>カテゴリが見つかりません。</p>`;
            return;
        }
    }

    // タイトル
    mainContent.innerHTML += `<h2 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">${title}</h2>`;

    if (isFavorites && voicesToRender.length === 0) {
        mainContent.innerHTML += `<p class="text-gray-500 mt-4 p-4 bg-white rounded-lg shadow-sm">お気に入りのボイスは登録されていません。<br>カテゴリー内のボイスの右にある「☆」を押して登録してください。</p>`;
        return;
    }

    // ボイスボタンコンテナ
    const container = document.createElement('div');
    container.id = isFavorites ? 'favorites-list' : getVoiceContainerId(categoryId);
    container.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4';
    if (isFavorites) {
        container.classList.add('draggable-list');
    }

    voicesToRender.forEach(voice => {
        const isFavorite = getFavorites().some(fav => fav.path === voice.path);
        const voiceId = isFavorites ? `fav-${voice.path.replace(/[^a-zA-Z0-9]/g, '-')}` : `${voice.id}-${voice.file.replace('.mp3', '')}`;

        const button = document.createElement('button');
        button.id = voiceId;
        button.className = `voice-button relative flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] border border-gray-100 active:bg-blue-100`;
        button.setAttribute('data-category-id', voice.id || categoryId);
        button.setAttribute('data-text', voice.text);
        button.setAttribute('data-file', voice.file);
        button.setAttribute('data-path', voice.path);
        button.setAttribute('onclick', `playVoice('${voice.path}')`);

        // お気に入りリストの場合はドラッグ可能にする
        if (isFavorites) {
            button.setAttribute('draggable', 'true');
            button.classList.add('draggable');
            button.addEventListener('dragstart', handleDragStart);
            button.addEventListener('dragover', handleDragOver);
            button.addEventListener('drop', handleDrop);
            button.addEventListener('dragend', handleDragEnd);

            // モバイル向けドラッグ (touchstart/touchmove/touchend) のためのリスナーも追加
            button.addEventListener('touchstart', handleTouchStart);
            button.addEventListener('touchmove', handleTouchMove);
            button.addEventListener('touchend', handleTouchEnd);
        }

        // 1. ボイステキスト (中央)
        const textSpan = document.createElement('span');
        textSpan.className = 'text-center font-medium text-sm sm:text-base text-gray-800 whitespace-normal break-words leading-tight';
        textSpan.textContent = voice.text;

        // 2. お気に入りスター (右上)
        const star = document.createElement('span');
        star.className = `favorite-star absolute top-1 right-1 cursor-pointer text-xl p-1 rounded-full ${isFavorite ? 'text-yellow-400 is-favorite' : 'text-gray-300 hover:text-yellow-300 transition duration-150'}`;
        star.innerHTML = '★'; // 星アイコン
        star.setAttribute('onclick', `event.stopPropagation(); toggleFavorite('${voice.id || categoryId}', '${voice.text}', '${voice.file}')`);


        // 構成
        button.appendChild(textSpan);
        button.appendChild(star);
        container.appendChild(button);
    });

    mainContent.appendChild(container);

    // お気に入りリストが更新されたときに、ドラッグアンドドロップイベントを再設定
    if (isFavorites) {
        setupDragAndDrop();
    }
}


// =================================================================
// 7. 初期化 (DOMContentLoadedイベントハンドラ)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 最初にカテゴリとボイスボタンのセットアップを行う
    setupCategoryButtons();
    // 初期カテゴリ（挨拶）を表示
    changeCategory(currentCategoryId);

    // モバイルの自動再生ポリシーに対応するため、ユーザーの最初の操作で
    // AudioContextを初期化/再開するリスナーを設定
    document.addEventListener('click', initializeAudioContext, { once: true });
    document.addEventListener('touchstart', initializeAudioContext, { once: true });
});

// =================================================================
// 8. ドラッグ＆ドロップ機能 (お気に入り順序変更)
// =================================================================

let draggedItem = null;
let touchDragData = {
    item: null,
    initialY: 0,
    currentY: 0,
    list: null,
    placeholder: null,
};

function setupDragAndDrop() {
    // Drag/DropはrenderVoiceButtons内で各ボタンに追加される
}

// --- デスクトップ版 Drag/Drop (マウス) ---

function handleDragStart(e) {
    draggedItem = this;
    e.dataTransfer.effectAllowed = 'move';
    // Firefox対策: ダミーデータをセット
    e.dataTransfer.setData('text/plain', this.getAttribute('data-path'));
    setTimeout(() => this.classList.add('opacity-40'), 0);
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const target = e.target.closest('.voice-button.draggable');
    if (target && target !== draggedItem) {
        const rect = target.getBoundingClientRect();
        const mouseY = e.clientY;

        // ドロップ位置の判定
        if (mouseY < rect.top + rect.height / 2) {
            target.classList.remove('drag-over-bottom');
            target.classList.add('drag-over-top');
            target.style.borderTop = '3px solid #3b82f6';
            target.style.borderBottom = 'none';
        } else {
            target.classList.remove('drag-over-top');
            target.classList.add('drag-over-bottom');
            target.style.borderBottom = '3px solid #3b82f6';
            target.style.borderTop = 'none';
        }
    }
}

function handleDrop(e) {
    e.preventDefault();
    if (!draggedItem) return;

    const target = e.target.closest('.voice-button.draggable');
    if (!target || target === draggedItem) {
        // ドロップターゲットがないか、自分自身にドロップした場合は何もしない
        removeDragOverStyles();
        return;
    }

    const favoritesList = document.getElementById('favorites-list');
    const favorites = getFavorites();
    const draggedPath = draggedItem.getAttribute('data-path');
    const targetPath = target.getAttribute('data-path');

    const draggedIndex = favorites.findIndex(fav => fav.path === draggedPath);
    const targetIndex = favorites.findIndex(fav => fav.path === targetPath);

    if (draggedIndex !== -1 && targetIndex !== -1) {
        // データの並び替え
        const [removed] = favorites.splice(draggedIndex, 1);
        if (target.classList.contains('drag-over-top')) {
            favorites.splice(targetIndex > draggedIndex ? targetIndex - 1 : targetIndex, 0, removed);
        } else { // drag-over-bottom
            favorites.splice(targetIndex > draggedIndex ? targetIndex : targetIndex + 1, 0, removed);
        }
        saveFavorites(favorites);
    }

    removeDragOverStyles();
    renderVoiceButtons('favorites'); // UIを再描画して最新の状態にする
}

function handleDragEnd() {
    if (draggedItem) {
        draggedItem.classList.remove('opacity-40');
    }
    draggedItem = null;
    removeDragOverStyles();
}

function removeDragOverStyles() {
    document.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
        el.classList.remove('drag-over-top', 'drag-over-bottom');
        el.style.borderTop = '';
        el.style.borderBottom = '';
    });
}

// --- モバイル版 Drag/Drop (タッチ) ---

function handleTouchStart(e) {
    // 1本指タッチのみを処理
    if (e.touches.length !== 1) return;

    // お気に入りリスト外の要素ではドラッグは無効
    if (currentCategoryId !== 'favorites') return;

    touchDragData.item = this;
    touchDragData.initialY = e.touches[0].clientY;
    touchDragData.currentY = e.touches[0].clientY;
    touchDragData.list = document.getElementById('favorites-list');

    // 長押しをエミュレートして、一定時間後にドラッグモードに入る (300ms)
    this.touchStartTime = Date.now();
    this.touchTimer = setTimeout(() => {
        touchDragData.item.classList.add('dragging-touch'); // ドラッグ中のスタイルを適用
        touchDragData.item.style.position = 'absolute';
        touchDragData.item.style.zIndex = 1000;
        touchDragData.item.style.width = touchDragData.item.clientWidth + 'px';

        // プレースホルダーの作成
        touchDragData.placeholder = document.createElement('div');
        touchDragData.placeholder.className = 'voice-button placeholder-touch bg-gray-200 rounded-xl transition duration-150';
        touchDragData.placeholder.style.height = touchDragData.item.clientHeight + 'px';
        touchDragData.placeholder.style.margin = touchDragData.item.style.margin; // マージンをコピー
        touchDragData.item.parentNode.insertBefore(touchDragData.placeholder, touchDragData.item);

        // 位置の初期化
        touchDragData.item.style.top = touchDragData.item.offsetTop + 'px';
        touchDragData.item.style.left = touchDragData.item.offsetLeft + 'px';

    }, 300); // 300msの長押しでドラッグ開始
}

function handleTouchMove(e) {
    if (!touchDragData.item || !touchDragData.placeholder) return;

    // 長押しタイマーをクリア（タップ判定をキャンセル）
    if (this.touchTimer) {
        clearTimeout(this.touchTimer);
        this.touchTimer = null;
    }

    e.preventDefault(); // スクロール防止

    const touchY = e.touches[0].clientY;
    const deltaY = touchY - touchDragData.currentY;
    touchDragData.currentY = touchY;

    // ドラッグ中のアイテムの移動
    const currentTop = parseFloat(touchDragData.item.style.top || 0);
    touchDragData.item.style.top = (currentTop + deltaY) + 'px';
    touchDragData.item.style.transform = `translateY(${deltaY}px)`;


    const itemCenterY = touchY;

    // プレースホルダーの位置を更新
    const children = Array.from(touchDragData.list.children).filter(child => child !== touchDragData.item);
    let newIndex = children.length;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const rect = child.getBoundingClientRect();
        const childCenterY = rect.top + rect.height / 2;

        if (itemCenterY < childCenterY) {
            newIndex = i;
            break;
        }
    }

    const placeholderParent = touchDragData.placeholder.parentNode;
    if (placeholderParent) {
        const currentIndex = Array.from(placeholderParent.children).indexOf(touchDragData.placeholder);

        if (newIndex < currentIndex) {
            placeholderParent.insertBefore(touchDragData.placeholder, placeholderParent.children[newIndex]);
        } else if (newIndex > currentIndex) {
            placeholderParent.insertBefore(touchDragData.placeholder, placeholderParent.children[newIndex].nextSibling);
        }
    }
}

function handleTouchEnd(e) {
    // 長押しタイマーが残っていた場合、それは単なるタップだったと見なす
    if (this.touchTimer) {
        clearTimeout(this.touchTimer);
        this.touchTimer = null;
        // AudioContextの初期化がまだなら、このタップで初期化する
        initializeAudioContext();
        return; // 単なるタップの場合は、通常のonclickが実行される
    }

    if (!touchDragData.item || !touchDragData.placeholder) return;

    const favorites = getFavorites();
    const draggedPath = touchDragData.item.getAttribute('data-path');
    const draggedIndex = favorites.findIndex(fav => fav.path === draggedPath);

    // プレースホルダーの現在のインデックスを取得
    const newIndex = Array.from(touchDragData.list.children).indexOf(touchDragData.placeholder);

    if (draggedIndex !== -1) {
        // データの並び替え
        const [removed] = favorites.splice(draggedIndex, 1);
        favorites.splice(newIndex, 0, removed);
        saveFavorites(favorites);
    }

    // クリーンアップ
    touchDragData.item.classList.remove('dragging-touch');
    touchDragData.item.style.position = '';
    touchDragData.item.style.zIndex = '';
    touchDragData.item.style.top = '';
    touchDragData.item.style.left = '';
    touchDragData.item.style.width = '';
    touchDragData.item.style.transform = '';

    touchDragData.placeholder.remove();

    touchDragData = {
        item: null,
        initialY: 0,
        currentY: 0,
        list: null,
        placeholder: null,
    };

    renderVoiceButtons('favorites'); // UIを再描画して最新の状態にする
}

// ユーザーの最初のクリック/タッチでAudioContextを初期化するように設定
document.addEventListener('click', initializeAudioContext, { once: true });
document.addEventListener('touchstart', initializeAudioContext, { once: true });
