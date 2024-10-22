document.getElementById("startButton").addEventListener("click", function() {
    const time = parseInt(document.getElementById("time").value);
    if (isNaN(time) || time <= 0) {
        alert("正しい時間を入力してください。");
        return;
    }

    let countdown = time;
    const countdownDisplay = document.getElementById("countdown");
    
    const interval = setInterval(() => {
        countdownDisplay.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            document.getElementById("audio").play();
        }
    }, 1000); // 1秒ごとに更新
    
    // 停止ボタンがクリックされたときの処理
    document.getElementById("stopButton").onclick = function() {
        clearInterval(interval); // カウントダウンを停止
        countdownDisplay.textContent = 0; // 残り時間を0にリセット
        document.getElementById("audio").pause(); // 音楽を停止
        document.getElementById("audio").currentTime = 0; // 音楽の再生位置を最初に戻す
    };
});