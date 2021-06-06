const result = document.querySelector(".detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://array.maksym.one/wp-json/wc/store/products/" + id;

async function getDetail() {
	try {
	const response = await fetch(url);
	const detail = await response.json();
	console.log(detail);
	result.innerHTML = `<h2>${detail.name}</h2>
	<img class src="${detail.images[0].src}"/>
	<p>Price : ${detail.price_html}</p>
	<button class="buy">Add to cart</button>
	`;
	}
	catch(error) {
		 console.log(error);
		 
	}
};
getDetail();
