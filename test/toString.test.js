var chai = require("chai")
var toString = require("../src/toString")
const expect = chai.expect

describe("toString", () => {
    it("Converts value to a string", () =>{
        expect(toString(3)).to.equal('3')
        expect(toString([1, 5, 7])).to.equal('1,5,7')
    });
   })