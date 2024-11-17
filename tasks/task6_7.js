class Client {
    #login;
    #email;
  
    constructor(login, email) {
      
      if (typeof login !== 'string' || login.trim().length === 0) {
        throw new Error('Login повинен бути не пустою строкою.');
      }
      if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Некоректний email.');
      }
      this.#login = login;
      this.#email = email;
    }
  
    get login() {
      return this.#login;
    }
  
    set login(newLogin) {
      if (typeof newLogin === 'string' && newLogin.trim().length > 0) {
        this.#login = newLogin;
      } else {
        throw new Error('Login повинен бути не пустою строкою.');
      }
    }
  
    get email() {
      return this.#email;
    }
  
    set email(newEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(newEmail)) {
        this.#email = newEmail;
      } else {
        throw new Error('Некоректний email.');
      }
    }
  }
  

  let client;
  
 
  const loginInput = document.getElementById('login');
  const emailInput = document.getElementById('email');
  const createClientButton = document.getElementById('createClient');
  const showClientButton = document.getElementById('showClient');
  const output = document.getElementById('output');
  

  createClientButton.addEventListener('click', () => {
    const login = loginInput.value.trim(); 
    const email = emailInput.value.trim(); 
  
    try {
      client = new Client(login, email);
      output.textContent = 'Клієнт успішно створен!';
      loginInput.value = ''; 
      emailInput.value = ''; 
    } catch (error) {
      output.textContent = `Помилка: ${error.message}`;
    }
  });
  

  showClientButton.addEventListener('click', () => {
    if (client) {
      output.textContent = `Логін: ${client.login}, Email: ${client.email}`;
    } else {
      output.textContent = 'Клієнт не створен!';
    }
  });
  