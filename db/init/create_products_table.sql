DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    description TEXT,
    category TEXT,
    details TEXT,
    featured BOOLEAN
);

INSERT INTO products (image_url, description, category, details, featured)
VALUES ('./styles/images/T-16.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-1.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-14.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-12.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-2.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-3.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-4.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-8.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-9.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-11.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-12.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-13.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-14.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-16.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-18.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-20.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-23.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-24.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-26.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-28.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-29.jpg', 'Box with some stuff', 'test', '6 x 6 x 12 Oak Wood', false);
