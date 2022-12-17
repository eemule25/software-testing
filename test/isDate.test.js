var chai = require("chai")
var isDate = require("../src/isDate")
const expect = chai.expect

describe("isDate", () => {
    it("Checks if value is a 'Date' object", () =>{
        expect(isDate(new Date)).to.equal(true)
        expect(isDate('Wed June 12 2010')).to.equal(false)
    });
   })