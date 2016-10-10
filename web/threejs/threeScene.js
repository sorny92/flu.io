//Configuration variables
var container, controls, stats, renderer;
var clock, keyboard, scene, camera;
var canvas = {
	width:700,
	height:600
};

//Game variables
var soldiers = [];
var soldier;
/********************
UNCOMMENT FOR Qt DEPLOYMENT
Qt.include("three.js")
Qt.include("soldier.js")
Qt.include("cursor.js")
Qt.include("light.js")

delete canvas;

********************/

initializeGL();

render();

function render() {
	requestAnimationFrame(render);
	//moveBots();
	renderer.render(scene, camera);
}

function initializeGL(){
	clock = new THREE.Clock();
	keyboard = new KeyboardState();

	camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.position.z = 50;
	
	renderer = new THREE.WebGLRenderer();
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(canvas.width, canvas.height);
	
	scene = new THREE.Scene();
	scene.add(light);

	container = document.getElementById('ThreeJS');
	container.appendChild(renderer.domElement);

	soldier = new Soldier;
    scene.add(soldier);
}

function updateFromKeyboard() {
	keyboard.update();
	var moveDistance = 50 * clock.getDelta();

	var pressed = false;
	if (keyboard.pressed("left")) {
		human.translateX(-moveDistance);
		pressed = true;
	}
	if (keyboard.pressed("right")) {
		human.translateX(moveDistance);
		pressed = true;
	}
	if (keyboard.pressed("up")) {
		human.translateZ(-moveDistance);
		pressed = true;
	}
	if (keyboard.pressed("down")) {
		human.translateZ(moveDistance);
		pressed = true;
	}
	// controls.update();
	stats.update();
	return pressed;
}
