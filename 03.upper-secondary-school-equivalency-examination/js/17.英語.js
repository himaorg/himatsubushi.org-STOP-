// 正しい答えを設定
const correctAnswers = {
    q1: '3', // 1番の正解は3
    q2: '3', // 2番の正解は3
    q3: '3',
    q4: '1',
    q5: '4',
    q6: '3',
    q7: '4',
    q8: '1',
    q9: '4',
    q10: '5',
    q11: '3',
    q12: '2',
    q13: '5',
    q14: '1',
    q15: '1',
    q16: '2',
    q17: '4',
    q18: '4',
    q19: '1',
    q20: '2',
    q21: '3',
    q22: '4',
    q23: '2',
    q24: '1',
    q25: '4',
    q26: '2',
    q27: '3',
    // 必要に応じて追加
};

const points = {
    q1: 4, // 問題1の配点は4点
    q2: 4, // 問題2の配点は4点
    q3: 4,
    q4: 4,
    q5: 4,
    q6: 4,
    q7: 4,
    q8: 4,

    q9: 4, //問題9・問題10療法正解で4点
    q10: 0,

    q11: 4, //問題11・問題12両方正解で4点
    q12: 0,

    q13: 4, //問題13・問題14両方正解で4点
    q14: 0,

    q13: 4,
    q14: 4,
    q15: 4,
    q16: 4,
    q17: 4,
    q18: 4,
    q19: 4,
    q20: 4,
    q21: 4,
    q22: 4,
    q23: 4,
    q24: 5,
    q25: 5,
    q26: 5,
    q27: 5,
    // 必要に応じて追加
};

// 二つの解答が正解しないと得点にならない問題のペア
const groupedQuestions = {
    pair1: ['q9', 'q10'], // q9とq10の両方正解で初めて得点
    pair2: ['q11', 'q12'], // q11とq12の両方正解で初めて得点
    pair3: ['q13', 'q14'], // q13とq14の両方正解で初めて得点
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
    const answeredCorrectly = {};     // 各問題の正解情報を保存

    // 各問題ごとの正誤判定
    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        totalPossibleScore += points[question]; // 各問題の配点を合計

        if (selected) {
            // 選択された解答をlocalStorageに保存
            localStorage.setItem(question, selected.value);
        }

        // 正解のチェック
        if (selected && selected.value === correctAnswer) {
            correctCount++;                 // 正解数をカウント
            answeredCorrectly[question] = true; // 正解情報を保存
        } else {
            answeredCorrectly[question] = false; // 不正解の場合
        }
    }

    // グループ化された問題の得点計算
    for (const [groupName, questionPair] of Object.entries(groupedQuestions)) {
        const [q1, q2] = questionPair; // 問題ペアを取得
        // 両方が正解の場合のみ得点を加算
        if (answeredCorrectly[q1] && answeredCorrectly[q2]) {
            totalScore += points[q1] + points[q2]; // 両方の問題の得点を加算
        }
    }

    // 個別の問題でグループに属さない正解の得点を計算
    for (const question of Object.keys(correctAnswers)) {
        // グループに属していない、かつ正解している問題
        if (!Object.values(groupedQuestions).flat().includes(question) && answeredCorrectly[question]) {
            totalScore += points[question];
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