# bloodbankapp-ui
//create a database

create database bloodbankapp;

//create table for users

create table user (
id int primary key auto_increment,
name varchar(40) NOT NULL,
phoneno varchar(40),
email varchar(50) NOT NULL,
gender char(1),
role varchar(10) NOT NULL default 'USER',
bloodgroupname varchar(40) ,
state varchar(100),
city varchar(100),
password varchar(30) NOT NULL,
check ( gender in ('M','F'))
);
insert into user (name,phoneno,email,gender,role,bloodgroupname,state,city,
password) values ( 'Lidya','9845735425','lidya@gmail.com','F','USER','A+','TamilNadu','Chennai','pass123');

//create table for blood_group
create table blood_group(id int primary key auto_increment,bloodgroupname varchar(40));
insert into blood_group(bloodgroupname)values('A+');

//create table for  request

create table request(id int primary key auto_increment,bloodgroupname varchar(40), units int ,status varchar(40));
insert into request(bloodgroupname, units,status)values('A+','1','open');

//create table for donation

create table donation(user_id int primary key auto_increment ,request_id int,donation_status varchar(40));
insert into donation(request_id,donation_status)values(1 ,'on');


