const release_note_button = document.getElementById("release-note-button");
const main2 = document.getElementById("main2");
const create_note_button = document.getElementById("create-note-button");

// クリックしたらモーダルを開く
release_note_button.addEventListener("click", () => {
main2.style.display="block";
});

// クリックしたらモーダルを閉じる
create_note_button.addEventListener("click", () => {
main2.style.display="none";
});

// // ウィンドウの外をクリックして閉じる
document.addEventListener("click", (e) => {
    console.log(e.target);
});

// モーダル要素を取得
var modal = document.getElementById("myModal");

// モーダル内のテキスト要素を取得
var modalText = document.getElementById("modalText");

// ボタン要素のNodeListを取得
var modalBtns = document.querySelectorAll(".modalBtn");

// 各ボタンにクリックイベントを設定
modalBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // モーダルを表示する
    modal.style.display = "block";
    
    // ボタンに関連付けられたテキストを取得して表示する
    var modalBtnText = btn.getAttribute("data-modal-text");
    modalText.innerHTML = modalBtnText;
  });
});

// モーダル外をクリックしたときのイベントリスナーを設定
window.onclick = function(event) {
    // モーダル以外の領域をクリックした場合、モーダルを非表示にする
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  