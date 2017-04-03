/**
* Module : Angular Routing
* Handles the Routing 
*/

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.htm",
        controller : "storeCtrl",
        controllerAs: 'vm'
    })
    .when("/resource", {
        templateUrl : "templates/resource.htm",
        controller : "storeCtrl",
        controllerAs: 'vm'
    })
});