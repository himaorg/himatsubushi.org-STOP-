<!-- <?php include 'bbs.post_message.php'; ?>
<?php include 'bbs.get_message.php'; ?> -->

<?php echo "hello"?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ネット掲示板</title>
    <link rel="stylesheet" href="/css/bbs.css">
</head>
<body>
    <header>
        <h1>ネット掲示板</h1>
    </header>

    <main>
        <div id="messages">手書きのコメントです。</div>

        <form id="messageForm">
            <textarea id="messageInput" placeholder="メッセージを入力してください"></textarea>
            <button type="submit">投稿</button>
        </form>
    </main>

    <script src="/js/bbs.js"></script>
</body>
</html>