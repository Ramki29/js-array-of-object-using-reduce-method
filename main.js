const numberss = [1, 2, 3, 4, 5];	

let sumNumber=numberss.reduce(function(a,b)
	{
	return a+b*2;
	},10)
	console.log(sumNumber);