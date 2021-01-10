process.stdin.resume();
process.stdin.setEncoding("utf8");
// Your code here!

//連想配列
const test = [["A"], ["B"]];
console.log(test);

const sports = [
  {
    name: "MMA",
    country: "usa",
    players: { player1: "a", player2: "b", player3: "c", player4: "d" },
  },
  {
    name: "soccer",
    country: "usa",
  },
  {
    name: "tennis",
    country: "usa",
  },
  {
    name: "swiming",
    country: "usa",
  },
  {
    name: "kickboxing",
    country: "usa",
  },
  {
    name: "karate",
    country: "usa",
    commision: ["UFC", "Belltor", "RIZIN", "shoot", "DEEP", "ZST"],
  },
];
console.log(sports[0].country);
const s = sports[5].commision;

//  for(let i of s){
//      console.log(i);
//  }

let i = 0;

while (i < s.length) {
  console.log(s[i]);
  i += 1;
}

// function sport(){
//     console.log(`${sports[0].name}が好きです`);
//     const s = sports;
//     for(let i of s){
//         console.log(i.commision);
//     }
// }

// sport();
