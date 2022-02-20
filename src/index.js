const calculation = (i) => {
    let a=1, b=1, sum=0, j=0;
    while (j<i-2) {
        sum=a+b;
        a=b;
        b=sum;
        j++;
    } 
    return sum
};
const fibo = Number (prompt('Введите положительное число больше 0'));

if (isNaN(fibo) || fibo<=0){
    console.log('Вы ввели не чило, либо чило равное или больше 0')
} else {
    console.log(calculation(fibo));
}