let arr = [];
for (let i = 3; i < 500; i++) {
    if (i % 3 === 0) {
        arr.push(i);
    } 
};
alert(arr);
let sum = 1
for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
};
alert(sum);