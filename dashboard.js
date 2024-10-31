const dashboardRiderList = document.getElementById('dashboard-rider-list');
const dashboardContactRequests = document.getElementById('dashboard-contact-requests');

// Fetch data from local storage
const riders = JSON.parse(localStorage.getItem('riders')) || [];
const contactRequests = JSON.parse(localStorage.getItem('contactRequests')) || [];

// Display rider information
displayRiderInfo(riders);

// Display contact requests
displayContactRequests(contactRequests);

function displayRiderInfo(riders) {
  dashboardRiderList.innerHTML = '';
  riders.forEach(rider => {
    const listItem = document.createElement('li');
    listItem.textContent = `${rider.name} - Stop: ${rider.stop}`;
    dashboardRiderList.appendChild(listItem);
  });
}

function displayContactRequests(requests) {
  dashboardContactRequests.innerHTML = '';
  requests.forEach(request => {
    const listItem = document.createElement('li');
    listItem.textContent = `${request.name} - Email: ${request.email} - Message: ${request.message}`;
    dashboardContactRequests.appendChild(listItem);
  });
}v