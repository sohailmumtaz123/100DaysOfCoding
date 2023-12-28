// let n=5; 

// for (let i=0; i<=n; i++){
//     console.log(i);
// }

let argumnts=process.argv;
for (let i=2; i<argumnts.length; i++){
    console.log(`argument: ${i}`, argumnts[i]);
}