// const arry = [1,2,3,4,5];

// arry.forEach(function(v,i,ary){
//   console.log(v,i,ary);
// });



const arry = [1,2,3,4,5,6];

function main(a,callback){
for(let i = 0;i < a.length;i++){
  callback(a[i]);
}
}

function test1(i){
  console.log(i);
}



main(arry,test1);


// arry.forEach(function(i){
//   console.log(i);

// });
