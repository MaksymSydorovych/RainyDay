const url = "https://array.maksym.one/wp-json/wc/store/products/";
const resultDisplay = document.querySelector('.content-products');
async function getContent(){
	try{
		const response = await fetch(url);
		const result= await response.json();
		createHTML(result);
		
		
	}
	catch(error){
		console.log("Can't display array")
	}
}
getContent();
function createHTML(products) {
	products.forEach(function (product) {
		if (product.categories[0].name === "men") {
			resultDisplay.innerHTML += `<div class="product">
		<img src="${product.images[0].src}" alt="${product.name}">
		<h3>${product.name} </h3>
		<p> Price:${product.price_html}</p>
		<div class="button"><a href="detail.html?id=${product.id}"> Detail</a></div>
		</div>`;
		}
	});
};
