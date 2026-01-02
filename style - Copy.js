const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

signInBtn.addEventListener('click', () => {
  signInBtn.classList.add('active');
  signUpBtn.classList.remove('active');
  signInForm.classList.add('active');
  signUpForm.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
  signUpBtn.classList.add('active');
  signInBtn.classList.remove('active');
  signUpForm.classList.add('active');
  signInForm.classList.remove('active');
});





