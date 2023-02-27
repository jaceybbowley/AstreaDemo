const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get username and password input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username and password are correct (for demo purposes only)
  if (username === 'user1' && password === 'password1') {
    // Redirect to homeA page
    window.location.href = 'homeA.html';
  } else if (username === 'user2' && password === 'password2') {
    // Redirect to homeB page
    window.location.href = 'homeB.html';
  } else {
    // Display error message
    alert('Incorrect username or password!');
  }
});
