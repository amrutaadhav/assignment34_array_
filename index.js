//Program to find the largest number from the array

const numbers = [10,30,27,7,32,67,99]
let largestNum = numbers[0]

for (const num of numbers) {

    if (num > largestNum) {
       largestNum = num

    }
}
console.log(largestNum);



//Program to find the sum of odd numbers from the given array

let sum = 0;
for (const num of numbers)
{
    if (num % 2 == 1)
    {
        sum = sum + num
    }
}
console.log(sum);


//Program to say Hello to all elements from array use key of loop


const users = ['user1', 'user2', 'user3', 'user4', 'user5']

for (const user of users)
{
    console.log(`Hello ${user}`)
}


