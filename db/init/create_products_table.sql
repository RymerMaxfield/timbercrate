DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    description TEXT,
    category TEXT,
    featured BOOLEAN
);

INSERT INTO products (image_url, description, category, featured)
VALUES ('./styles/images/T-16.jpg', 'Test Box with some stuff', 'test', true),
('./styles/images/T-1.jpg', 'test', 'test', true),
('./styles/images/T-14.jpg', 'test', 'test', true),
('./styles/images/T-12.jpg', 'test', 'test', true),
('./styles/images/T-2.jpg', 'test', 'test', true),
('./styles/images/T-3.jpg', 'test', 'test', true),
('./styles/images/T-4.jpg', 'test', 'test', false),
('./styles/images/T-5.jpg', 'test', 'test', false),
('./styles/images/T-6.jpg', 'test', 'test', false),
('./styles/images/T-7.jpg', 'test', 'test', false),
('./styles/images/T-8.jpg', 'test', 'test', false),
('./styles/images/T-9.jpg', 'test', 'test', false);