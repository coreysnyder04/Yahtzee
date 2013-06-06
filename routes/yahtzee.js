

exports.chance = function(){
	var res =0;
	for (var i=0; i< arguments.length; i++){
		res += arguments[i];
	}

	return res;
}

exports.checkYahtzee = function(){
	var allSame = true;
	var toMatch = arguments[0];
	console.log(arguments);

	for( var i=0; i < arguments.length; i++){
		//console.log(i,arguments[i]);

		if(arguments[i] != toMatch){
			allSame = false;

		}
	}


	if(allSame){
		return 50;
	}else{
		return 0;
	}

}

exports.checkSingles = function(rolls,checker){

	var sum =0;
	for(var i=0; i< rolls.length; i++){
		if (rolls[i]==checker)
			sum += rolls[i];
	}
	return sum;
}

exports.checkPair = function(){
	return 0;
}