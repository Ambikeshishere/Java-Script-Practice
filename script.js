let marks = [85, 97, 44, 37, 76, 60]

n = marks.length

console.log(n)
let sum = 0

for (let i = 0; i < n; i++){
    sum = (sum + marks[i]) 
    avg = sum / n
}
console.log(sum)
console.log(avg)