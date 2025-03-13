function addToDisplay(input){
const display = document.getElementById("display");
    display.value += input ;
}
function clear1(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value)
    }
     catch(error){
        display.value="Error";     }
     
}
function back(){
    var ev=document.getElementById("display");
    ev.value=display.value.slice(0,-1);
}