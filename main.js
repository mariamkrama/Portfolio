// سنة ديناميكية
document.getElementById('year').textContent = new Date().getFullYear();

// زر للأعلى
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    backToTop.classList.toggle('show', window.scrollY > 600);
    // تحديث الروابط النشطة (scrollspy)
    const sections = document.querySelectorAll('section[id]');
    let currentId = '';
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) currentId = sec.id;
    });
    if (currentId) {
        document.querySelectorAll('#sideNav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + currentId));
    }
});
if (backToTop) {
    backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

// ظهور العناصر أثناء التمرير
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.15 });
revealElements.forEach(el => observer.observe(el));

// تبديل الوضع
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const themeToggleM = document.getElementById('themeToggleM');
function applyTheme(t) { if (t === 'dark') body.classList.add('theme-dark'); else body.classList.remove('theme-dark'); }
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
function toggleTheme() {
    const isDark = body.classList.toggle('theme-dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (themeToggleM) themeToggleM.addEventListener('click', toggleTheme);

// قائمة الموبايل
const drawerToggle = document.getElementById('drawerToggle');
const drawer = document.getElementById('drawer');
if (drawerToggle) drawerToggle.addEventListener('click', () => drawer.classList.toggle('open'));
if (drawer) drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
