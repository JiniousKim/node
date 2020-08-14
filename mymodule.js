exports.abs = function (number) {
		if (0 <number) {
			return number;
		}

		return -number;
}

exports.circleArea = function (radius) {
	return radius * radius * Math.PI;
}
