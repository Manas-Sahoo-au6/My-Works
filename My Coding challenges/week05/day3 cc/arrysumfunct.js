function sumArray(arr){
    var i = 0; 
    var sum = 0;
    while (i < arr.length){
    
         sum = sum + arr[i] ;
      
      
        i = i + 1;
        
      
    }
    return sum;
}
array = [12,10,2,4];
console.log(sumArray(array));