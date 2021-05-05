// Chuỗi được chuyển đổi thành giọng cá voi
let input = 'tuprentine and turtles';

// Mảng có các chữ cái bên trong sẽ được chuyển đổi từ tiếng thông thường sang tiếng cá voi.
let vowels = ['a', 'e', 'i', 'o', 'u'];

// Mảng chứa các ký tự được chuỗi được chuyển đổi.
let resultArray = [];

// Logic sẽ là so sáng giá trị đầu vào của biến với kí tự trong mảng 'vowels'.
for (let i = 0; i < input.length; i++) {
  // vòng lặp đầu tiên dùng để kiểm tra
  for (let j = 0; j < vowels.length; j++) {
    if(input[i] === vowels[j]){
      // nếu thỏa mãn điều kiện thì sẽ thêm phần từ vào trong mảng
      // resultArray
      resultArray.push(input[i]);
    }
  }
  if(input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join('').toUpperCase());
