//console.log("testing")



//Create a prototype in Object called addCola,
//that adds a simple cola text for every property.
//{ a: 1, b: 2, c: 3 } = { a: ‘1 Cola’, b: ‘2 Cola’, c: ‘3 Cola’ }

//first problem
Object.prototype.addCola=function(){
//ar arrObj=[]
var keys =Object.keys(this)
// console.log(key)

for(var i=0;i<keys.length;i++){

    var key=Object.keys(this)[i]
    this[key]+="cola"
    
}
return this      
}

var obj1= { a: 1, b: 2, c: 3 }.addCola()
console.log(obj1)
var docObj=JSON.stringify(obj1)



//second Problem
String.prototype.placeMeAlternatively=function(word){
   var arr1=this.split('')
   var numString=word.toString()
   var arr2=numString.split('')
   var arrFinal=[];
if(typeof(word)=="string"){
if(arr2.length<arr1.length){
    for(var i=0;i<arr1.length;i++){
        arrFinal.push(arr1[i]);
        arrFinal.push(arr2[i]);
    }return arrFinal.join('')
}else{
    for(var i=0;i<arr2.length;i++){
        arrFinal.push(arr1[i]);
        arrFinal.push(arr2[i]);
    }return arrFinal.join('')
}
}else{
    return this
}
}

//calling
var str1= 'apple'.placeMeAlternatively("grape")
console.log(str1)
var str2= 'orange'.placeMeAlternatively(23)
console.log(str2)
var str3= 'stark'.placeMeAlternatively("ironman")
console.log(str3)



//adding it to the DOM
document.querySelector(".answer1").innerHTML=`<li>${docObj}</li>`
document.querySelector(".answer2").innerHTML=`<li>${str1}</li><li>${str2}</li><li>${str3}</li><br>`