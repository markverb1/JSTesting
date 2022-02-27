let arr = [];
for (let i = 2; i < 345; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    } 
};
alert(arr);
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
};
alert(sum);
let avg = 0;
avg = sum / (arr.length + 1);
alert(avg);