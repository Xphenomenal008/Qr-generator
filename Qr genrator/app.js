let inputfield=document.getElementById("inputfield")
let btn=document.getElementById("btn")
let qrimg=document.getElementById("qrimg")
btn.addEventListener("click",()=>{
    if(inputfield.value.length>0){
qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputfield.value 
qrimg.classList.add("qrimgl");

    }else{
inputfield.classList.add("error")
setTimeout(()=>{
    inputfield.classList.remove("error")
},1000)
    }
})