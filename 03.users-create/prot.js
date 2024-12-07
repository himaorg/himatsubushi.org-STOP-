document.addEventListener("DOMContentLoaded", () => {
    const add_memo = document.getElementById("add-memo");
    const memo_list = document.getElementById("memo-list");
    const memo_editor = document.getElementById("memo-editor");

    const memo_text = {};

    async function saveMemo(memo_id, title, content) {
        try {
            const response = await fetch("./prot.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ memo_id, title, content }),
            });
            const result = await response.json();
            console.log(result.message);
        } catch (error) {
            console.error("Failed to save memo:", error);
        }
    }

    add_memo.addEventListener("click", () => {
        const memo = document.createElement("div");
        memo.className = "memo";
        const memo_id = `${Date.now()}`;
        memo.dataset.id = memo_id;
        let title = "example";
        memo.textContent = title;
        memo_list.appendChild(memo);

        const textarea = document.createElement("textarea");
        textarea.className = "post";
        textarea.value = memo_text[memo_id] || "";

        memo.addEventListener("click", () => {
            memo_editor.innerHTML = "";
            memo_editor.appendChild(textarea);
            textarea.focus();
        });

        textarea.addEventListener("input", () => {
            memo_text[memo_id] = textarea.value;
            saveMemo(memo_id, title, textarea.value);
        });

        saveMemo(memo_id, title, "");
    });
});
