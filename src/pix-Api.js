import Notiflix from 'notiflix';
import { refs } from './index';

export function fetchPix() {
	const url = "https://pixabay.com/api/";
	const apiKey = "38868340-f331cc79d6b60576f7cfbf452";

	const params = new URLSearchParams({
		key: apiKey,
		q: refs.form,
		image_type: photo,
		orientation: horizontal,
		safesearch: true,
	});


	return fetch(url, {
		headers: {
			'x-api-key': apiKey,
		}
	}).then((resp) => {
		if (!resp.ok) {
			refs.loader.classList.replace("loader", "loader-hidden");
			throw new Notiflix.Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
		}
		return resp.json();
	});
};