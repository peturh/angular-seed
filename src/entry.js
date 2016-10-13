// Vendor code
var angular = require('angular');
var ngAnimate = require('angular-animate');
var ngMessages = require('angular-messages');
var ngUIRouter = require('angular-ui-router');

//app
var app = require('app');

//Configs
var routes = require('configs/routes');
// Controllers
var MainController = require('controllers/MainController');
var OfferController = require('controllers/OfferController');

// Directives

//Services
var APIService = require('services/APIService');
// Templates

var MainTemplate = require('main.html');
var ToolbarTemplate = require('toolbar.html');
var OfferTemplate = require('offer.html');

var stylesheetsLess = require('stylesheets.less');
