const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');

});
//featured for CA CMS///////

const url = "https://array.maksym.one/wp-json/wc/store/products/";
const resultDisplay = document.querySelector('#productList');
async function getContent(){
	try{
		const response = await fetch(url);
		const resultsJackets = await response.json();
		console.log(resultsJackets);
		for (let i = 0; i < resultsJackets.length; i++){
			let name = resultsJackets[i].name;
			let img = resultsJackets[i].images[0].src;
			let id = resultsJackets[i].id;
			let price = resultsJackets[i].prices.price;
			console.log(name, img, id, price);
			resultDisplay.innerHTML += `<a href="detail.html?id=${id}">
			<div class="productCard">
			<img class ="productImg" src="${img}"/>
			<h2>${name}</h2>
			<h3>${price}kr</h3>
			<a class="productCardButton" href="#">add to cart</a>
			</div></a>`;

		}
	}
	catch(error){
		console.log("Can't display array")
	}
}
getContent();




