
var fn = document.getElementById('name');
var em = document.getElementById('email');
var frm = document.querySelector('button');
var nm = document.getElementById('name1')
var el = document.getElementById('email1')


 function myfunction(){
  nm = document.Form.nameid.value;
 em = document.Form.emailId.value;
  //nm.textContent = fn.value;
  //el.textContent = em.value;
  document.write("name = " + nm.textContent + "</br>");
  document.write("email = " + em.textContent);
};  

