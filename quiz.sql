CREATE DATABASE `quizdb`;
USE  `quizdb`;
    
CREATE TABLE `quizzes`(
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `quizname` VARCHAR(200) NOT NULL,
    `quizid` INT NOT NULL UNIQUE,
    `noofparticipants` INT NOT NULL DEFAULT 0,
    `noofregistrations` INT NOT NULL DEFAULT 0,
    `status` INT DEFAULT 0,
    `winner1` varchar(100)  DEFAULT NULL,
    `winner2` varchar(100)  DEFAULT NULL,
    `winner3` varchar(100)  DEFAULT NULL,
    `starttime` DATETIME  DEFAULT NULL,
    `endtime` DATETIME  DEFAULT NULL
);

CREATE TABLE `registration`(
    `id`  INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL,
    `quizid` INT NOT NULL,
    `time` DATETIME DEFAULT CURRENT_TIMESTAMP, 
    `remind` INT  DEFAULT 0  
);

