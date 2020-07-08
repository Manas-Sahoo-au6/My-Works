var fn = document.getElementById('name');
var em = document.getElementById('email');
var frm = document.querySelector('form');
var nm = document.getElementById('name1')
var el = document.getElementById('email1')
// var element;
// element = document.all(19);
// console.log(element);



frm.addEventListener('submit', function(){
    nm.textContent = ("Name : " + fn.value);
    el.textContent = ("Email Id : " + em.value);
    //nm.textContent = fn.value;
    //el.textContent = em.value;
    document.write("name = " + fn.value + "</br>");
    document.write("email = " + em.value);
});