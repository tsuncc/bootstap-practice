function loadNav() {
  const navContainer = document.getElementById('nav-container');
  if (navContainer) {
    fetch('html/nav.html')
      .then(response => response.text())
      .then(html => {
        navContainer.innerHTML = html;
      })
      .catch(error => console.error('Error loading the navigation:', error));
  }
}

document.addEventListener('DOMContentLoaded', loadNav);
