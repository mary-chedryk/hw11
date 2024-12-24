//*Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
    ownerName: "Cristopher Stoltzfus",
    accountNumber: "US123456789",
    balance: 6000,

    deposit(amount) {
        this.balance += amount;
        console.log(`Рахунок поповнено на ${amount} грн. Поточний баланс: ${this.balance} грн.`);
    },

    withdraw(amount) {
        this.balance -= amount;
        console.log(`Ви зняли ${amount} грн. Поточний баланс: ${this.balance} грн.`);
    }

};

console.log(`Власник рахунку: ${bankAccount.ownerName}`);
console.log(`Номер рахунку: ${bankAccount.accountNumber}`);


bankAccount.deposit(500);

bankAccount.withdraw(300);

//*Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: 20,
    humidity: 60,
    windSpeed: 10,

    isBelowZero() {
        return this.temperature < 0;
    }
};

function checkTemperature() {
    const inputTemperature = parseFloat(prompt("Введіть температуру (°C):"));
    weather.temperature = inputTemperature;

    if (weather.isBelowZero()) {
        console.log("Температура нижче 0 градусів Цельсія");
    } else {
        console.log("Температура вище або дорівнює 0 градусів Цельсія");
    }
}

checkTemperature();

//*Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
    name: "",
    email: "",
    password: "",


    login(inputEmail, inputPassword) {
        if (this.email === inputEmail && this.password === inputPassword) {
            console.log(`Ласкаво просимо, ${this.name}! Ви успішно увійшли в систему.`);
        } else {
            console.log("Невірний email або пароль. Будь ласка, спробуйте ще раз.");
        }
    }
};


function setupUser() {
    user.name = prompt("Введіть своє ім'я:");
    user.email = prompt("Введіть свій email:");
    user.password = prompt("Введіть свій пароль:");
    console.log("Користувач успішно створений!");
    console.log(`Ім'я: ${user.name}, Email: ${user.email}`);
}


function userLogin() {
    const inputEmail = prompt("Введіть email для входу:");
    const inputPassword = prompt("Введіть пароль для входу:");
    user.login(inputEmail, inputPassword);
}


setupUser();
userLogin();


//*Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.


const movie = {
    title: "Inception",        
    director: "Christopher Nolan", 
    year: 2010,                
    rating: 8.8,               
  

    isHighRated() {
      return this.rating > 8;
    }
  };
  

  function displayMovieInfo() {
    if (movie.isHighRated()) {
      console.log(`Фільм "${movie.title}" має високий рейтинг!`, "color: green; font-weight: bold;");
    } else {
      console.log(`Фільм "${movie.title}" не має високого рейтингу.`);
    }
  }
  
  // Виклик функції для виведення інформації
  displayMovieInfo();

