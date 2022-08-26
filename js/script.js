// 1. // isPrime - Returns true or false, indicating whether the given number is prime.
// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000)             // false

function isPrime(n) {
  if (n < 2) {
    return 'false';
  } else if (n === 2) {
    return 'true';
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'false';
    }
    i +=1;
  }

  return 'true';
}
// console.log(0, isPrime(0));
// console.log(1, isPrime(1));
// console.log(17, isPrime(17));
// console.log(10000000000000, isPrime(10000000000000));

//____________________________________________________________________________

// 2. // factorial - Returns a number that is the factorial of the given number.
// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(6));

//________________________________________________________________________________

// 3. // fib - Returns the nth Fibonacci number.
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
// console.log(0, fib(0));
// console.log(1, fib(1));
// console.log(10, fib(10));
// console.log(20, fib(20));

//________________________________________________________________________________

// 4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

// isSorted = true;
// let length, isSorted, i;
// 	length = array.length
// 		for (i = 1; i < length && isSorted; i++)
//     isSorted = (array[i - 1] <= array[i]);
            
// console.log(isSorted([]))
// console.log(isSorted([-Infinity, -5, 0, 3, 9]))
// console.log(isSorted([3, 9, -3, 10]))

//_____________________________________________________________________________________

// 5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'

function reverseStr(str) {
    let letters = str.split('');
      letters.reverse();
  return letters.join('');

}

// console.log(reverseStr(""));
// console.log(reverseStr("abcdef"));

//____________________________________________________________________________________

// 6. //indexOf - Implement the indexOf function for arrays.
// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1

let indexOf = function(array,value){
   if(array == null) return -1;
   let i=0,length = array.length;
   for(;i<length;i++){
       if(array[i]===value){
           return i;
       }
   }
   return -1;
}
 //Тест
// console.log(indexOf([1, 2, 3], 1));
// console.log(indexOf([1, 2, 3], 4));

//____________________________________________________________________________________

// 7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

function checkPalindrome(string) {
    // find the length of a string
    const len = string.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'false';
        }
    }
    return 'True';
}
// console.log('', checkPalindrome(''));
// console.log('abcdcba', checkPalindrome('abcdcba'));
// console.log('abcd', checkPalindrome('abcd'));
// console.log('A man a plan a canal Panama', checkPalindrome('A man a plan a canal Panama'));

//_________________________________________________________________________________________

// 8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// let a = [],
//   count = a[a.length - 1];
// let missing = new Array();

// for (let i = 1; i <= count; i++) {
//   if (a.indexOf(i) == -1) {
//     missing.push(i);
//   }
// }
// console.log(missing);

const findMissing = num => {
  const max = Math.max(...num); // Will find highest number
    //   const min = Math.min(...num); // Will find lowest number
  const missing = []

  for(let i=1; i<= max; i++) {
    if(!num.includes(i)) { // Checking whether i(current value) present in num(argument)
      missing.push(i); // Adding numbers which are not in num(argument) array
    }
  }
    return missing;
}

// console.log(findMissing([]), undefined);
// console.log(findMissing([1, 4, 3]));
// console.log(findMissing([2, 3, 4]));
// console.log(findMissing([5, 1, 4, 2]));
// console.log(findMissing([1, 2, 3, 4]), undefined);

//__________________________________________________________________________________

9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false


function isBalanced(param) {
  let summ = 0;
  for (let simb of param) {
    if (simb == "{") {
      summ = summ + 1;
    }
    if (simb == "}") {
      summ = summ - 1;
    }
    if (summ < 0) {
      return false;
    }
  }
  return summ == 0;
}

// console.log(isBalanced('}{'));
// console.log(isBalanced('{{}'));
// console.log(isBalanced('{}{}'));
// console.log(isBalanced('foo { bar { baz } boo }'));
// console.log(isBalanced('foo { bar { baz }'));
// console.log(isBalanced('foo { bar } }'));
