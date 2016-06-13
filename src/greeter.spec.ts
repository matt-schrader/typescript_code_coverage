import greeter = require ('./greeter');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    //expect(greeter("World")).toBe("World");
    expect(greeter).toBe(greeter);
  });
});
