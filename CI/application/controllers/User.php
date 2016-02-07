<?php

class User extends CI_Controller {
	
	
	public function __construct() {
		parent::__construct();
		$this->load->model('user_model');
		$this->load->helper('url');
		$this->load->library('email');
	}

	
	// RETRIEVES USERS FROM DATABASE
    public function view() {  			
		$data = $this->user_model->get_user();	 
		 $this->output
			->set_content_type('application/json')
			->set_output(json_encode($data));
	} 
    

	
	// REGISTER USER
	public function register(){
			
		if($hash = $this->user_model->register()){		
		
		$config['mailtype'] = 'html';
		$this->email->initialize($config);		
		$this->email->from('youname@yoursite.com', 'AngularJS site test');
		$this->email->to($_REQUEST['email']);
		$this->email->subject('Verification code');
		$this->email->message('Please click this link to activate your account:<br><br>'.$_REQUEST['verificationUrl'].'#/verify/'.$_REQUEST['email'].'/'.$hash);			
		$this->email->send();
		
		$this->output
			->set_content_type('text/plain', 'UTF-8')
			->set_output(true);			
		}					
	}
	
	
	// Activates user after mail address verification
    public function verify(){	
		if($this->user_model->verify()){
			$this->output
				->set_content_type('text/plain', 'UTF-8')
				->set_output(true);					
		}			
	} 
	
}