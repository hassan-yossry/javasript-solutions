const findTheOldest = function(people) {
	return people.reduce((oldest,curr)=>{
		
		let oldest_age = 0;
		let date = new Date();

		if(oldest.yearOfDeath){
		    oldest_age = oldest.yearOfDeath-oldest.yearOfBirth;
		}
		else{
		    oldest_age = date.getFullYear()-oldest.yearOfBirth;
		}
		let curr_age=0;
		if(curr.yearOfDeath){
		    curr_age = curr.yearOfDeath-curr.yearOfBirth;
		}
		else{
		    curr_age = date.getFullYear()-curr.yearOfBirth;
		}
		if(curr_age>oldest_age) return curr;
		return oldest; 

	})

};

// Do not edit below this line
module.exports = findTheOldest;
