const calculation = (i) => {return i+i-1};
const fibo = Number (prompt('Введите положительное число больше 0'));

if (isNaN(fibo) || fibo<=0){
    console.log('Вы ввели не чило, либо чило равное или больше 0')
} else {
    console.log(calculation(fibo));
}