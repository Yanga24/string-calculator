module.exports = class StringCalculator {
  constructor() {
    this.reg = /\d{1,}/gm;

    this.haveNegative = function (string) {
      let str = "";
      for (let i = 0; i < string.length; i++) {
        if (string[i] == "-" && !isNaN(string[i + 1])) {
          str += string[i + 1] + ", ";
        }
      } 
      return str;
    };
  }

  Add(string) {
    let sum = 0;
    let str = string.match(this.reg);
    let negatives = this.haveNegative(string);
    try {
      if (string.includes("-")) throw "Negatives " + negatives + "not allowed.";
    } catch (error) {
      return error;
    }

    if (string == "") {
      return 0;
    } else {
      for (let i = 0; i < str.length; i++) {
        if (str[i] >= 1000) {
          continue;
        } else {
          let number = parseInt(str[i]); // Converts our strings into intergers
          sum += number; // Adding number to the sum
        }
      }

      return sum;
    }
  }
};
