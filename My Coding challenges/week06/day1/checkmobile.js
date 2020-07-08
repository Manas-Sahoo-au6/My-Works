var number = [9,0,1,6,9,9,4,2,5,7];


if(number.length = 10)
{
  if(number[0]==9 || number[0] == 8 || number[0] == 7)
    {
        var sum = number[4]+number[5]+number[6];
        if(sum<=25)
        {
            console.log("the valid mobile number is" + ": " + number);
            
        }

    }
    else
    {
        console.log('sorry the given mobile number is invalid');
    }
}
else
{
    console.log('sorry the given mobile number is invalid');
}