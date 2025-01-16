function getClockAngle(ax: number, ay: number, bx: number, by: number) {
	const dy = by - ay;
	const dx = bx - ax;
	let theta = Math.atan2(dy, dx);
  
	theta *= 180 / Math.PI;
	theta += 90;
  
	if (theta < 0) {
	  theta += 360;
	}
  
	return theta;
  }
  
  export default function getNearestPointToIndex({
	ax,
	ay,
	bx,
	by,
  }: {
	ax: number;
	ay: number;
	bx: number;
	by: number;
  }): number {
	const angle = getClockAngle(ax, ay, bx, by);
  
	const inaccuracy = 30;

	switch (true) {
		case (angle - 30 <= inaccuracy):
		  	return 1;
		case (angle - 90 <= inaccuracy):
		  	return 2;
		case (angle - 150 <= inaccuracy):
		  	return 3;
		case (angle - 210 <= inaccuracy):
		  	return 4;
		case (angle - 270 <= inaccuracy):
		  	return 5;
		case (angle - 330 <= inaccuracy):
		  	return 6;
		default:
		  	return 0;
	}
  
	// if (angle - 30 <= inaccuracy) {
	//   return 1;
	// } else if (angle - 90 <= inaccuracy) {
	//   return 2;
	// } else if (angle - 150 <= inaccuracy) {
	//   return 3;
	// } else if (angle - 210 <= inaccuracy) {
	//   return 4;
	// } else if (angle - 270 <= inaccuracy) {
	//   return 5;
	// } else if (angle - 330 <= inaccuracy) {
	//   return 6;
	// } else {
	//   return 0;
	// }
}