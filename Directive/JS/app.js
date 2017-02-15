 var angularapp = angular.module('angularExample',[]);

 angularapp.controller('karthi',function($scope){

 });


 angularapp.directive('uppercase',function(){

 	return {
 		template "<h1> {{ one +  two | uppercase }}</h1>"
 	};
 });

  angularapp.directive('lowercase',function(){

 	return {
 		template "<h1> {{ one +  two | lowercase }} </h1>"
 	};
 });