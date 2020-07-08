var i=1;
var attendencePercent=[] ;
var array = []
while (i <= 10){
    attendencePercent.push(window.prompt("please enter the attendence percentage of the student :-  "));
  
   i = i+1 ;
}
for(var j=0;j<attendencePercent.length;j++){
    if (attendencePercent[j] <= 100){
        if(attendencePercent[j]>80 && attendencePercent[j]<=100){
            element = {attendance: attendencePercent[j],stipend:"Rs 5000"}
            array.push(element)
        }
        else if(attendencePercent[j]>60 && attendencePercent[j]<=80){
            element = {attendance: attendencePercent[j],stipend:"Rs 3500"}
            array.push(element)
        }
        else if(attendencePercent[j]>40 && attendencePercent[j]<=60){
            element = {attendance: attendencePercent[j],stipend:"Rs 2000"}
            array.push(element)
        }
        else if(attendencePercent[j]<40 ){
            element = {attendance: attendencePercent[j],stipend:"Rs 500"}
            array.push(element)
        }
      
    }
    else{
        alert(" ivalid student attendence percenetage !")
    }   
 }

 console.log(array);