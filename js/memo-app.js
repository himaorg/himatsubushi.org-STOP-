// 一つ目
const firstCard = document.querySelectorAll(".card")[0]; 
const firstCounter = document.querySelectorAll(".counter")[0]; 

firstCard.addEventListener("input", function() {
    const count = firstCard.value.length;
    const max = 100;
    firstCounter.textContent = count + " / " + max;
});

// 二つ目
const secondCard = document.querySelectorAll(".card")[1]; 
const secondCounter = document.querySelectorAll(".counter")[1]; 

secondCard.addEventListener("input", function() {
    const count = secondCard.value.length;
    const max = 100;
    secondCounter.textContent = count + " / " + max;
});

// 三つ目
const thirdCard = document.querySelectorAll(".card")[2]; 
const thirdCounter = document.querySelectorAll(".counter")[2]; 

thirdCard.addEventListener("input", function() {
    const count = thirdCard.value.length;
    const max = 100;
    thirdCounter.textContent = count + " / " + max;
});

// 四つ目
const fourthCard = document.querySelectorAll(".card")[3]; 
const fourthCounter = document.querySelectorAll(".counter")[3]; 

fourthCard.addEventListener("input", function() {
    const count = fourthCard.value.length;
    const max = 100;
    fourthCounter.textContent = count + " / " + max;
});

// 五つ目
const fifthCard = document.querySelectorAll(".card")[4]; 
const fifthCounter = document.querySelectorAll(".counter")[4];

fifthCard.addEventListener("input", function() {
    const count = fifthCard.value.length;
    const max = 100;
    fifthCounter.textContent = count + " / " + max;
});

// インポート、エクスポート
const cards = document.querySelectorAll(".card");

document.getElementById("exportButton").addEventListener("click", function() {
    let exportData = "";
    cards.forEach(card => {
        exportData += card.value + "\n";
    });

    const blob = new Blob([exportData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "exported_data.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

document.getElementById("importFile").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const importedData = reader.result;
        const lines = importedData.split('\n');
        lines.forEach((line, index) => {
            if (index < cards.length) {
                cards[index].value = line.trim();
            }
        });
    };

    reader.readAsText(file);
});
