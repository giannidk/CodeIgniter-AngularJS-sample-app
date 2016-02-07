angular.module('Directives', [])

.directive('navbar', function() {
  return {
	restrict: 'E',
	templateUrl: 'views/partials/navbar.html',
	link: function(scope, element, attrs){
		 var links = element.find('li:not(.dropdown)'); 
		links.on('click', function (e) {			
			if($('.navbar-toggle').css('display') !='none'){
				$(".navbar-toggle").trigger( "click" );
			}				
		});
	}
  };
})


.directive('footerTemplate', function() {
  return {
	restrict: 'E',
	templateUrl: 'views/partials/footer.html'	
  }
  
  
})




