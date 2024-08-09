// DOMContentLoadedを使って、DOMに、localStorageに保存されているデータを入力する
    // queryselectorで要素を取得
    const titleNode = document.querySelector(".title-node");
    const postAtNode = document.querySelector(".post-at-node");
    const categoryNode = document.querySelectorAll(".category-node");
    const tagNode = document.querySelectorAll(".tag-node");

    // Web Storage APIを使って、ブラウザに保存されたデータを呼び出す
    document.addEventListener("DOMContentLoaded",function(){

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
    document.addEventListener("input",()=>{
        localStorage.setItem("title",titleNode.value);
    });
    document.addEventListener("input",()=>{
        localStorage.setItem("postAt",postAtNode.value);
    });
    categoryNode.forEach((node,index)=>{
    document.addEventListener("input",()=>{
        localStorage.setItem(`category${index}`,node.value);
    })});
    tagNode.forEach((node,index)=>{
    document.addEventListener("input",()=>{
        localStorage.setItem(`tag${index}`,node.value);
    })});