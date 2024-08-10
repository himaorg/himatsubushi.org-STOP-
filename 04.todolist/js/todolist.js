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
        






    // // DOMが変化した時、それを、localStorageに保存する
    // document.addEventListener("input",()=>{
    //     localStorage.setItem("title",titleNode.value);
    // });
    // document.addEventListener("input",()=>{
    //     localStorage.setItem("postAt",postAtNode.value);
    // });
    // ----------------------------------------------------------------------------------
    // addEventListenerはforEachの外側に配置しろ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    // addEventListenerはforEachの外側に配置しろ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    // addEventListenerはforEachの外側に配置しろ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    // categoryNode.forEach((node,index)=>{
        // document.addEventListener("input",()=>{
            //     localStorage.setItem(`category${index}`,node.value);
            // })});
            // tagNode.forEach((node,index)=>{
                // document.addEventListener("input",()=>{
                    //     localStorage.setItem(`tag${index}`,node.value);
                    // })});
    // ----------------------------------------------------------------------------------
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
    // ----------------------------------------------------------------------------------