'use strict';

/**
 * Convert a number to a string
 * @param {Num} number to convert
 *
 * @return {String} string representation of the number
 */
function run(Num) {
	if (typeof Num === "number") {
		var string = Num.toString();
		return {String:string};
	}
	else if (Array.isArray(Num)===true) {
		var array = [];
		var i;
		for (i=0; i<Num.length; i++) {
			if (Num[i] === null) {
				array[i] = null
			}
			else {
				array[i] = Num[i].toString();
			}
			
		}
		return {String:array}
	}
	else {
		return "Not a valid input. Please feed in a number or array.";
	}
}

module.exports = {
    run: run
};
