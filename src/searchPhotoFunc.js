export async function fetchPix(photo, page = 1) {
	const url = "https://pixabay.com/api/";
	const apiKey = "38868340-f331cc79d6b60576f7cfbf452";


	const params = new URLSearchParams({
		page,
		q: photo,
		per_page: 40,
		image_type: 'photo',
		orientation: 'horizontal',
		safesearch: true,
	});
	const { data } = await axios.get(`${url}?key=${apiKey}`, { params });
	return data;

}