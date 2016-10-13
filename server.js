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

    var data = {
        api : "JSON",
        a : "retrieve",
        u : username,
        p : password
    };
    apiPost('site.php',data, function (apiResponse) {
        res.send(apiResponse);
    });
});
/**
 * The path for getting a device
 */
app.get('/device/:id', function (req, res) {
    console.log(req.params.id);
    var data = {
        api : "JSON",
        a : "retrieve",
        u : username,
        p : password,
        'deviceid[]' : req.params.id
    };
    apiPost('device.php',data, function (apiResponse) {
        res.send(apiResponse);
    });
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
        form: data,
        mimeType: 'application/x-www-form-urlencoded'
    };
    request.post(options, function (error, response, body) {
        console.log(error);
        console.log(body);
        return callback(body);
    });
}