// Vendor code
$ = jQuery = require('jquery');
var angular = require('angular');
var ngAnimate = require('angular-animate');
var ngMessages = require('angular-messages');
var ngUIRouter = require('angular-ui-router');
var Tether = require('tether/dist/js/tether.min.js');

window.Tether = Tether;
var bootstrap = require('bootstrap/js/bootstrap'); //this is from lib/ folder

//app
var app = require('app');

//Configs
var routes = require('configs/routes');
// Controllers
var MainController = require('controllers/MainController');
var OfferController = require('controllers/OfferController');

// Directives

var HideElement = require('directives/HideElement');

//Services
var APIService = require('services/APIService');
// Templates

var MainTemplate = require('main.html');
var ToolbarTemplate = require('toolbar.html');
var OfferTemplate = require('offer.html');

var stylesheetsLess = require('stylesheets.less');

var bootstrap = require('bootstrap/css/bootstrap.css'); //this is from lib/ folder