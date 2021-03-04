const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a github username", () => {
            it("should create an argument with name, id, email and github username", () => {
                const newManager = new Manager("Melaku", 3025, "mlichebo@example.com", 2356);

                expect(newManager.name).toEqual("Melaku");
                expect(newManager.id).toEqual(3025);;
                expect(newManager.email).toEqual("mlichebo@example.com");
                expect(newManager.officeNumber).toEqual(2356);
            });

            it("should throw an error if parameter github is not a string", () => {
                const cb = () => new Manager("Melaku", 3025, "mlichebo@example.com", "hello");
                const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

                expect(cb).toEqual(err);
            });
        });
    });
});