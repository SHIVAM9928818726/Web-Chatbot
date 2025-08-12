// script.js
document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");

  const chatbotIcon = document.getElementById("chatbot-icon");
  const closeButton = document.getElementById("close-btn");

  // Toggle chatbot visibility when clicking the icon
  // Show chatbot when clicking the icon
  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none"; // Hide chat icon
  });

  // Also toggle when clicking the close button
  closeButton.addEventListener("click", function () {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex"; // Show chat icon again
  });

  sendBtn.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      appendMessage("user", userMessage);
      chatbotInput.value = "";
      getBotResponse(userMessage);
    }
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();



if (msg.includes("hello") || msg.includes("hi")) {
  return appendMessage("bot", "Hello! How may I assist you today?");
}

if (msg.includes("good morning")) {
  return appendMessage("bot", "Good morning! I hope your day is off to a great start. How can I assist you?");
}

if (msg.includes("good evening")) {
  return appendMessage("bot", "Good evening! How may I support you at this time?");
}

if (msg.includes("how are you")) {
  return appendMessage("bot", "I'm functioning smoothly, thank you for asking. How can I assist you today?");
}

if (msg.includes("who are you")) {
  return appendMessage("bot", "I'm your virtual assistant, here to help with any questions or concerns you may have.");
}

if (msg.includes("what can you do")) {
  return appendMessage("bot", "I can assist with information, support, and answering frequently asked questions.");
}

if (msg.includes("need help") || msg.includes("support")) {
  return appendMessage("bot", "Certainly. Please provide more details so I can assist you effectively.");
}

if (msg.includes("problem") || msg.includes("issue")) {
  return appendMessage("bot", "I'm sorry to hear that you're facing an issue. Could you please describe it in more detail?");
}

if (msg.includes("thank you") || msg.includes("thanks")) {
  return appendMessage("bot", "You're very welcome! If there's anything else I can assist you with, please let me know.");
}

if (msg.includes("bye") || msg.includes("goodbye")) {
  return appendMessage("bot", "Thank you for reaching out. Have a great day ahead!");
}

if (msg.includes("see you") || msg.includes("talk later")) {
  return appendMessage("bot", "Absolutely. I'm here whenever you need assistance.");
}

if (msg.includes("i'm not happy") || msg.includes("unhappy")) {
  return appendMessage("bot", "I'm truly sorry to hear that. Your feedback is important — would you like to escalate this to a support representative?");
}

if (msg.includes("can you explain") || msg.includes("please explain")) {
  return appendMessage("bot", "Of course. Please let me know what you'd like more information on.");
}

if (msg.includes("how does this work")) {
  return appendMessage("bot", "This system is designed to assist you with common queries. Please enter your question to begin.");
}

if (msg.includes("connect to agent") || msg.includes("talk to human")) {
  return appendMessage("bot", "I'll connect you to a human support agent shortly. Please hold on.");
}
if (msg.includes("schedule") || msg.includes("appointment")) {
  return appendMessage("bot", "I'd be happy to help you schedule an appointment. Please provide your preferred date and time.");
}

if (msg.includes("reschedule") || msg.includes("change time")) {
  return appendMessage("bot", "Understood. Please let me know the new date and time you'd like to reschedule to.");
}

if (msg.includes("cancel appointment") || msg.includes("cancel booking")) {
  return appendMessage("bot", "I can assist you with that. May I confirm the details of the booking you wish to cancel?");
}

if (msg.includes("opening hours") || msg.includes("when are you open")) {
  return appendMessage("bot", "Our regular business hours are Monday to Friday, 9:00 AM to 6:00 PM.");
}

if (msg.includes("location") || msg.includes("where are you located")) {
  return appendMessage("bot", "We are located at [Your Location Here]. Would you like directions?");
}

if (msg.includes("contact details") || msg.includes("phone number")) {
  return appendMessage("bot", "You can reach us at +91-XXXXXXXXXX or email us at support@example.com.");
}

if (msg.includes("payment issue") || msg.includes("billing problem")) {
  return appendMessage("bot", "I'm sorry you're experiencing a payment issue. Could you please provide more details so I can assist further?");
}

if (msg.includes("refund") || msg.includes("money back")) {
  return appendMessage("bot", "I'm sorry for the inconvenience. I’ll need a few details to initiate the refund process. Could you please confirm your transaction ID?");
}

if (msg.includes("how long does it take") || msg.includes("when will it be done")) {
  return appendMessage("bot", "The processing time depends on the request. Could you please specify what you're referring to?");
}

if (msg.includes("can you help me with") || msg.includes("i need assistance with")) {
  return appendMessage("bot", "Of course, I’m here to help. Please let me know the specific issue you're facing.");
}

if (msg.includes("not working") || msg.includes("doesn't work")) {
  return appendMessage("bot", "I'm sorry to hear that. Could you describe the problem in detail so I can assist accordingly?");
}

if (msg.includes("error message") || msg.includes("system error")) {
  return appendMessage("bot", "Thank you for bringing this to our attention. Please share the exact error message you received.");
}

if (msg.includes("complaint") || msg.includes("feedback")) {
  return appendMessage("bot", "Your feedback is valuable to us. Kindly provide the details so we can address it promptly.");
}

if (msg.includes("i'm satisfied") || msg.includes("great service")) {
  return appendMessage("bot", "Thank you for your kind words. We’re always here to support you.");
}

if (msg.includes("what’s your name") || msg.includes("who am I chatting with")) {
  return appendMessage("bot", "You're speaking with a virtual assistant trained to provide reliable and timely support.");
}

if (msg.includes("do you have support") || msg.includes("can I talk to someone")) {
  return appendMessage("bot", "Yes, I can connect you with a support representative shortly. Please wait a moment.");
}
if (msg.includes("how do you work") || msg.includes("how does chatbot work")) {
  return appendMessage("bot",
    "Great question! I work based on a set of predefined rules and patterns coded by my developer. When you type something, I check your message for certain keywords. If I find a match, I respond with the associated message. This is called a rule-based chatbot.\n\nUnlike AI models, I don't really 'understand' your message in the way humans or AI like ChatGPT do. I simply match patterns. I'm best suited for answering frequently asked questions, giving quick replies, and guiding users in structured conversations. 😊"
  );
}

if (msg.includes("are you chatgpt") || msg.includes("difference between you and chatgpt") || msg.includes("you like chatgpt")) {
  return appendMessage("bot",
    "Ah, I'm flattered you asked! But no, I'm not ChatGPT. 😊\n\nI'm a simpler type of chatbot — rule-based. This means I follow a script or set of rules written by my developer. ChatGPT, on the other hand, is an advanced AI language model developed by OpenAI. It uses deep learning and neural networks to understand the context, meaning, and emotion in conversations.\n\nWhile I respond to specific keywords, ChatGPT can generate natural, flowing conversations, learn from inputs, and adapt to your tone. Think of me as a helpful assistant with a script — and ChatGPT as a smart conversationalist trained on the internet!"
  );
}

if (msg.includes("who created you") || msg.includes("who made you") || msg.includes("how are you built")) {
  return appendMessage("bot",
    "I was created by a developer using HTML, CSS, and JavaScript. My design was kept lightweight and efficient, perfect for embedding in websites and apps that need simple conversational interfaces.\n\nUnder the hood, my logic is built with JavaScript functions that react to specific messages you type. I don’t use AI or machine learning. Instead, I offer instant responses from a database of predefined questions and answers. I'm a good fit for FAQs, appointment systems, and guided help where users follow a path."
  );
}

if (msg.includes("can you learn") || msg.includes("do you remember") || msg.includes("do you store memory")) {
  return appendMessage("bot",
    "I don't have memory or learning capabilities like AI-based models. Every time you chat with me, it's a fresh session — I don’t remember past messages unless my developer adds session tracking manually.\n\nChatGPT, in contrast, can remember parts of a conversation during a session and keep the context alive. In more advanced versions, it can even retain memory across sessions. I'm more about instant, static replies, which keeps me lightweight and easy to use."
  );
}

if (msg.includes("can we continue") || msg.includes("let's talk more") || msg.includes("can we talk more")) {
  return appendMessage("bot",
    "Absolutely, I'm here as long as you are! 😊\n\nFeel free to ask me anything — about chatbots, how I work, or even general tech questions. I’ll do my best to assist with the knowledge I have. Let’s keep the conversation going!"
  );
}

if (msg.includes("why are chatbots important") || msg.includes("why use chatbot")) {
  return appendMessage("bot",
    "Chatbots are important tools in modern digital communication. They help businesses offer 24/7 support, automate repetitive queries, and improve user experience on websites and apps.\n\nFor example, a chatbot can assist with booking appointments, answering FAQs, guiding users through registration, and even collecting feedback. More advanced AI-powered bots like ChatGPT can engage in deep conversations, write content, generate code, and more. In short, chatbots are becoming essential in customer service and education!"
  );
}



  return appendMessage("bot", "Sorry, I didn't understand that.");
}

});
