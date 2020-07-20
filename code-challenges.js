// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
  const boil = (number) => {
    if (number > 212) {
      return `${ number } is above boiling point.`
  }   else if (number < 212) {
      return `${ number } is below boiling point.`
  }   else if (number === 212) {
      return `${number } at boiling boint.`
  }
}
console.log(boil(temp1));
console.log(boil(temp2));
console.log(boil(temp3));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
  const mult5 = (array) => {
    let newArr = []
    for(let i = 0; i < array.length; i++){
      newArr.push(array[i] *= 5)
    }
      return newArr
  }
console.log(mult5(myNumbers1));



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2];
  const mult5 = (array) => {
    let newArr = array.map(value => {
      return  value * 5;
    })
    return newArr;
  }
console.log(mult5(myNumbers2));
//




// --------------------4) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]

var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]
  const oddIndex = (oldArray) => {
    return oldArray.filter((value, index) => {
      return index %2 != 0
    })
  }
console.log(oddIndex(coffeeRun));



// --------------------5) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
  const noVo = (string) => {
    let vowArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let charArr = string.split("")
    let novowArr = charArr.filter((value, index) => {
      let isVal = true
      return isVal !== vowArr.includes(charArr[index])
    }
    let novowString = novowArr.join("")
    return novowString
  }
console.log(noVo(stringWithVowels1));
console.log(noVo(stringWithVowels2));



// --------------------6) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"
