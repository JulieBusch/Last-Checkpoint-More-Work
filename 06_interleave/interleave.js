function interleave(){
	var strings = [].slice.call(arguments);
	var i = 0;
	var final = "";
	strings = strings.sort(function(a, b) {return b.length - a.length;});
	function iterator(){
		while (i < strings.length){
			for (var j = 0; j < strings[0].length; j++){
			final += strings[i][j];
			}
			i++;
		}
	}
	return final;
}
