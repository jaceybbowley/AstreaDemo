//const form = document.querySelector('form');
//const usernameInput = document.getElementById('username');
//const passwordInput = document.getElementById('password');
//
//form.addEventListener('submit', (e) => {
//  e.preventDefault();
//
//  const usernameValue = usernameInput.value.trim();
//  const passwordValue = passwordInput.value.trim();
//
//  if (usernameValue === '' || passwordValue === '') {
//    alert('Please fill in all fields');
//  } else if ((usernameValue === 'user1' && passwordValue === 'pass1') || (usernameValue === 'user2' && passwordValue === 'pass2')) {
//    alert('Login successful');
//  } else {
//    alert('Incorrect username or password');
//  }
//});
//
//const button = document.getElementById('button');
//
//button.addEventListener('click', () => {
//  alert('Hello, World!');
//});

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get username and password input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username and password are correct (for demo purposes only)
  if (username === 'user1' && password === 'pass1') {
    // Redirect to homeA page
    window.location.href = 'homeA.html';
  } else if (username === 'user2' && password === 'pass2') {
    // Redirect to homeB page
    window.location.href = 'homeB.html';
  } else {
    // Display error message
    alert('Incorrect username or password!');
  }
});

