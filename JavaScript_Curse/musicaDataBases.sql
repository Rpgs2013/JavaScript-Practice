CREATE DATABASE musicaDataBases;
USE musicaDataBases;

CREATE TABLE musica (
id_musica int auto_increment not null unique primary key,
artist varchar(25) not null,
album varchar(25) not null,
year int not null
);

CREATE TABLE tracks (
id_tracks int auto_increment not null unique primary key,
name varchar(25) not null,
info varchar(25) not null
);