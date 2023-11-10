// your code here
function updateUrl() {
	const nameValue = document.getElementById('name').value;
	const yearValue = document.getElementById('year').value;

	const urlElement = document.getElementById('url');
	urlElement.textContent = `https://localhost:8080/?name=${nameValue}&year=${yearValue}`;

	return false;
}

const form = document.getElementById('queryStringForm');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	updateUrl();
})