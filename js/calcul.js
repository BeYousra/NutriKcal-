let valAge;
let valPoids;
let valTaille;
let valSexe;
let valeur;
let objectif;
let intensite;
let mb;
let dej;
let res;

//id de div2
const genreTxt = document.getElementById('genreTxt');
const ageTxt = document.getElementById('ageTxt');
const poidsTxt = document.getElementById('poidsTxt');
const tailleTxt = document.getElementById('tailleTxt');
const valeurTxt = document.getElementById('valeurTxt');
const valInten = document.getElementById('valInten');
const mbTxt = document.getElementById('mbTxt');
const dejTxt = document.getElementById('dejTxt');
const objTxt = document.getElementById('objTxt');

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

function setCalcul(){
div1.classList.add("none")
div2.classList.remove("none")

//get from html
if (document.getElementById('femme').checked) {
    valSexe = 'femme';
} else if(document.getElementById('homme').checked){
    valSexe = 'homme';
}
//get from html
valAge = document.getElementById("age").value;
valPoids = document.getElementById("poids").value;
valTaille = document.getElementById("taille").value;

//get from html
if (document.getElementById('sédentaire').checked) {
    valeur = 'sédentaire';
} else if(document.getElementById('légère').checked){
    valeur = 'légère';
} else if(document.getElementById('modéré').checked){
    valeur = document.getElementById('modéré').value;
} else if(document.getElementById('intense').checked){
    valeur = document.getElementById('intense').value;
}
//get from html
if (document.getElementById('perte').checked) {
    objectif = 'perte';
} else if(document.getElementById('gain').checked){
    objectif = 'gain';
} 
//get from html
if (document.getElementById('1').checked) {
    intensite = '1';
} else if (document.getElementById('2').checked) {
    intensite = '2';
} else if (document.getElementById('3').checked) {
    intensite = '3';
} else if (document.getElementById('4').checked) {
    intensite = '4';
} else if (document.getElementById('5').checked) {
    intensite = '5';
}

console.log(valeur);
console.log(objectif);
console.log(intensite);
// afficher sur div2
if (valSexe == "homme"){
    genreTxt.innerHTML = "Tu es un " + "<strong>" + valSexe + "</strong>";
} else {
    genreTxt.innerHTML = "Tu es une " + "<strong>" + valSexe + "</strong>";
}

if (valeur == 'sédentaire' ) {
    valeurTxt.innerHTML = "Ton niveau d'activité est " + valeur;
} else if(valeur == 'légère'){
    valeurTxt.innerHTML = "Ton niveau d'activité est " + valeur;
} else if(valeur == 'modéré'){
    valeurTxt.innerHTML = "Ton niveau d'activité est " + valeur;
} else if(valeur == 'intense'){
    valeurTxt.innerHTML = "Ton niveau d'activité est " + valeur;
}

// afficher sur div2
ageTxt.innerHTML = " Tu as " + "<strong>" + valAge  + " ans " + "</strong>";
tailleTxt.innerHTML = "Tu mesures " + "<strong>" + valTaille + " cm" + "</strong>";
poidsTxt.innerHTML = "Tu pèses " + "<strong>" + valPoids  + " kg" + "</strong>";
calcul(); 
}

function calcul(){
    mb = (10 * valPoids) + (6.25 * valTaille) - (5* valAge);
    if (valSexe == 'homme'){
        mb + 5 ;
    } else{
        mb - 161;
    }
    
    if(valeur == 'sédentaire'){
        dej = mb * 1.2;
    } else if(valeur =='légère'){
        dej = mb * 1.375;
    } else if(valeur == 'modéré'){
       dej = mb * 1.55;
    } else{
        dej = mb * 1.725;
    }
    console.log(mb + "fdkfdsmklfs")

    mbTxt.value = mb;
    dejTxt.value = dej;
// console.log(valObjectif + " valobj")
    if(objectif == 'perte'){
        console.log('PERTE VALOBJ')
        if(intensite == 1){
            res = dej - 100;
        } else if(intensite == 2){
            res = dej - 200;
        } else if(intensite == 3){
            res = dej - 300;
        } else if(intensite == 4){
            res = dej - 400;
        } else if(intensite == 5){
            res = dej - 500;
        }
    } else if(objectif == 'gain'){
        if(intensite == 1){
            res = dej + 100;
        } else if(intensite == 2){
            res = dej + 200;
        } else if(intensite == 3){
            res = dej + 300;
        } else if(intensite == 4){
            res = dej + 400;
        } else if(intensite == 5){
            res = dej + 500;
        }
    }

    console.log(objectif + " valobj")
    // message a afficher (kcal)...
    if((objectif == 'perte') && (res < mb)){
        objTxt.value =  res ;
    } else if((objectif == 'perte') && (res > mb)){
        objTxt.value =   res ;
    } else if((objectif == 'gain') && (res > mb)){
        objTxt.value = res ;
    }

console.log(mb);
console.log(dej);
console.log(res);
// afficher sur div2

}

// " Votre déficit dépasse votre Métabolisme Basal, donc il est déconseillé d'être en dessous de <strong>"
// " Votre déficit ne dépasse pas votre Métabolisme Basal, donc il est conseillé d'être au dessus de <strong>"


// CAROUSEL

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

