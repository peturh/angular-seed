// Vendor code
var angular = require('angular');
var ngMaterial = require('angular-material');
var ngAnimate = require('angular-animate');
var ngMessages = require('angular-messages');
var ngUIRouter = require('angular-ui-router');

//app
var app = require('app');

//Configs
var routes = require('configs/routes');
// Controllers
var MainController = require('controllers/MainController');

// Directives

//Services
var APIService = require('services/APIService');
// Templates

var MainTemplate = require('main.html');
var ToolbarTemplate = require('toolbar.html');

var materialcss = require('angular-material/angular-material.min.css');
var stylesheetsLess = require('stylesheets.less');
