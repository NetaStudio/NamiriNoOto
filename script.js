// --- 既存の音声再生ロジック（変更なし） ---

// すべてのボタン要素を取得 (voice-button)
const voiceButtons = document.querySelectorAll('.voice-button');

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
        console.log(`[Success] Audio played: ${url}`);
        
    } catch (error) {
        if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.warn(`[Warning] Audio play restricted. Path: ${url}`);
        } else {
            if (retries > 0) {
                // リトライロジックは前回と同様
                const delay = Math.pow(2, 3 - retries) * 100;
                await new Promise(resolve => setTimeout(resolve, delay));
                await playAudioWithRetry(url, retries - 1);
            } else {
                console.error(`[Fatal Error] Failed to load resource (404 Not Found likely). Path: ${url}`, error);
            }
        }
    }
}


voiceButtons.forEach(button => {
    button.addEventListener('click', function() {
        const soundPath = this.getAttribute('data-sound');
        if (!soundPath) {
            console.error('Error: data-sound attribute is missing on this button.', this);
            return;
        }

        // フルパスを構築 (例: "sounds/01_greeting/ohayo.mp3")
        const fullPath = 'sounds/' + soundPath;
        
        playAudioWithRetry(fullPath);
    });
});


// --- 新規追加：カテゴリ切り替えロジック ---

const categoryLinks = document.querySelectorAll('.category-link');
const categorySections = document.querySelectorAll('.category-section');

categoryLinks.forEach(link => {
    link.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target'); // 例: "category-greeting"
        
        // 1. すべてのカテゴリセクションを非表示にする
        categorySections.forEach(section => {
            section.classList.add('hidden');
        });
        
        // 2. ターゲットのカテゴリセクションを表示する
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }

        // 3. サイドバーの選択状態を更新する
        categoryLinks.forEach(l => {
            l.classList.remove('selected');
        });
        this.classList.add('selected');
        
        // 4. メインコンテンツのスクロールを一番上に戻す
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.scrollTop = 0;
        }
    });
});
