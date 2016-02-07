-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 07, 2016 at 09:35 PM
-- Server version: 5.5.33
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `memberssite`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `intro` varchar(150) NOT NULL,
  `content` text NOT NULL,
  `slug` varchar(128) NOT NULL,
  `text` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `slug` (`slug`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=76 ;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `intro`, `content`, `slug`, `text`) VALUES
(72, 'Test News #1', 'Introduction Text news Nr.1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus et ex fringilla ullamcorper. Nulla vehicula odio mauris, lobortis ultrices massa consectetur ut. Etiam ut cursus lorem. Duis lobortis tellus rhoncus turpis viverra, quis tristique arcu bibendum. Sed maximus finibus dolor.', 'test-news-1', ''),
(73, 'This is another news', 'Small Introduction Text news Nr.2', 'In purus sem, faucibus vel dolor nec, rutrum maximus lorem. Aenean sed lacus sagittis, bibendum mauris id, egestas augue. Maecenas libero libero, porta nec ipsum eu, commodo facilisis ipsum. Cras pulvinar ipsum pretium volutpat pulvinar. Praesent in erat rutrum, volutpat diam ac, efficitur mauris. Nullam cursus erat sit amet placerat placerat.', 'this-is-another-news', ''),
(74, 'News number 3', 'here is another intro text', 'Aliquam ullamcorper ultrices metus tempor efficitur. Morbi eget orci ultrices lacus mollis fringilla sed vitae nisi. Curabitur condimentum neque arcu, quis ultricies sem efficitur mattis. Sed at sagittis ex, in mattis quam. Nullam sagittis sagittis felis a finibus. Aenean ac leo tellus. Donec tincidunt rhoncus magna, a congue tortor mollis sit amet. Nunc sit amet tellus sed ex fermentum viverra ut in quam. Aliquam tincidunt massa sed tincidunt lacinia. Aliquam egestas quis mauris nec vehicula. Morbi consequat vel augue eu vulputate. Sed posuere id enim at tempor. Ut ut velit eu eros sagittis fermentum. Fusce tincidunt imperdiet odio. Pellentesque sagittis leo id purus auctor, id fringilla tellus facilisis. In eget commodo risus.', 'news-number-3', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `registrationdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `hash` varchar(32) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=86 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
