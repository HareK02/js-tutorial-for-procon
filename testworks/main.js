let arrey = ["ジョン","マイケル","ダニエル","ボブ"];
console.log(arrey[2]);
arrey[arrey.length] = "ティム";
console.log(arrey);

let obj = {name:"ジョン" ,age:15};
console.log(obj.name);
console.log(obj["age"]);
console.log(obj);

let arr  = [];
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