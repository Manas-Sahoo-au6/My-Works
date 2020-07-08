function mobileCheck(number){
    
    var stringNumber = number.toString();
    var stringNumberLength = stringNumber.length;

    numDigit4 = Number(stringNumber.charAt(4));
    numDigit5 = Number(stringNumber.charAt(5));
    numDigit6 = Number(stringNumber.charAt(6));

    if(stringNumberLength == 10){
        if(stringNumber.charAt(0)==9||stringNumber.charAt(0)==8||stringNumber.charAt(0)==7){
           if((numDigit4+numDigit5+numDigit6) >= 25){
                console.log("Not a valid mobile number");
           }else{
               console.log("Valid mobile number");
           }
        }else{
            console.log("Not a valid mobile number");
        }
     }else{
        console.log("Not a Valid mobile number");
     }

}


mobileCheck(8979290271);