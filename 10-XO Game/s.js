var cells = document.querySelectorAll(".cell");
var winningMessage = document.getElementById('winningMessage');
var restartBtn=document.getElementById("restartBtn");
winningMessage.innerText="";
console.log(winningMessage);
var board=[];
var turn=0;
checkWinner=()=>{
    for(var i=1;i<=9;i++)
    {
        board[i]=document.getElementById("s"+i).innerHTML;
    }
    if(board[1]==board[2]&&board[2]==board[3]&&board[1]!=""){
        winningMessage.innerText=`player ${board[1]} wins`;
    }
    if(board[4]==board[5]&&board[5]==board[6]&&board[4]!=""){
        winningMessage.innerHTML=`player ${board[4]} wins`;
    }
    if(board[7]==board[8]&&board[8]==board[9]&&board[7]!=""){
        winningMessage.innerHTML=`player ${board[7]} wins`;
    }
    if(board[1]==board[4]&&board[4]==board[7]&&board[1]!=""){
        winningMessage.innerHTML=`player ${board[7]} wins`;
    }
    if(board[2]==board[5]&&board[5]==board[8]&&board[2]!=""){
        winningMessage.innerHTML=`player ${board[8]} wins`;
    }
    if(board[3]==board[6]&&board[6]==board[9]&&board[3]!=""){
        winningMessage.innerHTML=`player ${board[9]} wins`;
    }
    if(board[1]==board[5]&&board[5]==board[9]&&board[1]!=""){
        winningMessage.innerHTML=`player ${board[9]} wins`;
    }
    if(board[3]==board[5]&&board[5]==board[7]&&board[3]!=""){
        winningMessage.innerHTML=`player ${board[7]} wins`;
    }
}
cells.forEach(cell => {
    // console.log(cell.id);
   cell.addEventListener("click",()=>{
    if(turn&&cell.innerHTML==""){
        cell.innerHTML="X";
        turn=!turn;
    }else if(cell.innerHTML==""){
        cell.innerHTML="O";
        turn=!turn;
    }
    checkWinner();
   })


});
restartBtn.onclick=()=>{
    window.location.reload();
}