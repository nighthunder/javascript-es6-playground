function multiply(num1, num2, cb) {
	cb(num1);
	return num1 * num2;
}

multiply(5, 5, async (input) => { 
	let fact = await fetch("<http://numbersapi.com/>" + input + "/math?json=true");
	let res = (await fact.json()).text;
	console.log(res);
});