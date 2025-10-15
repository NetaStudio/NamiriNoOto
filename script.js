// =================================================================
// 1. データ定義: 全てのカテゴリとボイスデータをJSON形式で管理します。
// 音声ファイルを追加・修正する場合は、この配列を編集してください。
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
        id: "category-reaction",
        name: "リアクション",
        folder: "04_reaction", // sounds/04_reaction/
        en_name: "Reaction",
        voices: [
            { text: "わーい", file: "baka1.wav" },
            { text: "えー！", file: "baka2.wav" }
        ]
    }
];

// =================================================================
// 2. 初期化処理: HTML要素の生成とイベントリスナーの登録
// =================================================================

let activeCategory = null;

// DOMのロード完了を待ってから実行
document.addEventListener('DOMContentLoaded', () => {
    generateAppStructure(VOICE_DATA);
    
    // 初期表示として最初のカテゴリを選択
    if (VOICE_DATA.length > 0) {
        // 初回ロード時に最初のカテゴリIDを使って表示をトリガー
        showCategory(VOICE_DATA[0].id);
        const firstLink = document.querySelector(`[data-target="${VOICE_DATA[0].id}"]`);
        if(firstLink) firstLink.classList.add('selected');
    }
});


/**
 * データに基づいてカテゴリナビゲーションとボタンセクションを生成
 * @param {Array} data - VOICE_DATA配列
 */
function generateAppStructure(data) {
    const navContainer = document.getElementById('category-nav');
    const mainContainer = document.getElementById('main-content');

    // コンテナがなければ処理しない
    if (!navContainer || !mainContainer) {
        console.error("Error: HTML containers (category-nav or main-content) not found.");
        return;
    }
    
    data.forEach(category => {
        // --- カテゴリリンク (サイドバー) の生成 ---
        const linkButton = document.createElement('button');
        linkButton.className = 'category-link';
        linkButton.setAttribute('data-target', category.id);
        linkButton.textContent = category.name;
        linkButton.addEventListener('click', () => showCategory(category.id));
        navContainer.appendChild(linkButton);

        // --- 音声セクション (メインコンテンツ) の生成 ---
        const section = document.createElement('section');
        section.id = category.id;
        section.className = 'category-section hidden';

        // タイトル
        const title = document.createElement('h2');
        title.className = 'text-2xl font-bold text-gray-700 mb-4 pb-2 border-b-2 border-pink-300';
        title.textContent = `${category.name} (${category.en_name})`;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'voice-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';

        // ボタンの生成
        if (category.voices && category.voices.length > 0) {
            category.voices.forEach(voice => {
                const button = document.createElement('button');
                button.className = 'voice-button';
                // data-sound属性にフォルダ名とファイル名を結合したパスを設定
                button.setAttribute('data-sound', `${category.folder}/${voice.file}`);
                
                const span = document.createElement('span');
                span.className = 'text-lg';
                span.textContent = voice.text;
                button.appendChild(span);

                // 音声再生イベントリスナーを登録
                button.addEventListener('click', handleVoiceButtonClick);

                grid.appendChild(button);
            });
        } else {
            const noVoice = document.createElement('div');
            noVoice.className = 'text-gray-400 mt-4';
            noVoice.textContent = '（このカテゴリにはまだボイスがありません）';
            grid.appendChild(noVoice);
        }
        
        section.appendChild(grid);
        mainContainer.appendChild(section);
    });
}

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
// 3. 音声再生ロジック
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
            const delay = Math.pow(2, 3 - retries) * 100;
            await new Promise(resolve => setTimeout(resolve, delay));
            await playAudioWithRetry(url, retries - 1);
        } else {
            console.error(`[Fatal Error] Failed to load resource (Likely 404 Not Found or unsupported file). Path: ${url}`, error);
        }
    }
}
