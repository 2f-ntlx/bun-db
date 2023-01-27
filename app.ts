import {Database} from "bun:sqlite"

console.log("begin bun app")
const db = Database.open('test.db')
// const db = new Database();
// db.run(
//   "CREATE TABLE IF NOT EXISTS foo (id INTEGER PRIMARY KEY AUTOINCREMENT, greeting TEXT)",
// );
// db.run("INSERT INTO foo (greeting) VALUES (?)", "Welcome to bun!");
// db.run("INSERT INTO foo (greeting) VALUES (?)", "Hello World!");

console.log("end bun app")