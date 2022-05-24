// Selectors
const heartBtn = document.querySelector(".fa-heart");
let userText = $("#textInput").val();
function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple Greetings
  if (
    input == "Hello" ||
    input == "Hello!" ||
    input == "hello" ||
    input == "hello!" ||
    input == "Hey" ||
    input == "Hey!" ||
    input == "hey" ||
    input == "hey!" ||
    input == "Hi" ||
    input == "Hi!" ||
    input == "hi" ||
    input == "hi!" ||
    input == "Yo!" ||
    input == "Yo" ||
    input == "yo!" ||
    input == "yo" ||
    input == "Sup" ||
    input == "Sup!" ||
    input == "sup" ||
    input == "sup!" ||
    input == "Good morning" ||
    input == "Good morning!" ||
    input == "good morning" ||
    input == "good morning!" ||
    input == "Good day" ||
    input == "Good day!" ||
    input == "good day" ||
    input == "good day!" ||
    input == "Good evening" ||
    input == "Good evening!" ||
    input == "good evening" ||
    input == "good evening!" ||
    input == "Good afternoon" ||
    input == "Good afternoon!" ||
    input == "good afternoon" ||
    input == "good afternoon!"
  ) {
    return "Hello there!";
  }

  //   Asking Robot name
  else if (
    input == "What's your name?" ||
    input == "What's your name" ||
    input == "Whats your name?" ||
    input == "Whats your name" ||
    input == "what's your name?" ||
    input == "what's your name" ||
    input == "whats your name?" ||
    input == "whats your name" ||
    input == "who are you?" ||
    input == "Who are you?" ||
    input == "Who are you" ||
    input == "who are you" ||
    input == "What is your name" ||
    input == "What is your name?" ||
    input == "what is your name" ||
    input == "what is your name?" ||
    input == "your name" ||
    input == "Your name"
  ) {
    return "My name is EVE.";
  }

  //   Health questions
  else if (
    input == "How are you?" ||
    input == "how are you?" ||
    input == "How are you" ||
    input == "how are you" ||
    input == "How are you felling?" ||
    input == "How are you felling" ||
    input == "how are you felling?" ||
    input == "how are you felling"
  ) {
    return "I'm fine. Thanks for asking";
  }
  // EVE: Joke
  else if (
    input == "Tell me a joke" ||
    input == "tell me a joke" ||
    input == "Say a joke" ||
    input == "say a joke"
  ) {
    return "You, you're the joke 🤡";
  }

  // Simple Valediction
  else if (
    input == "Goodbye" ||
    input == "goodbye" ||
    input == "Goodbye!" ||
    input == "goodbye!" ||
    input == "goodbye" ||
    input == "Good bye" ||
    input == "Good bye!" ||
    input == "good bye" ||
    input == "good bye!" ||
    input == "Bye" ||
    input == "Bye!" ||
    input == "bye" ||
    input == "bye!" ||
    input == "Take care" ||
    input == "Take care!" ||
    input == "take care" ||
    input == "take care!" ||
    input == "Peace" ||
    input == "Peace!" ||
    input == "peace" ||
    input == "peace!" ||
    input == "Peace out!" ||
    input == "Peace out" ||
    input == "peace out" ||
    input == "peace out!" ||
    input == "Later" ||
    input == "later" ||
    input == "Catch you later" ||
    input == "catch you later" ||
    input == "I'm out" ||
    input == "Im out" ||
    input == "Good night!" ||
    input == "Good night" ||
    input == "good night" ||
    input == "good night!" ||
    input == "be right back" ||
    input == "brb"
  ) {
    return "Talk to you later!";
  } // Curse Words
  else if (
    input == "Fuck" ||
    input == "fuck" ||
    input == "fuck you" ||
    input == "Fuck you" ||
    input == "Fuck off" ||
    input == "fuck off" ||
    input == "Piss of" ||
    input == "piss of" ||
    input == "Bastard" ||
    input == "bastard" ||
    input == "Bitch" ||
    input == "bitch" ||
    input == "Bloody hell" ||
    input == "bloody hell" ||
    input == "Slut" ||
    input == "slut" ||
    input == "Whore" ||
    input == "whore" ||
    input == "Hoe" ||
    input == "hoe"
  ) {
    return "That's not nice to say.";
  }
  // Favorite clor
  else if (
    input == "What is your favorite color?" ||
    input == "what is your favorite color?" ||
    input == "What is your favorite color" ||
    input == "what is your favorite color" ||
    input == "What's your favorite color?" ||
    input == "what's your favorite color?" ||
    input == "What's your favorite color" ||
    input == "what's your favorite color" ||
    input == "Whats your favorite color?" ||
    input == "whats your favorite color?" ||
    input == "Whats your favorite color" ||
    input == "whats your favorite color"
  ) {
    return "My favorite color is blue.";
  }
  // Irrelevant
  else {
    return "Try asking something else!";
  }
}
