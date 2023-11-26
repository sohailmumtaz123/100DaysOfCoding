let chatInput=document.querySelector(".chat-input textarea");
let sendChatBtn=document.querySelector(".chat-input span");
let chatbox=document.querySelector(".chatbox");

let userMessage;
const API_KEY = "kcnkdjnckjsndckjsndckjnskncs";
const API_URL= "https://api.openai.com/v1/chat/completions";

const generateResponse = () => {

    const requestOption = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${API_KEY}`
        },
        body: JSON.stringify( {
            model: "gpt-3.5-turbo", 
            messages: [{role: "user", content: userMessage}]
        })
    }

    fetch(API_URL, requestOption).then(res => res.json()).then(data => {
        console.log(data);
    }).catch((error)=> {
        console.log(error);
    })
}
// A function call when we click on send message icon of chatbot
const handlechat = () => {
    userMessage=chatInput.value.trim();
    if(!userMessage) return;

    // Append user message in the chatbox
    chatbox.appendChild(createChatList(userMessage, "outgoing"));
    chatInput.value="";

    setTimeout( () => {
        chatbox.appendChild(createChatList("Thinking...", "incoming"));
        generateResponse();}  ,600);

    
};
// A function creating a message list
const createChatList=(message, className) => {
    const chatLi=document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent= className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML=chatContent;
    return chatLi;
}


sendChatBtn.addEventListener("click", handlechat);

