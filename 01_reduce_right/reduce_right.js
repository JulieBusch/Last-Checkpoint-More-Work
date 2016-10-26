function reduceRight(arr, start, func){
	var current = start;

	for (var i = arr.length-1; i >= 0; i--){
		current = func(current, arr[i]);
	}
	return current;
}

function reduceRightRecursive(arr, start, func){
	var current = start;

	if (arr.length===1){
		return func(current, arr[0]);
	} else {
		current += reduceRightRecursive(arr.slice(1), current, func);
	}

	return current;
}
