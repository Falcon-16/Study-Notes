const firebaseConfig = {
  apiKey: "AIzaSyB9-tIR3vEwjXQHtELGWhGRxOuS9xbZTvA",
  authDomain: "github-pages-ec8ac.firebaseapp.com",
  projectId: "github-pages-ec8ac",
  storageBucket: "github-pages-ec8ac.firebasestorage.app",
  messagingSenderId: "552576250177",
  appId: "1:552576250177:web:1cc965f999b1045ee0b1c0"
};

firebase.initializeApp(firebaseConfig);

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
