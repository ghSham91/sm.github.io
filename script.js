// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  // Toggle the display of the nav menu
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'column';
    navbar.style.alignItems = 'center';
    navbar.style.backgroundColor = '#000';
  }
});

// Example form submission handling
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('email').value.trim();

  if (emailInput) {
    alert(`Thank you for subscribing, ${emailInput}!`);
    signupForm.reset();
  } else {
    alert('Please enter a valid email address.');
  }
});
