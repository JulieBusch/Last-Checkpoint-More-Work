function alternate(func){
	var alternator = false;
	function inny(){
		alternator = !alternator;
		if(alternator){
			return func();
		}
	}
	return inny;
}

function twice(func){
	var count = 0;
	function inny(){
		count++;
		if(count <= 2){
			return func();
		} else {
			return 0;
		}
	}
	return inny;
}