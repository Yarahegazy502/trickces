var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
var td = Array.from(document.querySelectorAll("td"));
// when click in player1 add x in any td
player1.addEventListener("click",()=>{
    console.log("player1");
        var r = Math.ceil(Math.random()*10)-1;
        console.log(td[r]);
        if(td[r].innerHTML==""){
            td[r].innerHTML="X";
            }
         var arrX=[];
         console.log(r);
         console.log(arrX);
         arrX.push(r);
        //  console.log(r);
         console.log(arrX);  
            
            console.log(td[r].parentElement);
        
})
// when click in player2 add o in any td
player2.addEventListener("click",()=>{
        var r = Math.ceil(Math.random()*10)-1;
        if(td[r].innerHTML==""){
        td[r].innerHTML="O";
        }
})