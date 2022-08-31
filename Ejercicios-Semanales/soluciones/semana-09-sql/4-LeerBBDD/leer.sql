SELECT nombre, apellidos, tlf FROM usuarios u ORDER BY apellidos;

SELECT pais, COUNT(DISTINCT id_usuario) FROM direcciones GROUP BY pais;

-- EXTRA. Seleccionar información de los usuarios con sus direcciones:

SELECT u.nombre, u.apellidos, u.tlf, d.* FROM usuarios u LEFT JOIN direcciones d ON u.id = d.id_usuario ORDER BY u.apellidos;
