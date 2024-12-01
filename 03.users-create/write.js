// 座標操作
    const preview = document.getElementById('preview');

    let isDragging = false;
    let isResizing = false;
    let offsetX, offsetY;
    let startWidth, startHeight, startX, startY;

    // ドラッグ処理
    preview.addEventListener('mousedown', (event) => {
    if (event.target === resizer) return; // リサイズ操作中はドラッグ無効
    isDragging = true;
    offsetX = event.clientX - preview.offsetLeft;
    offsetY = event.clientY - preview.offsetTop;
    preview.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        preview.style.left = `${x}px`;
        preview.style.top = `${y}px`;
    }

    if (isResizing) {
        const width = startWidth + (event.clientX - startX);
        const height = startHeight + (event.clientY - startY);
        preview.style.width = `${width}px`;
        preview.style.height = `${height}px`;
        preview.style.lineHeight = `${height}px`;
    }
    });

    document.addEventListener('mouseup', () => {
    isDragging = false;
    isResizing = false;
    preview.style.cursor = 'grab';
    });



// リサイズ処理
    const resizer = document.querySelector('.resizer');

    resizer.addEventListener('mousedown', (event) => {
    isResizing = true;
    startWidth = preview.offsetWidth;
    startHeight = preview.offsetHeight;
    startX = event.clientX;
    startY = event.clientY;
    event.stopPropagation(); // ドラッグ処理と干渉しないようにする
    });




// インポート・エクスポート
    const fileInput = document.getElementById("fileInput");
    const importButton = document.getElementById("import");
    
    importButton.addEventListener("click", () => {
        fileInput.click(); // ファイル選択ダイアログを開く
    });
    
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                textarea.value = e.target.result; // ファイル内容をテキストエリアに表示
                document.getElementById('preview').innerHTML = marked.parse(e.target.result); // プレビューに反映
            };
            reader.readAsText(file); // ファイルをテキストとして読み込む
        }
    });
    
    const exportButton = document.getElementById("export");

    exportButton.addEventListener("click", () => {
        const content = textarea.value; // テキストエリアの内容を取得
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "output.md"; // ダウンロードするファイル名
        link.click();

        URL.revokeObjectURL(url); // メモリ解放
    });
