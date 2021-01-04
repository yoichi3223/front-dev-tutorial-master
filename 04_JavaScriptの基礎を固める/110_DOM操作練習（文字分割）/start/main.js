// document.addEventListener("DOMContentLoaded",function(){

// const el = document.querySelector(".animate-title");
// const str = el.innerHTML.trim();
// let concaSta = "";
// for(let c of str){
//   concaSta += `<span class = "char">${c}</span>`;
// }

// el.innerHTML = concaSta;
// });

function food(menu){
  console.log("新しい仕事の始まり。");
  console.log("カレーを食べてがんばりましょう");
 
  const foods = ["カレー","ラーメン","うどん"];
  console.log(foods[0])

  if(menu === foods[0]){
    console.log(`今夜のメニューは${menu}です`)
  }else{
    console.log("今夜はカレーかうどんです");
  }


}

function newyear(){
  console.log("明けましておめでとうございます。")
  food("カレー");
}


const company = function(callback,name,age){
console.log(`${name}です。${age}歳です`)
callback();


}
const start = function(){
company(newyear,"橋本洋一",29)
}

start();
