let inp=document.querySelector("input");
let btn=document.querySelectorAll("button");
let b=document.querySelector(".b5");
for(let x of btn)
{
    x.addEventListener("click",function(e)
{
 let cur_txt=e.target.innerText;

    if(cur_txt==="=")
 {
    inp.value=eval(inp.value);
 }
 
 
  else if(cur_txt=="AC")
 {
    inp.value="";
 }
 else{
    inp.value=inp.value+cur_txt;
 }

});
}