CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

INSERT INTO products (name, price, image) VALUES
('Product 1', 20, 'product1.jpg'),
('Product 2', 30, 'product2.jpg'),
('Product 3', 80, 'product3.jpg');
 
