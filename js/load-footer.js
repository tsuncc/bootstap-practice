function loadFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    fetch('html/footer.html')
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => console.error('Error loading the footer:', error));
  }
}

document.addEventListener('DOMContentLoaded', loadFooter);
