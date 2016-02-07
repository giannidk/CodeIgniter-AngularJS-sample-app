<?php

class News extends CI_Controller {
	
	public function __construct()
        {
			parent::__construct();
			$this->load->model('news_model');
			$this->load->helper('url_helper');
        }

	// RETRIEVES NEWS FROM DATABASE
    public function view() {  	
	
	$data = $this->news_model->get_news();
	 
	 $this->output
		->set_content_type('application/json')
		->set_output(json_encode($data));		
	} 
    
	
	// INSERT NEWS IN DATABASE
	public function create(){
			$this->news_model->set_news();
	} 
	

}