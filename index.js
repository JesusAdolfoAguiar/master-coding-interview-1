// const nemo = ['nemo'];
// const large = new Array(1000).fill('nemo');

// function findNemo(array) {
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log('Found Nemo');
//         }
//     }
//     let t1 = performance.now();
//     console.log('Call to find Nemo took ' + (t1-t0) + ' miliseconds')
// }

// findNemo(large); // O(n) --> linear time

// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)
//     for (let i = 0; i < input; i++) { // O(n)
//       let x = i + 1; // O(n)
//       let y = i + 2; // O(n)
//       let z = i + 3; // O(n)

//     }
//     for (let j = 0; j < input; j++) { // O(n)
//       let p = j * 2; // O(n)
//       let q = j * 2; // O(n) 
//     }
//     let whoAmI = "I don't know"; // O(1)
//   }
//   // Big O = 4 + 7n = O(n)

const boxes = [1,2,3,4,5];

function logPairs(a) {
    
    let t0 = performance.now();

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            console.log(a[i], a[j]);
        };
    };

    let t1 = performance.now();
    console.log('Call to logPairs took ' + (t1-t0) + ' miliseconds')

};

const logPairs1 = (a) => {
    let t0 = performance.now();

    a.forEach((item1) => {
        a.forEach((item2) => {
            console.log(item1, item2);
        });
    });

    let t1 = performance.now();
    console.log(`Call to logPairs1 took ${t1 - t0} milliseconds`);
};

logPairs(boxes);
logPairs1(boxes);