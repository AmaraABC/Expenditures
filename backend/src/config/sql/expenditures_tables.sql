create database expenditures;
use expenditures;

create table spendings(
    id int primary key auto_increment,
    category_id int not null,
    amount decimal(10,2) not null,
    spending_description varchar(255),
    spending_date date not null,
    created_at timestamp default current_timestamp,

    foreign key (category_id) references categories(id)
);

create table categories (
  id int primary key auto_increment,
  categories_name varchar(50) not null
);


INSERT INTO categories (categories_name) VALUES
('Logement'),
('Transport'),
('Alimentation'),
('Santé'),
('Éducation'),
('Loisirs'),
('Shopping'),
('Professionnel'),
('Abonnements'),
('Financier'),
('Animaux'),
('Autres');