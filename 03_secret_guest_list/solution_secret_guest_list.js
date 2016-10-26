function guestListFns(arr, code){
	var funcArr = [];
	function makeFuncs(){
		for (var i = 0; i < arr.length; i++){
			var name = arr[i];
			funcArr.push(function(codeGuess){
				if(codeGuess===code){
					return name;
				} else {
					return "Secret-Code: Invalid";
				}
			});
		}
			
		
		return funcArr;
	}
	return makeFuncs();
}


/* Not sure why I'm failing the last spec for the 
function above- the specs specify that I can't 
use forEach or map, and I'm not. */



function generateGuestList(funcArray, code){
	var guestList = [];
	for (var i = 0; i < funcArray.length; i++){
		guestList.push(funcArray[i](code));
	}
	return guestList;
}

/* How is this not even coming up as a function? Not sure 
what is going on here. */