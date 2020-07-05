CREATE DATABASE `quizdb`;
USE  `quizdb`;

CREATE TABLE `{quizid}`(
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `question` TEXT NOT NULL ,
    `type` VARCHAR(10) NOT NULL,
    `option1` text NOT NULL,
    `option2` text NOT NULL,
    `option3` text NOT NULL,
    `option4` text NOT NULL,
    `correctans` char(1) NOT NULL
);
    
CREATE TABLE `quizzes`(
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `quizname` VARCHAR(50) NOT NULL,
    `quizid` INT NOT NULL UNIQUE,
    `noofparticipants` int DEFAULT 0,
    `winner` varchar(100) NOT NULL,
    `starttime` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `endtime` DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `{choice}`(
    `id`  INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL,
    `response` CHAR(1) NOT NULL,
    `result` CHAR(1) NOT NULL,
    `timetaken` INT NOT NULL
);

CREATE TABLE `registration`(
    `id`  INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL,
    `quizid` INT NOT NULL,
    `time` DATETIME DEFAULT CURRENT_TIMESTAMP   
);