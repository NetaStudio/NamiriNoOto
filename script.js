<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>マイ推しボイスボタン</title>
    <!-- Tailwind CSSを読み込み (デザインを整えるため) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
    <!-- フォント設定 -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f4f8;
        }
    </style>
</head>
<body class="min-h-screen p-4 sm:p-8">
    <div id="app" class="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-10">
        
        <header class="text-center mb-10">
            <h1 class="text-4xl font-extrabold text-pink-600">
                推しボイスコレクション
            </h1>
            <p class="text-gray-500 mt-2">
                ボタンを押すと音声が再生されます。
            </p>
        </header>

        <!-- カテゴリ: 01 挨拶 -->
        <section class="category-section mb-8 p-4 border-b border-pink-100">
            <h2 class="text-2xl font-bold text-gray-700 mb-4 pb-2 border-b-2 border-pink-300 inline-block">
                01 挨拶 (Greeting)
            </h2>
            <div class="voice-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                
                <!-- 🚨 data-soundのパスは "sounds/" の後の階層を記述してください -->
                <button 
                    class="voice-button button-style" 
                    data-sound="01_greeting/baka1.wav"
                >
                    <span class="text-lg">おはよう</span>
                </button>

                <button 
                    class="voice-button button-style" 
                    data-sound="01_greeting/baka2.wav"
                >
                    <span class="text-lg">こんにちは</span>
                </button>
                
                <!-- 【重要】音声ファイルを増やしたら、data-soundのファイル名を変えてボタンを増やす -->
                <button 
                    class="voice-button button-style" 
                    data-sound="01_greeting/baka3.wav"
                >
                    <span class="text-lg">おやすみ</span>
                </button>
                
            </div>
        </section>

        <!-- 💡 他のカテゴリを追加する際は、ここに<section>をコピー＆ペーストして修正してください -->
        <!-- 例: 肯定カテゴリ（ファイルパスは "sounds/01_greeting/baka3.wav" などになります） -->

    </div>

    <!-- JavaScriptファイルを読み込みます -->
    <script src="script.js"></script>
</body>
</html>
