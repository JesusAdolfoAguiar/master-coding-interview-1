// n=15

// const fizzBuzz = (n) => {
//     const integerArray = [...Array(n).keys()].map(i => i+1)
    
//     for (let i=0; i < integerArray.length; i++) {
//         if(integerArray[i]%3 == 0 && integerArray[i]%5 == 0) {
//             console.log('FizzBuzz');
//         }
//         if(integerArray[i]%3 == 0 && integerArray[i]%5 != 0) {
//             console.log('Fizz');
//         }
//         if(integerArray[i]%3 != 0 && integerArray[i]%5 == 0) {
//             console.log('Buzz');
//         }
//         if(integerArray[i]%3 != 0 && integerArray[i]%5 != 0) {
//             console.log(integerArray[i]);
//         }
//     }
// }

// fizzBuzz(n);

//Optimized

// const fizzBuzz = (n) => {
//     for (let i = 1; i <= n; i++) {
//       let output = '';
//       if (i % 3 === 0) output += 'Fizz';
//       if (i % 5 === 0) output += 'Buzz';
//       console.log(output || i);
//     }
// }
  
// fizzBuzz(15);

// Given a list of numbers with an odd number of elements, find the median

// arr = [5,3,1,2] //+1, -1

// const findMedian = (arr) => {
//     arr.sort((a,b) => a - b);

//     const middleIndex = Math.floor(arr.length / 2);

//     // return arr[middleIndex];

//     console.log(arr[middleIndex]);
// }

// findMedian(arr)

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);