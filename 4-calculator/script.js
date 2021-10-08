const btn = document.querySelectorAll("button");
const equal = document.getElementById("equal");
// const plus = document.getElementById("plus");
// const sub = document.getElementById("sub");
// const multi = document.getElementById("multi");
// const div = document.getElementById("div");
const result = document.querySelector(".result");
const del = document.getElementById("del");

btn.forEach((e1) => {
    e1.addEventListener("click", () => {
        if(e1.id == "on"){
            result.innerText=0;
            // result.style.border="1px solid #111";
        
        }
        else if (e1.innerText == "=") {
            result.innerText = eval(result.innerText);
        } else {
            if(e1.innerText=="del"){
            // result.innerText = e1.innerText;

            }
            
            else{
                if(result.innerText==0){
               result.innerText = e1.innerText;
                    
                }else{
            result.innerText += e1.innerText;

                }
            // result.innerText += e1.innerText;
            }
        }

        if (e1.id == "reset") {
            result.innerText="";
        }
        else if(e1.id == "del"){
            let str =result.innerText;
            // console.log(str.substr(0,str.length-1));
            str=str.substr(0,str.length-1);
            result.innerText= str;
            // result.innerText=(result.innerText).slice(0,-1)
        }
        
        
        // else{
        //     result.innerText="";
        //     result.innerText += e1.innerText;

        // }
        

    })
})
