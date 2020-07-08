function smallestOf(arr1,arr2){
	var smallest_element = arr1[1];

	for (var i = 0; i < arr1.length; i++) {
		if(arr1[i]<smallest_element){
			smallest_element = arr1[i]
		}
	}
	for (var i = 0; i < arr2.length; i++) {
		if(arr2[i]<smallest_element){
			smallest_element = arr2[i]
		}
	}
	return smallest_element

}

array1=[11,5,7,9,10,4,9,1]
array2=[12,3,8,10,11,2,12]
console.log(smallestOf(array1,array2));
