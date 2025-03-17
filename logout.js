function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html'; // or your login page
}