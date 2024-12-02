create database Espiritismo;
use Espiritismo;

create table Usuario (
	id_user int primary key auto_increment not null,
    nome varchar(255),
    email varchar(255),
    senha varchar(255)
    
);

create table Estudo (
	id_estudo int primary key auto_increment not null,
    nome varchar(255),
    descricao varchar(255) ,
    imagem text,
    categoria enum('Mediunidade', 'Esde', 'Ciede'),
	UsuarioId int not null,
    
    foreign key (UsuarioId) references Usuario(id_user)
);

create table Reflexoes (
	id_reflexoes int primary key auto_increment not null,
    data_criacao timestamp default CURRENT_TIMESTAMP,
    autor varchar(255),
    UsuarioId int not null,
    
    foreign key (UsuarioId) references Usuario(id_user)
);


