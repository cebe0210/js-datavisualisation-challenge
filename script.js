/*const { Chart } = require("chart.js");*/

//fermeture balise commentaire :
const allcommentaires = document.querySelectorAll("*");

allcommentaires.forEach((commentaire) => {
    if (commentaire.nodeType === Node.COMMENT_NODE && commentaire.textContent.trim() === "") {
        commentaire.parentNode.removeChild(commentaire);
    }
});


//Tableau 1 :
    //Création canvas1 :
    let table1 = document.getElementById('table1');
    let canvas1 = document.createElement('canvas');
    table1.parentNode.insertBefore(canvas1, table1);

    //Extration table1 :
    const years = [];
    const countries = [];
    const matrice = [];


    //Extraction nom pays + data:
    for(let i = 2; i <table1.rows.length; i++){
        const row = table1.rows[i];
        const pays = row.cells[1].textContent;
            
        countries.push(pays);  
    }
    
    // Extraction des données :
    for (let i = 2; i < table1.rows.length; i++) {
        const row = table1.rows[i];
        const rowData = [];
    
        for (let j = 2; j < row.cells.length; j++) {
            const data = parseFloat(row.cells[j].textContent.replace(',', '.'));
            rowData.push(data);
        }
        matrice.push(rowData);
    } 
    //Extraction des années : 
    const row = table1.rows[1];

    for (let j = 2; j < row.cells.length; j++) {
        const year = parseFloat(row.cells[j].textContent);
        years.push(year);
    }

    //Visualisation data test :
/* 
    console.table(countries);
    console.table(years);
    console.table(matrice);
*/
    
    //Generation de couleur random :
    function randomColor() {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
      
        return `rgb(${r},${g},${b})`; 
      }
    const backgroundColors = matrice.map(() => randomColor());
    
    //Creation graphique table1 :  
    let ctx1 = canvas1.getContext('2d');
    let myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [{
                label: '# of Votes',
                data: matrice,
                backgroundColor: backgroundColors,
            }]
        },
       
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
    /*
    console.table(labels2);
    console.table(datacol3);
    console.table(datacol4);
    */


    //Création graphique table2 :
    const ctx2 = canvas2.getContext('2d');

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



/*
    function randomColor() {
        const r = Math.floor(Math.random() * 256); // Valeur aléatoire entre 0 et 255 pour le rouge
        const g = Math.floor(Math.random() * 256); // Valeur aléatoire entre 0 et 255 pour le vert
        const b = Math.floor(Math.random() * 256); // Valeur aléatoire entre 0 et 255 pour le bleu
      
        return `rgb(${r},${g},${b})`; // Retourne la couleur au format "rgb(r,g,b)"
      }
    const backgroundColors = data.map(() => randomColor());
      


document.addEventListener('DOMContentLoaded', function() {
    let ctx1 = canvas1.getContext('2d');
    let myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [{
                label: '# of Votes',
                data: matrice,
                backgroundColor: backgroundColors,
            }]
        },
       
    });
});

*/