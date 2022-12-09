const Intern = require('../lib/intern');

describe('Intern', () => {
    it('intern object', () => {
        const intern = new Intern('jane', '12345', 'jane@email.com', 'SDSU');
        expect(intern.name).toBe('jane');
        expect(intern.id).toBe('12345');
        expect(intern.email).toBe('jane@email.com');
        expect(intern.school).toBe('SDSU');
    });

    it('intern name', () => {
        const name = 'John';
        const intern = new Intern(name);
        expect(intern.name).toBe('John');
    });

    it('intern id', () => {
        const id = '67890';
        const intern = new Intern('John', id);
        expect(intern.id).toBe('67890');
    });

    it('intern email', () => {
        const email = 'john@email.com';
        const intern = new Intern('John', '67890', email);
        expect(intern.email).toBe('john@email.com');
    });

    it('intern school', () => {
        const school = 'SDSU';
        const intern = new Intern('John', '67890','john@email.com', school);
        expect(intern.school).toBe('SDSU');
    });

    it('testing getRole()', () => {
        const intern = new Intern('jane', '12345', 'jane@email.com', 'SDSU');
        expect(intern.getRole()).toBe('Intern');
    });
})