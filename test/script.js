const Chart = require("chart.js");

// Création de la balise canvas2 :
const canvas2 = document.createElement("canvas");
canvas2.width = 400;
canvas2.height = 300;
canvas2.id = "can2";
canvas2.setAttribute("aria-label", "chart");
canvas2.setAttribute("role", "img");

// Insérer le canvas2 avant la table2 :
const table2 = document.getElementById("table2");
table2.parentNode.insertBefore(canvas2, table2);

// Sélectionner le canvas2 (l'ID doit correspondre) :
const graph2 = document.getElementById("can2");

// Création du graphique avec Chart.js :
const chart2 = new Chart(graph2, {
    type: "bar",
    data: {
        labels: ["test1", "test2", "test3", "test4"],
        datasets: [{
            label: "Données de test",
            data: [240, 120, 150, 163],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});
