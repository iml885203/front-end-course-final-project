-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生日期: 2013 年 07 月 14 日 14:39
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
-- 表的結構 `memo`
--

CREATE TABLE IF NOT EXISTS `memo` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userid` int(6) NOT NULL,
  `memo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 轉存資料表中的資料 `memo`
--

INSERT INTO `memo` (`id`, `time`, `userid`, `memo`) VALUES
(1, '2013-07-14 13:57:59', 1, '123'),
(2, '2013-07-14 14:10:23', 3, '1234'),
(3, '2013-07-14 14:23:26', 3, '留言'),
(4, '2013-07-14 14:23:43', 3, '樓上是笨蛋'),
(5, '2013-07-14 14:24:22', 3, '打我呀ㄎㄎ'),
(6, '2013-07-14 14:36:10', 1, '留言板好像好了'),
(7, '2013-07-14 14:36:42', 1, '但是post方法似乎不太好'),
(8, '2013-07-14 14:37:42', 1, '嘿嘿嘿');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
