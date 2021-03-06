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
	updateFromKeyboard();
	updateSoldiers();
	renderer.render(scene, camera);
}

function initializeGL(){
	clock = new THREE.Clock();
	keyboard = new KeyboardState();

	camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
	camera.position.z = 250;
	
	renderer = new THREE.WebGLRenderer();
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(canvas.width, canvas.height);
	
	scene = new THREE.Scene();
	scene.add(light);

	container = document.getElementById('ThreeJS');
	container.appendChild(renderer.domElement);

	soldier = new Soldier();
	scene.add(soldier);

	cursor = new Cursor();
	scene.add(cursor);

	soldiers = loadSoldiersIntoArray();
}
function loadSoldiersIntoArray(){
	var soldiers = [];
	for(var i = 0;i < 5000; i++){
		var randomX = Math.floor((Math.random() * 500) - 250);
		var randomY = Math.floor((Math.random() * 500) - 250);
		soldiers.push(new Soldier());
		scene.add(soldiers[i]);
		soldiers[i].position.x = randomX;
		soldiers[i].position.y = randomY;
	}
	return soldiers;
}

function updateFromKeyboard() {
	keyboard.update();
	var moveDistance = 50 * clock.getDelta();

	var pressed = false;
	if (keyboard.pressed("left")) {
		cursor.translateX(-moveDistance);
		pressed = true;
	}
	if (keyboard.pressed("right")) {
		cursor.translateX(moveDistance);
		pressed = true;
	}
	if (keyboard.pressed("up")) {
		cursor.translateY(moveDistance);
		pressed = true;
	}
	if (keyboard.pressed("down")) {
		cursor.translateY(-moveDistance);
		pressed = true;
	}
	// controls.update();
	//stats.update();
	return pressed;
}

function updateSoldiers() {
	for(var i = 0; i < soldiers.length; i++){
		var vector = getVectorBetween(soldiers[i], cursor);
		soldiers[i].translateX(0.5 * vector[0]);
		soldiers[i].translateY(0.5 * vector[1]);
	};
}