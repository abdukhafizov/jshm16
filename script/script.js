let number = +prompt(" Напиши-ка мне, сударь, любую цифру.")
let i = 0;

while (i <= 9) {
    i++
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);

}