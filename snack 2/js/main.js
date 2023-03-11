/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const teams = [
    {
        squadra: 'milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: 'juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: 'roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: 'atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    }
];



function randomNumberGen () {
    return Math.floor(Math.random() * 30) + 1;
} 

const teamsPoint =[...teams];

teamsPoint.forEach(element => {
    element.puntiFatti = randomNumberGen ();
    element.falliSubiti = randomNumberGen ();
    const {squadra, falliSubiti} = element;
    console.log(`Squadra: ${squadra}, falli subiti: ${falliSubiti}`);
}
);



