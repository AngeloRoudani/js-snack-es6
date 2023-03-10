const numberList = [];

generatorNumber(numberList);
console.log(numberList);

function generatorNumber (array) {
    
    for ( i = 1; i <=100; i++){
        array.push(i)
    }
    return array;
}
const newNumberList =[...numberList];

function generatorNew (array, a, b) {

    array.foreach (number => {
        if((number > a) && (number < b)){
            return true;
        } else {
            return false;
        }
    })
}

generatorNew(newNumberList, 25, 62);
console.log(newNumberList);