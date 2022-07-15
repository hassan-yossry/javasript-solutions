const caesar = function(str,num) {
	return str.split("").map(itm=>{
		let result = '';
		if(!(/^\w$/.test(itm))){
		   result = itm;
		}else{
		   let charCode = itm.toLowerCase().charCodeAt(0)+num;
		   const start = 'a'.charCodeAt(0);
		   const end = 'z'.charCodeAt(0)
		   const delta = end-start + 1;
		   while(charCode<start){
		       charCode+=delta;
		   }
		   while(charCode>end){
		       charCode-=delta;
		   }
		   result = String.fromCharCode(charCode);
		   if(/^[A-Z]$/.test(itm))result = result.toUpperCase();
		}
		return result;
	}).join("")

};
console.log(caesar('Ass',3));
// Do not edit below this line
module.exports = caesar;
