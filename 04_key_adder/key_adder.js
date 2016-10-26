function keyAdder(){
	sum = 0;
	for (var key in this){
		if(this.hasOwnProperty(key)){
			if(typeof this[key] === "number"){
				sum += this[key];
			}
		}
	}
	return sum;
}