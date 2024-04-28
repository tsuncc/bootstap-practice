function loadNav() {
  const footerContainer = document.getElementById('nav-container');
  if (footerContainer) {
    fetch('html/nav.html')
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => console.error('Error loading the navigation:', error));
  }
}

document.addEventListener('DOMContentLoaded', loadNav);
