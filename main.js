//1
// let numeros = [1, 2, 3, 4,5,6,7];
// let total=0
// numeros.forEach(function(arr){
//     if (arr%2!==0){
//     total += arr;}
// })
// console.log(total);


//2
// numeros.slice().reverse().forEach(function(arr) {console.log(arr);});

//3
// function sumPairs(firstArr, secondArr){

//     let resultArr = []
  
//     let maxLength = 0
  
//     if (firstArr.length > secondArr.length){
//       maxLength = firstArr.length
//     } else {
//       maxLength = secondArr.length
//     }
  
//     for (let i = 0; i < maxLength; i++){
  
//       let num1 = 0
//       let num2 = 0
  
//       if (firstArr[i]){
//         num1 = firstArr[i]
//       } 
  
//       if (secondArr[i]){
//         num2 = secondArr[i]
//       } 
  
//       let pairSum = num1 + num2
//       resultArr.push(pairSum)
  
//     }
  
//     return resultArr
//   }

//4
// const array = ["apple", "orange", "banana", "mango", "watermelon", "grape", "peach"];
// function getEachElement (arr,num){
    
// }

// console.log(r);


//5
let num1 = [1,2,3];
let num2 = [100,2,1,10];

let resultado = []
let unicNumbers = []

function arrayOrder (arr1,arr2){
    resultado= arr1.concat(arr2)
    resultado.sort((a,b)=>a-b)
}
arrayOrder(num1,num2)
console.log(resultado)


//6
// const myObject = {
//     name:"Paco",
//     age:28,
// }

// function EraseName (obj,key){
//     if (obj.key=key){
//         delete obj.key
//         return true
    
//     }
//     else{
//         return false
//     }
// }
// EraseName(myObject,name)
// console.log(myObject)