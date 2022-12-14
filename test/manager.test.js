const Manager = require('../lib/manager');

describe('Manager', () => {
    it('mangager object', () => {
        const manager = new Manager('jane', '12345', 'jane@email.com', '626');
        expect(manager.name).toBe('jane');
        expect(manager.id).toBe('12345');
        expect(manager.email).toBe('jane@email.com');
        expect(manager.officeNumber).toBe('626');
    });

    it('manager name', () => {
        const name = 'John';
        const manager = new Manager(name);
        expect(manager.name).toBe('John');
    });

    it('manager id', () => {
        const id = '67890';
        const manager = new Manager('John', id);
        expect(manager.id).toBe('67890');
    });

    it('manager email', () => {
        const email = 'john@email.com';
        const manager = new Manager('John', '67890', email);
        expect(manager.email).toBe('john@email.com');
    });

    it('manager office number', () => {
        const officeNumber = '626';
        const manager = new Manager('John', '67890','john@email.com', officeNumber);
        expect(manager.officeNumber).toBe('626');
    });

    it('testing getRole()', () => {
        const manager = new Manager('jane', '12345', 'jane@email.com', '626');
        expect(manager.getRole()).toBe('Manager');
    });
})