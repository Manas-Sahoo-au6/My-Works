//print the star diamond shape 
var number = 5;
for (var i = 1; i<= 5; i++) {
    var sum ='';
    for (var j=1; j<= i; j++){
        sum = sum + '*';

    }
    console.log(sum);
}
for (var i =1;  i<= 5 ; i++){
    var sum = '';
    for ( var j =4 ; j >= i; j--){
        sum = sum +'*';
    }console.log(sum);
}
            
           