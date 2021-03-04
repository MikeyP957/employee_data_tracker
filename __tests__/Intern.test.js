const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        
        it("should create an argument with name, id, email and github username", () => {
            const newIntern = new Intern("Melaku", 3025, "mlichebo@example.com", "University of Washington");

            expect(newIntern.name).toEqual("Melaku");
            expect(newIntern.id).toEqual(3025);;
            expect(newIntern.email).toEqual("mlichebo@example.com");
            expect(newIntern.school).toEqual("University of Washington");
        });

        it("should throw an error if parameter school is not a string", () => {
            const cb = () => new Intern("Melaku", 3025, "mlichebo@example.com", 2154);
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
        
    });
});