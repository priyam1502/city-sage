function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("text-right", "mb-2", "text-blue-700");
  userMsg.innerText = `You: ${message}`;
  chatBox.appendChild(userMsg);

  // Add bot response placeholder
  const botMsg = document.createElement("div");
  botMsg.classList.add("text-left", "mb-2", "text-green-700");
  botMsg.innerText = `Bot: Thinking...`;
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";

  // Fake delay + response
  setTimeout(() => {
    botMsg.innerText = `Bot: Sorry! AI assistant isn't connected to backend yet.`;
  }, 800);
}
