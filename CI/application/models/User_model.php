<?php
class User_model extends CI_Model {

        public function __construct()
        {
			$this->load->database();
        }
		
		
		public function get_user($id = FALSE) {
        	if ($slug === FALSE) {
				$query = $this->db->get('users');
				return $query->result_array();
        	}
			$query = $this->db->get_where('users', array('id' => $id));
			return $query->row_array();
		}
		
	
		public function register() {			
			$hash = md5( rand(0,1000) );			
			$data = array(
				'username' => $_POST['username'],
				'email' => $_POST['email'],
				'password' => $_POST['password'],
				'hash' => $hash
			);		
			if($this->db->insert('users', $data)){
				return $hash;
			}else{
				return NULL;
			}
		}
		
		
		// Activating user profile after mail address verification
		public function verify()
		{						
			$updateUser = array(
					   'status' => 1
					);
			$this->db->where('email', $_POST['email']);
			$this->db->where('hash', $_POST['hash']);
			$this->db->update('users', $updateUser);
			
			if($this->db->affected_rows() > 0){
				return true;
			}else{
				return false;
			}
		}

}