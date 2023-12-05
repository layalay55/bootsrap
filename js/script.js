
let myloder=document.querySelector(".loder");
window.addEventListener("load",()=>{

    myloder.classList.add('loder-londer')
    myloder.addEventListener('trasitionend',()=>{
        document.body .removeChild(myloder)
    })
})
