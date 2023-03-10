/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const teams = [
    {
        squadra: 'milan',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'inter',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'juventus',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'roma',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'atalanta',
        punti: 0,
        falli: 0
    }
];



function randomNumberGen () {
    return Math.floor(Math.random() * 30) + 1;
} 


teams.forEach(element => {
    element.punti = randomNumberGen ();
    element.falli = randomNumberGen ();
}
);

console.log(squadra, falli);

const {squadra, falli} = teams;

console.log(squadra, falli);

