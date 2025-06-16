CREATE DATABASE IF NOT EXISTS vehicle_parts_inventory;
USE vehicle_parts_inventory;

CREATE TABLE IF NOT EXISTS parts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    part_type ENUM('Battery', 'Tire', 'Oil Filter', 'Brake Pad', 'Spark Plug', 'Air Filter', 'Other') NOT NULL,
    brand VARCHAR(255) NOT NULL,
    quantity_in_stock INT NOT NULL DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL,
    status ENUM('In Stock', 'Out of Stock') NOT NULL DEFAULT 'In Stock',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO parts (name, part_type, brand, quantity_in_stock, price, status) VALUES
('Amaron Battery 12V', 'Battery', 'Amaron', 25, 8500.00, 'In Stock'),
('MRF Tyre 185/70R14', 'Tire', 'MRF', 0, 4500.00, 'Out of Stock'),
('Bosch Oil Filter', 'Oil Filter', 'Bosch', 50, 850.00, 'In Stock'),
('Brembo Brake Pad Set', 'Brake Pad', 'Brembo', 15, 3200.00, 'In Stock'),
('NGK Spark Plug', 'Spark Plug', 'NGK', 100, 450.00, 'In Stock');bookingsvehicle_parts


