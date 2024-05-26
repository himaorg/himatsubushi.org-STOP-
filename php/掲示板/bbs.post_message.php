<?php
// データベース接続設定
$host = '';
$dbname = '';
$username = '';
$password = '';

// PDOオブジェクトを作成し、データベースに接続
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// POSTされたデータを取得
$content = $_POST['content'];

// メッセージをデータベースに挿入
$stmt = $pdo->prepare('INSERT INTO messages (content) VALUES (:content)');
$stmt->execute(['content' => $content]);