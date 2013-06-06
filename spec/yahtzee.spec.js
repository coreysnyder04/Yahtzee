var Yahtzee = require('../routes/yahtzee.js');

describe("The Player scores a Chance", function(){

	it('should return a sum of the numbers rolled', function(){

		expect(Yahtzee.chance(1,1,3,3,6)).toEqual(14);
	});

});

describe ("The players have all the same number of dice", function(){
	it ("should return 50", function()
	{
		expect(Yahtzee.checkYahtzee(1,1,1,1,1)).toEqual(50);
	});
	it("Should return 0 when a yahtzee is not achieved", function(){

		expect(Yahtzee.checkYahtzee(2,1,1,1,1)).toEqual(0);
		expect(Yahtzee.checkYahtzee(1,2,3,4,5)).toEqual(0);
	});

});

describe ("The player scores a sum of the numbers that are equal to the one they pick", function(){

	it("Should return a sum of the numbers that match for a given number", function(){

		expect(Yahtzee.checkSingles([3,3,4,5,3],3)).toEqual(9);
		expect(Yahtzee.checkSingles([2,2,4,5,3],2)).toEqual(4);
		expect(Yahtzee.checkSingles([2,2,4,5,3],6)).toEqual(0);
	})


});

describe ("The player scrore a 'pair' ", function(){
	it ("should return sum of the pair when the match is found", function(){
	  expect(Yahtzee.checkPair(3,3,3,4,4)).toEqual(8);

	})
})
