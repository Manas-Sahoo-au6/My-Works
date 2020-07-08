// finding the second largest eelementt inside the array 
var arr = [10, 20 , 15 , 65 ,12 , 14];
var large =arr[0];
var nextLarge =arr[0];

for (var i = 0 ; i<= arr.length ; i++){

    if(large < arr[i]){
        nextLarge= large;
        large= arr[i];
    } 
     else if(arr[i] > nextLarge && arr[i] != large )
     nextLarge = arr[i];


        
        
   
}
console.log(' second largest in the array is: ' + nextLarge);
