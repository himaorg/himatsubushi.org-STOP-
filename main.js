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
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';

// 基本設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 環境光の追加
const light = new THREE.AmbientLight(0x404040, 2); // 色と強度
scene.add(light);

// GLTF形式のモデルデータを読み込む
const loader = new GLTFLoader();
// GLTFファイルのパスを指定
const gltf = await loader.loadAsync('./3D-Model/ウナ.gltf');
// 読み込み後に3D空間に追加
const model = gltf.scene;
scene.add(model);
camera.position.z = 5;

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// ▲▲▲  3D描画  ▲▲▲