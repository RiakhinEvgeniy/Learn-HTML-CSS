let userRole = new Map();
userRole.set('Evgeniy', 'ADMIN');
userRole.set('Nataliy', 'editor');
userRole.set('Vlad', 'viewer');
userRole.set('Anna', 'user');
userRole.set('David', 'manager');

for (const [name, role] of userRole) {
    console.log(`${name}: ${role}`);
}