const fibonacci = function(n) {
    if(n<0)return "OOPS";
    let prev = 0;
    let curr = 1;
    for(let i=1;i<n;i++){
	let tmp = prev + curr;
        prev = curr;
	curr =tmp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
