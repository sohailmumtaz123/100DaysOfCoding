// Random fact about cats
let btnFact=document.querySelector("#cat");
let newFact=document.querySelector("#fact");
let url="https://catfact.ninja/fact";

btnFact.addEventListener("click", async()=>{
    let catfact= await getFact();
    newFact.innerText=catfact;
});

async function getFact(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log(e);
        return "No Fact Found"
    }
};

// Random dog Image
let dogApi="https://dog.ceo/api/breeds/image/random";
let btnDog=document.querySelector("#dog");
let dogImg=document.querySelector("img");
let ImgNotFound=document.querySelector("#error")

btnDog.addEventListener("click", async ()=>{
    let newImg=await getDog();
    dogImg.src=newImg;
    console.log(newImg);
})
async function getDog(){
    try{
        let resDogApi=await axios.get(dogApi);
        return resDogApi.data.message;
    }catch(e){
        ImgNotFound.innerText="API Not Responding";
    }
}
// Get Random Joke : Send data in API Header
const jokeAPI="https://icanhazdadjoke.com/"
let btnjoke=document.querySelector("#btnjoke");
let joke=document.querySelector("#joke");

btnjoke.addEventListener("click", async()=>{
    joke.innerText=await getjoke();
});
async function getjoke(){
    try{
        const header={headers: {Accept: "application/json"} };
        let joke=await axios.get(jokeAPI, header);
        console.log(joke.data.joke);
        return joke.data.joke;

    }catch(e){
        console("Random Joke API Got an error: ", e);
    }
}
// Get list of Universities 
// const uniApi="http://universities.hipolabs.com/search?name=india"; 

// console.log(getUni());

// async function getUni(){
//     try{
//         let unidata=await axios.get(uniApi);
//         return unidata;
//     }
//     catch(e){
//         console.log("University API Erro: ", e);
//         return [];
//     }
// }