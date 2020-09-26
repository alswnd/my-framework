describe("pow", () => {
	before(() => console.log("test starts.."));
	after(() => console.log("test ends.."));

	beforeEach(() => console.log("it starts"));
	afterEach(() => console.log("it ends"));

	it("2**3 == 8", () => {
		assert.equal(pow(2, 3), 8);
	});

});
