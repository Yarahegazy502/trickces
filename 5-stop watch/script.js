var btn = document.querySelectorAll("button");
var hours = document.getElementById("hours");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var stop = document.getElementById("stop");
var start = document.getElementById("start");
var reset = document.getElementById("reset");
var time = document.getElementById("time")

var hrs=0;
var min=0;
var sec=0
var timer
// var timer = setInterval(()=>{
   function startTimer() {
   if(sec<=59){
       if(sec>9){
        seconds.innerText=sec;
      
       }else{
        seconds.innerText="0"+sec;
        
       }
       sec++;

   }else{
       if(min<=59){
         if(min>9){
         min+=1;
         minutes.innerText=min;
       }else
       {
        min+=1;
        minutes.innerText="0"+min;
        
       }
    }else{
        if(hrs<=24){
            if(hrs>9){
            hrs+=1;
            hours.innerText=hrs;
          }else
          {
           hrs+=1;
           hours.innerText="0"+hrs;
           
          }
      //  }
          
          min=0;
      
      }
    }
       
       sec=0;

   

   }
   //////////////////



}
 
start.addEventListener("click",()=>{
    timer = setInterval(startTimer,100)
})
stop.addEventListener("click",()=>{
    clearInterval(timer);
})



reset.addEventListener("click",()=>{
    clearInterval(timer);
    hrs=0;
    min=0;
    sec=0;
    hours.innerText="00";
    minutes.innerText="00";
    seconds.innerText="00";
    // hours.innerText=hrs<10?"0"+hrs:hrs;
    // minutes.innerText=min<10?"0"+min:min;
    // seconds.innerText=sec<10?"0"+sec:sec;

})
