const arr = [0, 1, 2, 3, 4, 5, 6, 'hello', null];
let a = 0
let b = 0
let c = 0

arr.filter(function(elem)
{ if (elem>0) {
          if (elem % 2 == 0) {a++} 
          else {b++}} 
else (c++)})

console.log ('четных элементов ' + a)
console.log ('нечетных элементов ' + b)
console.log ('нулевых элементов ' + c)
