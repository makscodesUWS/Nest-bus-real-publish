const contactForm = document.querySelector('#contact-form form');
const admins = {
  'admin@example.com': {
    email: 'admin@example.com',
    password: 'adminpassword' 
  }
};
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  fetch('/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    if (response.ok) {

      alert('Message sent successfully!');
      contactForm.reset(); // Clear the form
    } else {
      alert('Error sending message. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error sending message. Please try again.');
  });
});
const riderForm = document.getElementById('rider-form');
const homeRiderList = document.getElementById('home-rider-list');

riderForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const childName = document.getElementById('child-name').value;
  const childStop = document.getElementById('child-stop').value;
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  riders.push({ name: childName, stop: childStop });
  localStorage.setItem('riders', JSON.stringify(riders));

  updateRiderList(riders);

  alert('Rider added successfully!');
  riderForm.reset(); 
});

function updateRiderList(riders) {
  homeRiderList.innerHTML = ''; 
  riders.forEach(rider => {
    const listItem = document.createElement('li');
    listItem.textContent = `${rider.name} - ${rider.stop}`;
    homeRiderList.appendChild(listItem);
  });
}
window.addEventListener('load', () => {
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  updateRiderList(riders);
});


const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;


  alert(`Payment information submitted: Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);
  paymentForm.reset();
});


function updateRiderList(riders) {
  homeRiderList.innerHTML = ''; 
  riders.forEach(rider => {
    const listItem = document.createElement('li');
    listItem.textContent = `${rider.name} - ${rider.stop}`;
    homeRiderList.appendChild(listItem);
  });
}


function loadRiders() {
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  updateRiderList(riders);
}

window.addEventListener('load', loadRiders);
const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get payment information
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;


  alert(`Payment information submitted: Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);
  paymentForm.reset(); 
});
// Admin Login Function (Original)
function adminLogin(email, password) {
  if (!admins[email] || admins[email].password !== password) {
    return false;
  }
  return true; 
}

// ... (Admin login handling in your admin.html file) ...

// Example: 
// ... inside admin.html form submission handler
// ...
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;

  if (adminLogin(email, password)) {
    // Redirect to admin dashboard or perform other actions
    window.location.href = 'admin-dashboard.html';
  } else {
    alert('Invalid credentials.');
  }
// ...