// ▼▼▼　Slider　▼▼▼
const images = [
    {src: "./images/ai/diary.jpeg", link: "#"},
    {src: "./images/ai/シュルク.jpeg", link: "#"},
    {src: "./images/ai/四神.jpeg", link: "#"},
]

let current = 0;

function arrayGoNext(){
    // 準備
    current = (current + 1) % images.length;
    const imageElement = document.getElementById("image");
    const linkElement = document.getElementById("link");

    // 実行
    imageElement.src = images[current].src;
    linkElement.href = images[current].link;
}

setInterval(arrayGoNext, 3000);
// ▲▲▲　Slider　▲▲▲




// ▼▼▼  3D描画  ▼▼▼
// シーンの作成
const scene = new THREE.Scene();

// カメラの作成 (視野角, アスペクト比, 近くの範囲, 遠くの範囲)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// レンダラーの作成
const renderer = new THREE.WebGLRenderer({ alpha: true });//alpha: true：背景の不透明度を0％にする
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);//背景色を無色に指定する
document.body.appendChild(renderer.domElement);

// オブジェクトの作成 (例: ボックスジオメトリ)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// カメラの位置設定
camera.position.z = 5;

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);

    // オブジェクトを回転させる
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // シーンをレンダリング
    renderer.render(scene, camera);
}
animate();
// ▲▲▲  3D描画  ▲▲▲