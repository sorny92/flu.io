function getVectorBetween(origin, objective) {
	var unitaryVector = [0,0];
	var originX = origin.position.x;
	var originY = origin.position.y;
	var objectiveX = objective.position.x;
	var objectiveY = objective.position.y;
	
	var y = objectiveY - originY;
	var x = objectiveX - originX;
	
	var module =  Math.sqrt(y*y +x*x);
	unitaryVector[0]=x/module;
	unitaryVector[1]=y/module;
	return unitaryVector;
}