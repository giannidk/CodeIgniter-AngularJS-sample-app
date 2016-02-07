app.controller("UserController", function($scope, $state, $http, APP_CONSTANTS, toaster, User) {
		
	$scope.register = function($id) {
	  
	   $http({
			method: 'POST',
			url: 'CI/index.php/user/register',
			data: $.param({
				verificationUrl: APP_CONSTANTS.BASE_URL,
				username: $scope.register.username,
				email: $scope.register.email,
				password: $scope.register.password
			}),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).
		success(function(data, status, headers, config){			
			if(data){
				toaster.pop('success', 'Registration Complete', 'Your profile has been successfully registered, please activate your account by clicking the verification link we just sent to your email', 5000, 'trustedHtml');
			}else{
				toaster.pop('warning', 'Registration Error!', 'Your profile could not be saved. Please try again in a few minutes.', -1, 'trustedHtml');
			}			
		$scope.register = '';
		 }).error(
		 function(){
			 toaster.pop('error', 'Connection Error!', 'Connection could not be established. Please try again in a few minutes.', 5000, 'trustedHtml');
			 }
		 )				 		 		 
	 }
	
	
 });