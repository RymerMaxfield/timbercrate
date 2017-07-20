INSERT INTO products (image_url, category)
VALUES ($1, $2)
RETURNING id, image_url, category;