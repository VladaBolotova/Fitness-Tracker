DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;

USE fitness_db;

CREATE TABLE personal_info (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(100) NOT NULL,
 last_name VARCHAR(100) NOT NULL,
 email VARCHAR(100) NOT NULL,
 password VARCHAR(8) NOT NULL,
);

CREATE Table gym_duration(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 gym_atandance Boolean,
 date VARCHAR(10),
 workout_time FLOAT,

);
CREATE TABLE workout(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 type VARCHAR(10) NOT NULL,
 description VARCHAR(10) NOT NULL,
 reps INT NOT NULL,
 weight INT NOT NULL;
 set INT NOT NULL;
 calories INT NOT NULL;
);
