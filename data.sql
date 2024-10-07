CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

INSERT INTO products (name, price, image) VALUES
('Product 1', 20, 'https://tse3.mm.bing.net/th?id=OIP.ZUktNr4TbMEsqzJ62haeSgHaHa&pid=Api&P=0&h=180'),
('Product 2', 30, 'https://tse4.mm.bing.net/th?id=OIP.T3tbPj9n4-z5QSZDQH2tiQHaKn&pid=Api&P=0&h=180'),
('Product 3', 80, 'https://tse4.mm.bing.net/th?id=OIP.uk4HvdXE1uEQ9dw4z0QNtQHaHa&pid=Api&P=0&h=180'),
('Product 4', 20, 'https://tse4.mm.bing.net/th?id=OIP.0aWSUxcB7gTiXNu_nFOWHgHaHa&pid=Api&P=0&h=180'),
('Product 5', 80, 'https://tse2.mm.bing.net/th?id=OIP.q0oBWF6NqA2wA0xl2ImevQHaHW&pid=Api&P=0&h=180'),
('Product 6', 100, 'https://tse1.mm.bing.net/th?id=OIP.WNK1ovuXmgOS1FeQAZDmiQAAAA&pid=Api&P=0&h=180'),
('Product 7', 500, 'https://tse1.mm.bing.net/th?id=OIP.m52Dkey70zMu1lZqxbiwEQHaHa&pid=Api&P=0&h=180');
