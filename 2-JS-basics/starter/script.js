/*****************************
 * Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/

/*****************************
 * Variable mutation and type coercion
 */

// var firstName = 'John'
// var age = 28

// console.log(firstName + ' ' + age)

// var job, isMarried

// job = 'teacher'
// isMarried = false

// console.log(`job: ${job}, married: ${isMarried}`)

// // Variable mutation

// age = 'twenty eight'
// job = 'driver'

// // alert('test')

// var lastName = prompt('What is his last name?')

// alert(lastName)

/****************
 * Basic Operators
 */

// var year, yearJohn, yearMark
// year = 2018

// ageJohn = 28
// ageMark = 33

// // math
// yearJohn = year - ageJohn
// yearMark = year - ageMark
// console.log(yearJohn)

// // Logical operatorsz

// var johnOlder = ageJohn > ageMark
// console.log(johnOlder)

// var johnOlder = ageJohn < ageMark
// console.log(johnOlder)

// //type of
// console.log(typeof johnOlder)
// console.log(typeof ageJohn)

/********
 * Operator Precedence
 */

// var now = 2018
// var yearJohn = 1989
// var fullAge = 18

// var isFullAge = now - (yearJohn >= fullAge)
// console.log(isFullAge)

// var isFullAge = now - yearJohn >= fullAge
// console.log(isFullAge)

// // grouping
// var ageJohn = now - yearJohn
// var ageMark = 35
// var average = (ageJohn + ageMark) / 2
// console.log(average)

// // multiple assignments

// var x, y
// x = y = (3 + 5) * 4 - 6 // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y)

// // more operators
// x *= 2
// console.log(x)

// x += 10 // x = x + 10
// console.log(x)

// x++ // x + 1
// console.log(x)
// x-- // x - 1
// console.log(x)

/********
 * Coding challenge 1
 */

// var massMark = 78 // kg
// var heightMark = 1.69 // meters

// var massJohn = 92
// var heightJohn = 1.95

// var bmiMark = massMark / (heightMark * heightMark)
// console.log(bmiMark)

// var bmiJohn = massJohn / (heightJohn * heightJohn)
// console.log(bmiJohn)

// var markWins = bmiMark > bmiJohn

// console.log(`Is Mark's BMI higher than John's? ${markWins}`)

/**
 * If Else
 */

// const firstName = 'John'
// const civilStatus = 'single'

// if (civilStatus === 'married') {
//   console.log(`${firstName} is married.`)
// } else {
//   console.log(`${firstName} is single.`)
// }

// const isMarried = true
// if (isMarried) {
//   console.log(`${firstName} is married.`)
// } else {
//   console.log(`${firstName} is single.`)
// }

// var massMark = 78 // kg
// var heightMark = 1.69 // meters

// var massJohn = 92
// var heightJohn = 1.95

// var bmiMark = massMark / (heightMark * heightMark)
// console.log(bmiMark)

// var bmiJohn = massJohn / (heightJohn * heightJohn)
// console.log(bmiJohn)

// if (bmiMark > bmiJohn) {
//   console.log('Mark wins.')
// } else {
//   console.log('John wins.')
// }

/**
 * Boolean logic
 */

// const firstName = 'John'
// const age = 16

// if (age < 13) {
//   console.log(firstName + ' is a boy')
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenage')
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man')
// } else {
//   console.log(firstName + ' is a man')
// }

/**
 * Ternary operator and switch
 */

// const firstName = 'John'
// const age = 16
// Ternary operator
// age >= 18
//   ? console.log(`${firstName} drinks beer.`)
//   : console.log(`${firstName} drinks juice.`)

// const drink = age > 18 ? 'beer' : 'juice'
// console.log(`${firstName} drinks ${drink}.`)

// Switch statement
// const job = 'instructor'

// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(`${firstName} teaches kids how to code.`)
//     break
//   case 'driver':
//     console.log(`${firstName} drives an uber.`)
//     break
//   case 'designer':
//     console.log(`${firstName} designes websites.`)
//     break
//   default:
//     console.log(`${firstName} does nothing.`)
// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy')
//     break
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenage')
//     break
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man')
//     break
//   default:
//     console.log(firstName + ' is a man')
//     break
// }

/** truthy and falsy
 *
 */
// false valuyes: undefined, null, 0, '', NaN
// truthy values: NOT FALSY

// let height

// height = 23

// if (height || height === 0) {
//   console.log('Variable is defined.')
// } else {
//   console.log('variable is not defined.')
// }

// Equality operators

// if (height == '23') {
//   console.log('The == op does type coercion')
// }

/** coding challenge 2
 *
 */

// const john = (89 + 120 + 103) / 3
// console.log(john)

// const mike = (116 + 94 + 123) / 3
// console.log(mike)

// const mary = (97 + 134 + 105) / 3
// console.log(mary)

// if (john > mike && john > mary) {
//   console.log(`John wins. ${john}`)
// } else if (mike > john && mike > mary) {
//   console.log(`Mike wins. ${mike}`)
// } else if (mary > john && mary > mike) {
//   console.log(`Mary wins. ${mary}`)
// } else {
//   console.log(`There is a draw.`)
// }

// switch (true) {
//   case john > mike && john > mary:
//     console.log(`John wins. ${john}`)
//     break
//   case mike > john && mike > mary:
//     console.log(`Mike wins. ${mike}`)
//     break
//   case mary > john && mary > mike:
//     console.log(`Mary wins. ${mary}`)
//     break
//   default:
//     console.log(`There is a draw.`)
// }

// john > mike && john > mary
//   ? console.log(`John wins. ${john}`)
//   : mike > john && mike > mary
//   ? console.log(`Mike wins. ${mike}`)
//   : mary > john && mary > mike
//   ? console.log(`Mary wins. ${mary}`)
//   : console.log(`There is a draw.`)

/**
 * functions
 */

const calcAge = (birthYear) => 2020 - birthYear

// function calcAge(birthYear) {
//   return 2020 - birthYear
// }

// const ageJohn = calcAge(1988)
// const ageMike = calcAge(1948)
// const ageJane = calcAge(1969)

// console.log(ageJohn, ageMike, ageJane)

// const yearsUntilRetirement = (year, firstName) => {
//   const age = calcAge(year)
//   const retirement = 65 - age

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`)
//   } else {
//     console.log(`${firstName} is already retired.`)
//   }
// }

// yearsUntilRetirement(1988, 'Clay')
// yearsUntilRetirement(1948, 'Mike')
// yearsUntilRetirement(1969, 'Jane')

/** function statements vs expressions */

// function declaration
// function whatDoYouDo(job, firstName) {}

// function expression
// const whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case 'teacher':
//       return `${firstName} teaches kids how to code.`
//     case 'driver':
//       return `${firstName} drives a cab in Lisbon.`
//     case 'designer':
//       return `${firstName} designs websites.`
//     default:
//       return `${firstName} does something else.`
//   }
// }

// console.log(whatDoYouDo('teacher', 'John'))
// console.log(whatDoYouDo('designer', 'Jane'))
// console.log(whatDoYouDo('retired', 'Mark'))

/**
 *
 *
 * arrays
 */

// initialize array
// const names = ['John', 'Mark', 'Jane']
// const years = new Array(1990, 1969, 1948)

// console.log(names)
// console.log(names.length)
// console.log(names[2])

// //mutate array
// names[1] = 'Ben'
// names[names.length] = 'Mary'

// console.log(names)

// names.forEach((name) => {
//   console.log(name)
// })

// dif data types

// const john = ['John', 'Smith', 1988, 'designer', false]

// john.push('blue')
// john.unshift('Mr.')
// console.log(john)

// john.pop()
// john.pop()
// john.shift()
// console.log(john)

// console.log(john.indexOf(1988))
// console.log(john.indexOf(23))

// const isDesigner =
//   john.indexOf('designer') === -1
//     ? 'John is NOT a designer.'
//     : 'John is a designer.'
// console.log(isDesigner)

/**
 * Coding challenge 3
 */

// const tips = []
// const finalBill = []

// const calcTip = (bill) => {
//   switch (true) {
//     case bill < 50:
//       return bill * 0.2
//     case bill >= 50 && bill <= 200:
//       return bill * 0.15
//     case bill > 200:
//       return bill * 0.1
//   }
// }

// const bill = (bill) => {
//   const tip = calcTip(bill)
//   tips.push(tip)
//   finalBill.push(bill + tip)
// }

// bill(124)
// bill(48)
// bill(268)

// console.log(tips)
// console.log(finalBill)

// const billStart = [124, 48, 268]

// const tips2 = []
// const finalBill2 = []

// const calcTip2 = (bill) => {
//   switch (true) {
//     case bill < 50:
//       return bill * 0.2
//     case bill >= 50 && bill <= 200:
//       return bill * 0.15
//     default:
//       return bill * 0.1
//   }
// }

// const bill2 = (bill) => {
//   const tip = calcTip2(bill)
//   tips2.push(tip)
//   finalBill2.push(bill + tip)
// }

// billStart.forEach((cost) => {
//   bill2(cost)
// })

// console.log(tips2)
// console.log(finalBill2)

// const tipCalculator = (bill) => {
//   let percentage
//   if (bill < 50) {
//     percentage = 0.2
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15
//   } else {
//     percentage = 0.1
//   }
//   return percentage * bill
// }

// const bills = [124, 48, 268]
// const tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2]),
// ]
// const finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(tips, finalValues)

/** objects */

// object literal
// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1988,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
// }

// console.log(john.firstName)
// console.log(john['lastName'])
// const x = 'birthYear'
// console.log(john[x])

// john.job = 'designer'
// console.log(john.job)

// john['isMarried'] = true
// console.log(john)

// // new object syntax
// const jane = new Object()

// jane.firstName = 'Jane'
// jane.birthYear = 1969
// jane['lastName'] = 'smith'

// console.log(jane)

/**
 * Methods
 */

// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1988,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge(birthYear) {
//     const year = new Date().getFullYear()
//     this.age = year - this.birthYear
//   },
// }

// john.calcAge()
// console.log(john)

/**
 * coding challenge 4
 */

// var massMark = 78 // kg
// var heightMark = 1.69 // meters

// var massJohn = 92
// var heightJohn = 1.95

// const mark = {
//   fullName: 'Mark Smith',
//   mass: 78,
//   height: 1.69,
//   calcBMI() {
//     this.BMI = this.mass / (this.height * this.height)
//     return this.BMI
//   },
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI() {
//     this.BMI = this.mass / (this.height * this.height)
//     return this.BMI
//   },
// }

// console.log(mark.calcBMI())
// console.log(john.calcBMI())
// console.log(mark.BMI)
// console.log(john.BMI)

// mark.BMI > john.BMI
//   ? console.log(`${mark.fullName} wins with the BMI of ${mark.BMI}`)
//   : mark.BMI < john.BMI
//   ? console.log(`${john.fullName} wins with the BMI of ${john.BMI}`)
//   : console.log(
//       `${mark.fullName} and ${john.fullName} have the same BMI of ${mark.BMI} & ${john.BMI}`
//     )

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + ' has a higher BMI of ' + john.bmi)
// } else if (mark.bmi > john.bmi) {
//   console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi)
// } else {
//   console.log('They have the same BMI')
// }

// for (i = 0; i <= 10; i++) {
//   console.log(i)
// }

// const john = ['John', 'Smith', 1988, 'designer', false, 'blue']

// for (i = 0; i < john.length; i++) {
//   console.log(john[i])
// }

// i = 0
// while (i < john.length) {
//   console.log(john[i])
//   i++
// }

// continue
// const john = ['John', 'Smith', 1988, 'designer', false, 'blue']

// for (i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue
//   console.log(john[i])
// }

// break
// for (i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break
//   console.log(john[i])
// }

// looping backwards
// for (i = john.length - 1; i >= 0; i--) {
//   console.log(john[i])
//
/**
 * coding challenge 5
 */

// const johnRestaurants = {
//   fullName: 'John Smith',
//   bills: [124, 48, 268, 180, 42],
//   calcTip() {
//     this.tips = []
//     this.final = []

//     for (i = 0; i < this.bills.length; i++) {
//       let percentage
//       const bill = this.bills[i]
//       if (bill < 50) {
//         percentage = 0.2
//       } else if (bill >= 20 && bill <= 200) {
//         percentage = 0.15
//       } else {
//         percentage = 0.1
//       }

//       this.tips[i] = bill * percentage
//       this.final[i] = bill + bill * percentage
//     }
//   },
// }

// johnRestaurants.calcTip()
// console.log(johnRestaurants)

// const markRestaurants = {
//   fullName: 'Mark Miller',
//   bills: [77, 375, 110, 45],
//   calcTip() {
//     this.tips = []
//     this.final = []

//     for (i = 0; i < this.bills.length; i++) {
//       let percentage
//       const bill = this.bills[i]
//       if (bill < 100) {
//         percentage = 0.2
//       } else if (bill >= 100 && bill <= 300) {
//         percentage = 0.1
//       } else {
//         percentage = 0.25
//       }

//       this.tips[i] = bill * percentage
//       this.final[i] = bill + bill * percentage
//     }
//   },
// }

// markRestaurants.calcTip()
// console.log(markRestaurants)

// const calcAverage = (tips) => {
//   let sum = 0
//   for (i = 0; i < tips.length; i++) {
//     sum = sum + tips[i]
//   }
//   return sum / tips.length
// }

// johnRestaurants.average = calcAverage(johnRestaurants.tips)
// markRestaurants.average = calcAverage(markRestaurants.tips)

// console.log(johnRestaurants.average, markRestaurants.average)

// johnRestaurants.average > markRestaurants.average
//   ? console.log('john wins')
//   : console.log('mark wins')
