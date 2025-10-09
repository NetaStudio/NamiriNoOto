// すべてのボタン要素を取得
const buttons = document.querySelectorAll('.voice-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // ボタンに紐づいた音声ファイル名を取得
        const soundFile = this.getAttribute('data-sound');
        
        // 対応する <audio> 要素のIDを生成
        const audioId = 'sound-' + soundFile.replace('.mp3', '');
        
        // <audio> 要素を取得
        const audio = document.getElementById(audioId);

        if (audio) {
            // 連続でクリックされても最初から再生できるように時間をリセット
            audio.currentTime = 0;
            // 音声を再生
            audio.play().catch(error => {
                // 再生エラー（ブラウザによっては自動再生が制限されるため）
                console.error('再生エラー:', error);
            });
        }
    });
});