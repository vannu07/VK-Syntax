document.addEventListener("DOMContentLoaded", function () {
var observerOptions = {
threshold: 0.12
};
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add("reveal--visible");
observer.unobserve(entry.target);
}
});
}, observerOptions);
var revealTargets = document.querySelectorAll(".section__header, .section__content, .project-card, .cert-card, .experience-card, .education-card, .badge-card, .final-cta");
revealTargets.forEach(function (el) {
el.classList.add("reveal");
observer.observe(el);
});
var orbit = document.querySelector(".hero-orbit");
if (orbit) {
var rect = orbit.getBoundingClientRect();
var centerX = rect.left + rect.width / 2;
var centerY = rect.top + rect.height / 2;
window.addEventListener("mousemove", function (event) {
var x = event.clientX - centerX;
var y = event.clientY - centerY;
var rotateX = y * -0.02;
var rotateY = x * 0.02;
orbit.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
});
}
var avatarImg = document.querySelector(".hero-avatar__img");
if (avatarImg) {
var sources = ["avatar.jpg", "avatar.jpeg", "avatar.png", "avatar.webp"];
var idx = 0;
function showFallback() {
var inner = document.querySelector(".hero-avatar__inner");
if (inner) {
inner.innerHTML = '<span class="hero-avatar__fallback">VK</span>';
}
}
function tryNext() {
if (idx < sources.length) {
avatarImg.src = sources[idx++];
} else {
showFallback();
}
}
avatarImg.addEventListener("error", tryNext);
if (!avatarImg.complete || avatarImg.naturalWidth === 0) {
idx = 0;
tryNext();
}
}
var sections = document.querySelectorAll("section[id]");
var navLinks = document.querySelectorAll(".nav__links a");
if (sections.length && navLinks.length) {
var navObserver = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
var id = entry.target.id;
navLinks.forEach(function (link) {
if (link.getAttribute("href") === "#" + id) {
link.classList.add("nav__link--active");
} else {
link.classList.remove("nav__link--active");
}
});
}
});
}, { threshold: 0.5 });
sections.forEach(function (section) {
navObserver.observe(section);
});
}
});
