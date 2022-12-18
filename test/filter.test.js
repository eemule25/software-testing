var chai = require("chai")
var filter = require("../src/filter")
const expect = chai.expect

describe("filter", () => {
    it("Iterates over elements of array and returns elements containing active 'true'", () =>{
        users = [{'user': 'jack', 'active': false}, {'user': 'bob', 'active': true}]
        expect(filter(users, ({active})=>active)).to.deep.equal([{'user': 'bob', 'active': true}])
    });
    it("Iterates over elements of array and returns all elements", () =>{
        length = users.length
        expect(length).to.equal(2)
    });
});