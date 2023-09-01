const fs = require("fs")

fs.writeFileSync("unknownSYNC.txt", "THIS IS THE SYNC FILE")
//GET USER DETAILS
const content = fs.readFileSync("unknownSYNC.txt", "utf-8")
//DO STH ELSE 
console.log(content)

fs.appendFileSync("unknownSYNC.txt", "\n\nTHIS IS THE APPENDED TEXT")

fs.unlinkSync("unknownSYNC.txt")