import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
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
	const Photo = refs.input.value;
	const { hits } = await fetchPix(Photo);
	console.log(hits);

	refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
}

// fetchPix("cat").then(console.log);
