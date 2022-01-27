const mobileMenuShow = () => {
	const menu = document.querySelector('.header__mobile');
	const body = document.querySelector('body');
	const overlay = document.querySelector('.page-overlay');
	const openButton = document.querySelector('.header__burger');
	const closeButton = document.querySelector('.header__close');

	openButton.addEventListener('click', () => {
		body.classList.add('no-scroll');
		menu.classList.add('header__mobile--active');
		overlay.classList.add('page-overlay--active');
		closeButton.classList.add('header__close--active');
		openButton.classList.remove('header__burger--active');
	});

	closeButton.addEventListener('click', () => {
		body.classList.remove('no-scroll');
		menu.classList.remove('header__mobile--active');
		overlay.classList.remove('page-overlay--active');
		closeButton.classList.remove('header__close--active');
		openButton.classList.add('header__burger--active');
	});

	overlay.addEventListener('click', () => {
		body.classList.remove('no-scroll');
		menu.classList.remove('header__mobile--active');
		overlay.classList.remove('page-overlay--active');
		closeButton.classList.remove('header__close--active');
		openButton.classList.add('header__burger--active');
	});
};

export { mobileMenuShow };
