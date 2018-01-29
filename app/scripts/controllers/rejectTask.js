'use strict';

angular.module('creditCardApplicationApp')
    .controller('rejectTaskCtrl', function($scope, $http, $location, util, sharedStateService) {

        var createOutputData = function(task) {
            var outputData = {
                htRejection: {
                    'signavio.Rejection': {
                        reason: task['task-output-data']['htRejection']['signavio.Rejection']['reason'],
                        prospect: task['task-input-data']['htProspect']
                    }
                }
            }
            return outputData;
        }

        $scope.data = {};

        $scope.getTask = function(id) {
            var url = util.getKieServerUrl() +
                "/kie-server/services/rest/server/containers/" +
                util.getCreditCardAppContainer() +
                "/tasks/" +
                id +
                "?withInputData=true&withOutputData=true&user=bpmsAdmin";

            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            //Base64 encoded username and password for Basic Authentication.
            $http.defaults.headers.common.Authorization = 'Basic a2llc2VydmVyOmtpZXNlcnZlcjEh';
            $http.defaults.headers.common['Accept'] = "application/json";
            $http.get(url)
                .success(function(data) {
                    $scope.data.task = data;
                })
                .error(function(error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'ticket';
                    $scope.data.error.message = 'The ticket with id ' + id + ' could not be retrieved.'
                });
        };

        $scope.saveTask = function(task) {

            var url = util.getKieServerUrl() +
                "/kie-server/services/rest/server/containers/" +
                util.getCreditCardAppContainer() +
                "/tasks/" +
                task["task-id"] +
                "/contents/output" +
                "?user=bpmsAdmin";



            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            //Base64 encoded username and password for Basic Authentication.
            $http.defaults.headers.common.Authorization = 'Basic a2llc2VydmVyOmtpZXNlcnZlcjEh';
            $http.defaults.headers.common['Accept'] = "application/json";
            $http.defaults.headers.common['Content-type'] = "application/json";
            $http.put(url, createOutputData(task))
                .success(function(data) {
                  //After a succesful save, redirect to the task list.
                  $location.path("/humanTasks");
                })
                .error(function(error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'saveTask';
                    $scope.data.error.message = 'The task could not be saved.'
                })
        }

        $scope.completeTask = function(task) {

            var url = util.getKieServerUrl() +
                "/kie-server/services/rest/server/containers/" +
                util.getCreditCardAppContainer() +
                "/tasks/" +
                task["task-id"] +
                "/states/completed" +
                "?user=bpmsAdmin";

            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            //Base64 encoded username and password for Basic Authentication.
            $http.defaults.headers.common.Authorization = 'Basic a2llc2VydmVyOmtpZXNlcnZlcjEh';
            $http.defaults.headers.common['Accept'] = "application/json";
            $http.defaults.headers.common['Content-type'] = "application/json";
            $http.put(url, createOutputData(task))
                .success(function(data) {
                    sharedStateService.setCurrentTask((function() {
                        return;
                    })());
                    $location.path("/humanTasks");

                })
                .error(function(error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'completeTask';
                    $scope.data.error.message = 'The task could not be completed.'
                })
        }

        if (sharedStateService.getCurrentTask()) {
            $scope.getTask(sharedStateService.getCurrentTask());
        }

    });
