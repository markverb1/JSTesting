var number = prompt("Enter a number...");
alert("you just entered: " + number);
if (number > 1000 && number > 120) {
    alert(number+"> 1000 = " + (number > 1000))
} else if (number < 120 && number > 0) {
    alert("number is not > 120, output: " + number + "* (number % 10) = "+ (number * (number % 10)))
} else if (number > 0) {
    alert("number is > 0, output:" + number + "/13 ="+ (number / 13))
} else if (number < 0) {
    alert("number is negative, output:" + number + "* -5 =" + (number / 5))
}

