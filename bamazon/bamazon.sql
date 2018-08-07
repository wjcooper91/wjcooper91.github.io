CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NULL,
    department_name VARCHAR(30),
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Geode Sphere Ball", "Home", 14.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats Solo3 - Turf Green", "Electronics", 239.95, 190);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spartan Steak Knife Set", "Home", 179.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dyson 240 Volt Hand Dryer in Gray", "Home", 1349.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Fall of Gondolin", "Books", 19.29, 1046);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Fall of Gondolin", "Books", 19.29, 1046);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Motorola MOTO E4 - Unlocked", "Cell Phones & Accessories", 89.99, 581);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Zen Reflections Juniper Bonsai", "Grocery", 13.99, 738);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LEGO Nasa Apollo Saturn V", "Toys & Games", 119.99, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Parrot Anafi Drone", "Toys & Games", 699.99, 530);