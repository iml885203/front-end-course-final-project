-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生日期: 2013 年 07 月 14 日 10:49
-- 伺服器版本: 5.6.12-log
-- PHP 版本: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 資料庫: `test`
--

-- --------------------------------------------------------

--
-- 表的結構 `member_table`
--

CREATE TABLE IF NOT EXISTS `member_table` (
  `NO` int(6) NOT NULL AUTO_INCREMENT COMMENT '序號',
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `telephone` varchar(12) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `other` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`NO`),
  UNIQUE KEY `NO` (`NO`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 轉存資料表中的資料 `member_table`
--

INSERT INTO `member_table` (`NO`, `username`, `password`, `telephone`, `address`, `other`, `email`) VALUES
(1, 'bater', '1234', '0987654321', '??XXXXX', '', 'XXX@XXX.CCC'),
(3, 'aaa', '123', '123', '', '1234', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
