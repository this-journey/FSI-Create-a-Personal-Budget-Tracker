let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

window.prompt(weeklyExpenseQuestions[0])
let answer = window.prompt(weeklyExpenseQuestions[0])
console.log(answer)

let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)

let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
weeklyExpenses = weeklyExpenses + answer

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
    weeklyExpenses = weeklyExpenses + answer
}