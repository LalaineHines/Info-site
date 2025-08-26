const http = require('node:http');
const fs = require('fs');
const url = require('node:url');
const express = require('express');
const app = express();
const path = require('path');
const { nextTick } = require('node:process');

const hostname = "localhost";
const port = 8080;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'))
})

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, '/contact-me.html'))
})

app.use((req, res, next) => {
    app.status(404).sendFile(path.join(__dirname, '/404.html'))
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})