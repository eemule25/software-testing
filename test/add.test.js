var chai = require("chai")
var add = require("../src/add")
const expect = chai.expect

describe("add", () => {
    it("add function gets string as second parameter", () =>{
        expect(add("5", 3)).to.equal(8)
    });
    it("add function gets two numbers as parameters", () =>{
        expect(add(5, 3)).to.equal(8)
    });
   })