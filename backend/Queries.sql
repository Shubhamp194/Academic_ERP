create database AcademicERP;
use AcademicERP;

create table domain (
    domain_id int not null auto_increment,
    batch varchar(255) not null,
    capacity int not null,
    program varchar(255) not null,  
    qualification varchar(255),
    primary key (domain_id)
);


create table student (
    student_id int not null auto_increment,
    cgpa float not null default 0.0,
    email varchar(255) not null unique,
    first_name varchar(255) not null,
    graduation_year int,
    last_name varchar(255),
    photograph_path varchar(255),
    placement_id int default 0,
    roll_number varchar(20) not null unique,
    specialisation int default 0,
    total_credits float not null,
    domain int,
    PRIMARY KEY (student_id),
    FOREIGN KEY (domain) references domain(domain_id)
);


create table admin (
    admin_id int not null auto_increment,
    email varchar(255) not null unique,
    password varchar(255) not null,
    primary key (admin_id)
);


insert into admin( email, password) values
('Shubham@gmail.com', 'Password');


insert into domain(batch, capacity, program, qualification) values
('2022', 150, 'M.Tech CSE', 'Graduation'),
('2022', 30, 'M.Tech ECE', 'Graduation'),
('2022', 150, 'iM.Tech CSE', 'School'),
('2022', 30, 'iM.Tech CSE', 'School'),
('2022', 15, 'M.Sc. DT', 'Bachelors'),
('2022', 15, 'PHD', 'Masters');


insert into student (first_name,last_name,email,total_credits,cgpa,graduation_year,roll_number,domain) values
('Shubham' , 'Pandey' , 'Shubham.Pandey@iiitb.ac.in' , 16.0 , 3.63 , 2024 , 1 ,1),
('Kshitij' , 'Pandey' , 'Kshitij.Pandey@iiitb.ac.in' , 16.0 , 3.23 , 2024 , 2 ,1),
('Yatin' , 'Pandey' , 'Yatin.Pandey@iiitb.ac.in' , 16.0 , 2.63 , 2024 , 3 ,1),
('Yash' , 'Pandey' , 'Yash.Pandey@iiitb.ac.in' , 16.0 , 3.43 , 2024 , 4 ,2),
('Albert' , 'Einstien' , 'Albert.Einstien@iiitb.ac.in' , 16.0 , 3.73 , 2024 , 5 ,2),
('APJ Abdul' , 'Kalam' , 'ApjAbdul.Kalam@iiitb.ac.in' , 16.0 , 2.83 , 2024 , 6 ,3),
('Ratan' , 'Tata' , 'Ratan.Tata@iiitb.ac.in' , 16.0 , 3.83 , 2024 , 7 ,3),
('Bill' , 'Gates' , 'Bill.Gates@iiitb.ac.in' , 16.0 , 3.63 , 2024 , 8 ,4),
('Steve' , 'Jobs' , 'Steve.Jobs@iiitb.ac.in' , 16.0 , 3.63 , 2024 , 9 ,5),
('Elon' , 'Musk' , 'Elon.Musk@iiitb.ac.in' , 16.0 , 3.63 , 2024 , 10 ,6);
