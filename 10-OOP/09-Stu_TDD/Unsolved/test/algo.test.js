const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should return a string that is the reversed string of the argument received", () => {
      const argument = "Hello";
      const reversed = "olleH";
      expect(new Algo().reverse(argument) === reversed).toEqual(true);
    });
    it("should return a string as the result", () => {
      const argument = "somewords";
      expect(typeof new Algo().reverse(argument)).toEqual("string");
    });
  });

  describe("isPalindrome", () => {
   it("should return a boolean value as the result", () => {
     const argument = "somewords";
     expect(typeof new Algo().isPalindrome(argument)).toEqual("boolean");
   });
   it("should return true if a palindrome is given to it", () => {
     const argument = "racecar";
     expect(new Algo().isPalindrome(argument)).toEqual(true);
   });
   it("should return false if a palindrome is NOT given to it", () => {
    const argument = "somewords";
    expect(new Algo().isPalindrome(argument)).toEqual(false);
  });
  });

  describe("capitalize", () => {
    it("should return a string as the result", () => {
      const argument = "somewords";
      expect(typeof new Algo().capitalize(argument)).toEqual("string");
    });
    it("should return a string with the first letter capitalized of each word in a string given to it", () => {
      const argument = "hello there here is a string";
      const capitalized = "Hello There Here Is A String";
      expect(new Algo().capitalize(argument) === capitalized).toEqual(true);
    });   
  });
});
