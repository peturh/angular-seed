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
            name: "Skeppshult Natur",
            id: "1",
			brand:"Cykelmekano",
			imgUrl:"http://rapp.papperstidningen.se/_img/2806-0701-1704-59-1.jpg",
            description : "En äkta Natur i grund och botten.",
        },
        {
            name: "Skor",
            id: "2",
			brand:"Wittingsskor",
			imgUrl:"http://rapp.papperstidningen.se/_img/Wittings-3_v47.jpg",
            description : "detta är texten",
        },
        {
            name: "Lax",
            id: "3",
			brand:"Stefan Pålssons",
			imgUrl:"http://rapp.papperstidningen.se/_img/P%C3%A5lsson%20bild%201.jpg",
            description : "detta är texten",
        }
    ];

    res.send(listWithObjects);
});

app.get('/getNews', function (req, res) {

    /**
     * This is an array of objects
     */

    var listWithObjects= [
        {
            heading: "Färjor på batteri ger effekt i Landskrona",
            id: "1",
			date: "2016-10-12",
			imgUrl:"http://www.papperstidningen.se/wp-content/uploads/2016/10/40la-farjebatteri-5-800x445.jpg",
            url : "http://www.papperstidningen.se/2016/10/farjor-pa-batteri-ger-effekt-i-landskrona/",
            text : "Färjepassagerarna kommer snart att tura mellan Helsingborg och Helsingör på el istället för diesel.",
        },
        {
            heading: "Nu är plan- och byggchefen på plats",
            id: "2",
			date: "2016-10-12",
			imgUrl:"http://www.papperstidningen.se/wp-content/uploads/2016/10/planchef-800x445.jpg",
            url : "http://www.papperstidningen.se/2016/10/nu-ar-plan-och-byggchefen-pa-plats/",
            text : "Linnea Widing gjorde förra veckan sin första vecka som plan- och byggchef. Det är en tjänst som är helt ny i Svalövs kommun.",
        },
        {
            heading: "Varje match är en final",
            id: "3",
			date: "2016-10-12",
			imgUrl:"http://www.papperstidningen.se/wp-content/uploads/2016/10/agim-800x445.jpg",
            url : "http://www.papperstidningen.se/2016/10/varje-match-ar-en-final/",
            text : "Med fem matcher kvar ligger BoIS strax under kvalstrecket för avancemang uppåt. Papperstidningen tog ett snack med tränaren Agim Sopi.",
        },
		{
            heading: "Historisk kvällstur med stadens nöjesliv i fokus",
            id: "3",
			date: "2016-10-12",
			imgUrl:"http://www.papperstidningen.se/wp-content/uploads/2016/09/39LA-rundvandring_hotell-800x445.jpg",
            url : "http://www.papperstidningen.se/2016/09/historisk-kvallstur-med-stadens-nojesliv-i-fokus/",
            text : "Visste du att Landskrona hade fem biografer under några år på 50-talet? Och att det haft sitt egna Gröna lund?",
        }
    ];

    res.send(listWithObjects);
});


app.get('/offer/:id', function(req,res){
    var id = req.params.id;
    console.log(id);

    var offer = {
  		name: "Skeppshult Natur",
       	brand:"Cykelmekano",
		location:"Stora Norregatan 7 Landskrona",
		imgUrl:"http://rapp.papperstidningen.se/_img/2806-0701-1704-59-1.jpg",
        description : "NATUR En äkta Natur i grund och botten. Något enklare utrustad än Natur Premium, men upplevelsen är densamma. Lugn, majestätisk, men ändå lätt i känslan (lätt ram i höghållfast stål).",
		price:"Nu.7000 kr",
		ordPrice:"Ordinarie pris 8000kr",
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