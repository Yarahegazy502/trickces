var plus = document.querySelectorAll(".plus");
var minus= document.querySelectorAll(".minus");
var quantity=document.querySelector(".quantity");
var del=document.querySelectorAll(".del")
var count=0;
plus.forEach((p)=>{
    p.addEventListener("click",()=>{
        
        console.log(p);
        console.log(p.parentElement.classList);
        // if(p.innerHTML=="+"){
        count++
        // console.log(parseInt(quantity.innerHTML)+count);
        // quantity.innerHTML=count;
        
        if(p.parentElement.classList.contains("one")){
            document.querySelector(".quantity1").innerHTML=count;
            console.log(document.querySelector(".t1"));
            // console.log(parseInt(document.querySelector(".pric1").innerHTML.split("$")[0])+100);
            var price1=parseInt(document.querySelector(".pric1").innerHTML.split("$")[0])
            // console.log(document.querySelector(".quantity1").innerHTML);
            var countt=document.querySelector(".quantity1").innerHTML;
            // document.querySelector(".t1")=parseInt(document.querySelector(".pric1").innerHTML)*(document.querySelector(".quantity1").innerHTML)
            console.log(parseInt(document.querySelector(".t1")));
            document.querySelector(".t1").innerHTML=price1*count;

            
        }

        if(p.parentElement.classList.contains("two")){
            document.querySelector(".quantity2").innerHTML=count;

            var price2=parseInt(document.querySelector(".pric2").innerHTML.split("$")[0])
            // console.log(document.querySelector(".quantity1").innerHTML);
            var countt=document.querySelector(".quantity2").innerHTML;
            // document.querySelector(".t1")=parseInt(document.querySelector(".pric1").innerHTML)*(document.querySelector(".quantity1").innerHTML)
            console.log(parseInt(document.querySelector(".t2")));
            document.querySelector(".t2").innerHTML=price2*count;
        }
       
            
        
    })
})
minus.forEach((m)=>{
   m.addEventListener("click",()=>{
    count--;
    // quantity.innerHTML=count;

    if(m.parentElement.classList.contains("one")){
        document.querySelector(".quantity1").innerHTML=count;

         var price1=parseInt(document.querySelector(".pric1").innerHTML.split("$")[0])
            // console.log(document.querySelector(".quantity1").innerHTML);
            var countt=document.querySelector(".quantity1").innerHTML;
            // document.querySelector(".t1")=parseInt(document.querySelector(".pric1").innerHTML)*(document.querySelector(".quantity1").innerHTML)
            console.log(parseInt(document.querySelector(".t1")));
            document.querySelector(".t1").innerHTML=price1*count;
    }

    if(m.parentElement.classList.contains("two")){
        document.querySelector(".quantity2").innerHTML=count;

        var price2=parseInt(document.querySelector(".pric2").innerHTML.split("$")[0])
            // console.log(document.querySelector(".quantity1").innerHTML);
            var countt=document.querySelector(".quantity2").innerHTML;
            // document.querySelector(".t1")=parseInt(document.querySelector(".pric1").innerHTML)*(document.querySelector(".quantity1").innerHTML)
            console.log(parseInt(document.querySelector(".t2")));
            document.querySelector(".t2").innerHTML=price2*count;
    }

   })
      
    
})

del.forEach((d)=>{
    d.addEventListener("click",()=>{
        console.log(d.parentElement);
       if(d.classList.contains("del1")){
              document.querySelector(".category1").classList.add("hidden");       
       }

       if(d.classList.contains("del2")){
        document.querySelector(".category2").classList.add("hidden");       
 }
    })
})