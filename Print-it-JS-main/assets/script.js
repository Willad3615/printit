const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Navigation avec la flèche gauche
const dotSelected = document.getElementsByClassName("dot_selected")[0];
const arrowLeft = document.getElementsByClassName("arrow_left")[0];
arrowLeft.addEventListener("click", previousSlide);


//Navigation avec la flèche droite
const arrowRight = document.getElementsByClassName("arrow_right")[0];
arrowRight.addEventListener("click", nextSlide);


//Affichage du nombre de points
const nbDots = slides.length;
const dots = document.getElementsByClassName("dots")[0];
const points = [];
for(var i=0; i< nbDots; i++){
	const para = document.createElement("p");
	para.innerText = "";
	para.classList.add("dot");
	dots.appendChild(para);
	points.push(para);
	
}

//afficher automatiquement la sélection du premier point
points[0].classList.add("dot_selected");
var ind = "";

// Gestion de l'affichage au click sur les boutons
points.forEach(element => {
	element.addEventListener("click", function(){
		
	selected = document.getElementsByClassName("dot_selected")[0];
	bannerImage = document.getElementsByClassName("banner-img")[0];
	banner = document.getElementById("banner");

	
	element.classList.add("dot_selected");
	selected.classList.remove("dot_selected");
	
	
	ind = points.indexOf(element);
	bannerImage.src="./assets/images/slideshow/".concat(slides[ind].image);
	banner.getElementsByTagName("P")[0].innerHTML = slides[ind].tagLine;
		});
	});






//Navigation avec la flèche gauche
function previousSlide(){
	selected = document.getElementsByClassName("dot_selected")[0];
	selected.classList.remove("dot_selected");
	bannerImage = document.getElementsByClassName("banner-img")[0];
	banner = document.getElementById("banner");
	ind = points.indexOf(selected);
	

	if(ind == 0){
		ind = 3;
		points[ind].classList.add("dot_selected");
	}else{
		
		ind -= 1;
		points[ind].classList.add("dot_selected");
	}

	bannerImage.src="./assets/images/slideshow/".concat(slides[ind].image);
	banner.getElementsByTagName("P")[0].innerHTML = slides[ind].tagLine;
	
}

//Navigation avec la flèche droite
function nextSlide(){
	selected = document.getElementsByClassName("dot_selected")[0];
	selected.classList.remove("dot_selected");
	bannerImage = document.getElementsByClassName("banner-img")[0];
	banner = document.getElementById("banner");
	ind = points.indexOf(selected);

	if(ind == 3){
		ind = 0;
		points[ind].classList.add("dot_selected");
	}else{
		ind += 1;
		points[ind].classList.add("dot_selected");
	}
	
	bannerImage.src="./assets/images/slideshow/".concat(slides[ind].image);
	banner.getElementsByTagName("P")[0].innerHTML = slides[ind].tagLine;
}
	
