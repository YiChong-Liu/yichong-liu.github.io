// ====== 导航栏滚动效果 ======
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ====== 平滑滚动锚点 ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});