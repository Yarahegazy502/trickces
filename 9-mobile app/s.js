const main = document.querySelector("#main");
const slides = document.querySelector(".slides");
const box=document.querySelectorAll(".box");


let width= box[0].offsetWidth +30;
console.log(width);
console.log(box.length*width);
slides.style.minWidth=`${box.length*width}px`

let start,change;
main.addEventListener("dragstart",(e)=>{
    start= e.clientX;
    console.log(start);
})
main.addEventListener("dragover",(e)=>{
    e.preventDefault;
    let touch= e.clientX;
    change=start-touch;
})
main.addEventListener("dragend",sliderShow)

main.addEventListener("touchstart",(e)=>{
    start= e.touches[0].clientX;
    console.log(start);
})
main.addEventListener("touchmove",(e)=>{
    e.preventDefault;
    let touch= e.touches[0];
    change=start-touch.clientX;
})
main.addEventListener("touchend",sliderShow)

function sliderShow(){
    if(change>0){
        main.scrollLeft+=width;
    }else{
        main.scrollLeft-=width;

    }
}

