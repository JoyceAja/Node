console.log(`The result is ${Number(process.argv[2])+ Number(process.argv[3])}`)

function add(num1, num2 = 0){ //in the case where a second number is not passed //can also do that for num1 - in the case there is no input
    return num1 + num2       //can also increase the number of parameters 
}