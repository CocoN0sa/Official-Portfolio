// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scroll
function scrollToSection(id) {
  const element = document.getElementById(id);
  if(element){
    element.scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
  }
}
