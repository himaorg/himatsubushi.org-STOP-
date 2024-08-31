// 正しい答えを設定
const correctAnswers = {
    q1: '1', // 1番の正解は3
    q2: '4', // 2番の正解は3
    q3: '4',
    q4: '3',
    q5: '2',
    q6: '4',
    q7: '3',
    q8: '1',
    q9: '2',
    q10: '1',
    q11: '4',
    q12: '2',
    q13: '3',
    q14: '4',
    q15: '1',
    q16: '3',
    q17: '2',
    q18: '2',
    q19: '3',
    q20: '1',
    q21: '4',
    q22: '1',
    q23: '3',
    q24: '3',
    q25: '1',
    q26: '3',
    q27: '4',
    q28: '2',
    q29: '1',
    q30: '3',
    q31: '4',
    q32: '2',
    // 必要に応じて追加
};

const points = {
    q1: 3, // 問題1の配点は2点
    q2: 3, // 問題2の配点は3点
    q3: 3,
    q4: 4,
    q5: 3,
    q6: 3,
    q7: 3,
    q8: 3,
    q9: 3,
    q10: 3,
    q11: 3,
    q12: 3,
    q13: 3,
    q14: 3,
    q13: 3,
    q14: 3,
    q15: 3,
    q16: 3,
    q17: 3,
    q18: 4,
    q19: 3,
    q20: 3,
    q21: 3,
    q22: 3,
    q23: 3,
    q24: 3,
    q25: 4,
    q26: 3,
    q27: 3,
    q28: 4,
    q29: 3,
    q30: 3,
    q31: 4,
    q32: 3,
    // 必要に応じて追加
};

// 解答の読み込み（ページ読み込み時）
window.addEventListener('load', () => {
    loadAnswers();
});

// 正誤判定ボタンのクリックイベント
document.getElementById('check-button').addEventListener('click', () => {
    let totalScore = 0;               // 合計得点
    let totalPossibleScore = 0;       // 可能な最大得点
    let correctCount = 0;             // 正解数
    let totalQuestions = Object.keys(correctAnswers).length; // 問題数

    // 正誤判定と得点計算
    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        totalPossibleScore += points[question]; // 各問題の配点を合計

        if (selected) {
            // 選択された解答をlocalStorageに保存
            localStorage.setItem(question, selected.value);
        }

        if (selected && selected.value === correctAnswer) {
            totalScore += points[question]; // 正解の場合、問題の配点を加算
            correctCount++;                 // 正解数をカウント
        }
    }

    // 結果をlocalStorageに保存
    localStorage.setItem('correctCount', correctCount);
    localStorage.setItem('totalScore', totalScore);

    // 結果を表示
    displayResult(correctCount, totalQuestions, totalScore, totalPossibleScore);
});

// 解答の読み込み関数
function loadAnswers() {
    for (const question of Object.keys(correctAnswers)) {
        const savedAnswer = localStorage.getItem(question);
        if (savedAnswer) {
            const radioButton = document.querySelector(`input[name="${question}"][value="${savedAnswer}"]`);
            if (radioButton) {
                radioButton.checked = true;
            }
        }
    }

    // 保存された結果の読み込み
    const savedCorrectCount = localStorage.getItem('correctCount');
    const savedTotalScore = localStorage.getItem('totalScore');

    if (savedCorrectCount !== null && savedTotalScore !== null) {
        const totalQuestions = Object.keys(correctAnswers).length;
        const totalPossibleScore = Object.values(points).reduce((acc, cur) => acc + cur, 0);
        displayResult(parseInt(savedCorrectCount), totalQuestions, parseInt(savedTotalScore), totalPossibleScore);
    }
}

// 結果を表示する関数
function displayResult(correctCount, totalQuestions, totalScore, totalPossibleScore) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `正解数: ${correctCount} / ${totalQuestions}, 得点: ${totalScore} / ${totalPossibleScore}`;
}