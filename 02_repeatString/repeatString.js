const repeatString = function(str,num) {
	if(num <0)return 'ERROR';
	let my_result = "";
	for(let i=0;i<num;i++){
		my_result+=str;
	}

	return my_result; 
};

// Do not edit below this line
module.exports = repeatString;
