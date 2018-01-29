'use strict';

angular.module('creditCardApplicationApp')
    .controller('humanTasksCtrl', function ($scope, $http, $location, util, sharedStateService) {

        $scope.data = {};

        $scope.data.page = 0;

        $scope.getHumanTasks = function(page) {

            if (page < 0) {
                page = 0;
            }

            $scope.data.page = page;

            var url = util.getKieServerUrl()
                + "/kie-server/services/rest/server/queries/tasks/instances/pot-owners"
                + "?page=" + page
                + "&user=bpmsAdmin";

            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            //Base64 encoded username and password for Basic Authentication.
            $http.defaults.headers.common.Authorization = 'Basic a2llc2VydmVyOmtpZXNlcnZlcjEh';
            $http.defaults.headers.common['Accept'] = "application/json";
            $http.get(url)
                .success(function (data) {
                    $scope.data.result = data['task-summary'];
                })
                .error(function (error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'humanTasks';
                    $scope.data.error.message = 'The task list could not be retrieved.'
                });

        };

        $scope.processHumanTask = function (id, op) {
            var url = util.getKieServerUrl()
                + "/kie-server/services/rest/server/containers/"
                + util.getCreditCardAppContainer()
                + "/tasks/"
                + id
                + "/states/"
                + op
                + "?user=bpmsAdmin";

            //$http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
            $http.defaults.headers.common['Accept'] = "application/json";
            $http.defaults.headers.common['Content-type'] = "application/json";
            $http.put(url)
                .success(function (data) {
                    $scope.getHumanTasks($scope.data.page);
                })
                .error(function (error) {
                    $scope.data.error = {};
                    $scope.data.error.code = 'claim';
                    $scope.data.error.message = 'Error when claiming task ' + id + '.';
                });

        };

        $scope.viewHumanTask = function (id, taskName) {
            sharedStateService.setCurrentTask(id);
            //TODO: Redirect based on the task type.
            //$location.path("/offerTask");
            $location.path("/task/" + util.getTaskView(taskName));
        }



        $scope.getHumanTasks(0);

    })

    .filter('description', function() {
        return function (data, propertyName) {
            switch (propertyName) {
                case "project":
                    return data.split("::")[0];
                    break;
                case "subject":
                    return data.split("::")[1];
                    break;
                default:
                    return data;
            }
        }

    });
