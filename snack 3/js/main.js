const numberList = [];
const newNumberList = [];

generatorNumber(numberList);
console.log(numberList);

generatorNew(numberList, 25, 62);
console.log(newNumberList);

function generatorNumber (array) {
    
    for ( i = 1; i <=100; i++){
        array.push(i)
    }
    return array;
}

function generatorNew (array, a, b) {

    array.filter (number => {
        if((number > a) && (number < b)){
            return newNumberList.push(number)
        }
    }
    );
}

