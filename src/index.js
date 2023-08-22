import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPix } from './searchPhotoFunc';
import { createMarkup } from './markup';




const refs = {
	form: document.getElementById('search-form'),
	input: document.getElementById('search-input'),
	gallery: document.querySelector('.gallery'),
}


refs.form.addEventListener("submit", searhPhoto);
async function searhPhoto(event) {

	event.preventDefault();
	clearPage();

	const Photo = refs.input.value.trim().toLowerCase();
	// const {
	// 	elements: { searchQuery },
	// } = event.target;

	// const search_query = searchQuery.value.trim().toLowerCase();

	if (!Photo) {
		clearPage();
		Notiflix.Notify.info('Enter data to search!');
		return;
	}
	try {
		const { hits, total } = await fetchPix(Photo);
		console.log(hits);
		console.log(total);

		if (hits.length === 0) {
			Notiflix.Notify.failure(
				`Sorry, there are no images matching your ${Photo}. Please try again.`
			);

			return;
		}
		refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
		Notiflix.Notify.success(`We found ${total} images.`);
		lightbox.refresh();
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
	// fetchPix().this.page = "1";
	refs.gallery.innerHTML = '';
}