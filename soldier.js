var soldierRadius = 2;
var soldierSegments = 0;

var material = new THREE.MeshBasicMaterial({ 
	color: 0x80c342, 
	shading: THREE.SmoothShading 
});

var geometry = new THREE.CircleGeometry(
	soldierRadius, 
	soldierSegments );

function Soldier(){
    return new THREE.Mesh(geometry, material);
}
