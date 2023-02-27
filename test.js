describe("isIsogram", function() {

  	it("No repeating letters in Dermatoglyphics", function() {
    	assert.equal(isIsogram('Dermatoglyphics'), true);
 	});

  	it("Repeating letters in moose", function() {
		assert.equal(isIsogram('moose'), false);
	});

	it("Repeating letters in moOse", function() {
		assert.equal(isIsogram('moOse'), false);
	});

	it("Repeating letters in aba", function() {
		assert.equal(isIsogram('aba'), false);
	});

});