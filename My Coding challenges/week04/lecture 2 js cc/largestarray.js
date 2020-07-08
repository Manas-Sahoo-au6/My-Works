//largest number of the given array 
var arr = [10, 20 , 55 , 65 ,12 , 14];
var large =arr[0];

for (var i = 0 ; i<= arr.length ; i++){

    if(large < arr[i]) 
        large = arr[i];
   
}
console.log('largest among the array is: ' + large);








