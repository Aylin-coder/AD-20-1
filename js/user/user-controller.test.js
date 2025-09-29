const UserController = require("./user-controller");
const User = require("./user");

let userController;

beforeEach(() => {
    userController = new UserController();
});


test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// TAREA 2: Prueba para add, usuario que NO está en la lista
test('add user that is not in the list', () => {
    let user1 = new User(1111, "Maria", "maria@generation.org");
    let user2 = new User(2222, "Pedro", "pedro@generation.org");
    
    userController.add(user1);
    
    // Verificar que user 2 NO está en la lista
    expect(userController.getUsers()).not.toContain(user2);
});

//Prueba para remove, usuario que NO está en la lista
test('remove user that is not in the list', () => {
    let user1 = new User(3333, "Ana", "ana@generation.org");
    let user2 = new User(4444, "Luis", "luis@generation.org");
    
    userController.add(user1);
    userController.remove(user2); // Intentar remover usuario que no existe
    
    // La lista debería seguir conteniendo user1
    expect(userController.getUsers()).toContain(user1);
    expect(userController.getUsers().length).toBe(1);
});

//Pruebas para findByEmail (2 pruebas)
test('findByEmail returns user when email exists', () => {
    let user = new User(5555, "Carlos", "carlos@generation.org");
    userController.add(user);
    
    let foundUser = userController.findByEmail("carlos@generation.org");
    expect(foundUser).toBe(user);
});

test('findByEmail returns undefined when email does not exist', () => {
    let foundUser = userController.findByEmail("noexiste@generation.org");
    expect(foundUser).toBeUndefined();
});

//Pruebas para findById (2 pruebas)
test('findById returns user when id exists', () => {
    let user = new User(6666, "Laura", "laura@generation.org");
    userController.add(user);
    
    let foundUser = userController.findById(6666);
    expect(foundUser).toBe(user);
});

test('findById returns undefined when id does not exist', () => {
    let foundUser = userController.findById(9999);
    expect(foundUser).toBeUndefined();
});