//implement you own map, filter, reduce, some, every

let studentRecords = [ {name: 'Lan', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Hellen', id: 115, marks : 75 } ] ;
 //map         
let names = studentRecords.map( stu => stu.name.toUpperCase());
console.log(names);

//---filter
let nam = studentRecords.filter(stu => stu.marks > 80);
console.log(nam);


// reduce
const prices = [12, 19, 7, 209];

let totalPrice = 0;

for (let i = 0; i < prices.length; i += 1) {
    totalPrice += prices[i];
}

console.log(`Your total is ${totalPrice}.`);

prices.reduce(function (totalPrice, nextPrice) {
  console.log(`Total price so far: ${totalPrice}`)
  console.log(`Next price to add: ${nextPrice}`)
})

//---some
const fruits = ['apple', 'banana', 'mango', 'orange'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

console.log(checkAvailability(fruits, 'kiwi'));   
console.log(checkAvailability(fruits, 'banana'));  



//----every

let array = [1, 2, 3, 4];
array.every( (elem, index, array) => {
  array[index+1] -= 1
  console.log(`[${array}][${index}] -> ${elem}`)
  return elem < 2
})

