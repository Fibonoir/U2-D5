document.addEventListener('DOMContentLoaded', function() {
	const header = document.querySelector('header');
	const nav = document.querySelector('header nav');
	const headerHeight = header.offsetHeight;
	const threshold = headerHeight * 0.8;

	window.addEventListener('scroll', function() {
		if (window.scrollY > threshold) {
			nav.classList.add('nav-scrolled');
		} else {
			nav.classList.remove('nav-scrolled');
		}
	});
});