UPDATE products
SET image_url = $2
WHERE id = $1
RETURNING id, image_url, category;