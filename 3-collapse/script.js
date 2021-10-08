const paragraphs = document.querySelectorAll(".p");
const collapse = document.querySelectorAll(".collapse h3 a");

const collapses = document.querySelectorAll(".collapse");
const collapsesss = Array.from(collapses);

console.log(collapsesss);

const ps = Array.from(paragraphs);
const cols = Array.from(collapse);
// console.log(paragraphs);
// console.log(collapse);

// paragraphs.forEach((p)=>{ 
// p.style.display="none";
// })
// let count=1;
collapse.forEach((item)=>{

    // console.log(item.getAttribute("id"));
    item.addEventListener("click",()=>{
        // console.log(item.getAttribute("id"));
        paragraphs.forEach((el)=>{
            el.classList.remove("active");
        })
       
        document.getElementById("x"+item.getAttribute("id")).classList.toggle("active");
        // console.log(cols.indexOf(item))

        // if(cols.indexOf(item)===ps.indexOf(item)){
        //     // document.getElementById("x"+item.getAttribute("id")).classList.add("active");
        //     // console.log("true");
        // }else{
        // //     document.getElementById("x"+item.getAttribute("id")).classList.remove("active");
        // // console.log("false");
        // }

         


        


    })
    
     
})