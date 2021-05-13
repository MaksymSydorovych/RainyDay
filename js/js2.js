const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');

});
///

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
const url = "https://array.maksym.one/wp-json/wc/store/products/" + id;

async function getDetail() {
	try {
	const response = await fetch(url);
	const detail = await response.json();
	console.log(detail);
	}
	catch(error) {
		 console.log(error);
		 
	}
};
getDetail();
const resultDisplay = document.querySelector('#detail');
function createHtml(getDetail){
	const img = getDetail[id].images[0].src;
	const name = getDetail[id].name;
	const price = getDetail[id].prices.price;
	
	try {
		detail.innerHTML = `
		<p>${name}</p>
		<img src="${img}"/>
		<p>${price}</p>
		
		`
	}
	catch(error){
		console.log("Can't display")
	}
}
createHtml();