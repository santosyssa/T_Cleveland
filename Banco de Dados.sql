create database T_Cleveland 

use T_Cleveland

create table Medicos(
 idMedico int primary key identity
 ,Nome varchar (300) not null
 ,dataNascimento date not null
 ,crm int unique not null
)

alter table Medicos 
add idForm int foreign key  references Formacao (idForm) 

create table Formacao(
	idForm int primary key identity,
	nome varchar(300) not null unique
)

insert into Medicos
	values ('Raimundo', '1920-07-18', '188229')
		  ,('Jhosepha', '1928-04-01', '199229')
		  ,('Jucelino', '1910-10-01', '399219')

update Medicos set idForm = '1' WHERE idMedico = 3

insert into Formacao
	values ('Neurocirurgião'),
		   ('Otorrinolaringologista'),
		   ('Ginecologista'),
		   ('Pneumologista')


select * from Medicos

select * from Formacao order by idForm asc