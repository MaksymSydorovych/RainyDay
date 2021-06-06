"use strict"
const hamburger = document.getElementById("hamburger");
const closeBurger = document.getElementById("close-burger");
const navBar = document.getElementById("nav-bar");
const human = document.querySelector(".human");
hamburger.addEventListener("click", () => {
	navBar.classList.toggle("show");
	if (navBar.classList.contains("show")){
		hamburger.style.display = "none";
		closeBurger.style.display = "block";
		
	}
}
);
closeBurger.addEventListener("click", () => {
navBar.classList.remove("show");

hamburger.style.display = "block";
closeBurger.style.display = "none";
});

//picture
const picture = document.querySelector(".picture");
if(picture){
	document.addEventListener("mousemove", parallax);
		const pictureContainer = document.querySelector(".picture-container");
		const clouds = document.querySelector(".clouds");
		const mountains = document.querySelector(".mountains");
		const human = document.querySelector(".human");
		function parallax(e){
			const widthH = (window.innerWidth - e.pageX*0.1);
			const heightH = (window.innerHeight - e.pageY*0.1);
			const widthC = (window.innerWidth - e.pageX*0.3);
			const heightC = (window.innerHeight - e.pageY*0.3);
			const widthM = (window.innerWidth - e.pageX*0.2);
			const heightM = (window.innerHeight - e.pageY*0.2);
			
			human.style.transform = `translateX(${widthH / 100}%) translateY(${heightH / 100}%)`;
			clouds.style.transform = `translateX(${widthC / 70}%) translateY(${heightC / 70}%)`;
			mountains.style.transform = `translateX(${widthM / 80}%) translateY(${heightM / 80}%)`;
			
		}
	
	}

