import Notiflix from 'notiflix';
import axios from 'axios';

export async function fetchPix() {
	axios.defaults.baseURL = 'https://pixabay.com/api/';
	const apiKey = "38868340-f331cc79d6b60576f7cfbf452";


	const params = new URLSearchParams({
		page: 1,
		q: value,
		per_page: 40,
		image_type: photo,
		orientation: horizontal,
		safesearch: true,
	});
	const urlAXIOS = `?key=${apiKey}`;
	const { data } = await axios.get(urlAXIOS, { params, });
	return data;

}
