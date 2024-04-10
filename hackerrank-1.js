//// Plus Minus ////

// const plusMinus = (arr) => {
//   // 1) check how much +,- and 0 are there.
//   // 2) sum the amount of each value
//   // 3) sum to get arr.length
//   var positives = 0
//   var negatives = 0
//   var zeros = 0

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positives = positives + 1
//         // console.log(positives)
//     }
//     else if (arr[i] < 0) {
//         negatives = negatives +1
//         // console.log(negatives)
//     }
//     else if (arr[i] === 0) {
//         zeros = zeros +1
//         // console.log(zeros)
//     }
//   }

//   // 4) divide each one

//   var positivesFraction = positives/arr.length
//   var negativesFraction = negatives/arr.length
//   var zerosFraction = zeros/arr.length

//   // 5) print each in a new line

//   console.log(positivesFraction.toFixed(6))
//   console.log(negativesFraction.toFixed(6))
//   console.log(zerosFraction.toFixed(6))

//   // 6) round to 6 decimal places   
// }

//Warmup

//// Simple Array SUm ////

// const simpleArraySum = (arr) => {
//     // Write your code here
//     var count = 0;
    
//     for(let i=1; i < arr.length; i++) {
//         count = count + arr[i]
//     }
//     return count;
// }

//// Compare triples ////

// const compareTriplets = (a,b) => {
//   var aliceSum = 0;
//   var bobSum = 0;

//   for(let i=0; i < a.length; i++) {
//       if (a[i] > b[i]) {
//           aliceSum = aliceSum + 1
//       }
//       if (a[i] < b[i]) {
//           bobSum = bobSum +1 ;
//       }
//   }
//   var scoreArray = [aliceSum, bobSum];

//   return scoreArray
// }

//// A very big sum ////

// const aVeryBigSum = (arr) => {
//     var count = 0;
    
//     for(let i=0; i < arr.length; i++) {
//         count = count + arr[i]
//     }
//     return count;
// }

// //

// function onEdit() {
//     var hoja = SpreadsheetApp.getActiveSpreadsheet();
//     var hojaorigen =Archivo.getActiveSpreadsheet();
//     var nombreorigen =Hojaorigen.getSheetname();
//     var hojadestino =Sheet.getSheetByName("pendientes");
//     var celdaActiva =Hojaorigen.getActiveCell();
//     var filaActiva =CeldaActiva.getRow();
//     var colActiva =CeldaActiva.getcolumn ();
//     var valor =CeldaActiva.getValue ();
    
//     logger.log(filaActiva);
//     logger.log(colActiva);
//     logger.log(valor);
    
//     if(filaActiva>=2 && colActiva==7 && valor== "activo" && nombreorigen=="pendientes") {
//       var rangoOrigen =hojaorigen.getRange(filaActiva, 1,1,7);
//       var rangodestino =hojadestino.getRange (hojadestino.getLastRow() +1,1);
    
//       rangoOrigen.moveto(rangodestino);
//       hojaorigen.deleteRow(filaActiva) ;
//     }    
// }

//// Mini-Max Sun ////

// Given five positive integers, find the minimum and maximum values that can 
// be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a 
// single line of two space-separated long integers.

// const miniMaxSum = (arr) => {
//   let t0 = performance.now();

//   // Sort the array in ascending order
//   arr.sort((a, b) => a - b);

//   // Sum the first four numbers for the minimum sum
//   const minSum = arr.slice(0, 4).reduce((acc, val) => acc + val, 0);

//   // Sum the last four numbers for the maximum sum
//   const maxSum = arr.slice(1).reduce((acc, val) => acc + val, 0);

//   // return { minSum, maxSum };
//   console.log(minSum, maxSum);

//   let t1 = performance.now();
//   console.log(`Call to logPairs1 took ${t1 - t0} milliseconds`);
// }

//// Staircase ////

// Create a function that prints of size n. 
// for n=4, the staircase looks like this
//    #
//   ##
//  ###
// #### 

// const n = 4
// const staircase = (n) => {
//   // 1) create an array of size n
//   const array = [...Array(n).keys()].map(i => i + 1);
//   // 2) Map through the array so each iteration prints the correct amount of spaces
//   // and #.
//   var itemsArray = array.map(num => ' '.repeat(n - num) + '#'.repeat(num)).join('\n');
// }

/// Types of foor loop ///

// array.forEach(element => {
//   // Your code here
// });

// for (const element of array) {
//     // Your code here
//   }

// const newArray = array.map(element => {
//   // Return new element
// });

// const result = array.reduce((accumulator, currentValue) => {
//   // Return the new accumulator value
// }, initialValue);

//// Merge sorted arrays ////

// const mergedArray = (a,b) => [...a, ...b].sort((a, b) => a - b)

/// Reverse a string array ///

// const reverse3 = str => [...str].reverse().join('');

//// Birthday Cake Candles ////

// 1) count how many candles are the tallest.
// 2) first line n, size of array
// 3) second line n space-separated integers, each i describes the height


// ///First solution Brute force ///
// const n = '4';
// const candles = '1 2 3 5 5';

// const birthdayCakeCandles = (candles) => {
//   // Write your code here
//   let count = 0;
//   let max = 0;
//   for(let i = 0; i < candles.length ; i++)
//   {
//       let num = candles[i];
//       if(num > max)
//       {
//           max = num;
//           count = 1;
//       }else if(max == num)
//       {
//           count++;
//       }
//   }
//   return count;
// }

// ///In this case I will use the above solution
// ///Bc i don't know in what format the info is 
// /// being received.

// const birthdayCakeCandles = (candles) => {
//   //Make the space separated integers an array
//   const integerArray = candles.split(' ').map(Number);
//   // Calculate the max value of the array
//   const maxVal = Math.max(...integerArray)
//   // Count occurrences of the max value
//   const maxCount = integerArray.filter(value => value === maxVal).length;

//   return maxCount; // Outputs: [1, 2, 3, 4, 5]
// }

//// Time Conversion ////

/// Given a time in -hour AM/PM format, convert it to military (24-hour) time. ///

  // 1) 00:00:00AM - 12:00:00PM
  // 2) 12:00:00PM-00:00:00AM
  // 3) 00:00:00 - 23:59:59
  // 4) 

  // 1) Split the string to remove the AM or PM
  // 2) if includes PM, if >12:59 PM, >> 1pm >> +12
  // 3) 

// const dateConverter = (s) => {
//   const timeArray = s.split(':').join('')
//   const timeStr = Number(timeArray.slice(0, 6))
//   let militarTime = ''

//   timeArray.includes('PM') && timeStr < 120000 ? militarTime = (timeStr + 120000).toString().replace(/(..)/g, '$1:').slice(0, -1) :  // +
//   timeArray.includes('PM') && timeStr > 120000 ? militarTime = (timeStr).toString().replace(/(..)/g, '$1:').slice(0, -1) :  // +
//   timeArray.includes('AM') && timeStr < 120000 ? militarTime = timeStr.toString().padStart(6, '0').replace(/(..)/g, '$1:').slice(0, -1) :  // Add 1 zero
//   timeArray.includes('AM') && timeStr >= 120000 ? militarTime = (timeStr - 120000).toString().padStart(6, '00').replace(/(..)/g, '$1:').slice(0, -1) : console.log('false') // ADD 2 zeros 

//   return militarTime;
// }

//// Reverse a string ////

// s = 'hi this is a string'

// const reverseString = (s) => {
//   const strArray = s.split('').reverse().join() // First solution
//   const strArray = s = [...str].Sreverse().join() // Second solutin
//   console.log(strArray);
// }

////  CamelCase ////

// 1- concatenation of one or more words
// 2 all letters in first word are lowercase
// 3 For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// 4 number of words 

// 1 capitalize first letter
// 2 count numbers of camelcase

// s = 'thisIsAString'

// const camelcase = (s) => {
//   let strWords = s.charAt(0).toUpperCase() + s.slice(1);
//   let numberOfWords =  (strWords.match(/[A-Z]/g) || []).length;

//   return numberOfWords;
// }

// camelcase(s)

//// Sparse Arrays ////

// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. 

// strings = ['ab', 'ab', 'abc']
// queries = ['ab', 'abc', 'bc']

// const matchingStrings = (strings, queries) => {

//   const countOccurrences = queries.map(value => (
//     strings.filter(item => item === value).length
//   ))

//   return countOccurrences
// }

// matchingStrings(strings, queries);

//// Lonely Integer ////

// Given an array of integers, where all elements but one occur twice, find the unique element.

// s = [1,2,3,4,3,2,1]

// const lonelyInteger = (s) => {

//   const uniqueElement = s.find((item) => 
//     s.indexOf(item) === s.lastIndexOf(item)
//   );

//   return uniqueElement
// }

// lonelyInteger(s)

//// Flipping bits ////

// n = 3
// const flippingBits = (n) => {
//     // Flip the bits using the bitwise NOT operator
//     let flipped = ~n;
  
//     // Convert to unsigned 32-bit integer
//     return flipped >>> 0;
//     // console.log(flipped >>> 0)
// }

// flippingBits(n);


//// Diagonal Difference ////

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9]
// ]

// const diagonalDifference = (arr) => {

//   // let primarySum = 0;
//   // let secondarySum = 0;
//   // const size = arr.length;

//   // for (let i = 0; i < size; i++) {
//   //   primarySum += arr[i][i];
//   //   secondarySum += arr[i][size - 1 - i];
//   // }

//   // return Math.abs(primarySum - secondarySum);

//   const size = arr.length;

//   const result = arr.reduce((acc, row, i) => {
//     acc.primary += row[i];
//     acc.secondary += row[size - 1 -i];

//     return acc;
//   }, {primary: 0, secondary: 0});

//   return Math.abs(result.primary - result.secondary);

// }

// diagonalDifference(arr); 

//// Counting Sort ////

// Given a list of integers, count and return the number of times each value appears as an array of integers.

// arr = [1,1,3,2,1]

// const countingSort = (arr) => {
//   // Initialize an array of 100 elements all set to 0
//   const counts = new Array(100).fill(0);

//   // Increment the count for each number in the input array
//   arr.forEach((num) => {
//     counts[num]++;
//   });
// }

//// Pangrams ////

// 'Pangrams' are sentences that are created using all letters of the alphabet, at least once.
// Given a sentence, determine whether it's a pangram or not

// 1) Capitalize and lowercase on a same letter are considered the same letter
// 2) return pangram or not pangram

// 1) alphabetArray = []

// For each query string, determine how many times it occurs in the list of input strings. 

// s = 'hi'

// const pangrams = (s) => {

//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const lowerCaseSentence = s.toLowerCase();

//   for (let char of alphabet) {
//     if (!lowerCaseSentence.includes(char)) {
//       return 'not pangram'; // If a character from the alphabet is not found, it's not a pangram
//     }
//   }
//   return 'pangram'; // All characters found, it's a pangram
// }

// pangrams(s)

//// Recurring integers ////
// Given an array of integers, return the first recurring character.

// arr = [2,5,1,2,3,5,1,2,4]

// const recurringCharacter = (arr) => {

//   // for (let i=0; i < arr.length; i++) {
//   //   for (let j=i+1; j < arr.length; j++) {
//   //     if (arr[i] === arr[j]) {
//   //       return arr[i]; 
//   //     }
//   //   }
//   //   return undefined;
//   // } // space complexity => O(1), time complexity => O(n^2)

//   let map = {};
//   for (let i=0; i < arr.length; i++) {
//     if(map[arr[i]] !== undefined){
//       return arr[i]
//     } else {
//       map[arr[i]] = 1;
//     }
//     console.log(map);
//   }
//   return undefined;// space complexity => O(n), time complexity => O(n )

// } 
// recurringCharacter(arr);

//// Permuting Two Arrays ////

// There are two -element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] + B'[i] holds for all i where 0 <= i <= n.

// There will be q queries consisting of A,B , and k. For each query, return YES if some permutation A', B' satisfying the relation exists. Otherwise, return NO.

// const A = [1, 2, 3];
// const B = [7, 8, 9];
// const k = 10;

// const canPermuteToSatisfyRelation = (A, B, k) => {
//   // Sort A in ascendent order and B in descendent order.
//   A.sort((a, b) => a - b);
//   B.sort((a, b) => b - a);

//   // Verify if the sum of all elements in the same position is >= k.
//   return A.every((a, i) => a + B[i] >= k) ? 'YES' : 'NO';
// }

// console.log(canPermuteToSatisfyRelation(A, B, k)); // Should print 'YES'

//// Subarray Division ////

// Determine how many times can you divide an array of integers
// Constrains: 
// 1) the size of the division (amount of elements) is m
// 2) the sum of the values of the elements is d

// s = [2,2,1,3,2];
// d = 4;
// m = 2;

// 1) slice sub array based on m
// 2) sum all values based on d
// 3) if sum(segment[0]+segment[1] == d) 
// then 'remove' those items from the count
// 4) else if sum(segment[0]+segment[1] != d). 
// then sum segment[1]+segment[2] and so forth
// and move on to the next segment.

// const birthday = (s,d,m) => {
//   var count = 0;
//   for(let i=0; i < s.length; i++) {
//     const segmentSliced = s.slice(i, m + i)
//     const segmentSum = segmentSliced.reduce((acc, val) => acc + val, 0)
//
//     if(segmentSum == d) {
//       count = count + 1
//     }
//   }
//   return count;
// };

// birthday(s,d,m)

//// XOR Strings 2 ////

// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.


/// Create LinkedList ///

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
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head =  newNode
    this.length++;
    return this;
  }
  insert(index, value) {
    // Check for proper index value
    if (index >= this.length) {
      console.log('Yes');
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  remove(index) {
    // Check for proper index value
    if (index >= this.length) {
      console.log('Index out of bounds');
      return;
    }
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    // return array;
    console.log(array);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.insert(2, 1);
myLinkedList.remove(1);
myLinkedList.printList();
// console.log(myLinkedList);