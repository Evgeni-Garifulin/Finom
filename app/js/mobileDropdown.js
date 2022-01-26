const mobileDropdown = () => {
	const menuItem = document.querySelectorAll('.header__mobile-item-dropdown');
	const itemDropdown = document.querySelectorAll('.header__mobile-dropdown');

	let activePreview = 0;

	menuItem.forEach((item, i) => {
		item.addEventListener('click', () => {
			activePreview = i;

			menuItem[activePreview].classList.toggle('header__mobile-item-dropdown--active');
			itemDropdown[activePreview].classList.toggle('header__mobile-dropdown--active');
		});
	});
};

export { mobileDropdown };
