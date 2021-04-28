import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jan',
        email: 'Jan@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Ruldane',
        email: 'Ruldane@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

export default users;