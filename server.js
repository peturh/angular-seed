const express = require('express');
const serveStatic = require('serve-static');
const request = require('request');
const app = express();
const username = process.env.username;
const password = process.env.password;
const url = process.env.url;

app.use(serveStatic(__dirname + "/dist"));
app.listen(9090, function () {
        console.log("Running api server.")
    }
);

/**
 * The path for getting available sites
 */
app.get('/site', function (req, res) {


    apiPost('site.php',data, function (apiResponse) {
        res.send(apiResponse);
    });
});
/**
 * The path for getting a device
 */
app.get('/getSomething', function (req, res) {

    /**
     * This is an array of objects
     */

    var listWithObjects= [
        {
            name: "First",
            id: "1"
        },
        {
            name: "Second",
            id: "2"
        },
        {
            name: "Third",
            id: "3"
        },
        {
            name: "Fourth",
            id: "4"
        },
        {
            name: "The End",
            id: "5"
        }
    ];

    res.send(listWithObjects);
});

/**
 *
 * A function to proxy requests to the webapp.
 *
 * @param path - The path that the api should call
 * @param callback - The json body
 * @param data - The path specific data
 */

function apiPost(path, data, callback) {

    var fullPath = url + path;
    var options = {
        url: fullPath,
        data: data,
        mimeType: 'application/json'
    };
    request.post(options, function (error, response, body) {
        console.log(error);
        console.log(body);
        return callback(body);
    });
}