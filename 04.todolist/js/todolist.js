document.addEventListener("DOMContentLoaded", function() {
    let titleNode = document.querySelector(".title-node");
    let postAtNode = document.querySelector(".post-at-node");
    let categoryNode = document.querySelectorAll(".category-node");
    let tagNode = document.querySelectorAll(".tag-node");

    if (!titleNode) console.error("titleNode が見つかりませんでした。");
    if (!postAtNode) console.error("postAtNode が見つかりませんでした。");

    if (localStorage.getItem("title")) {
        titleNode.value = localStorage.getItem("title");
    }

    if (localStorage.getItem("postAt")) {
        postAtNode.value = localStorage.getItem("postAt");
    }

    categoryNode.forEach((node, index) => {
        if (localStorage.getItem(`category${index}`)) {
            node.value = localStorage.getItem(`category${index}`);
        }
    });

    tagNode.forEach((node, index) => {
        if (localStorage.getItem(`tag${index}`)) {
            node.value = localStorage.getItem(`tag${index}`);
        }
    });
});

document.addEventListener("input", (event) => {
    if (event.target.classList.contains("category-node")) {
        categoryNode.forEach((node, index) => {
            if (event.target === node) {
                localStorage.setItem(`category${index}`, node.value);
            }
        });
    }

    if (event.target.classList.contains("tag-node")) {
        tagNode.forEach((node, index) => {
            if (event.target === node) {
                localStorage.setItem(`tag${index}`, node.value);
            }
        });
    }

    localStorage.setItem("title", titleNode.value);
    localStorage.setItem("postAt", postAtNode.value);
});

let selected = null;

document.querySelectorAll(".main").forEach(main => {
    main.addEventListener("click", function() {
        if (selected) selected.classList.remove("selected");
        selected = this;
        selected.classList.add("selected");
    });
});

document.getElementById("delete").addEventListener("click", function() {
    if (selected) {
        selected.remove();
        selected = null;
    }
});

document.getElementById("add").addEventListener("click", function() {
    const insert = `
        <div class="main">
            <div class="title-wrap">
                <textarea class="title-node"></textarea>
            </div>
            <div class="post-at-wrap">
                <label for="post-at-node">投稿日：</label>
                <input class="post-at-node">
            </div>
            <div class="category-wrap">
                <label for="category-node">カテゴリ：</label>
                <input class="category-node">
                <input class="category-node">
                <input class="category-node">
            </div>
            <div class="tag-wrap">
                <label for="tag-node">タグ：</label>
                <input class="tag-node">
                <input class="tag-node">
                <input class="tag-node">
            </div>
        </div>
    `;
    document.getElementById("ToDoList").insertAdjacentHTML("beforeend", insert);

    const newList = document.querySelector(".main:last-child");
    attachClickEvent([newList]);
});

function attachClickEvent(elements) {
    elements.forEach(element => {
        element.addEventListener("click", function() {
            if (selected) selected.classList.remove("selected");
            selected = this;
            selected.classList.add("selected");
        });
    });
}
