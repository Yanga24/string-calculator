let stringcalculator = require("../src/string_calculator")

// (function () {
  describe(" String Calculator", function () {
    describe("Created a simple String calculator with a method int Add(string numbers)", function () {
      it("should return 0 for the empty string", function () {
        expect(calculator.add("")).toEqual(0);
      });
      it("should return the number past as parameter", function () {
        expect(calculator.add("1")).toEqual(1);
        expect(calculator.add("1,1")).toEqual(2);
      });
      it("should return the sum of the numbers past as parameter", function () {
        expect(calculator.add("1,2,3,4")).toEqual(5);
      });
        it("should have Throws with negative numbers",() =>{
          (() =>   expect("-1,2")).should.throw(/-1/);
          (() => expect("-1,-2,3,4")).should.throw(/-2/);
       
        });
       
      });

      it("should have modify the add function can handle new lines \\n", () => {
        expect("1\n2\n3").should.Equal(6);
      });
      it("Modify the add function so that it can handle different delimeters", () => {
        expect("//;\n1;2").should.Equal(3);
        expect("//4\n142").should.Equal(3);

      });
      it("should have Ignores numbers greater or equal to 1000", () => {
        expect("//;\n1000,1;2").should.Equal(3);
      });
      it("should have add function so that it can support delimiters of any lenght", () => {
        expect("//***\n1***2***3").should.Equal(6);
      });
      it("should have More than one separators can be defined", () => {
        expect("//[\*][%]\n1*2%3").should.Equal(6);
      });
    });
  