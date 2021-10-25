let chatbotMsgList = ["Hi", "Hey", "Good Morning", "ok Bye!", "Good Evening", "What's your favourite movie", "How can I help you?", "you look cute", "where are you from", "Do you know Krishna Mohan?", "Thank You", "Whatsapp", "How are You", "Are you Ok?", "I'm created by Krishna Mohan"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatbot() {
    let userMsg = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";
    getReplyFromChatbot();
}

function getReplyFromChatbot() {
    let noOfChatbotMsgs = chatbotMsgList.length;
    let randomNo = Math.ceil(Math.random() * noOfChatbotMsgs)
    let chatbotMsg = chatbotMsgList[randomNo - 1];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);
}