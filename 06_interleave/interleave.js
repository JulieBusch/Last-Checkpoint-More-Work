function interleave(){
	var final = "";
	var strings = [].slice.call(arguments);
	var j = 0;
	for (var i = 0; i < strings.length; i++){
		if(strings[i].charAt(j)!==undefined){
			final += strings[i]charAt(j);
			j++;
		}	
	}
	return final;
}

/* I spent too long obsessing over other questions 
and now I'm running out of time. I just don't understand why 
in some of these specs I'm failing the "is a function" test.
I am writing functions. It makes no sense to me. That's a function.
I think I was just too nervous about this test and I did very poorly. */