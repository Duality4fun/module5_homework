let arr = [12, 38, 24, 43, 86];
let condt = true;
for (let i = 0; i < arr.length -1; i++) {
if (arr[i] !== arr[i + 1]) {
condt = false
}
}
console.log(condt );