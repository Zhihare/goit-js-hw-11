import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export const refs = {
	form: document.getElementById('search-form'),
	input: document.getElementById('search-input'),
}

refs.form.addEventListener("submit", searhPhoto);

function searhPhoto() {
	let a = []
	a.push(refs.input.value);
	console.log(a);
}
console.dir(refs.form);
console.log(refs.input.value);