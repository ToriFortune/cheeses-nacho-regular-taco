DROP DATABASE IF EXISTS tacos_db;
  CREATE DATABASE tacos_db;
     USE tacos_db;
     CREATE TABLE tacos (
         id INT (5) AUTO_INCREMENT primary key, 
         taco_type VARCHAR (10),
         shell_type VARCHAR (6),
         meat_type BOOLEAN,
         delivered BOOLEAN     
                  );