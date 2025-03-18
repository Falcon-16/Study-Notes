const firebaseConfig = {
  apiKey: "AIzaSyB9-tIR3vEwjXQHtELGWhGRxOuS9xbZTvA",
  authDomain: "github-pages-ec8ac.firebaseapp.com",
  projectId: "github-pages-ec8ac",
  storageBucket: "github-pages-ec8ac.firebasestorage.app",
  messagingSenderId: "552576250177",
  appId: "1:552576250177:web:1cc965f999b1045ee0b1c0"
};

firebase.initializeApp(firebaseConfig);

function logout() {
    firebase.auth().signOut().then(() => {
      console.log('User signed out successfully');
      window.location.href = 'login.html'; // Redirect to login page
    }).catch((error) => {
      console.error('Logout error:', error);
    });
  }
  
  document.getElementById('logoutButton').addEventListener('click', logout);
  