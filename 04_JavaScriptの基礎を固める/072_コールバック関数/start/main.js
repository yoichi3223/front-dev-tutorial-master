// function introduce(callback,name){
// //  e.log(`私の名前は${callback()}です`); consol
// console.log(callback(name));
// }


//  const name1 = function(name){
//    return "初めまして" + name　+ "です";
//  }


// // introduce(()=> "洋一");

// // introduce(function(name){
// //   return "code" + name;
// //   } ,"mafia");

// introduce(name1,"洋一")


function keisan(a,b,callback){
  const result = callback(a,b)
  console.log(result);
}

function kakezan(a,b){
  return a * b;
}


keisan(10,10,kakezan);
