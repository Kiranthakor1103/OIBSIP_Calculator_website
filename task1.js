let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenvalue = "";
for(item of buttons)
{
 item.addEventListener("click", (e)=>{
 buttonText = e.target.innerText;
 if(buttonText == "AC")
 {
 screenvalue = "";
 screen.value = screenvalue;
 }
 else if (buttonText == "=")
 {
 screen.value = eval(screenvalue); 
 }
 else if(buttonText == " " )
 { 
 screenvalue = screenvalue.substring(0, screenvalue.length - 1); 
 screen.value = screenvalue;
 }
 else
 {
 screenvalue += buttonText;
 screen.value = screenvalue;
 }
 })
}