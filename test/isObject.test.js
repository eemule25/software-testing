var chai = require("chai")
var isObject = require("../src/isObject")
const expect = chai.expect

describe("isObject", () => {
    it("Checks if value is/not the object", () =>{
        expect(isObject({})).to.equal(true)
        expect(isObject(null)).to.equal(false)
    });
   })