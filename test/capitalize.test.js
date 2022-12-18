var chai = require("chai")
var capitalize = require("../src/capitalize")
const expect = chai.expect

describe("capitalize", () => {
    it("capitalize returns the capitalized string from uppercase string", () =>{
        expect(capitalize("SAMI")).to.equal("Sami")
    });
    it("capitalize returns the capitalized string from lowercase string", () =>{
        expect(capitalize("sami")).to.equal("Sami")
    });
    it("capitalize can preserve for different data types", () =>{
        expect(capitalize(5)).to.equal("Sami")
    });
   })