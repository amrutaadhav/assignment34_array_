//Program to find the largest number from the array

const numbers = [10,30,27,7,32,67,99]
let largestNum = numbers[0]

for (const num of numbers) {

    if (num > largestNum) {
       largestNum = num

    }
}
console.log(largestNum);
