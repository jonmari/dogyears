let myAge = 26;

// My age is above. 

let earlyYears = 2;

// Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.

earlyYears = earlyYears * 10.5

// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.

// Set the result equal to a variable called laterYears. We’ll be changing this value later.
let laterYears = myAge - 2;

let dogYears = laterYears * 4;
console.log(earlyYears)
console.log(laterYears)

let myAgeinDogYears = earlyYears + laterYears;

let myName = 'Jonathan';
let adjustedName = myName.toLowerCase();
console.log(adjustedName)

console.log(`My name is ${adjustedName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} in dog years!`)