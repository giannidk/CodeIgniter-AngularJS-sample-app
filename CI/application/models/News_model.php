<?php
class News_model extends CI_Model {

        public function __construct()
        {
                $this->load->database();
        }
		
		
		public function get_news($slug = FALSE)
		{
        	if ($slug === FALSE)
        {
            $query = $this->db->get('news');
            return $query->result_array();
        }

			$query = $this->db->get_where('news', array('slug' => $slug));
			return $query->row_array();
		}
		
		
		public function set_news()
		{
			$this->load->helper('url');
		
			$slug = url_title($_POST['title'], 'dash', TRUE);
			
		
			$data = array(
				'title' => $_POST['title'],
				'slug' => $slug,
				'intro' => $_POST['intro'],
				'content' => $_POST['content']
			);
		
			return $this->db->insert('news', $data);
		}



}