angular.module('Config', ['ui.router'])

    
.constant('APP_CONSTANTS', {
	'BASE_URL': 'http://localhost/GITHUB/codeigniter-angularJS-sample-app/',
	'JSON_DIR': 'json/',	
}) 
	
	
// ***************************** Routes and States******************************************* //
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {	

	// UI Routing States		
	$urlRouterProvider.otherwise('/home');		
	$stateProvider        		
		.state('register', {
			url: '/register',
			templateUrl: 'views/pages/register.html'
		})
		.state('verify', {
			url: '/verify/{email}/{hash}',
			templateUrl: 'views/pages/home.html',	
			controller: function($scope, $stateParams, $http, toaster) {				
			 $http({
					method: 'POST',
					url: 'CI/index.php/user/verify',
					data: $.param({
						email: $stateParams.email,
						hash: $stateParams.hash
					}),
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).
				success(function(data, status, headers, config){
					
					if(data){
						console.log(data);
						toaster.pop('success', 'Activation Successful', 'Your account is now active, visit your personal page to complete your profile', 5000, 'trustedHtml');
					}else{
						toaster.pop('warning', 'Activation Error!', 'No profile corresponding to the given data has been found. Please try to copy and pase the activation link in the browser address bar or try to create a new profile.', -1, 'trustedHtml');
					}	
					
				 })
		  	},		
		})  	
		.state('home', {
			url: '/home',
			templateUrl: 'views/pages/home.html',			
		})  				
		.state('news', {
			url: '/news',
			templateUrl: 'views/pages/news.html'
		})	
		.state('addNews', {
			url: '/addNews',
			templateUrl: 'views/pages/news-add.html'
		})						
							
}])