const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe("Initialization", () => {
        it("should create an object with name, id and email if provided valid arguments", () => {
            const employee = new Employee("Melaku", 3025, "mlichebo@example.com");

            expect(employee.name).toEqual("Melaku");
            expect(employee.id).toEqual(3025);
            expect(employee.email).toEqual("mlichebo@example.com")
        });

        it("should throw an error if provided no information",() => {
            const cb = () => new Employee();
            const err = new Error('You need to input Employee information!')
            expect(cb).toThrow(err);
        });
        it("should throw an error if not provided id");
        it("should throw an error if not provided email");
        it("should throw and error if 'name' is not a string", );
        it("should throw an error if 'id' is not a number")
        it("should throw an error if 'email' is not a string.")

    })
})