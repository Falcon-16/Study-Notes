const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed up:', user);
      window.location.href = 'home.html'; // Redirect to home page after successful signup
    })
    .catch((error) => {
      console.error('Signup error:', error.message);
      alert('Signup failed: ' + error.message);
    });
});
