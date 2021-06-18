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