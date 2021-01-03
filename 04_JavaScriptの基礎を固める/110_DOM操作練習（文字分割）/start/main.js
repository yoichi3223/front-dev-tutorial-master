document.addEventListener("DOMContentLoaded",function(){

const el = document.querySelector(".animate-title");
const str = el.innerHTML.trim();
let concaSta = "";
for(let c of str){
  concaSta += `<span class = "char">${c}</span>`;
}
el.innerHTML = concaSta;
});
