DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    description TEXT,
    pic_order INTEGER,
    details TEXT,
    featured BOOLEAN
);

INSERT INTO products (image_url, description, pic_order, details, featured)
VALUES
('./styles/images/T-14.jpg', 'Slide Top', 1, '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-23.jpg', 'Acrylic Slide Top', 2, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-16.jpg', 'Small Crate', 3, '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-12.jpg', 'Jet Black Stain', 4, '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-11.jpg', 'Hickory Brown Stain', 5, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-13.jpg', 'Barnwood Grey Stain', 6, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-18.jpg', 'Engraved Jet Black Stain', 7, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-20.jpg', 'Engraved Hickory Brown Stain', 8, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-19.jpg', 'Engraved Barnwood Grey Stain', 9, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-8.jpg', 'Barnwood Grey With Black Screen Print', 10, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-9.jpg', 'Hickory Brown With Gold Screen Printing', 11, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-4.jpg', 'Small Slatted Crate', 12, '6 x 6 x 12 Oak Wood', false),
('./styles/images/T-3.jpg', 'Custom Mini Crate', 13, '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-2.jpg', 'Custom Small Crate', 14, '6 x 6 x 12 Oak Wood', true),
('./styles/images/T-1.jpg', 'Custom Extra Large Crate', 15, '6 x 6 x 12 Oak Wood', true);
--('./styles/images/T-12.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-14.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-16.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-24.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-26.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-28.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-29.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
