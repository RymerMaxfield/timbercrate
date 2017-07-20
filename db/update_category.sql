UPDATE products
SET category = $2
WHERE id = $1
RETURNING id, image_url, category;