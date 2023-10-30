function checkAge(name, age) {
  // your code here

 
  if (age < 21) return `Go Home, ${name}!`
  else return `Welcome, ${name}`
}
let output = checkAge('Adrian', 19);
console.log(output);
