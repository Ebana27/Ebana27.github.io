function affClientName() {
    let clientName = prompt('Ecrit ton nom ou ton prenom. EX: Andréa');

    alert('Bienvenue ' + clientName + '!');

    const aff = document.querySelectorAll('.nme');

    aff[0].innerHTML = clientName + ' ' ;

    aff[1].innerHTML = clientName + ' ' ;

    aff[2].innerHTML = clientName + ' ' ;

    if (clientName == null) {
        aff[0].innerHTML =  ' ' + ' ' ;

        aff[1].innerHTML =  ' ' + ' ' ;

        aff[2].innerHTML =  ' ' + ' ' ;

    } 

    else {
        aff[0].innerHTML = clientName + ' ' ;

        aff[1].innerHTML = clientName + ' ' ;

        aff[2].innerHTML = clientName + ' ' ;

    }
}
// affClientName()

// Sélectionner la barre de navigation
const navbar = document.getElementById('navbar');

// Ajouter un écouteur d'événement de défilement
window.addEventListener('scroll', () => {
  // Vérifier si le défilement est en dessous de 100 pixels
  if (window.scrollY > 490) {
    // Si oui, ajouter une classe pour changer la couleur de fond
    navbar.classList.add('scrolled');
  } else {
    // Sinon, enlever la classe
    navbar.classList.remove('scrolled');
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function menuScreen() {
    const nameofsitedeux = document.querySelector('.__Name_of_site-2')
    const nameofsite_link = document.querySelector('.linked');
    const menu = document.querySelector('.__rbrq-ecran-min');
    const menuadd = document.querySelector('.__rbrq-ecran-min-block');
    const clicknameopacity = document.querySelector('.__Name_of_site-2-clik');

    nameofsite_link.addEventListener('click', () => {
        menu.classList.toggle('__rbrq-ecran-min-block');
        nameofsitedeux.classList.toggle('__Name_of_site-2-clik');
    })
}
menuScreen()