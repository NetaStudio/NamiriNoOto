// すべてのボタン要素を取得
const buttons = document.querySelectorAll('.voice-button');

/**
 * 指数バックオフ付きのFetch関数
 * @param {string} url - 再生する音声ファイルのURL
 * @param {number} retries - 残りのリトライ回数
 */
async function playAudioWithRetry(url, retries = 3) {
    try {
        const audio = new Audio(url);
        
        // 連続再生に対応するため、再生位置をリセット
        audio.currentTime = 0;
        
        // 音声を再生
        await audio.play();
        
        // 成功したらコンソールにログを出力
        console.log(`[Success] Audio played: ${url}`);
        
    } catch (error) {
        // 再生が拒否された場合（ブラウザの自動再生制限など）
        if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.warn(`[Warning] Audio play restricted (NotAllowed/Abort): ${url}. User interaction required.`);
        } 
        // その他のエラー (404 Not Found など)
        else {
            if (retries > 0) {
                const delay = Math.pow(2, 3 - retries) * 100; // 100ms, 200ms, 400ms
                console.warn(`[Retry] Failed to load resource (Retries left: ${retries}). Retrying in ${delay}ms... Path: ${url}`);
                
                // 指数バックオフで再試行
                await new Promise(resolve => setTimeout(resolve, delay));
                await playAudioWithRetry(url, retries - 1);
            } else {
                // リトライ終了、404エラーの場合はここで確定
                console.error(`[Fatal Error] Failed to load resource (404 Not Found likely). Check file path and name case sensitivity. Path: ${url}`, error);
            }
        }
    }
}


buttons.forEach(button => {
    button.addEventListener('click', function() {
        // data-sound属性から、sounds/以下のパスを取得 (例: "01_greeting/ohayo.mp3")
        const soundPath = this.getAttribute('data-sound');
        
        if (!soundPath) {
            console.error('Error: data-sound attribute is missing on this button.', this);
            return;
        }

        // サーバー上でファイルを特定するためのフルパスを構築
        // 例: "sounds/01_greeting/ohayo.mp3"
        const fullPath = 'sounds/' + soundPath;
        
        // 音声再生関数を呼び出し
        playAudioWithRetry(fullPath);
    });
});
