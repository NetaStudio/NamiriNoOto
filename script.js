// =================================================================
// 1. データ定義: 全てのカテゴリとボイスデータをJSON形式で管理します。
// 音声ファイルを追加・修正する場合は、この配列を編集してください。
// =================================================================

const VOICE_DATA = [
    // ユーザーの要望でお気に入りカテゴリを追加
    {
        id: "category-favorite",
        name: "お気に入り",
        folder: "favorites", // データフォルダは実際には使われないが定義
        en_name: "bookmark",
        voices: [] // お気に入りは最初は空
    },
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
            { text: "いいね！", file: "baka2.wav" },
            { text: "うんうん", file: "baka3.wav" },
            { text: "それはすごい", file: "baka1.wav" }, // 新しいボイスを追加
        ]
    },
    {
        id: "category-denial",
        name: "否定",
        folder: "03_denial", // sounds/03_denial/
        en_name: "Denial",
        voices: [
            { text: "そうじゃない", file: "baka1.wav" },
            { text: "だめ！", file: "baka1.wav" },
            { text: "それは違う", file: "baka1.wav" }
        ]
    },
    {
        id: "category-emotions",
        name: "感情",
        folder: "04_emotions",
        en_name: "Emotions",
        voices: [
            { text: "嬉しい！", file: "baka2.wav" },
            { text: "悲しい...", file: "baka3.wav" },
            { text: "助けて", file: "baka1.wav" },
            { text: "驚いた", file: "baka2.wav" },
            { text: "ありがとう", file: "baka3.wav" }
        ]
    },
    {
        id: "category-fighting",
        name: "戦闘",
        folder: "05_fighting",
        en_name: "Fighting",
        voices: [
            { text: "攻撃", file: "baka2.wav" },
            { text: "防御", file: "baka3.wav" },
            { text: "逃げる！", file: "baka1.wav" }
        ]
    }
];

// =================================================================
// 2. グローバル変数
// =================================================================

// 最初のカテゴリ（今回は「お気に入り」）を初期選択状態とする
let currentCategory = VOICE_DATA[0].id; 

// =================================================================
// 3. UI構築関数
// =================================================================

/**
 * カテゴリボタンを作成し、サイドバーに追加します。
 */
function createCategoryButtons() {
    const categoryNav = document.getElementById('category-nav');
    if (!categoryNav) {
        console.error('Error: category-nav element not found.');
        return;
    }

    // まず既存のボタンをクリア
    categoryNav.innerHTML = '';

    VOICE_DATA.forEach(category => {
        const button = document.createElement('button');
        button.className = `category-button w-full text-left p-2 rounded-lg transition-colors duration-150 mb-1 ${category.id === currentCategory ? 'is-active' : ''}`;
        
        // 修正: 日本語名と英語名を併記する形式に変更
        button.textContent = `${category.name} (${category.en_name})`; 
        
        button.setAttribute('data-category-id', category.id);

        button.addEventListener('click', () => {
            selectCategory(category.id);
        });

        categoryNav.appendChild(button);
    });

    // 最初のカテゴリを選択状態にする
    selectCategory(currentCategory);
}

/**
 * 選択されたカテゴリをハイライトし、メインコンテンツにボイスボタンを表示します。
 * @param {string} categoryId - 選択されたカテゴリのID
 */
function selectCategory(categoryId) {
    currentCategory = categoryId;
    
    // 1. カテゴリボタンのハイライトを更新
    document.querySelectorAll('.category-button').forEach(btn => {
        if (btn.getAttribute('data-category-id') === categoryId) {
            btn.classList.add('is-active');
        } else {
            btn.classList.remove('is-active');
        }
    });

    // 2. ボイスボタンの表示を更新
    const selectedCategory = VOICE_DATA.find(c => c.id === categoryId);
    if (!selectedCategory) return;

    renderVoiceButtons(selectedCategory);

    // 3. タイトルを更新
    const titleElement = document.getElementById('content-title');
    if (titleElement) {
        titleElement.textContent = selectedCategory.name + " ボイス一覧";
    }
}

/**
 * ボイスボタンをメインコンテンツエリアに描画します。
 * @param {object} category - 表示するボイスデータを持つカテゴリオブジェクト
 */
function renderVoiceButtons(category) {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Error: content-area element not found.');
        return;
    }
    
    // Gridコンテナを作成
    const gridContainer = document.createElement('div');
    gridContainer.className = 'voice-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-6';
    
    if (category.voices.length === 0) {
        // ボイスがない場合（主に「お気に入り」カテゴリ）のメッセージ
        const message = document.createElement('p');
        message.className = 'col-span-full text-center text-gray-500 p-8';
        
        if (category.id === "category-favorite") {
            message.textContent = "現在、お気に入りに登録されたボイスはありません。";
        } else {
            message.textContent = `${category.name} のボイスデータは現在準備中です。`;
        }
        gridContainer.appendChild(message);
    } else {
        category.voices.forEach(voice => {
            const button = createVoiceButton(voice, category.folder);
            gridContainer.appendChild(button);
        });
    }

    // content-areaの中身を置き換え
    contentArea.innerHTML = '';
    contentArea.appendChild(gridContainer);
}

/**
 * 個別のボイスボタン要素を作成します。
 * @param {object} voice - { text: string, file: string }
 * @param {string} folder - カテゴリフォルダ名 (例: "01_greeting")
 * @returns {HTMLButtonElement} 作成されたボタン要素
 */
function createVoiceButton(voice, folder) {
    const button = document.createElement('button');
    button.className = 'voice-button shadow-lg hover:shadow-xl';
    button.textContent = voice.text;
    
    // 音声ファイルのパス情報を属性として保存
    // 例: "01_greeting/baka1.wav"
    button.setAttribute('data-sound', `${folder}/${voice.file}`);

    // クリックイベントの登録
    button.addEventListener('click', handleVoiceButtonClick);

    return button;
}

// =================================================================
// 4. イベントハンドラと音声再生ロジック
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
        // play()が拒否された場合（ブラウザの自動再生制限）
        if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.warn(`[Warning] Audio play restricted. Path: ${url}. (User interaction required)`);
        } else if (retries > 0) {
             // その他のエラー（主に404）の場合、リトライ
            const delay = Math.pow(2, 3 - retries) * 500; // 500ms, 1000ms, 2000ms
            console.warn(`[Retry] Retrying fetch for ${url} in ${delay}ms. Retries left: ${retries - 1}`);
            await new Promise(resolve => setTimeout(resolve, delay));
            await playAudioWithRetry(url, retries - 1);
        } else {
            console.error(`[Error] Failed to load audio after multiple retries: ${url}`, error);
        }
    }
}


// =================================================================
// 5. アプリケーション初期化
// =================================================================

/**
 * アプリケーションの開始点
 */
function initializeApp() {
    // 1. カテゴリボタンの作成と描画
    createCategoryButtons();
    
    // 2. 初期カテゴリのボイスボタンをレンダリング（createCategoryButtons内でselectCategoryが呼ばれるため、ここでは不要）
}

// DOMが完全に読み込まれた後に初期化関数を実行
window.onload = initializeApp;
