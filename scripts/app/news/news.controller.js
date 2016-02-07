/*
app.controller('NewsController', function($scope, $localStorage, $sessionStorage, $timeout, Template){
	
	$timeout(function(){
		$scope.loadedTemplate = $localStorage;
	})
	
	
	
});
*/





app.controller("NewsCtrl", function($scope, $state, $http, APP_CONSTANTS, toaster, News) {
	
	
	$scope.myNews = [];	
	
	
	
	// LOADING AVAILABLE News (News service)
			News.news(function(data) {
				angular.forEach(data, function (value, key) {
					$scope.myNews.push(value);					
				});							
			});
	
	
	
	// READ NEWS JSON FILE THROUGH CODEIGNITER
    $http.get(APP_CONSTANTS.BASE_URL + '/CI/index.php/news/view').
    success(function(data, status, headers, config) {
     $scope.news = data;
	
	 
	 
	 	 
    }).
    error(function(data, status, headers, config) {
     // log error
	 console.log('Data is not retrieved!')
    });
	
	
	
	
	$scope.addNews = function($id) {
	  
	   $http({
			method: 'POST',
			url: 'CI/index.php/news/create',
			data: $.param({
				title: $scope.create.title,
				intro: $scope.create.intro,
				content: $scope.create.content
			}),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).
		success(function(data, status, headers, config){
			
			toaster.pop('success', "News added", 'Your news has been successfully created', 5000);
			//toaster.pop('error', "Your news could not be created", 'Please try again later.', 5000);
			$state.go('news');
			
			
			// https://github.com/jirikavi/AngularJS-Toaster
			//http://plnkr.co/edit/HKTC1a?p=preview
			/*
			toaster.success({title: "title", body:"text1"});
			toaster.error("title", "text2");
			toaster.pop({type: 'wait', title: "title", body:"text"});
			toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
			toaster.pop('error', "title", '<ul><li>Render html</li></ul>', null, 'trustedHtml');
			toaster.pop('wait', "title", null, null, 'template');
			toaster.pop('warning', "title", "myTemplate.html", null, 'template');
			toaster.pop('note', "title", "text");
			*/
		$scope.create = '';
		 })
		
		 
		 console.log($scope.create);
		 
		 
	 }
	
	
	
	
	
 });