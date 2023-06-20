document.addEventListener("DOMContentLoaded", function() {
  const loginContainer = document.getElementById("login-container");
  const chatContainer = document.getElementById("chat-container");
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const chatLog = document.getElementById("chat-log");
  const userInput = document.getElementById("user-input");
  const recommendationList = document.getElementById("recommendation-list");
  const enterButton = document.getElementById("enter-button");

  // Function to add a new message to the chat log
  function addMessage(message, sender) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message");
    messageContainer.classList.add(sender);

    const messageCard = document.createElement("p");
    messageCard.classList.add("message-card");
    messageCard.textContent = message;

    messageContainer.appendChild(messageCard);
    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  // Function to handle user login
  function handleLogin(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "admin" && password === "password") {
      loginContainer.style.display = "none";
      chatContainer.style.display = "block";
    } else {
      alert("Invalid username or password. Please try again.");
    }

    usernameInput.value = "";
    passwordInput.value = "";
  }

  // Function to handle user input
  function handleUserInput() {
    const message = userInput.value;

    if (message.trim() !== "") {
      addMessage(message, "user");
      // Process user message and generate response
      const response = getResponse(message);
      setTimeout(function() {
        addMessage(response, "bot");
      }, 500);

      userInput.value = "";
    }
  }

  // Function to handle recommended message click
  function handleRecommendationClick(event) {
    const recommendedMessage = event.target.textContent;
    userInput.value = recommendedMessage;
    userInput.focus();
  }

  // Example function to generate a response
  function getResponse(message) {
    // Here, you can implement the logic to generate a response from the bot
    // based on the user's input
    return "This is a response from DoctorChatBot.";
  }

  // Event listener for login form submission
  loginForm.addEventListener("submit", handleLogin);

  // Event listener for user input
  userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      handleUserInput();
    }
  });

  // Event listener for recommended message click
  recommendationList.addEventListener("click", handleRecommendationClick);
  // Event listener for Enter button click
  enterButton.addEventListener("click", handleUserInput);  

});
