var chai = require("chai")
var drop = require("../src/drop")
const expect = chai.expect

describe("drop", () => {
    it("drop function drops one element", () =>{
        expect(drop([1,4,5])).to.deep.qual([4,5])
    });
    it("drop function drops four element", () =>{
        expect(drop([1,4,5,7,3,1,5,4], 4)).to.deep.equal([3,1,5,4])
    });
    it("drop function drops four elements from an array that is in object", () =>{
        expect(drop({a: [1,4,5,7,3,1,5,4]}, 4)).to.deep.equal([3,1,5,4])
    });
    it("drop function drops all elements", () =>{
        expect(drop([1,4,5,7], 4)).to.deep.equal([])
    });
   })