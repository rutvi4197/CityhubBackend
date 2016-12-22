-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 22, 2016 at 11:24 AM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cityhub`
--

-- --------------------------------------------------------

--
-- Table structure for table `book_tbl`
--

CREATE TABLE IF NOT EXISTS `book_tbl` (
  `pk_book_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_email_id` varchar(50) DEFAULT NULL,
  `fk_event_id` int(11) DEFAULT NULL,
  `ticket_cnt` int(11) DEFAULT NULL,
  `ticket_amnt` int(11) DEFAULT NULL,
  PRIMARY KEY (`pk_book_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `book_tbl`
--

INSERT INTO `book_tbl` (`pk_book_id`, `fk_email_id`, `fk_event_id`, `ticket_cnt`, `ticket_amnt`) VALUES
(1, 'shahritu2111@gmail.com', 1, 10, 1000);

-- --------------------------------------------------------

--
-- Table structure for table `cat_tbl`
--

CREATE TABLE IF NOT EXISTS `cat_tbl` (
  `pk_cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` char(20) NOT NULL,
  PRIMARY KEY (`pk_cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `cat_tbl`
--

INSERT INTO `cat_tbl` (`pk_cat_id`, `cat_name`) VALUES
(1, 'Education'),
(2, 'Corporate');

-- --------------------------------------------------------

--
-- Table structure for table `city_tbl`
--

CREATE TABLE IF NOT EXISTS `city_tbl` (
  `pk_city_id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` char(20) NOT NULL,
  PRIMARY KEY (`pk_city_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `city_tbl`
--

INSERT INTO `city_tbl` (`pk_city_id`, `city_name`) VALUES
(3, 'amedabad'),
(4, 'baroda'),
(5, 'sanand'),
(6, 'surat'),
(7, 'abad');

-- --------------------------------------------------------

--
-- Table structure for table `event_que_tbl`
--

CREATE TABLE IF NOT EXISTS `event_que_tbl` (
  `pk_que_tbl` int(11) NOT NULL AUTO_INCREMENT,
  `fk_email_id` varchar(50) DEFAULT NULL,
  `fk_event_id` int(11) DEFAULT NULL,
  `que_desc` varchar(100) DEFAULT NULL,
  `que_date` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`pk_que_tbl`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `event_que_tbl`
--

INSERT INTO `event_que_tbl` (`pk_que_tbl`, `fk_email_id`, `fk_event_id`, `que_desc`, `que_date`) VALUES
(1, 'shahritu2111@gmail.com', 1, 'adkjojnvdd', '2016-12-22');

-- --------------------------------------------------------

--
-- Table structure for table `event_tbl`
--

CREATE TABLE IF NOT EXISTS `event_tbl` (
  `pk_event_id` int(11) NOT NULL AUTO_INCREMENT,
  `event_name` varchar(50) DEFAULT NULL,
  `event_logo` varchar(50) NOT NULL,
  `event_slogan` varchar(50) NOT NULL,
  `event_des` varchar(200) DEFAULT NULL,
  `fk_venue_id` int(11) DEFAULT NULL,
  `event_date` varchar(10) DEFAULT NULL,
  `event_time` varchar(10) DEFAULT NULL,
  `event_ticket` int(11) DEFAULT NULL,
  `event_price` int(11) DEFAULT NULL,
  `fk_cat_id` int(11) DEFAULT NULL,
  `fk_email_id` varchar(50) DEFAULT NULL,
  `fk_offer_id` int(11) DEFAULT NULL,
  `event_cnt` int(11) NOT NULL,
  PRIMARY KEY (`pk_event_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `event_tbl`
--

INSERT INTO `event_tbl` (`pk_event_id`, `event_name`, `event_logo`, `event_slogan`, `event_des`, `fk_venue_id`, `event_date`, `event_time`, `event_ticket`, `event_price`, `fk_cat_id`, `fk_email_id`, `fk_offer_id`, `event_cnt`) VALUES
(1, 'C', 'study ', 'no slogan', 'Event is about studied c.', 1, '15-12-2016', '10:30AM', 20, 200, 1, 'shahritu2111@gmail.com', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `like_tbl`
--

CREATE TABLE IF NOT EXISTS `like_tbl` (
  `pk_like_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_email_id` varchar(50) DEFAULT NULL,
  `fk_event_id` int(11) DEFAULT NULL,
  `like` tinyint(1) NOT NULL,
  `dislike` tinyint(1) NOT NULL,
  PRIMARY KEY (`pk_like_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `like_tbl`
--

INSERT INTO `like_tbl` (`pk_like_id`, `fk_email_id`, `fk_event_id`, `like`, `dislike`) VALUES
(1, 'shahritu2111@gmail.com', 1, 10, 0);

-- --------------------------------------------------------

--
-- Table structure for table `offer_tbl`
--

CREATE TABLE IF NOT EXISTS `offer_tbl` (
  `pk_offer_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_email_id` varchar(50) DEFAULT NULL,
  `offer_price` int(11) DEFAULT NULL,
  `offer_promocode` varchar(10) DEFAULT NULL,
  `offer_photo` varchar(200) NOT NULL,
  `fk_event_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`pk_offer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `offer_tbl`
--

INSERT INTO `offer_tbl` (`pk_offer_id`, `fk_email_id`, `offer_price`, `offer_promocode`, `offer_photo`, `fk_event_id`) VALUES
(1, 'shahritu2111@gmail.com', 100, 'abcd', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `payment_tbl`
--

CREATE TABLE IF NOT EXISTS `payment_tbl` (
  `pk_payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_email_id` varchar(50) DEFAULT NULL,
  `card_number` double DEFAULT NULL,
  `expiry_date` varchar(10) DEFAULT NULL,
  `cvv` int(11) DEFAULT NULL,
  PRIMARY KEY (`pk_payment_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `payment_tbl`
--

INSERT INTO `payment_tbl` (`pk_payment_id`, `fk_email_id`, `card_number`, `expiry_date`, `cvv`) VALUES
(1, 'shahritu2111@gmail.com', 12520488521585, '25-02-16', 153);

-- --------------------------------------------------------

--
-- Table structure for table `testimonial_tbl`
--

CREATE TABLE IF NOT EXISTS `testimonial_tbl` (
  `pk_review_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_email_id` varchar(50) DEFAULT NULL,
  `review_desc` varchar(100) DEFAULT NULL,
  `review_like` int(11) NOT NULL,
  PRIMARY KEY (`pk_review_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `testimonial_tbl`
--

INSERT INTO `testimonial_tbl` (`pk_review_id`, `fk_email_id`, `review_desc`, `review_like`) VALUES
(1, 'shahritu2111@gmail.com', 'sdjhxcjsdkxzmkcx', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE IF NOT EXISTS `user_tbl` (
  `pk_email_id` varchar(50) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_mobile_no` varchar(12) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`pk_email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`pk_email_id`, `user_password`, `user_mobile_no`, `user_name`) VALUES
('jinalshah999@gmail.com', '1234', '9825889888', 'Jinal Shah'),
('priyanshsheth1997@gmail.com', 'sp1234', '8905106525', 'Priyansh'),
('riyashah157@gmail.com', 'riyashah', '9570917389', 'Riya'),
('shahritu2111@gmail.com', 'rutvi1234', '9427711474', 'Rutvi');

-- --------------------------------------------------------

--
-- Table structure for table `venue_tbl`
--

CREATE TABLE IF NOT EXISTS `venue_tbl` (
  `pk_venue_id` int(11) NOT NULL AUTO_INCREMENT,
  `venue_name` varchar(50) DEFAULT NULL,
  `venue_address` varchar(200) DEFAULT NULL,
  `fk_city_id` int(11) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  PRIMARY KEY (`pk_venue_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `venue_tbl`
--

INSERT INTO `venue_tbl` (`pk_venue_id`, `venue_name`, `venue_address`, `fk_city_id`, `pincode`) VALUES
(1, 'p-201 suyojan appartment', 'Commerce six road', 1, 380017);

-- --------------------------------------------------------

--
-- Table structure for table `wallet_tbl`
--

CREATE TABLE IF NOT EXISTS `wallet_tbl` (
  `pk_wallet_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_email_id` varchar(50) DEFAULT NULL,
  `wallet_amnt` int(11) DEFAULT NULL,
  `wallet_date` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`pk_wallet_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `wallet_tbl`
--

INSERT INTO `wallet_tbl` (`pk_wallet_id`, `fk_email_id`, `wallet_amnt`, `wallet_date`) VALUES
(1, 'shahritu2111@gmail.com', 200, '2016-22-12'),
(2, 'shahritu2111@gmail.com', 100, '2016-12-21');
