const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');

});
///1
const result = document.querySelector('#detail');
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
	document.title = `${document.title} ${detail.title.rendered}`;
	result.innerHTML = `<h2>${detail.name}</h2>
	<img class ="productImg" src="${detail.images[0].src}"/>
	<p>Price : ${detail.prices.price}</p>
	`
	}
	catch(error) {
		 console.log(error);
		 
	}
};
const showImage = document.querySelector(".image-show");
    const preview = document.querySelector(".post-container img");
    const original = document.querySelector(".max-img");

    preview.addEventListener("click", () => {
      showImage.classList.add("open");
      original.classList.add("open");
    });

    showImage.addEventListener("click", (e) => {
      if (e.target.classList.contains("image-show")) {
        showImage.classList.remove("open");
        original.classList.remove("open");
      }
    });

    document.title = json.title.rendered;
  } catch (error) {
    detailContainer.innerHTML = displayError();
    console.log(error);
  }
getDetail();

