var cursorRadius = 2;
var cursorSegments = 0;

var material = new THREE.MeshBasicMaterial({ 
	color: 0x80c342, 
	shading: THREE.SmoothShading 
});

var geometry = new THREE.CircleGeometry(
	cursorRadius, 
	cursorSegments );

function Cursor(){
    return new THREE.Mesh(geometry, material);
}
