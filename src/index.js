module.exports = function toReadable(number) {
    var a = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    var numString = number.toString();
    if (number < 0) return "error / negative";
    if (number === 0) return "zero";

    if (number < 20) {
        return a[number];
    }

    if (numString.length === 2) {
        if (numString[1] === "0") return b[numString[0]];
        else return b[numString[0]] + " " + a[numString[1]];
    }

    if (numString.length === 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return a[numString[0]] + " hundred";
        //100-900
        else if (numString[1] != "1" && numString[2] === "0")
            return a[numString[0]] + " hundred " + b[numString[1]];
        else if (numString[1] === "1" && numString[2] === "0")
            return a[numString[0]] + " hundred ten";
        else if (numString[1] === "0")
            return a[numString[0]] + " hundred " + a[numString[2]];
        else
            return (
                a[numString[0]] +
                " hundred " +
                toReadable(+[numString[1]] + [numString[2]])
            );
    }
};
