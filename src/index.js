import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPix } from './searchPhotoFunc';
import { createMarkup } from './markup';




const refs = {
	form: document.getElementById('search-form'),
	input: document.getElementById('search-input'),
	gallery: document.querySelector('.gallery'),
	load: document.querySelector('.load-more-hidden'),
}

// const options = {
// 	root: null,
// 	rootMargin: "300px",
// 	threshold: 0,
// };

// const observer = new IntersectionObserver(handlerPagination, options);
let page = 1;

refs.form.addEventListener("submit", searhPhoto);
async function searhPhoto(event) {

	event.preventDefault();
	clearPage();

	const Photo = refs.input.value.trim().toLowerCase();
	// console.log(fetchPix(Photo));
	if (!Photo) {
		clearPage();
		Notiflix.Notify.info('Enter data to search!');
		return;
	}
	try {
		const { hits, total } = await fetchPix(Photo);
		// console.log(hits);
		// console.log(total);

		if (hits.length === 0) {
			Notiflix.Notify.failure(
				`Sorry, there are no images matching your ${Photo}. Please try again.`
			);

			return;
		}
		refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
		Notiflix.Notify.success(`We found ${total} images.`);
		lightbox.refresh();
		refs.load.classList.replace("load-more-hidden", "load-more");
	} catch (error) {
		Notify.failure(error.message, 'Something went wrong!');

		clearPage();
	} finally {
	}
};


const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});

function clearPage() {
	refs.gallery.innerHTML = ''
	page = 1;
}

refs.load.addEventListener("click", handlerPagination);
async function handlerPagination() {
	const Photo = refs.input.value.trim().toLowerCase();
	page += 1;
	const { hits, total } = await fetchPix(Photo, page);
	let maxPage = total / 40;
	// console.log(maxPage);
	// console.log(fetchPix(Photo, page));
	refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
	lightbox.refresh();
	scrollPage()
	refs.load.classList.replace("load-more-hidden", "load-more");
	if (page >= maxPage) {
		refs.load.classList.replace("load-more", "load-more-hidden");
	}
}

function scrollPage() {
	const { height: cardHeight } = document
		.querySelector('.gallery')
		.firstElementChild.getBoundingClientRect();

	window.scrollBy({
		top: cardHeight * 2,
		behavior: 'smooth',
	});
}