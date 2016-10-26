function vowelsCount(str){
	var vowelArr = [];
	var vowels = "aeiou";

	for(var i = 0; i < str. length; i++){
		if(vowels.indexOf(str.charAt(i).toLowerCase()) !== -1){
			vowelArr.push(str.charAt(i));
		}
	}
	return vowelArr.length;
}