var app = angular.module('PTAApp', []);

app.controller('MainController', ['$http', function($http){

var controller = this;

//CREATE=================================================================
    this.create = function(){
        $http({
            method:'POST',
            url:'/events',
            data: {
                name: this.name,
                date: this.date,
                location: this.location,
            }
        }).then(function(response){
            controller.getEvents();
        });
    };

//DELETE=================================================================
    this.deleteEvent = function(id){
        $http({
            method:'DELETE',
            url:'/events/' + id
        }).then(function(response){
            controller.getEvents();
        });
    };

    this.showEdit = function(id){
        this.editableEventId = id
    }

//UPDATE=================================================================
    this.updateEvent = function(event){
        $http({
            method:'PUT',
            url:'/events/' + event._id,
            data: event
        }).then(function(response){
            controller.editableEventId = null;
            controller.getEvents();
        });
    }

//GET=================================================================
    this.getEvents = function(){
        $http({
            method:'GET',
            url:'/events'
        }).then(function(response){
            controller.events = response.data;
        });
    };
    this.getEvents();

//END=================================================================

}]);
