var names = document.getElementById('city');
var letter = document.querySelector('#state');
var frm11 = document.querySelector('#frm1');
var frm22 = document.getElementById('frm2');


frm11.addEventListener('submit', function(e){
 e.preventDefault();
    URL = "https://api.jsonbin.io/b/5e25cca6b236b871b36550d4";
    fetch(URL).then(function (response){
    return response.json();
    }).then(function (data){        
        var showstate = '';              
        for(var i=0; i<data.length;i++)
        {
            if(data[i].state == names.value)
            {
                showstate+= data[i].name+ "<br/>"  ;
                
            }                     
        } $('#content').append(`<div>  ${showstate}  </div>`);
               
    });
})

frm22.addEventListener('submit', function(e){
    e.preventDefault();
       URL = "https://api.jsonbin.io/b/5e25cca6b236b871b36550d4";
       fetch(URL).then(function (response){
       return response.json();
       }).then(function (data){ 
 
       var showcity = '';        
       
       for(var i=0; i<data.length;i++)
       {
           if(data[i].name[0]==letter.value)
           {
               showcity+= data[i].name + "<br/>" ;               
           }          
       }
         $('#content2').append(`<div>  ${showcity}  </div>`);         
                  
       });
   })


