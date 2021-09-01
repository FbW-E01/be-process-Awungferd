import process from "process";
 const [r, s,t,...numbers] = process.argv

	if (t==="sum") {
		const addedUp = numbers.reduce((acc,val)=>{
			const curr = Number(val)
			if (isNaN(curr)) {
				console.log("Your input must all be numbers! TRY Again")
				process.exit()
			}
			return acc + curr;
		},0) 
		console.log(addedUp)
	}  
	 

   const [u, v,w,...figures] = process.argv

	if (w==="avg") {
		const addedUp = figures.reduce((acc,val)=>{
			const denominator= figures.length
			const curr = Number(val)
			if (isNaN(curr)) {
				console.log("Your input must all be numbers! TRY Again")
				process.exit()
			}
			if (w!="avg") {
				console.log("Wrong operation! Please type in avg to calculate averages")
				process.exit()
			}

			return acc + curr /denominator
		},0) 
		console.log(addedUp)
	}