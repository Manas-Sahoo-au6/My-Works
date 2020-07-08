// print the even  and odd number from 100 to 1
var counter = 100;

while(counter >= 0){
    if (counter % 2 ==0){
        console.log('the even no is:' + counter);

    }
    else {
      console.log('the odd number is ' + counter);
    }
    counter = counter-1;
}