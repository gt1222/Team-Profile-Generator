const Employee = require('../lib/employee');

describe('Employee', () => {
    it('employee object', () => {
        const employee = new Employee('jane', '12345', 'jane@email.com');
        expect(employee.name).toBe('jane');
        expect(employee.id).toBe('12345');
        expect(employee.email).toBe('jane@email.com');
    });

    it('employee name', () => {
        const name = 'John';
        const employee = new Employee(name);
        expect(employee.name).toBe('John');
    });

    it('employee id', () => {
        const id = '67890';
        const employee = new Employee('John', id);
        expect(employee.id).toBe('67890');
    });

    it('employee email', () => {
        const email = 'john@email.com';
        const employee = new Employee('John', '67890', email);
        expect(employee.email).toBe('john@email.com');
    });

    it('testing getRole()', () => {
        const employee = new Employee('jane', '12345', 'jane@email.com');
        expect(employee.getRole()).toBe('Employee');
    });
})