let stringcalculator = {
  add: function (numbers) {
    var sum = 0,
      re,
      negatives = [];
    if (numbers) {
      if (numbers.substr(0, 2) === "//") {
        re = new RegExp(quote(numbers.substr(2, 1)));
        numbers = numbers.substr(4);
      } else {
        re = /[,\n]/;
      }
      var array = numbers.split(re);
      array.forEach(function (element, index, array) {
        if (Number(element) < 0) {
          negatives.push(Number(element));
        }
        sum = sum + Number(element);
      });
    }
    if (negatives.length > 0) {
      throw Error("negatives not allowed: " + negatives);
    } else {
      return sum;
    }
  },
};

var quote = function (str) {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

module.exports = stringcalculator;

console.log();
console.log();
console.log();
