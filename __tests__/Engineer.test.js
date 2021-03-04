const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
            it("should create an argument with name, id, email and github username", () => {
                const engineer = new Engineer("Melaku", 3025, "mlichebo@example.com", "melaku32");

                expect(engineer.name).toEqual("Melaku");
                expect(engineer.id).toEqual(3025);;
                expect(engineer.email).toEqual("mlichebo@example.com");
                expect(engineer.github).toEqual("melaku32");
            });

            it("should throw an error if parameter github is not a string", () => {
                const cb = () => new Engineer("Melaku", 3025, "mlichebo@example.com", 2154);
                const err = new Error("Expected parameter 'github' to be a non-empty string");

                expect(cb).toThrowError(err);
            });
        
    });
});