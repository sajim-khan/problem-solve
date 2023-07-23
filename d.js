// Explain what a callback function is and provide a simple example?

function greetings(name, callback) {
  console.log("Hello, " + name + "!");
  callback()
}

function sayGoodbye(name) {
  console.log("Goodbye");
}

greetings("Sajim", sayGoodbye);
