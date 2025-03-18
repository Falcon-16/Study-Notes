// Initialize Firebase (make sure this matches your Firebase configuration)
const firebaseConfig = {
    apiKey: "AIzaSyB9-tIR3vEwjXQHtELGWhGRxOuS9xbZTvA",
    authDomain: "github-pages-ec8ac.firebaseapp.com",
    projectId: "github-pages-ec8ac",
    storageBucket: "github-pages-ec8ac.firebasestorage.app",
    messagingSenderId: "552576250177",
    appId: "1:552576250177:web:1cc965f999b1045ee0b1c0"
};
  firebase.initializeApp(firebaseConfig);
  
  // Set up the authentication state listener
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, allow access to the current page
      console.log('User is signed in:', user.email);
    } else {
      // No user is signed in, redirect to login page
      window.location.href = 'login.html';
    }
  });
  