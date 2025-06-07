// STAT COUNT ANIMATION
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 100;
        const increment = target / speed;
        if (count < target) { counter.innerText = Math.ceil(count + increment); setTimeout(updateCount, 20); } else {
            counter.innerText = target.toLocaleString();
        }
    }; updateCount();
});
// VIEW MORE FAQs
document.getElementById("viewMoreFaqBtn").addEventListener("click", function () {
    document.querySelectorAll(".extra-faq").forEach(el => el.classList.remove("d-none"));
    this.style.display = "none";
});
// NAVBAR SCROLL ANIMATION
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }
    lastScrollY = window.scrollY;
});
// TOGGLE MENU
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
        menuList.classList.remove('show');
    }
});
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar-custom');
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});