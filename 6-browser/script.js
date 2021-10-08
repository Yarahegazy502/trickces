var go=document.getElementById("go");
var input=document.querySelector(".input");
var icons=document.querySelectorAll(".icons span");
var iframe=document.querySelector("iframe");

input.addEventListener("click",()=>{
    console.log(1011);
    iframe.setAttribute("back",input.value)
})

// input.onchange=()=>{
//     iframe.setAttribute("previous",input.value)
// }

go.addEventListener("click",()=>{
    // console.log(input.value);
    // go();
console.log(input.value);
    iframe.setAttribute("forward",iframe.getAttribute("src"))
    iframe.setAttribute('src',input.value);   
})

icons.forEach((i)=>{
    // console.log(icon.id);
    let icon = i.id;
    i.addEventListener("click",()=>{
        if(icon=="reload"){
            // go();
           
            iframe.setAttribute('src',input.value)
        }
        else if(icon=="back"){
            // iframe.src=iframe.back;
            iframe.setAttribute("src",iframe.getAttribute("back"))

        }
        else if(icon=="forward"){
            iframe.setAttribute("src",iframe.getAttribute("forward"))}
    })
})







// back.addEventListener("click",()=>{
//     history.back()
// })

// forward.addEventListener("click",()=>{
//     history.forward()
// })

// reload.addEventListener("click",()=>{
//     location.reload();
//     // console.log(history.length);
//     })