-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: ejercicio1
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `photo_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `photo_id` (`photo_id`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,1,11,'2022-06-04 16:55:14'),(2,10,8,'2022-02-16 14:13:05'),(3,9,17,'2022-06-14 21:57:16'),(4,5,8,'2022-07-19 23:12:45'),(5,10,16,'2022-02-25 00:48:32'),(6,1,17,'2022-07-30 00:18:58'),(7,6,19,'2022-01-14 03:05:43'),(8,3,14,'2022-02-18 16:43:32'),(9,3,10,'2022-07-09 13:08:04'),(10,6,1,'2022-09-26 05:10:40'),(11,3,6,'2022-12-19 11:28:32'),(12,5,17,'2022-04-30 20:42:29'),(13,1,11,'2022-10-04 07:32:59'),(14,8,9,'2022-02-05 22:01:21'),(15,2,1,'2022-08-14 23:38:22'),(16,5,14,'2022-07-09 16:45:56'),(17,9,7,'2022-12-04 21:47:33'),(18,3,1,'2022-05-02 00:09:24'),(19,8,6,'2022-06-02 17:31:01'),(20,2,20,'2022-09-09 01:17:36'),(21,5,6,'2022-09-17 14:03:31'),(22,3,1,'2022-04-30 11:16:04'),(23,5,4,'2022-01-24 19:14:08'),(24,5,7,'2022-02-18 02:05:45'),(25,2,7,'2022-12-13 14:00:21'),(26,9,20,'2022-07-21 11:10:04'),(27,7,10,'2022-09-17 14:50:13'),(28,6,12,'2022-03-13 21:05:52'),(29,10,7,'2022-12-04 07:25:16'),(30,7,9,'2022-01-11 20:12:18'),(31,10,11,'2022-03-07 17:17:12'),(32,1,5,'2022-04-15 05:02:10'),(33,1,8,'2022-02-17 21:05:39'),(34,8,6,'2022-07-19 12:43:50'),(35,9,18,'2022-01-31 19:10:32'),(36,4,14,'2022-01-01 00:59:09'),(37,7,4,'2022-12-16 14:52:11'),(38,8,16,'2022-09-30 20:36:12'),(39,9,4,'2022-02-10 13:58:06'),(40,2,5,'2022-07-20 01:50:52'),(41,3,4,'2022-01-19 09:35:09'),(42,6,15,'2022-12-10 14:19:30'),(43,4,5,'2022-09-03 09:11:45'),(44,2,16,'2022-12-02 20:26:20'),(45,1,16,'2022-07-19 08:06:31'),(46,3,1,'2022-05-31 08:45:14'),(47,3,19,'2022-05-27 17:53:08'),(48,9,2,'2022-04-20 18:48:24'),(49,5,13,'2022-11-06 19:24:16'),(50,9,9,'2022-11-30 02:05:58'),(51,8,15,'2022-12-09 20:23:12'),(52,7,20,'2022-07-15 20:53:33'),(53,4,18,'2022-06-19 21:17:53'),(54,8,1,'2022-06-12 00:19:15'),(55,9,11,'2022-10-23 15:17:56'),(56,6,1,'2022-05-07 05:43:05'),(57,2,20,'2022-10-13 08:32:06'),(58,9,6,'2022-05-30 02:35:26'),(59,1,20,'2022-12-17 12:58:59'),(60,4,4,'2022-03-13 05:02:39'),(61,2,20,'2022-11-22 12:52:52'),(62,7,6,'2022-11-30 08:53:06'),(63,6,7,'2022-06-02 10:22:15'),(64,1,1,'2022-07-17 05:49:11'),(65,4,18,'2022-12-06 19:10:46'),(66,9,19,'2022-05-29 21:44:20'),(67,8,5,'2022-07-11 05:20:24'),(68,7,9,'2022-11-14 19:13:52'),(69,1,1,'2022-03-18 06:31:57'),(70,9,2,'2022-04-26 01:43:46'),(71,10,16,'2022-09-23 06:36:49'),(72,7,16,'2022-11-22 22:32:59'),(73,2,13,'2022-09-05 01:42:26'),(74,4,14,'2022-10-24 03:09:24'),(75,7,18,'2022-05-10 00:08:38'),(76,2,14,'2022-12-24 04:37:04'),(77,10,6,'2022-09-16 17:14:10'),(78,7,20,'2022-04-27 06:28:39'),(79,3,15,'2022-10-15 06:22:11'),(80,5,16,'2022-10-16 15:11:36'),(81,9,9,'2022-07-16 18:28:08'),(82,7,14,'2022-10-08 09:36:35'),(83,7,19,'2022-01-15 14:13:33'),(84,9,16,'2022-10-22 07:52:50'),(85,4,17,'2022-10-13 11:13:57'),(86,4,8,'2022-10-15 02:42:33'),(87,7,18,'2022-12-15 16:53:45'),(88,5,13,'2022-03-25 21:04:10'),(89,10,10,'2022-05-06 17:39:04'),(90,3,11,'2022-01-05 01:25:00'),(91,1,18,'2022-02-18 15:27:12'),(92,5,18,'2022-01-14 10:02:29'),(93,6,2,'2022-05-29 03:30:14'),(94,9,12,'2022-10-14 11:22:51'),(95,8,2,'2022-05-28 11:25:32'),(96,7,4,'2022-07-15 13:22:41'),(97,5,15,'2022-10-30 23:20:51'),(98,3,20,'2022-12-16 22:56:32'),(99,3,17,'2022-10-29 01:36:49'),(100,6,11,'2022-01-27 08:30:13');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `photo_file_name` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,1,'hrMdHZUuLT8udtl6FM23.jpg','2022-10-10 18:03:49'),(2,8,'3V4UhNvdKylpojeXCa1k.jpg','2022-02-04 15:08:30'),(3,2,'dsibhG37bLbQZ7r8LnOo.jpg','2022-06-06 05:54:16'),(4,10,'0XV74KJHXrca8Phkw2AM.jpg','2022-03-20 08:20:01'),(5,4,'voPV94vRzOFla0TNJvfd.jpg','2022-08-01 16:34:35'),(6,3,'Mg4AyYWOfxAbTOWp6OMY.jpg','2022-06-13 08:55:45'),(7,1,'TmZQdJ8lAqk7DLSKEZcT.jpg','2022-12-22 17:10:21'),(8,7,'17RQLAke6jNtfIYQ7zli.jpg','2022-06-04 06:25:58'),(9,5,'uRBhJwxhzMTTeUmeDyYw.jpg','2022-04-23 16:12:50'),(10,6,'SuHth18yOqGsE1zNOp9W.jpg','2022-08-20 18:17:35'),(11,9,'aHGskG6tUz7m2AdzlvNx.jpg','2022-06-17 18:17:11'),(12,2,'FyCUPjPReSh86ceNWDJc.jpg','2022-05-10 15:18:58'),(13,1,'bVIfoOsHUWOAb1KqJPcC.jpg','2022-07-09 23:18:54'),(14,8,'5vuyuVdiWuuldNt0N6ja.jpg','2022-06-12 04:29:18'),(15,9,'nat0IpfKHi0fgzZOppPn.jpg','2022-08-16 18:04:16'),(16,2,'JKDqkgxTueHhsJCAH5s8.jpg','2022-10-15 20:21:14'),(17,2,'5QzqRhSBMX8gLG0tqqRV.jpg','2022-10-06 22:32:17'),(18,5,'h5V0KoHw5WaKzU3f6XrA.jpg','2022-04-17 17:19:15'),(19,8,'vtF6xTmLYTBXXKcApq7O.jpg','2022-03-29 22:36:13'),(20,9,'TYDkqU0RISWgZKCPKRM1.jpg','2022-09-21 07:22:11');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jumuza@wovnoheb.km','Bill Murray',0,'2022-06-28 04:05:27'),(2,'lojalat@esokeuj.sm','May Diaz',1,'2022-09-26 00:16:00'),(3,'iwatizgik@jokulik.bs','Ophelia Valdez',0,'2022-04-06 16:20:57'),(4,'lanzovpo@winfo.vn','Elsie Casey',1,'2022-06-23 15:42:26'),(5,'harakino@uh.eu','Hannah Jensen',1,'2022-03-24 23:34:47'),(6,'fefkewuk@ve.tc','Sam Ramos',0,'2022-10-17 22:15:25'),(7,'matvemu@pe.sy','Lucas Bennett',0,'2022-11-20 13:06:36'),(8,'ceripa@vibrupbam.mv','Mittie Harris',1,'2022-12-11 05:08:47'),(9,'le@epivinod.cf','Lola Potter',0,'2022-02-12 06:53:02'),(10,'kedoz@zoedeur.pl','Nathan Maldonado',0,'2022-09-18 18:55:44');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-01 19:47:47
