const removeFromArray = function(arr,...elms) {
	return arr.filter(ele=>!elms.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
