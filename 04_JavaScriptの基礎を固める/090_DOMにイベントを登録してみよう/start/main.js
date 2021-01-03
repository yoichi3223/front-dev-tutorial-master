const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1")

const colorchange = function(){
  // alert("hello")
  h1.style.color = "red";
}
function changebkcolor(){
  h1.style.backgroundColor = "orange";
}
// btn.addEventListener("click",colorchange);
btn.addEventListener("click",changebkcolor);
btn.removeaddEventListener("click",changebkcolor);

