const express = require('express');
const server = express();
const request = require('request');
const path = require('path');

server.set('view engine', 'ejs');

server.get('/', (req, res) =>
    Promise.all([
        getContents('https://microfend-header.herokuapp.com/'),
        getContents('https://microfend-sidebar.herokuapp.com/'),
        getContents('https://microfend-content.herokuapp.com/'),
    ]).then(responses => console.log(responses[0]) ||
        res.render('index', {
            header: responses[0],
            sidebar: responses[1],
            content: responses[2],
        })
    ).catch(error => res.send(error.message))
);

const getContents = (url) => new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
        if (error) return resolve("Error loading " + url + ": " + error.message);

        return resolve(body);
    });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Homepage listening on port ${port}`);
});