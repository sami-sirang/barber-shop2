let main=document.querySelector(".main");
let mouseBg=document.querySelector(".mouse-background");

main.addEventListener("mousemove",(details)=>{
  mouseBg.style.left=details.x+"px";
  mouseBg.style.top=details.y+"px";
  mouseBg.style.scale=1;
  
})
main.addEventListener("mouseleave",()=>{
    mouseBg.style.scale=0;
});

let menu=document.querySelector(".menu")
let links=document.querySelector("nav .links");
let a=document.querySelectorAll(".links a")
menu.addEventListener("click",()=>{
        links.classList.toggle("link-active");
        a.forEach(val=>{
            val.addEventListener("click",()=>{
                links.classList.toggle("link-active");

            })

        })
    })
