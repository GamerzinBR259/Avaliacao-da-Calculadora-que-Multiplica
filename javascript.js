function calcMultiplicar() 
{
let Part = document.getElementsByName("num1")[0].value;
let num4 = document.getElementsByName("num2")[0].value;
let sum = Number(Part) * Number(num4)
document.getElementsByName("resultado")[0].value = sum;
}

