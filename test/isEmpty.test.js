var chai = require("chai")
var isEmpty = require("../src/isEmpty")
const expect = chai.expect

describe("isEmpty", () => {
    it("isEmpty gets array as parameter", () =>{
        expect(isEmpty([2, 4, 3])).to.equal(false)
    });
    it("isEmpty gets false as parameter", () =>{
        expect(isEmpty(false)).to.equal(true)
    });
    it("isEmpty gets empty object as parameter", () =>{
        expect(isEmpty({})).to.equal(true)
    });
    it("isEmpty gets object as parameter", () =>{
        expect(isEmpty({"seppo": "Karhu"})).to.equal(true)
    });
   })