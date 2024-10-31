const childName = document.getElementById('child-name');
const childStop = document.getElementById('child-stop');
const paymentStatusText = document.getElementById('payment-status-text');

// Fetch data from local storage
const riders = JSON.parse(localStorage.getItem('riders')) || [];
const paymentInfo = JSON.parse(localStorage.getItem('paymentInfo')) || []; // Assumes payment info is stored

// Find the child based on the parent code (replace with actual logic)
const child = riders.find(rider => rider.parentCode === 'your_parent_code');

if (child) {
  childName.textContent = `Child's Name: ${child.name}`;
  childStop.textContent = `Child's Stop: ${child.stop}`;

  // Payment status (assuming payment info is stored in localStorage)
  const payment = paymentInfo.find(info => info.childName === child.name);
  if (payment && payment.paid) {
    paymentStatusText.textContent = 'Paid';
  } else {
    paymentStatusText.textContent = 'Not Paid';
  }
} else {
  // Handle case where child is not found
  alert('Child not found for this code.');
}