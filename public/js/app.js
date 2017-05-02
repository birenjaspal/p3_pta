//SET UP ANGULAR & CONTROLLER =====================================

var app = angular.module('OurApp', []);

app.controller('OurController', ['$http', function($http){
    var controller = this;


//GET ======================================================================

    this.getEvents = function(){
        $http({
            method:'GET',
            url: 'http://localhost:3000/events',
        }).then(function(response){
            controller.events = response.data;
        }, function(){
            console.log('error');
        });
    };

    this.getEvents();

//CREATE NEW =============================================================
    this.createEvent = function(){
        $http({
            method:'POST',
            url: 'http://localhost:3000/events',
            data: {
                name: this.description,
                location: this.location,
                date: this.date,
                isAttending: this.isAttending
            }
        }).then(function(response){
            controller.getEvents();
        }, function(){
            console.log('error');
        });
    };

//UPDATE ===================================================================
    this.updateEvent = function(event){
        $http({
            method:'PUT',
            url: 'http://localhost:3000/events/' + event._id,
            data: {
                name: this.description,
                location: this.location,
                date: this.date,
                isAttending: this.isAttending
            }
        }).then(function(response){
            controller.getEvents();
        }, function(){
            console.log('error');
        });
    }

//DELETE ==================================================================

    this.deleteEvent = function(event){
      $http({
        method: 'DELETE',
        url: 'http://localhost:3000/events/' + event._id,
      }).then(function(response){
        controller.getEvents();
      }, function(err){
      });
    };

//========================================================================
}]);
