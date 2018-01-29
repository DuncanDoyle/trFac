/*
 * Main application controller.
 */
'use strict';

var app = angular.module("trFacApp", ["ngRoute", "ui.bootstrap"]);

// Configure application routing
app.config(function($routeProvider) {
            console.log("Bootstrapping AngularJS RouteProvider")
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'mainCtrl',
                    controllerAs: 'main'
                })
                .when('/rulesEditor', {
                    templateUrl: 'views/rulesEditor.html',
                    controller: 'rulesEditorCtrl',
                    controllerAs: 'rulesEditor'
                })
                /*
                .when('/humanTasks', {
                    templateUrl: 'views/humanTasks.html',
                    controller: 'humanTasksCtrl',
                    controllerAs: 'humanTasks'
                })
                .when('/task/goldCardOfferTask', {
                    templateUrl: 'views/goldCardOfferTask.html',
                    controller: 'goldCardOfferTaskCtrl',
                    controllerAs: 'goldCardOfferTask'
                })
                .when('/task/rejectTask', {
                    templateUrl: 'views/rejectTask.html',
                    controller: 'rejectTaskCtrl',
                    controllerAs: 'rejectTask'
                })
                .when('/reviewSilverCard', {
                    templateUrl: 'views/reviewSilverCard.html',
                    // controller: 'reviewSilverCardCtrl',
                    // controllerAs: 'reviewSilverCard'
                })
                .when('/developGoldCard', {
                    templateUrl: 'views/developGoldCard.html',
                    // controller: 'developGoldCardCtrl',
                    // controllerAs: 'developGoldCard'
                })
                .when('/processInstances', {
                    templateUrl: 'views/processInstances.html',
                    controller: 'processInstancesCtrl',
                    controllerAs: 'processInstances'
                 })
                 */
                 .otherwise({
                    redirectTo: '/'
                 });
         })
        .config(function($httpProvider) {
            // Enable cross domain calls
            $httpProvider.defaults.useXDomain = true;
        })
        .service('sharedStateService', function() {

            var workspace;

            //TODO: rewrite as a service ... This now looks like a factory ... See: https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html
            //This basically does the same thing as the function code .... we return an object, not a constructor function.
            /*
            return {
                getWorkspace: function() {
                    return selectedCard;
                },
                setWorkspace: function(value) {
                    workspace = value;
                }
            };
            */
            this.getWorkspace = function() {
              return workspace;
            };

            this.setWorkspace = function(value) {
              console.log("Setting workspace!");
              workspace = value;
            };
        })
        .factory("util", function() {
            return {
                getKieServerUrl: function() {
                    return "http://" + ENV.kieserver_host + ":" + ENV.kieserver_port;
                },
                getCreditCardAppContainer: function() {
                    return ENV. kieserver_containerId;
                },
                getCreditCardProcess: function() {
                    return ENV.kieserver_processId;
                },
                getTaskView: function(taskName) {
                    var taskView
                    switch(taskName) {
                      case "Send Rejection Notification":
                        taskView = "rejectTask";
                        break;
                      case "Develop Wealth (Gold) Card Offer and Card":
                        taskView = "goldCardOfferTask";
                        break;
                      case "Review Retail (Silver) Card Offer and Card":
                        taskView = "silverCardOfferTask";
                        break;
                    }
                    console.log("Selected view: " + taskView);
                    return taskView;
                }
            }
        });
