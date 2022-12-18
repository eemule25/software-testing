var chai = require("chai")
var toNumber = require("../src/toNumber")
const expect = chai.expect

describe("toNumber", () => {
    it("Converts value to number", () =>{
        expect(toNumber("5")).to.equal(5)
    });
    it("Converts Number.MIN_VALUE to real number", () =>{
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
    });
   })