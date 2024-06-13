let s="";
let b=document.querySelectorAll(".button");
Array.from(b).forEach((button)=>{
 button.addEventListener('click',(e)=>{
   if(e.target.innerHTML=='='){
    s=eval(s);
    document.querySelector('input').value=s;
   }
   else if(e.target.innerHTML=='AC'){
    s=""
    document.querySelector('input').value=s;
   }
   else{
     console.log(e.target);

     s=s+e.target.innerHTML;
     document.querySelector('input').value=s;
   }
  })
})