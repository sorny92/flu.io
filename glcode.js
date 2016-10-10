Qt.include("three.js")
Qt.include("soldier.js")
Qt.include("cursor.js")
var camera, scene, renderer;
var soldiers = [];
var soldier;

function initializeGL(canvas) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.position.z = 50;


    soldier = new Soldier;
    scene.add(soldier);

    renderer = new THREE.Canvas3DRenderer(
                { canvas: canvas, antialias: true, devicePixelRatio: canvas.devicePixelRatio });
    renderer.setSize(canvas.width, canvas.height);

}

function resizeGL(canvas) {
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(canvas.devicePixelRatio);
    renderer.setSize(canvas.width, canvas.height);
}

function paintGL(canvas) {
    soldier.position = soldier.p
    renderer.render(scene, camera);
}

function initializeGame(){
}