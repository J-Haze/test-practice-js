const calculator = (() => {

	const add = (a,b) => a + b;

	const subtract = (a,b) => a - b;
	
	return {
		add,
		subtract
	}

})();

module.exports = calculator;