
const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt ('Введіть кількість телевізорів');

const totalPrice = pricePerDroid * quantity;
const remainder = credits - totalPrice;

if (quantity === null) {
    console.log('Операцію скасовано!')
} else if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку');
} else if (credits > remainder) {
    console.log(`Ви купили ${quantity} телевізорів, на рахунку залишилось ${remainder} кредитів`);
}