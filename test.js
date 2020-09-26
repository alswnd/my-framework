describe("pow", () => {
	before(() => console.log("test starts.."));
	after(() => console.log("test ends.."));

	beforeEach(() => console.log("it starts"));
	afterEach(() => console.log("it ends"));

	it("2**3 == 8", () => {
		assert.equal(pow(2, 3), 8);
	});

	it("3**4 == 81", () => {
		assert.equal(pow(3, 4), 81);
	});

	describe("x pow 3", () => {
		const makeTest = (x) => {
			let expected = x * x * x;

			it(`${x}**3 == ${expected}`, () => {
				assert.equal(pow(x, 3), expected);
			});
		};

		for (let x = 1; x <= 5; ++x) makeTest(x);
	});
});
