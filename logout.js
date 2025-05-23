firebase.initializeApp(firebaseConfig);

function logout() {
  firebase.auth().signOut().then(() => {
      console.log('User signed out successfully');
      window.location.href = 'Study-Notes/index.html'; // Redirect to login page
  }).catch((error) => {
      console.error('Logout error:', error);
  });
}

document.getElementById('logoutButton').addEventListener('click', logout);
