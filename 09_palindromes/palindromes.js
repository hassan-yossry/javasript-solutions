const palindromes = function (input) {
	let txt = input.toLowerCase().replace(/\W/g,"");
	return txt.split("").reverse().join("")===txt;
};

// Do not edit below this line
module.exports = palindromes;
