// DOMContentLoadedの前に変数を宣言する。中身は後で入力する
let titleNode, postAtNode, categoryNode, tagNode;

// DOMContentLoadedを使って、DOMに、localStorageに保存されているデータを入力する
// Web Storage APIを使って、ブラウザに保存されたデータを呼び出す
document.addEventListener("DOMContentLoaded",function(){
    
        // queryselectorで要素を取得
        titleNode = document.querySelector(".title-node");
        postAtNode = document.querySelector(".post-at-node");
        categoryNode = document.querySelectorAll(".category-node");
        tagNode = document.querySelectorAll(".tag-node");

        // デバッグ用
        if (!titleNode) {
            console.error("titleNode が見つかりませんでした。");
        }
        if (!postAtNode) {
            console.error("postAtNode が見つかりませんでした。");
        }
        console.log(categoryNode);
        console.log(tagNode);

        // もし、ローカルストレージにtitleというkeyが存在するなら、
        if(localStorage.getItem("title")){
            // title-nodeに、ローカルストレージに保存されている"titleNode"を表示する
            titleNode.value=localStorage.getItem("title");
        }

        if(localStorage.getItem("postAt")){
            postAtNode.value=localStorage.getItem("postAt");
        };

        categoryNode.forEach((node,index)=>{
        if(localStorage.getItem(`category${index}`)){
            node.value=localStorage.getItem(`category${index}`);
        }});

        tagNode.forEach((node,index)=>{
        if(localStorage.getItem(`tag${index}`)){
            node.value=localStorage.getItem(`tag${index}`);
        }});

    });
        

        // DOMが変化した時、それを、localStorageに保存する
        document.addEventListener("input", (event) => {
            // categoryNode に対しての処理
            categoryNode.forEach((node, index) => {
                if (event.target === node) {
                    localStorage.setItem(`category${index}`, node.value);
                }
            });
            
            // tagNode に対しての処理
            tagNode.forEach((node, index) => {
                if (event.target === node) {
                    localStorage.setItem(`tag${index}`, node.value);
            }
        });
        });
    
        // 他の要素
        document.addEventListener("input", () => {
            localStorage.setItem("title", titleNode.value);
            localStorage.setItem("postAt", postAtNode.value);
        });





        // リストをクリックして削除
        let selected = null;

        // .mainにclickイベントを付与
        document.querySelectorAll(".main").forEach(the_clicked_todolist=>{
            the_clicked_todolist.addEventListener("click",function(){
                // 既に選択されている（nullではない場合、）それを解除
                if(selected){
                    selected.classList.remove("selected");
                }
                // 今クリックした.mainに、（thisを使って）.selectedを付与する
                selected = this;
                selected.classList.add("selected");
            });
        });


        // selectedが付与された.mainを削除するためのボタンのイベントを作る
        document.getElementById("delete").addEventListener("click",function(){
            if(selected){
                // remove()を使って、selectedが付与された.mainを削除する
                selected.remove();
                // 変数を空にする。この変数に紐付けられたcssもリセットされる。
                selected.null;
            }
        });


        // // #addのbottonをクリックして、.mainを追加するイベント
        // document.getElementById("add").addEventListener("click",function(){
        //     // 取得
        //     const template = document.getElementById("template");
        //     // コピー
        //     const clone = template.cloneNode("true");
        //     // IDを削除
        //     clone.id = "";
        //     // DOMに追加
        //     document.body.appendChild(clone);
        // });

        // insertAdjacentHTMLを使って、準備したHTMLをDOMに表示する為の処理
            // クリックイベントでinsertを呼び出す
            document.getElementById("add").addEventListener("click",function(){
                // 準備したHTMLを格納する関数を作る
                const insert = `
                    <!-- ▼▼ひな型▼▼ -->
                    <div class="main">
                        <!-- ▼▼▼title▼▼▼ -->
                        <div class="title-wrap">
                            <textarea class="title-node"></textarea>
                                
                        </div>
                        <!-- ▲▲▲title▲▲▲ -->
                        <!-- ▼▼▼PostAt▼▼▼ -->
                        <div class="post-at-wrap">
                            <label for="post-at-node">投稿日　：</label>
                            <input class="post-at-node">
                        </div>
                        <!-- ▲▲▲PostAt▲▲▲ -->
                        <!-- ▼▼▼Category▼▼▼ -->
                        <div class="category-wrap">
                            <label for="category-node">カテゴリ：</label>
                            <input class="category-node">
                            <input class="category-node">
                            <input class="category-node">
                        </div>
                        <!-- ▲▲▲Category▲▲▲ -->
                        <!-- ▼▼▼tag▼▼▼ -->
                        <div class="tag-wrap">
                            <label for="tag-node">タグ　　：</label>
                            <input class="tag-node">
                            <input class="tag-node">
                            <input class="tag-node">
                        </div>
                        <!-- ▲▲▲tag▲▲▲ -->
                    </div>
                    <!-- ▲▲▲ひな型▲▲▲ -->
                `;
            // insertAdjacentHTMLを使う
            document.getElementById("ToDoList").insertAdjacentHTML("beforeend",insert);
            }
            );
