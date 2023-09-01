const fs = require("fs")

fs.writeFile("unknown.txt", "I dont see anything", (err) => {
    if(err) {
        console.log("Not created");
    } else {
        console.log("created")
    }
})

fs.readFile("unknown.txt", "utf-8", (data, err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

fs.appendFile("unknown.txt", "\n\nThis was appended", (err) => {
    if (err) console.log("Could not append")
    else console.log("Appended")
})

fs.unlink("unknown.txt", (err) => {
    if (err) console.log("Could not delete")
    else console.log("Deleted")
})