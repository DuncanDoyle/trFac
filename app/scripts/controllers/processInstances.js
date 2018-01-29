'use strict';

angular.module('creditCardApplicationApp')
    .controller('processInstancesCtrl', function($scope, $http, $location, $window, $sce, util, sharedStateService) {

        $scope.data = {};
        $scope.selectedprocessinstance = {};

        $scope.data.page = 0;

        $scope.getProcessInstances = function(page) {
            if (page < 0) {
                page = 0;
            }
            $scope.data.page = page;

            var url = util.getKieServerUrl() +
                "/kie-server/services/rest/server/queries/processes/" +
                util.getCreditCardProcess() +
                "/instances" +
                "?page=" + page;

            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            //Base64 encoded username and password for Basic Authentication.
            $http.defaults.headers.common.Authorization = 'Basic a2llc2VydmVyOmtpZXNlcnZlcjEh';
            $http.defaults.headers.common['Accept'] = "application/json";

            $http.get(url)
                .success(function(data) {
                    $scope.data.result = data['process-instance'];
                })
                .error(function(error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'getProcessInstances';
                    $scope.data.error.message = 'The process instance list could not be retrieved.'

                });
        };

        /*
         * Aborts the process instance and calls "getProcessInstances" to reload the data.
         */
        $scope.abortProcessInstance = function(id) {
            var url = util.getKieServerUrl() +
                "/kie-server/services/rest/server/containers/" +
                util.getCreditCardAppContainer() +
                "/processes/instances/" +
                id;

            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            //Base64 encoded username and password for Basic Authentication.
            $http.defaults.headers.common.Authorization = 'Basic a2llc2VydmVyOmtpZXNlcnZlcjEh';
            $http.defaults.headers.common['Accept'] = "application/json";
            $http.defaults.headers.common['Content-type'] = "application/json";
            $http.delete(url)
                .success(function(data) {
                    //If the abort was succesful, we retrieve the process-instances again.
                    $scope.getProcessInstances($scope.data.page);
                })
                .error(function(error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'abort';
                    $scope.data.error.message = 'Error when aborting process instance ' + id + '.';
                });

        };

        $scope.getProcessInstanceImage = function(id) {
            var url = util.getKieServerUrl() +
                "/kie-server/services/rest/server/containers/" +
                util.getCreditCardAppContainer() +
                "/images/processes/instances/" +
                id;

            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            //Base64 encoded username and password for Basic Authentication.
            $http.defaults.headers.common.Authorization = 'Basic a2llc2VydmVyOmtpZXNlcnZlcjEh';
            //SVG is returned as XML
            $http.defaults.headers.common['Accept'] = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
            //$http.defaults.headers.common['Content-type'] = "application/json";
            $http.get(url)
                .success(function(data) {
                    //If the abort was succesful, we retrieve the process-instances again.
                    console.log("Succesfully retrieved SVG image.");
                    $scope.selectedprocessinstance.id = id;
                    //We need to use SCE (and ng-bind-html directive) to allow unescaped SVG data in our view.
                    $scope.selectedprocessinstance.svg = $sce.trustAsHtml(data);

                    //TODO: See how we can display this process image in the same page here ...., so reloading when the button is clicked.
                    //$window.location.reload();
                })
                .error(function(error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'abort';
                    $scope.data.error.message = 'Error when retrieving process instance image for process instance: ' + id + '.';
                });

        };

        /*
        $scope.processTicket = function (id, op) {
            var url = util.getKieServerUrl()
                + "/kie-server/services/rest/server/containers/"
                + util.getTicketAppContainer()
                + "/tasks/"
                + id
                + "/states/"
                + op;

            $http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            $http.defaults.headers.common['Accept'] = "application/json";
            $http.defaults.headers.common['Content-type'] = "application/json";
            $http.put(url)
                .success(function (data) {
                    $scope.getMyTickets($scope.data.page);
                })
                .error(function (error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'claim';
                    $scope.data.error.message = 'Error when claiming task ' + id + '.';
                });

        };
        */
        /*
        $scope.viewProcessInstance= function (id) {
            sharedStateService.setCurrentProcessInstance(id);
            $location.path("/ticket");
        }
        */

        $scope.getProcessInstances(0)

    });
