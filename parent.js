const parentLoginForm = document.getElementById('parent-login-form');

parentLoginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const parentCode = document.getElementById('parent-code').value;

  // Basic Authentication (replace with real authentication logic)
  if (parentCode === 'your_parent_code') {
    // Redirect to parent dashboard
    window.location.href = 'parent-dashboard.html';
  } else {
    alert('Invalid parent code.');
  }
});