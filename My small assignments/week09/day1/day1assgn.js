/*Create a function inside Array called returnSumOfNumber which takes a parameter 
of the number added with each value, that would return a new array
 with each value added with 10
Example: 
[1, 2, 3, 4].returnSumOfNumber( 5 )  => [6, 7, 8, 9]
[].returnSumOfNumber(10) => []
[2, 4, null, ‘abc’, true].returnSumOfNumber( 6 ) => [8, 10, null, ‘abc6’, 7] */


//problem 1
Array.prototype.returnSumOfNumber=function(number){
	var arr1=[]
    for(var i=0;i<this.length;i++){
		if(typeof this[i] ==="number"){
			arr1.push(this[i]+number)
		}
	else{
		arr1.push(this[i])
	}
	}
	return arr1
}
var answerA=[1,2,3,4].returnSumOfNumber(5)
console.log(answerA)

var answerB=[2, 4, null, "abc", true].returnSumOfNumber( 6 ) 
console.log(answerB)

//adding it to dom
// document.querySelector('.answer1').innerHTML=`<h2><ul>${answerA}</ul></h2><h2><ul>${answerB}</ul></h2></br>`






//problem 2
//to create our own map method for Array

// Array.prototype.mapMe = function(){}

Array.prototype.mapMe = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}
// return `I am the element ${element} present in index ${index}`;})
var result1=[1, 2, 3, 4].mapMe(function(val, index) {
	return val * 20+" "+"I am Cool";
   });
   
var result2=[1, 2, 3, 4].mapMe(function(val, index) {
	return `I am the element ${"element"} present in index ${index}`;});

var result3=[{ name: 'Sundeep', id: 1, field: 'Computer'},
	{ name: 'Aryan', field: 'Biology', id: 2 },
	{ name: 'Anjali', id: 3, field: 'Commerce' }].mapMe(function (val, index) {
	return `${val.id}: ${val.name} I am Cool`
	});
	


console.log(result1)
console.log(result2)
console.log(result3)



//adding to DOM

// document.querySelector('.answer2').innerHTML=`<h2><ul>${result1}</ul></h2><h2><ul>${result2}</ul></h2><h2><ul>${result3}</ul></h2><br><small>Check console</small>`

