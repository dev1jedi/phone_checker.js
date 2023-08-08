const readline = require('readline-sync');


const number = readline.question("Введите номер телефона в формате '+79999999999': ");



const APILink = `http://num.voxlink.ru/get/?num=${number}`;

async function takeInfo (APILink){
    const response = await fetch(APILink); 
    const data = await response.json();
    return data;
}


async function printInfo() {
    try {
        const result = await takeInfo (APILink);
        if (result.info != `Номер не найден. Проверьте код города: num=${number}`) {
            console.log(`Код региона: ${result.code}, оператор: ${result.operator}, регион: ${result.region}`)
        } else {
            console.log("Введен неправильный формат данных!")
        }
        
    } catch(err){
        console.log("Произошла ошибка!")
    }
}

printInfo();