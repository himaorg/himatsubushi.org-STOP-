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

// メッセージをデータベースから取得
$stmt = $pdo->query('SELECT * FROM messages ORDER BY created_at DESC');
$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

// JSON形式で出力
header('Content-Type: application/json');
echo json_encode($messages);