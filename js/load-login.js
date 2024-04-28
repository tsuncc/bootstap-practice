function loadLogin() {
  const loginContainer = document.getElementById('memberLogin');
  if (loginContainer) {
    fetch('html/login.html')
      .then(response => response.text())
      .then(html => {
        loginContainer.innerHTML = html;
      })
      .catch(error => console.error('Error loading the login:', error));
  }
}

document.addEventListener('DOMContentLoaded', loadLogin);