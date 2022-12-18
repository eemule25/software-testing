var chai = require("chai")
var get = require("../src/get")
const expect = chai.expect

describe("toString", () => {
    it("Gets the value at path of object", () =>{
        object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.c')).to.equal(3)
    });
   })