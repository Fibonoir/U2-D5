document.addEventListener('DOMContentLoaded', function() {
	const header = document.querySelector('header');
	const nav = document.querySelector('header nav');
	const button = document.querySelector('header ul li:last-child');
	const headerHeight = header.offsetHeight;
	const threshold = headerHeight * 0.8;


	window.addEventListener('scroll', function() {
		if (window.scrollY > threshold) {
			nav.classList.add('nav-scrolled');
			button.classList.add('button-scrolled');
		} else {
			nav.classList.remove('nav-scrolled');
			button.classList.remove('button-scrolled');
		}
	});

	function getRandomSubset(arr, size) {
		const shuffled = arr.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, size);
	}

	function toggleVisibility() {
		const paths = document.querySelectorAll('svg path');
		const randomPaths = getRandomSubset(Array.from(paths), Math.floor(paths.length / 4));
		randomPaths.forEach(path => {
			if (path.classList.contains('hidden')) {
				path.classList.remove('hidden');
				path.classList.add('visible');
			} else {
				path.classList.remove('visible');
				path.classList.add('hidden');
			}
		});
	}

	setInterval(toggleVisibility, 600);
});
