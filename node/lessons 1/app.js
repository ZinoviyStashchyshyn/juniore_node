//// NODE.js


// імпортуємо усі модулі, котрі були експортовані з file.js
// const {var22,name} = require("./dir/file")
//
//
// name("Zenyk");
// console.log(var22);

// експортуємо глобальні змінні. Важливо, require("./dir/file"), зразу кешує всю інформацію з file.js, тобто все готове до експорту. Якщоб в file.js, була б, самовикликаюча функція, то вона б зразу відпрацювала.
// require("./dir/file");


// FS (FILE SYSTEM)

// вбудована бібліотека в ноду, вона ставиться разом з node.js
// const fs = require("fs");
//
// const path = require("path");


// Метод, який, наповнює файл інформацією, АЛЕ ПЕРЕРЕЗАПИСУЄ, дані будуть перезаписуватись а не додаватись в файл !!!
// Приймає в себе 1-м аргументом шлях - path.join(__dirname,"dir","dog.txt") ,2-м дані, що будемо записувати в файл -"HELLLOOO", 3-м колбек, який відловлює ерору
// fs.writeFile(path.join(__dirname,"dir","dog.txt"),"HELLLOOO",err => {
//     if (err){
//         console.log(err)
//         return
//     }
// });


// Метод, який, наповнює файл інформацією, ДОДАЄ ІНФУ В ФАЙЛ, АНЕ ПЕРЕЗАПИСУЄ!!! Може створити файл котрого немає.
// Приймає в себе 1-м аргументом шлях - path.join(__dirname,"dir","dog.txt") ,2-м дані, що будемо записувати в файл -"\n HELLO 2", 3-м колбек, який відловлює ерору
// fs.appendFile(path.join(__dirname, "dir", "dog.txt"), "\n HELLO 2", err => {
//     if (err){
//         console.log(err);
//         return
//     }
// });


// Метод, який,читає вміст вказаного файлу, пиймає шлях, ерор та дату, тобто вміст файлую(Buffer). щоб вивести дату потрібно застосувати toString
// fs.readFile(path.join(__dirname, "dir", "file.js"), (err, data) => {
//     if (err){
//         console.log(err);
//         return
//     }else{
//         console.log(data.toString())
//     }
// });


// створює папки за вказаним шляхом, обовязково вказувати {recursive:true}, оскільки інакше не буде працювати.
//Приймає три параметра, шлях з вказаними папками , котрі створити,руекурсію і ерор.
// fs.mkdir(path.join(__dirname, "movies", "home"), {recursive:true}, err => {
//     if (err){
//         console.log(err);
//         return
//     }
// });


// дає можливість зчитати інформацію з файлів з вказаної папки, приймає шлях, ерор та stat статистику з котрої при ітерації форичом можемо витягнути різну інформацію
// fs.readdir(path.join(__dirname,"movies", "home"), (err, files) => {
//     if (err){
//         console.log(err);
//     }else{
//         files.forEach(file=>{
//             fs.stat(path.join(__dirname,"movies", "home", `${file}`), (err1, stats) => {
//                 if (err1){
//                     console.log(err1);
//                 }else{
//                     console.log(file)
//                     console.log(stats)
//                 }
//             })
//         })
//     }
// });


//  Cтирає папку за вказаним шляхом, АЛЕ ОСТАННЮ!!!! Приймає шлях, {recursive:true} ОБОВЯЗКОВО!, і ерор.Стре home
// fs.rmdir(path.join(__dirname, "movies", "home"),{recursive:true}, err => {
//     if (err){
//         console.log(err);
//         return
//     }
// });


// стирає вказаний файл, останній за вказаним шляхом.
// fs.unlink(path.join(__dirname, "dir", "new.php"),err=>{
//     if (err){
//         console.log(err)
//         return
//     }
// });


// дає змогу переіменувати останній файл за вказаним шляхом. АЛЕ Є МОЖЛИВІСТЬ НЕ ПРОСТО ПЕРЕІМЕНУВАТИ, АЛЕ Й gthtytcnb В ІНШУ ПАПКУ І ОДРАЗУ ПЕРЕІМЕНУВАТИ ФАЙЛ для цього необхідно вказати нову папку з новим шляхом і но нову назву для файлу котрий переіменовуємо.
// приймає старий та новий шлях
// fs.rename(path.join(__dirname, "movies", "tod.txt"), path.join(__dirname, "movies", "dot.txt"),err => {
//     if (err){
//         console.log(err)
//     }
// });


// варіант коли переносимо в другу папку і переіменовуємо
// fs.rename(path.join(__dirname, "movies", "dot.txt"), path.join(__dirname, "movies2", "cat.txt"), err=>{
//     if (err){
//         console.log(err)
//     }
// });


// stream

// створюємо шлях стріму і зразу створемо файл в котрий будеммо наповнювати інфою(може лагати, захоче перше щоб створили папку і файл, але і може створити само))))
// let writeStrem = fs.createWriteStream(path.join(__dirname,"movies", "stream.txt"));
//
// // наповнюємо інфою наш стрім через цикл
// for (let i= 0; i<7000; i++ ){
//     writeStrem.write("\n TEST")
// };


// тепер те, що наповнили можемо зчитати через createReadStream()
// const readStream = fs.createReadStream(path.join(__dirname,"movies", "stream.txt"));

// він вміє приймати різні івенти, вибираємо потрібний, потрібно використовувати toString()

// readStream.on("data", chunk => {
//     console.log("*******************")
//     console.log(chunk)
//     console.log("*******************")
// });

// readStream.on("end", ()=>{
//     console.log("Read is over")
// });


// мжна ще робити перенаправлення стрім , треба 1, 28 подивитись через PIPE, просто перенаправляє з одного файлу в інший
// readStream.pipe(writeStrem)







// HOMEWORK

const fs = require("fs");

const path = require("path");

// fs.mkdir(path.join(__dirname, "homework", "20.00"), {recursive:true}, err => {
//     if (err){
//         console.log(err);
//     }
// });
//
//
// fs.mkdir(path.join(__dirname, "homework", "18.00"), {recursive:true}, err => {
//     if (err){
//         console.log(err);
//     }
// });
//
// fs.mkdir(path.join(__dirname, "homework", "Boys"), {recursive:true}, err => {
//     if (err){
//         console.log(err);
//     }
// });
//
// fs.mkdir(path.join(__dirname, "homework", "Girls"), {recursive:true}, err => {
//     if (err){
//         console.log(err);
//     }
// });
//
//
// for (let i = 1; i<=10; i++){
//     fs.appendFile(path.join(__dirname,"homework", "20.00", `people${i}.txt`), `{"name":"", "sex":""}`, err => {
//         if (err){
//             console.log(err);
//             return
//         }
//     } );
// };


// for (let i = 1; i<=10; i++){
//     if ([i]%2===0){
//         fs.rename(path.join(__dirname,"homework", "18.00", `people${i}.txt`), path.join(__dirname,"homework", "20.00", `people${i}.txt`), err => {
//             if (err){
//                 console.log(err);
//                 return
//             }
//         } );
//     }
// };


fs.readdir(path.join(__dirname, "homework", "18.00"), (err, files) => {
    if (err) {
        console.log(err)
    } else {
        for (const file of files) {
            fs.readFile(path.join(__dirname, "homework", "18.00", `${file}`), (err1, data) => {
                if (err) {
                    console.log(err)
                } else {
                    let objPeopel = JSON.parse(data.toString())
                    if (objPeopel.sex === "female") {
                        fs.rename(path.join(__dirname, "homework", "18.00", `${file}`), path.join(__dirname, "homework", "Girls", `${file}`), err2 => {
                            console.log(err2);
                        })
                    }
                }
            })
        }
    }
});


fs.readdir(path.join(__dirname, "homework", "20.00"), (err, files) => {
    if (err) {
        console.log(err)
    } else {
        for (const file of files) {
            fs.readFile(path.join(__dirname, "homework", "20.00", `${file}`), (err1, data) => {
                if (err) {
                    console.log(err)
                } else {
                    let objPeopel = JSON.parse(data.toString())
                    if (objPeopel.sex === "male") {
                        fs.rename(path.join(__dirname, "homework", "20.00", `${file}`), path.join(__dirname, "homework", "Boys", `${file}`), err2 => {
                            console.log(err2);
                        })
                    }
                }
            })
        }
    }
});





























