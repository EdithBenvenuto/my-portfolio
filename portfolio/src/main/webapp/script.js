const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

console.log(toggleButton);
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

function addRandomFact() {
  const greetings =
      ['I love ketchup', 'I am from Mexico', "I love singing even i don't do it very well", "I don't like horror movies", "I am 20 years old", 'I love play videogames'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container-fact');
  greetingContainer.innerText = greeting;
}

function showMessages() {
  fetch('/list-messages').then(response => response.json()).then((messages) => {
    const messageListElement = document.getElementById('message-list');
    messages.forEach((message) => {
      messageListElement.appendChild(createMessageElement(message));
    }) 
  });
}

function createMessageElement(message) {
    const messageElement = document.createElement('li');
    messageElement.className = 'message';

    const nameElement = document.createElement('p');
    nameElement.innerText = 'Name: '+ message.name;

    const emailElement = document.createElement('p');
    emailElement.innerText = 'Email: ' + message.email;

    const commentElement = document.createElement('p');
    commentElement.innerText = 'Message: ' + message.comment;

    var date = new Date(message.timestamp);
    date.toString("MMM dd"); // "Dec 20"
    const timestampElement = document.createElement('p');
    timestampElement.innerText = 'Date: ' + date;

    messageElement.appendChild(nameElement);
    messageElement.appendChild(emailElement);
    messageElement.appendChild(commentElement);
    messageElement.appendChild(timestampElement);
    return messageElement;
}