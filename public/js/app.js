var app = angular.module('PTAApp', []);

app.controller('MainController', ['$http', function($http){
    var controller = this;
    this.create = function(){
        $http({
            method:'POST',
            url:'/events',
            data: {
                name: this.name,
                location: this.location,
                date: this.date,
                isAttending: this.isAttending
            }
        }).then(function(response){
            controller.getEvents();
        });
    };

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

    this.updateEvent = function(events){
        $http({
            method:'PUT',
            url:'/events/' + event._id,
            data: events
        }).then(function(response){
            controller.editableEventId = null;
            controller.getEvents();
        });
    }

    this.getEvents = function(){
        $http({
            method:'GET',
            url:'/events'
        }).then(function(response){
            controller.eventss = response.data;
        });
    };
    this.getEvents();
}]);
