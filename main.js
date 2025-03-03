const nav1=document.querySelector("#nav")
const img=document.querySelector("#image")
const burger1=document.querySelector("#burger")
burger1.addEventListener('click',()=>{
    if(nav1.classList.toggle("open"))
        img.src="close.svg"
    else{
        img.src="burger.svg"
    }
})