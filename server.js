const express = require('express');
const serveStatic = require('serve-static');
const request = require('request');
const app = express();

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
            id: "1",
            url : "www.google.com/bild.jpg",
            description : "detta är texten",

        },
        {
            name: "Second",
            id: "2",
            url : "www.google.com/bild.jpg",
            description : "detta är texten",
        },
        {
            name: "Third",
            id: "3",
            url : "www.google.com/bild.jpg",
            description : "detta är texten",
        },
        {
            name: "Fourth",
            id: "4",
            url : "www.google.com/bild.jpg",
            description : "detta är texten",
        },
        {
            name: "The End",
            id: "5",
            url : "www.google.com/bild.jpg",
            description : "detta är texten",
        }
    ];

    res.send(listWithObjects);
});

app.get('/offer/:id', function(req,res){
    var id = req.params.id;
    console.log(id);

    var offer = {
        name : "The Name of the offer",
        description : "The description of the offer"
    };

    res.send(offer);

});

/**
 *
 * A function to proxy requests to the webapp.
 *
 * @param path - The path that the api should call
 * @param callback - The json body
 * @param data - The path specific data
 */

function apiGet(path, data, callback) {

    var fullPath = url + path;
    var options = {
        url: "www.apiary.io/myApi/route",
        data: data,
        mimeType: 'application/json'
    };
    request.post(options, function (error, response, body) {
        console.log(error);
        console.log(body);
        return callback(body);
    });
}