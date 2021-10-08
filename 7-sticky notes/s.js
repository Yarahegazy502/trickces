// 1-select div
var box = document.getElementById("box");
var not = document.getElementById('note')
var note = document.querySelector(".note");
var close = document.querySelector(".close");
var plus = document.querySelectorAll(".plus");
// cloneNote.setAttribute("class","clone");
// var clonePlus = document.querySelector(".clone.plus");


    

    plus.forEach((el)=>{

        el.addEventListener('click',()=>{
            var newEle = document.createElement("div");
            newEle.classList.add("note");
            // icons
            var fChild = document.createElement("div");
            fChild.classList.add("icons");
            newEle.append(fChild)

            //tools
            var ftChild = document.createElement("div");
            ftChild.classList.add("tools");
            fChild.append(ftChild)
            
            // close
            var closeDiv = document.createElement("div");
            ftChild.append(closeDiv);


            var ffChildcl = document.createElement("span");
            ffChildcl.classList.add("close");
            closeDiv.append(ffChildcl);

            //plus
            var plusDiv = document.createElement("div");
            ftChild.append(plusDiv);

            var ffChild = document.createElement("span");
            ffChild.classList.add("plus");
            plusDiv.append(ffChild);

            // i
            var i = document.createElement("i");
            ffChild.classList.add("fal");
            ffChild.classList.add("fa-plus");
            ffChild.append(i);
            
            

            // var fffChild = document.createElement("span");
            // // ffChild.classList.add("plus");
            // plusDiv.append(fffChild);


            box.append(newEle)
            
         
            // console.log(x);
            // x++;
    
            // var cloneNote = note.cloneNode(true);
            // box.append(cloneNote);
    
            // console.log(typeof(note));
    
            // box.innerHTML += "ddsf";
            // console.log(box.innerHTML);
            
        })

    })
    



// console.log(note)
// 2-when click in plus icon take copy from div (cloning) and add it after div

//     plus.addEventListener("click",()=>{
//     var cloneNote = note.cloneNode(true);
//     document.body.append(cloneNote);
//     console.log(cloneNote);
// })




// 3-when click in close icon remove div
// close.addEventListener("click",()=>{
//     console.log("close");
//     note.remove();
// })