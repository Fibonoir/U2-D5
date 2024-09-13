document.addEventListener('DOMContentLoaded', function() {
	const header = document.querySelector('header');
	const nav = document.querySelector('header nav');
	const button = document.querySelector('header ul li:last-child');
	const headerHeight = header.offsetHeight;
	const threshold = headerHeight * 0.8;

	console.log(button); // Check if the button is selected

	window.addEventListener('scroll', function() {
		if (window.scrollY > threshold) {
			nav.classList.add('nav-scrolled');
			button.classList.add('button-scrolled');
		} else {
			nav.classList.remove('nav-scrolled');
			button.classList.remove('button-scrolled');
		}
	});
});