var removebutton = $("#del")
var arr = [];
function todo(){
alert("Type 'stop' to stop entering data" )
    for( var i=0; i<10; i++){
        var entry = prompt("Enter a todo") 
        if(entry!="stop"){
            if( entry!= ""){
                $(".stack").prepend(`<div>${entry}</div>`);
                $(".stack div").css({            
                    "font-size" : "30px",
                    "font-family" : "Roboto",
                    "color": "white",
                    "text-align": "center",
                    "font-weight": "bold",
                    "padding-top": "10px",
                    "width" : "400px",
                    "height" : "50px",
                    "border" : "3px solid red",
                    "background" : "black",
                    "margin" : "10px 0" 
                });

            }else{
                alert("you havenot enternd anything!!, LOL");
            }
        }
        else{
            break;
        }
    }
    removebutton.css("display", "block");    
}
function remove(){
    var first = document.querySelector(".stack");
    if(first.textContent == ""){
        removebutton.remove();
    }else{
        var x =$(".stack").children()[0];
        $(x).fadeOut("slow", function(){
            this.remove();
        })
        
    }
}