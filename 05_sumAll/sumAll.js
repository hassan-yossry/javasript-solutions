const sumAll = function(start,end) {
	if(typeof start != "number") return "ERROR";
	if(typeof end != 'number') return "ERROR";
	if(start>end)[start,end]=[end,start];
	if(start<0)return "ERROR";
	let result=0;
	for(let i=start;i<=end;i++){
		result+=i;
	}
	return result;
};

// Do not edit below this line
module.exports = sumAll;
