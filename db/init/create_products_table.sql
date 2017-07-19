DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    category TEXT
);

INSERT INTO products (image_url, category)
VALUES ('https://unsplash.it/400/600/?random', 'test'),
('https://unsplash.it/400/600/?random', 'test'),
('https://unsplash.it/400/600/?random', 'test'),
('https://unsplash.it/400/600/?random', 'test'),
('https://unsplash.it/500/500/?random', 'test'),
('https://unsplash.it/500/500/?random', 'test'),
('https://unsplash.it/500/500/?random', 'test'),
('https://unsplash.it/500/500/?random', 'test'),
('https://unsplash.it/1920/1080?random', 'test'),
('https://unsplash.it/1920/1080?random', 'test'),
('https://unsplash.it/1920/1080?random', 'test'),
('https://unsplash.it/1920/1080?random', 'test');
