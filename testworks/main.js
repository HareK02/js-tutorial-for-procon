let arr = [];
for (let i = 0; i < 9; i++) {
  arr[i] = [];
  for (let k = 0; k < 9; k++) {
    arr[i][k] = (i + 1) * (k + 1);
  }
}
console.log(arr[5][1]); //6*2=12
console.log(arr[2][6]); //3*7=21
console.log(arr[6][8]); //7*9=63
console.log(arr);