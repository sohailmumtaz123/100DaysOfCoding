
// -------How to run JS file in terminal
// let n=5; 
// for (let i=0; i<=n; i++){
//     console.log(i);
// }

// ------Get arguments in Terminal 
let argumnts=process.argv;
for (let i=2; i<argumnts.length; i++){
    console.log(`argument: ${i}`, argumnts[i]);
}

// -----Access other JS files using module.exports
const math=require("./math");
console.log(math);
console.log("sum= ",math.sum(4,6));
console.log("Multiplication: ", math.mil(32,3));
console.log("Pi: ", math.p);

// ----Access other directories using module.exports
const info =require("./fruits");
console.log(info[0].name);