/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const sportBike = [ 
    {
        nome: 'Legnano',
        peso: 8
    },
    {
        nome: 'Spectre',
        peso: 7
    },
    {
        nome: 'Adam',
        peso: 6
    },
    {
        nome: 'Thunder',
        peso: 9
    } 
]

const lowWeight = {nome, peso} = sportBike[2];
console.log(lowWeight)
const containerDom = document.querySelector('.container');
containerDom.innerHTML = `la bici più leggera è: ${lowWeight.nome} ${lowWeight.peso} `;

    