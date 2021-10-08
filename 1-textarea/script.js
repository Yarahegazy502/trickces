var icons = document.querySelectorAll(".icon");
// console.log(icons);
const textarea = document.getElementById("screen");

icons.forEach((el)=>{
    // console.log(el);

    // onclick all icons
    el.onclick=function(){
        console.log(el.getAttribute("id"));
        //check if textarea use class left or right
        if(el.getAttribute('id')=="left"){
            textarea.classList.remove("right");

        }
        if(el.getAttribute('id')=="right"){
            textarea.classList.remove("left");}

            //add to textarea class name = value id
        textarea.classList.add(el.getAttribute("id"));
    }

   

    //onchange

    el.onchange=function(){
        console.log(el.value);

     if(el.getAttribute("id")=="number"){
        
        textarea.style.fontSize=el.value+"px";

     }
     if(el.getAttribute("id")=="color"){
        textarea.style.color=el.value;

     }
    }
})



