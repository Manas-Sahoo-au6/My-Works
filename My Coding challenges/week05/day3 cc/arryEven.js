
function getEven(arr){
	var evenArray = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]%2==0){
			evenArray.push(arr[i]);
		}
	}
	return evenArray;
}
array=[1,2,3,4,5,6];
console.log(getEven(array));