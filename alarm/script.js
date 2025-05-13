const alarmTime = "06:00";  // ← ここで時刻を変更できます（24時間形式）

const alarmAudio = document.getElementById("alarm-audio");
const clockDisplay = document.getElementById("clock");
const statusText = document.getElementById("status");

let hasPlayed = false;

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;
  clockDisplay.textContent = currentTime;

  if (`${hours}:${minutes}` === alarmTime && !hasPlayed) {
    playAlarm();
    hasPlayed = true;
    statusText.textContent = "🎵 音楽を再生中...";
  }

  if (`${hours}:${minutes}` !== alarmTime) {
    hasPlayed = false;  // 翌日のためにリセット
  }
}

function playAlarm() {
  alarmAudio.play().catch(err => {
    statusText.textContent = "⚠️ 自動再生に失敗しました。クリックで再生してください。";
  });
}

setInterval(updateClock, 1000);
