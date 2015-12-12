create table t_user(
  id_user int(11) primary key auto_increment,
  mail varchar(50) not null,
  name varchar(50) not null
);
create table t_group(
  id_group int(11) primary key auto_increment,
  id_user  int(11) 
);
create table t_message(
  id_group int(11) primary key auto_increment,
  id_user int(11),
  id_message int(11),
  message varchar(4000)
);
