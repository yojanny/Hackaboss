ALTER TABLE usuarios MODIFY dni CHAR(11);

INSERT INTO usuarios (nombre, apellidos, email, tlf, dni) VALUES 
("Irvin","Lethem","ilethem0@google.com.au",993870144,"279948941-9"),
("Kylie","Mungan","kmungan1@howstuffworks.com",497494899,"748551874-7"),
("Yul","Dibbert","ydibbert2@businesswire.com",776631050,"215649413-4"),
("Tamra","Mc Gorley","tmcgorley3@studiopress.com",921948685,"617064473-7"),
("Elmira","Imbrey","eimbrey4@cpanel.net",304168000,"178988896-4");

INSERT INTO direcciones (pais, CP, dir1, dir2, id_usuario) VALUES 
("Indonesia",83297,"98339 Loftsgordon Road","Babakanbandung", 1),
("Philippines",44455,"74641 Dwight Avenue","Bilar", 2),
("Indonesia",62965,"9510 Milwaukee Street","Sumberejo", 3),
("Norway",54756,"8902 Doe Crossing Alley","Steinkjer", 4),
("United States",51471,"8616 Stephen Hill","Charleston", 5);