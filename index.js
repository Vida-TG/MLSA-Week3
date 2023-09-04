const express = require("express");
//const http = require("http")
const app = express()

const PORT = 5000
let page = ""

app.get('/', (req, res) => {
    page = "Homepage2.0"
    return res.json({page:page})

})

app.post('/', (req, res) => {
    page = "POST Homepage"
    return res.json({page})
})

app.get('/user', (req, res) => {
    page = "GET a User"
    return res.json({page:page})
})


app.post('/user', (req, res) => {
    page = "Users page (POST)"
    return res.json({page:page})
})

app.post('/user/:id', (req, res) => {
    const { id } = req.params
    page = `Im getting ${id}th user`
    return res.json({page:page})
})


app.listen(PORT, () => {
    `Server is live at port ${PORT}`
})



/*
//Routing
http.createServer((req, res) =>{
    if(req.url == "/") {
        res.w
        if get
        if po
    }
    if(req.url == "/user") {
        return res.write("Users")
    }
})
*/