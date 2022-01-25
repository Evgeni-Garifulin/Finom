const sliderPhotoActivate = () => {
	const card = document.querySelectorAll('.about__photo-card');
	const name = document.querySelectorAll('.about__photo-name');
	const image = document.querySelectorAll('.about__photo-inner');

	let activePreview = 0;

	card.forEach((item, i) => {
		item.addEventListener('click', () => {
			card[activePreview].classList.remove('about__photo-card--active');
			image[activePreview].classList.remove('about__photo-inner--active');
			name[activePreview].classList.add('about__photo-name--active');

			activePreview = i;

			card[activePreview].classList.add('about__photo-card--active');
			image[activePreview].classList.add('about__photo-inner--active');
			name[activePreview].classList.remove('about__photo-name--active');
		});
	});
}

export { sliderPhotoActivate };
