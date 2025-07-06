
function askChatbot() {
    const input = document.getElementById("chat-input").value;
    const responseBox = document.getElementById("chat-response");
    responseBox.innerHTML = "Thinking...";
    setTimeout(() => {
        responseBox.innerHTML = "I'm a science expert! Here's a generic answer for: " + input;
    }, 1000);
}
