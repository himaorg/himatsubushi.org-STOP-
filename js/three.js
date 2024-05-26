let scene, camera, renderer, cube;

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        65,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

// 「WebGLRenderer」を「webGLRenderer」と記述していたために、何日か時間を無駄にしてしまった。
    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2 , 2 ,2);
    // material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const texture = new THREE.TextureLoader().load("/10.images/textures/133.png");
    const material = new THREE.MeshBasicMaterial({ map: texture });
  
    cube = new THREE.Mesh(geometry, material, texture);
    scene.add(cube);
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, innerHeight);
}

window.addEventListener("resize", onWindowResize);

init();
animate();