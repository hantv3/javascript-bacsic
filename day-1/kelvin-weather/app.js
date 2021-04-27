// Nhiệt độ tính bằng Kelvin
const kelvin = 293;

// Nhiệt độ tính bằng Celsius (giá trị hoán đổi từ nhiệt độ Kelvin)
let celsius = kelvin - 273;

// Nhiệt độ được tính bằng Farenheeit (chuyển đổi từ Celsius)
// sử dụng phương thức Math.floor để làm tròn thành số nguyên
let farenheit = Math.floor(celsius * (9 / 5) + 32);

// Nhiệt độ được tính bằng newton (chuyển đổi từ Celsius)
// Sử dụng phương thức Math.floor để làm tròn vể số nguyên

let newton = Math.floor(celsius * (33 / 100));

//Answers
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`)