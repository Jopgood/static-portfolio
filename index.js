// Dark mode toggle functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

function updateDarkModeIcon() {
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'light' : 'dark';
  }

darkModeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateDarkModeIcon()

    // Store user's preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled')
    }
})

// Check for stored user's preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode')
}

// set the text
updateDarkModeIcon()