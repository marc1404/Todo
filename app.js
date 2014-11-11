'use strict';

(function(){
    angular
        .module('todoApp', ['ngMaterial'])
        .controller('todoController', function($scope){
            $scope.todos = [];
        
            $scope.add = function(){
                $scope.todos.push({ text: $scope.todoText });
                
                $scope.todoText = '';
            };
        
            $scope.clear = function(){
                $scope.todos.length = 0;  
            };
        
            $scope.done = function(){
                var count = 0;
                
                angular.forEach($scope.todos, function(todo){
                    count += todo.done ? 1 : 0;
                });
                
                return count;
            };
        
            $scope.progress = function(){
                return $scope.done() / $scope.todos.length * 100;  
            };
        });
}());