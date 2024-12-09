document.addEventListener("DOMContentLoaded", async () => {
    const add_memo = document.getElementById("add-memo");
    const memo_list = document.getElementById("memo-list");
    const memo_editor = document.getElementById("memo-editor");

    let memo_text = {};

    // ページ読み込み時にメモを取得
    const loadMemos = async () => {
        const response = await fetch('/load-tokumei.php');
        const memos = await response.json();
        memos.forEach((memo) => {
            createMemoElement(memo.id, memo.title, memo.content);
        });
    };

    // 新しいメモの作成
    const createMemoElement = (memo_id, title, content = '') => {
        const memo = document.createElement("div");
        memo.className = "memo";
        memo.dataset.id = memo_id;
        memo.textContent = title;
        memo_list.appendChild(memo);

        memo_text[memo_id] = content;

        memo.addEventListener("click", () => {
            memo_editor.innerHTML = "";
            const textarea = document.createElement("textarea");
            textarea.className = "post";
            textarea.value = memo_text[memo_id];
            memo_editor.appendChild(textarea);
            textarea.focus();

            // メモが編集された場合
            textarea.addEventListener("input", async () => {
                memo_text[memo_id] = textarea.value;

                // データベースに更新を送信
                await fetch('/update-tokumei.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: memo_id,
                        content: memo_text[memo_id],
                    }),
                });
            });
        });
    };

    // 新しいメモボタンのクリック
    add_memo.addEventListener("click", async () => {
        const memo_id = `${Date.now()}`;
        const title = "新しいメモ";

        // サーバーに新しいメモを保存
        await fetch('/add-memo.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: memo_id, title, content: '' }),
        });

        createMemoElement(memo_id, title);
    });

    // 初期ロード
    await loadMemos();
});