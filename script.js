const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or light images
function imageMode(mode) {
  image1.src = `img/undraw_App_installation_re_h36x_${mode}.svg`;
  image2.src = `img/undraw_Chatting_re_j55r_${mode}.svg`;
  image3.src = `img/undraw_Spreadsheet_re_cn18_${mode}.svg`;
}
// Dark mode
function darkMode() {
  nav.style.backgroundColor = 'rgb (0 0 0 / 50% )';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

// Light mode
function lightMode() {
  nav.style.backgroundColor = 'rgb (255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50% )';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

//Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
