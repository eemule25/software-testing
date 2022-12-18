var chai = require("chai")
var isDate = require("../src/toNumber")
const expect = chai.expect

describe("toNumber", () => {
    it("Converts value to number", () =>{
        expect(toNumber("5")).to.equal(5)
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
    });
   })