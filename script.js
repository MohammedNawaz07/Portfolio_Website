AOS.init();

// Dark mode toggle for navbar
document.getElementById("dark-toggle").addEventListener("click", function () {
  const nav = document.getElementById("rightNav");
  nav.classList.toggle("dark-mode");
});

// Resume download
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'Mohammed_Nawaz_Resume.pdf';
  link.click();
}

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Typing animation
const typingText = "Hello, I'm Mohammed Nawaz";
let index = 0;

function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing-text").textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;