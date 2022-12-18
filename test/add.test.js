var chai = require("chai")
var toString = require("../src/toString")
const expect = chai.expect

describe("add", () => {
    it("add function gets string as second parameter", () =>{
        expect(toString("5", 3)).to.equal(8)
    });
    it("add function gets two numbers as parameters", () =>{
        expect(toString(5, 3)).to.equal(8)
    });
   })