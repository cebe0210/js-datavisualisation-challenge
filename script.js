//fermeture balise commentaire :
const allcommentaires = document.querySelectorAll("*");

allcommentaires.forEach((commentaire) => {
    if (commentaire.nodeType === Node.COMMENT_NODE && commentaire.textContent.trim() === "") {
        commentaire.parentNode.removeChild(commentaire);
    }
});


// Extraction des données :
const tableau = document.querySelector("#table1");
const lignes = tableau.querySelectorAll("tbody tr");
const dataYear = {
    years: {}
};

lignes.forEach((ligne, indiceLigne) => {
    const cellules = ligne.querySelectorAll("td");
    if (indiceLigne === 0) {
        for (let i = 2; i < cellules.length; i++) {
            const annee = 2000 + i; // L'année commence en 2002, ajuster l'indice
            dataYear.years[annee] = cellules[i].textContent;
        }
    }
});

console.table(dataYear);


//graphique table1 :
let table1 = document.getElementById('table1');
let canvas = document.createElement('canvas');
table1.parentNode.insertBefore(canvas, table1);
document.addEventListener('DOMContentLoaded', function() {
    let ctx = canvas.getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'red',
                    'blue',
                    'yellow',
                    'green',
                    'purple',
                    'orange'
                ],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});












//test
// Créez un élément img
var image = document.createElement('img');

// Définissez l'attribut src de l'image avec l'URL de l'image
image.src = 'https://i.pinimg.com/236x/69/1f/9b/691f9b71ee4a5efa48b8ec1c652f2b6a.jpg';

// Définissez des attributs supplémentaires si nécessaire
image.alt = 'Description de l\'image'; // Remplacez par une description appropriée

// Insérez l'image avant la table (au-dessus de la partie de la table)
var table = document.getElementById('table1');
table.parentNode.insertBefore(image, table);





/*
//Canvas 2 : 
const canvas2 = document.createElement("canvas");
canvas2.id = "graph2";
canvas2.width = "400px";
canvas2.height = "300px";

const graph2 = document.querySelector("#table2");
graph2.appendChild(canvas2, graph2.firstChild);
*/

/*
//test
// Trouver le tableau avec l'ID "table1"
const tableau = document.querySelector("#table1");
// Trouver toutes les lignes du tableau
const lignes = tableau.querySelectorAll("tbody tr");
// Initialiser un objet pour stocker les données de la Belgique
const donneesBelgique = {
  country: "Belgium",
  years: {},
};
// Parcourir les lignes pour trouver la ligne de la Belgique
lignes.forEach((ligne, index) => {
  const cellules = ligne.querySelectorAll("td");
  if (index === 1 && cellules.length > 0 && cellules[0].textContent === "Belgium") {
    // Trouver les cellules de données année par année et les stocker dans l'objet
    for (let i = 1; i < cellules.length; i++) {
      const annee = 2002 + i - 1; // L'année commence en 2002, ajuster l'indice
      const valeur = parseFloat(cellules[i].textContent.replace(",", ".")); // Convertir en nombre
      donneesBelgique.years[annee] = valeur;
    }
  }
});
// Afficher les données de la Belgique dans la console
console.table(donneesBelgique);

*/