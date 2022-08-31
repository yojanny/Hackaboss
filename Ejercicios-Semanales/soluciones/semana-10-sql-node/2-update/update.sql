ALTER TABLE usuarios ADD COLUMN edad INT UNSIGNED;

UPDATE usuarios SET edad = 30 WHERE id = 1;
UPDATE usuarios SET edad = 38 WHERE id = 2 OR id = 5;
UPDATE usuarios SET edad = 36 WHERE id = 3 OR id = 4;