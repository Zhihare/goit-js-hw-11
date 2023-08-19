import Notiflix from 'notiflix';

import axios from 'axios';




export const refs = {
	form: document.getElementById('search-form'),
	input: document.getElementById('search-input'),
}

refs.form.addEventListener("submit", searchPhoto);

async function searchPhoto() {
	return console.log("sdsf");
}

