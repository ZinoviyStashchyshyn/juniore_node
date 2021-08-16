const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('SERVER WORK, on port: 5000');
    }
});

const expresHbs = require('express-handlebars');
app.set("view engine", ".hbs");
app.engine('.hbs', expresHbs({defaultLayout: false}));
app.set("views", path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("mainPage")
});

app.get("/registration", (req, res) => {
    res.render("registration");

});

app.get("/logination", (req, res) => {
    res.render("logination")
});

app.post("/registration", (req, res) => {

    fs.readFile(path.join(__dirname, "public", "dataBaseUsers", "dataBaseUsers.txt"), (err, data) => {
        if (err) {
            console.log(err)
        } else {

            const arroffUsers = data.toString() ? JSON.parse(data.toString()) : [];

            const allreadyRegisteredUser = arroffUsers.find(value => value.login === req.body.login);
            if (allreadyRegisteredUser) {
                res.render("logination")
                return;
            } else {
                arroffUsers.push(req.body)
                const currentUser = req.body
                res.render('user', {currentUserr: {currentUser}})
            }

            fs.writeFile(path.join(__dirname, "public", "dataBaseUsers", "dataBaseUsers.txt"), JSON.stringify(arroffUsers), err1 => {
                if (err1) {
                    console.log(err1)
                }
            });
        }
    });
});


app.post("/logination", (req, res) => {

    fs.readFile(path.join(__dirname, "public", "dataBaseUsers", "dataBaseUsers.txt"), (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const arroffUsers = JSON.parse(data.toString());
            const allreadyRegisteredUser = arroffUsers.find(value => value.login === req.body.login && value.password === req.body.password);
            allreadyRegisteredUser ? res.render("user", {allreadyRegisteredUserr: {allreadyRegisteredUser}}) : res.render("registration");

        }
    });
});


app.get("/userAll", (req, res) => {
    fs.readFile(path.join(__dirname, "public", "dataBaseUsers", "dataBaseUsers.txt"), (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const arroffUsers = JSON.parse(data.toString());
            res.render("usersAll", {arroffUserss: {...arroffUsers}})
        }
    });
});


//// ===================================HOME WORK============================================

// 0.  Реєстрація, Логінація, та список всіх юзерів
// 1.  Створити масив юзерів який буде виступати в ролі БАЗИ ДАНИХ
// 2.  При реєстрації Юзер вводить ЛОгін та пароль, його дані пушити в масив
// 3.  Якщо такий юзер вже є, то ми кажемо цей юзер вже є , і повідомлення що такий юзер уже є
// 4.  При логінації вводимо логін та пароль, і ми його логінимо, якщо не правильний ми рендиремо сторінку з ЕРОРОЮ
// 5.  Якщо цей юзер є,  і його співпадають дані , відмальовуємо сторінку з даним юзера і там буде кнопка. При кліку на яку переходимо на сторінку де усі юзера
// 6.  Та кнопка ЛОГ АУТ тобто вихід на логін сторінку

// Хто хоче, то узера можна зберегти в тхт файлику, і при логінації його парсити, шукати в ньому юзера, допущувати туди нових юзерів.




