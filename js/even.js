const toggleSwitch = document.querySelector('#toggles');
const currentTheme = localStorage.getItem('data-bs-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-bs-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
 function switchTheme(e) {
  e.preventDefault();
  if (e.target.checked) {
    document.documentElement.dataset.bsTheme = 'dark';
    localStorage.setItem('data-bs-theme', 'dark');
  } else {
    document.documentElement.dataset.bsTheme = 'light'; 
    localStorage.setItem('data-bs-theme', 'light');
  }

}
toggleSwitch.addEventListener('change', switchTheme);
//
const video = document.getElementById('myVideo');
const check = document.getElementById('sound-toggle');
let muteds = localStorage.getItem('muted');

// Kiểm tra giá trị muted từ localStorage
if (muteds === 'true') {
    video.muted = true;
    check.checked = true;
} else {
    video.muted = false;
    check.checked = false;
}

function switchMuted() {
    if (check.checked) {
        video.muted = true;
        localStorage.setItem('muted', 'true');
    } else {
        video.muted = false;
        localStorage.setItem('muted', 'false');
    }
}

check.addEventListener('change', switchMuted);
