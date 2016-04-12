'use strict';

/**
 * Code block template.
 *
 */
function run(num) {
	if (typeof num === "number") {
		var string = num.toString();
		return {string:string};
	}
	else if (Array.isArray(num)===true) {
		var array = [];
		var i;
		for (i=0; i<num.length; i++) {
			if (num[i] === null) {
				array[i] = null
			}
			else {
				array[i] = num[i].toString();
			}
			
		}
		return {string:array}
	}
	else {
		return "Not a valid input. Please feed in a number or array.";
	}
}

module.exports = {
    run: run
};
