//1- select img, text link
var links= document.querySelectorAll(".nav-link");
var modal = document.querySelectorAll(".modal");
var closes = document.querySelectorAll(".close");
var textarea= document.querySelector("#textarea");
var btn_add_text=document.querySelector(".btn-add-text");
var addedtextarea= document.querySelector(".addedtextarea");
var btn_enter=document.querySelectorAll(".btn-enter");
var icons = document.querySelector(".icons");
var iconsSpan = document.querySelectorAll(".icons span");
var imgs=document.querySelectorAll(".imgs img");
var mainImg=document.querySelector(".mainImg");
var defaultBtn=document.querySelector(".defaultBtn");
var customBtn=document.querySelector(".customBtn");
var addImgs=document.querySelector(".add-img")
var addImg=document.querySelector(".add-img img")
var images= document.getElementById("images")
var imgIcon= document.querySelector(".imgIcon");
var upload= document.querySelector(".upload")
var uploadImgs=document.querySelector(".uploadImgs")
var imgsCam= document.querySelectorAll("#images img")
//2- when click on text link display modal 
links.forEach((link)=>{
    link.addEventListener("click",()=>{
        modal.forEach((mod)=>{
            mod.classList.remove("active")
            // function to define id in each modal
            modId=(i)=>{
                if(mod.id==i){
                    mod.classList.add("active")
                    }
            }
            // add text
            if(link.innerText=="Add Text"){
               modId("m1");
            }
            // swap img
            if(link.innerText=="Swap Product"){
               modId("m2");
            }
            if(link.innerText=="Add Image"){
                modId("m3");  
            }
            if(link.innerText=="Choose From Designs"){
                modId("m4");  
            }
        })
    })
})
closes.forEach((close)=>{
    close.addEventListener("click",()=>{
        close.parentElement.parentElement.parentElement.parentElement.classList.remove("active");
    })
})
// 3-when i write any thing in textarea and enter on the btn-add-text show it in textarea in the middle of t-shirt 
btn_add_text.addEventListener("click",()=>{

addedtextarea.value=textarea.value;
if(textarea.value!=""){writeText();}
})
btn_enter.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        addedtextarea.value=btn.innerText;
        writeText()
    })
})
writeText=()=>{
    addedtextarea.classList.add("active");
    modal[0].classList.remove("active")
    icons.classList.add("active")
}
 iconsSpan.forEach((icon)=>{
    //  console.log(icon.id);
    icon.addEventListener("click",()=>{
        console.log(icon.id);
    })
 })

// when i click on any img replace the source of it to the main img
imgs.forEach((img)=>{
    img.addEventListener("click",()=>{
        mainImg.src=img.src;
        modal[1].classList.remove("active");
    })
})
// upload img from pc
customBtn.addEventListener("click",()=>{
    defaultBtn.click();
})
defaultBtn.addEventListener("change",()=>{
    console.log(defaultBtn.files)
        const reader=new FileReader();
        reader.onload=()=>{
            showImg();
            addImg.src=reader.result;
        }
        reader.readAsDataURL(defaultBtn.files[0])
})
// swap between upload and images
imgIcon.addEventListener("click",()=>{
    // console.log(imgIcon);
    upload.classList.add("hidden")
    images.classList.add("active")
})
uploadImgs.addEventListener("click",()=>{
    upload.classList.remove("hidden")
    images.classList.remove("active")
})
//dis play imgs from images in add img
imgsCam.forEach((i)=>{
    i.onclick=()=>{
        showImg()
        addImg.src=i.src;
    }
})
showImg=()=>{
    modal[2].classList.remove("active")
    addImgs.classList.add("active");
}