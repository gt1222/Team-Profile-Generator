const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('engineer object', () => {
        const engineer = new Engineer('jane', '12345', 'jane@email.com', 'janedoe');
        expect(engineer.name).toBe('jane');
        expect(engineer.id).toBe('12345');
        expect(engineer.email).toBe('jane@email.com');
        expect(engineer.github).toBe('janedoe');
    });

    it('engineer name', () => {
        const name = 'John';
        const engineer = new Engineer(name);
        expect(engineer.name).toBe('John');
    });

    it('engineer id', () => {
        const id = '67890';
        const engineer = new Engineer(id);
        expect(engineer.id).toBe('67890');
    });

    it('engineer email', () => {
        const email = 'john@email.com';
        const engineer = new Engineer(email);
        expect(engineer.email).toBe('john@email.com');
    });

    it('engineer github username', () => {
        const github = 'johndoe';
        const engineer = new Engineer(github);
        expect(engineer.email).toBe('johndoe');
    });

    it('testing getRole()', () => {
        const engineer = new Engineer('jane', '12345', 'jane@email.com', 'janedoe');
        expect(engineer.getRole()).toBe('Engineer');
    });
})