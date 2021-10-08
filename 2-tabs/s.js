var links = document.querySelectorAll("a");
// console.log(links);
var contents = document.querySelectorAll(".content div");
//convert from object to array
var linkys = Array.from(links)

var contentys= Array.from(contents)
// console.log(content);
links.forEach((e)=>{
    // onclick on link
    e.onclick = function(){
        //  remove active class from all links

        links.forEach((item)=>{
            item.classList.remove("btnActive");
            // console.log(linkys.indexOf(item));
            contentys[linkys.indexOf(item)].classList.remove("active");

            
            


        })

        // contents.forEach((cont)=>{
        //     // console.log(cont);
        //     cont.classList.remove("active");
        // })

        // onclick add class btnActive for current link
        e.classList.add("btnActive");
       
        // console.log(linkys.indexOf(e));
        // console.log(contentys[linkys.indexOf(e)].getAttribute('data-cont'));

        if(contentys[linkys.indexOf(e)].getAttribute('data-cont') ==e.getAttribute("id")){
            contentys[linkys.indexOf(e)].classList.add
            ("active");
        }
        
       } 
    
})
 
