UPDATE products
SET image_url = $2,
    category = $3
WHERE id = $1
RETURNING id, image_url, category;