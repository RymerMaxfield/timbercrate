--DROP TABLE IF EXISTS products;
--
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    description TEXT,
    pic_order INTEGER,
    details TEXT,
    featured BOOLEAN
);
--
--INSERT INTO products (image_url, description, pic_order, details, featured)
--VALUES
--('./styles/images/T-14.jpg', 'Slide Top', 1, 'Small Crate', false),
--('./styles/images/T-23.jpg', 'Acrylic Slide Top', 2, 'Small Crate', false),
--('./styles/images/T-16.jpg', 'Custom', 3, 'Small Crate', false),
--('./styles/images/T-12.jpg', 'Jet Black Stain', 4, 'Small Crate', true),
--('./styles/images/T-11.jpg', 'Hickory Brown Stain', 5, 'Small Crate', true),
--('./styles/images/T-13.jpg', 'Barnwood Grey Stain', 6, 'Small Crate', true),
--('./styles/images/T-18.jpg', 'Jet Black Stain', 7, 'Small, Engraved', false),
--('./styles/images/T-20.jpg', 'Hickory Brown Stain', 8, 'Small, Engraved', false),
--('./styles/images/T-19.jpg', 'Barnwood Grey Stain', 9, 'Small, Engraved', false),
--('./styles/images/T-8.jpg', 'Barnwood Grey', 10, 'Small, Black Screen Print', false),
--('./styles/images/T-9.jpg', 'Hickory Brown', 11, 'Small, Gold Screen Printing', false),
--('./styles/images/T-4.jpg', 'Small Slatted Crate', 12, 'Small Crate', false),
--('./styles/images/T-3.jpg', 'Custom', 13, 'Mini Crate', false),
--('./styles/images/T-2.jpg', 'Custom', 14, 'Small Crate', false),
--('./styles/images/T-1.jpg', 'Custom', 15, 'Extra Large Crate', false);
--('./styles/images/T-12.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-14.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-16.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-24.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-26.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-28.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
--('./styles/images/T-29.jpg', 'Delete Photo', '6 x 6 x 12 Oak Wood', false),
