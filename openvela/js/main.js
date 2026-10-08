// ===== 导航条滚动效果 =====
const nav = document.getElementById('mainNav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  // 滚动时添加轻微阴影
  if (currentScrollY > 50) {
    nav.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
  
  lastScrollY = currentScrollY;
});

// ===== 视频控制（可选：点击暂停/播放）=====
const video = document.getElementById('demoVideo');
if (video) {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  
  // 鼠标悬停显示控制条
  const wrapper = video.parentElement;
  wrapper.addEventListener('mouseenter', () => {
    video.controls = true;
  });
  wrapper.addEventListener('mouseleave', () => {
    video.controls = false;
  });
}

// ===== 平滑滚动到锚点（兼容性）=====
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