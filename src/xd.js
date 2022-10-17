//----------Bound --------------
const person = [
  { id: 1, message: "Hi !" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Sheat happens" },
]
const s = 'xxx'

person.push({id: 4, message: `${s}`})

console.log(person)