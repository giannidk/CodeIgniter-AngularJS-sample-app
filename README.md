# CodeIgniter-AngularJS-sample-app
Simple app demonstrating basic integration between AngularJS 1.x and Codeigniter 3.x.

This starter app provides a sign up form, the user signs up and receives an email containing an activation link. 

There’s also a news section, with a form to add news, and a page displaying the news list.

The navbar is made using an angular directive, with a fix for the bootstrap dropdown on mobile devices.

CodeIgniter output class is used to return JSON data and pass it on to Angular.

CodeIgniter Mail function and Angular toaster are used for confirmation messages returned to the user.

The app has been tested on MAMP, read this article (http://www.blog.tripleroi.com/2012/05/solvedenabling-sendmail-on-localhost.html) to enable sending mail from MAMP on  localhost.


##Start

1. Import database.sql in your database
2. Change BASE_URL -> scripts/app/config/app.config.js (line 9)
3. Change Database connection data -> CI/application/config/database.php
