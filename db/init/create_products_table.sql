DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    category TEXT
);

INSERT INTO products (image_url, category)
VALUES ('https://unsplash.it/190/?random', 'test'),
('https://unsplash.it/200/?random', 'test'),
('https://unsplash.it/191/?random', 'test'),
('https://unsplash.it/201/?random', 'test'),
('https://unsplash.it/192/?random', 'test'),
('https://unsplash.it/202/?random', 'test'),
('https://unsplash.it/193/?random', 'test'),
('https://unsplash.it/203/?random', 'test'),
('https://unsplash.it/194/?random', 'test'),
('https://unsplash.it/204/?random', 'test'),
('https://unsplash.it/195/?random', 'test'),
('https://unsplash.it/205/?random', 'test');