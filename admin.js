const adminLoginForm = document.getElementById('admin-login-form');

adminLoginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic Authentication (replace with real authentication logic)
  if (username === 'admin' && password === 'password') {
    // Redirect to dashboard
    window.location.href = 'admin-dashboard.html';
  } else {
    alert('Invalid username or password.');
  }
});