//
// 반복문
//
// 1. for (초기문;, 조건문;, 증감문;){}
//       ㄴ for .. in 구문 => 리스트의 사이즈 만큼 반복
//       ㄴ for in vs for of

// 1. for in = 객체 순환
// var arr = [1, 2, 3];
// for (var item of arr) {
//   console.log(item); // 1,2,3 출력 (배열 값 출력)
// }
// 2. for of = 배열 값 순환
// for (var item in arr) {
//   console.log(item); // 0,1,2 출력 (객체 키값 출력)
// }
// 2. do{} while(조건문);
// 3. while(조건문){}

//
// 조건문
//

// 1. if문

// if (조건식) {
//     statement1
// } else if (조건식) {
//     statement2
// } else {
//     statement3
// }

// 2. switch문
// var num = 4;
// switch (num % 2) {
//   case 0:
//     console.log("해당 값은 짝수!");
//     break;
//   case 1:
//     console.log("해당 값은 홀수!");
//     break;
//   default:
//     console.log("잘못된 입력 값!");
//     break;
// }
