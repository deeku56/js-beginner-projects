const display =document.getElementById("display");
const buttons=document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        const value=button.textContent;
        if(value==="C"){
            display.value="";
            return;
        }
        if(value==="="){
            try{
                display.value=eval(display.value);
            }
            catch{
                display.value="error";
            }
            return;
        }
        display.value+=value;
    });
});