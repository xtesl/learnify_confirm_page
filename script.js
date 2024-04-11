const url = 'https://learnify-api-kps0.onrender.com/api/v1/auth/confirm-user/'; // Replace with your API endpoint

email = document.getElementById('email');
code = document.getElementById('password');
button = document.getElementById('submit');

const data = {
  'email': email.value,
  'otp': code.value
};


const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
    // Add any other headers you need, such as authorization headers
  },
  body: JSON.stringify(data)
};

function activate(){
  fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    windows.alert('User activation was successful');
    // Handle the response data here
  })
  .catch(error => {
    console.error('There was a problem connecting to the server please try again later', error);
    // Handle errors here
  });
};

button.addEventListener('click', activate);
