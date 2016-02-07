app.factory('News', function($http, APP_CONSTANTS){
	
	 return {
		 	// returna a list of all available blocks
		  news: function(callbackFunction){ 
			$http.get(APP_CONSTANTS.BASE_URL + APP_CONSTANTS.JSON_DIR + 'news.json').success(callbackFunction);
		  },		  	  	  
	 };
	
	
});