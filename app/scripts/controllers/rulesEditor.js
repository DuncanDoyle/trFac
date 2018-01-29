'use strict';

angular.module('trFacApp')
    //.controller('rulesEditorCtrl', function($scope, $http, $location, util, sharedStateService) {
    .controller('rulesEditorCtrl', function($scope, sharedStateService) {
        console.log("Loading rulesEditor controller");

        //Blockly.HSV_SATURATION = 0.45;
        //Blockly.HSV_VALUE = 0.65;

        Blockly.HSV_SATURATION = 0.85;
        Blockly.HSV_VALUE = 0.45;

        var workspace = Blockly.inject('blocklyDiv', {toolbox: document.getElementById('toolbox')});
        sharedStateService.setWorkspace(workspace);
        //$scope.selectedCard = sharedStateService.getSelectedCard();

        //$scope.droolsLanguage = "DRL";
        //Reset the selected card.
        //sharedStateService.setSelectedCard("");

        //$scope.data = {};
        //Initialize the booleans in our model.
        /*
        $scope.data.application = {};
        $scope.data.application.bankruptcies = false;
        $scope.data.application.defaults = false;
        $scope.data.application.settlement = false;
        */

        /*
        $scope.createApplication = function(application) {
            var url = util.getKieServerUrl()
                + "/kie-server/services/rest/server/containers/"
                + util.getCreditCardAppContainer()
                + "/processes/"
                + util.getCreditCardProcess()
                + "/instances";

            //JSON representation of the request. CreditCard type still needs to be bound to the model.
            var applicationVar = {
                input : {
                  'defaultpkg.Input' : {
                    fico: application.fICO,
                    bankruptcies: application.bankruptcies,
                    medical: application.medical,
                    defaults: application.defaults,
                    rentOrMortgage: application.rentOrMortgage,
                    income: application.income,
                    settlement: application.settlement,
                    consumerDebt: application.consumerDebt
                  }
                },
                //prospect" : {"signavio.Prospect":{"name":"Duncan Doyle","ssn":"1234","email":"ddoyle@redhat.com"}}
                prospect : {
                  'signavio.Prospect' : {
                    name: application.name,
                    email: application.email,
                    ssn: application.ssn
                  }
                },
                prospectComment : application.comment,
                cardType : $scope.selectedCard
            };

            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            //Base64 encoded username and password for Basic Authentication.
            $http.defaults.headers.common.Authorization = 'Basic a2llc2VydmVyOmtpZXNlcnZlcjEh';
            $http.defaults.headers.common['Accept'] = "application/json";
            $http.defaults.headers.common['Content-type'] = "application/json";
            console.log("Sending request");
            $http.post(url, applicationVar)
                .success(function (data) {
                    $scope.data.result = data;
                })
                .error(function (error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'createCcApplication';
                    $scope.data.error.message = 'The application could not be submitted.'
                })
                .finally(function () {
                    $scope.data.ticket = {};
                });
        }

        $scope.reload = function() {
            $scope.data = {};
        }
        */


    });
