// Je crée une variable de type tableau
let tab = []
// Je lie ces variables à mon HTML
const prixArticle = document.querySelector('#prix')
const button = document.querySelector('#bttn')
const button2 = document.querySelector('#bttn2')
const onMeRend = document.querySelector('#onMeRend')
// Toujours donner une valeur à une variable
let rendu = 0
let dix = 0
let cinq = 0
let un = 0



// Je crée un listener pour mon bouton "button" qui appellera la fonction "valeurArticle"
button.addEventListener('click', valeurArticle)

// Je crée une fonction qui ajoute avec "push" la valeur de "prixArticle" dans mon tableau
function valeurArticle() {
    tab.push(parseInt(prixArticle.value))
    sum=0
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    // textContent ajoute du texte dans l'HTML
    document.querySelector('#somme').textContent = sum
}



button2.addEventListener('click', depense)

function depense() {
    monnaieClient = document.querySelector('#monnaieClient').value;
    onMeRend.textContent = monnaieClient - sum;
    rendu = monnaieClient - sum;
    while (rendu >= 10) {
        dix += 1;
        rendu = rendu - 10;
        document.querySelector('#dix').textContent = dix
    }
    while (rendu >= 5) {
        cinq += 1;
        rendu = rendu - 5;
        document.querySelector('#cinq').textContent = cinq
    }
    while (rendu > 0 && rendu < 5) {
        un += 1;
        rendu = rendu - 1;
        document.querySelector('#un').textContent = un
    }
}