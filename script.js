/*const { Chart } = require("chart.js");*/

//fermeture balise commentaire :
const allcommentaires = document.querySelectorAll("*");

allcommentaires.forEach((commentaire) => {
    if (commentaire.nodeType === Node.COMMENT_NODE && commentaire.textContent.trim() === "") {
        commentaire.parentNode.removeChild(commentaire);
    }
});

//Tableau 2 :
    //Création canvas2 :
    let table2 = document.getElementById('table2');
    let canvas2 = document.createElement('canvas');
    table2.parentNode.insertBefore(canvas2, table2);

    //Extration table2 :
    const labels2 = [];
    const datacol3 = [];
    const datacol4 = [];


    for(let i = 1; i <table2.rows.length; i++){
        const row = table2.rows[i];
        const pays = row.cells[1].textContent;
        const data = parseFloat(row.cells[2].textContent);
        const data1 = parseFloat(row.cells[3].textContent);

        labels2.push(pays);
        datacol3.push(data);
        datacol4.push(data1);
    }

    //visualisation data test :
    console.table(labels2);
    console.table(datacol3);
    console.table(datacol4);

   /* //création du graphique2 :
    const graph2 = new Chart(ctx,{
        type: 'bar',
        datasets: [{
            labels: labels2,
            data: datacol3,
            backgroundColor: '#000000'

        }]
    })*/

    const ctx2 = canvas2.getContext('2d');

// Créez un nouveau graphique Chart.js
const graph2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: labels2,
    datasets: [
      {
        label: '2007-09',
        data: datacol3,
        backgroundColor: '#0074D9'
      },
      {
        label: '2010-12',
        data: datacol4,
        backgroundColor: '#FF851B'
      }
    ]
  }
});





















// Graphique pour table1 :
let table1 = document.getElementById('table1');
let canvas1 = document.createElement('canvas');
table1.parentNode.insertBefore(canvas1, table1);
document.addEventListener('DOMContentLoaded', function() {
    let ctx1 = canvas1.getContext('2d');
    let myChart1 = new Chart(ctx1, {
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

// Graphique pour table2 :
/*
let table2 = document.getElementById('table2');
let canvas2 = document.createElement('canvas');
table2.parentNode.insertBefore(canvas2, table2);



document.addEventListener('DOMContentLoaded', function() {
    let ctx2 = canvas2.getContext('2d');
    let myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: backgroundColors,
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
*/

/*
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let backgroundColors = [];
for (let i = 0; i < dataLabels.length; i++) {
    backgroundColors.push(getRandomColor());
}
*/






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


/*
// création balise script chart.js :
const scriptElement = document.createElement('script');
scriptElement.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js";
document.body.appendChild(scriptElement);

scripElement.onload = function(){

};
*/
/*
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

//bg-random :
*/
