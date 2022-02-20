const calculation = (i) => {
    let a=0, b=1, j=0;
    while (j<i) {
        a=a+b;
        b=a-b;
        j++;
    } 
    return a;
};
const fibo = Number (prompt('Введите число от 0 и больше:'));

if (isNaN(fibo) || fibo<0){
    console.log('Вы ввели не число, или число меньше 0')
} else {
    console.log(calculation(fibo));
}