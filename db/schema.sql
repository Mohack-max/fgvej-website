-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS fgvej_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE fgvej_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(36) PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  entrepreneur_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  project_name VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  impact TEXT NOT NULL,
  funding_amount DECIMAL(15, 2) NOT NULL,
  timeline INT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Project files table
CREATE TABLE IF NOT EXISTS project_files (
  id VARCHAR(36) PRIMARY KEY,
  project_id VARCHAR(36) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_type VARCHAR(50) NOT NULL,
  file_size INT NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  responded_at TIMESTAMP NULL
);

-- Templates table
CREATE TABLE IF NOT EXISTS templates (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  file_type VARCHAR(20) NOT NULL,
  file_size INT NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  download_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  thumbnail_path VARCHAR(255),
  duration VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id VARCHAR(36) PRIMARY KEY,
  quote TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  image_path VARCHAR(255),
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Financed projects table
CREATE TABLE IF NOT EXISTS financed_projects (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  impact JSON NOT NULL,
  image_path VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- News table
CREATE TABLE IF NOT EXISTS news (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  href VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial templates data
INSERT INTO templates (id, name, description, file_type, file_size, file_path, download_count)
VALUES
  (UUID(), 'Plan d''Affaires - Projet Vert', 'Template complet pour structurer votre plan d''affaires écologique', 'PPTX', 2457600, '/templates/plan-affaires-projet-vert.pptx', 0),
  (UUID(), 'Analyse d''Impact Environnemental', 'Document pour évaluer l''impact écologique de votre projet', 'PDF', 1887436, '/templates/analyse-impact-environnemental.pdf', 0),
  (UUID(), 'Prévisions Financières - Projet Durable', 'Tableur pour calculer les coûts et revenus de votre projet', 'XLSX', 1258291, '/templates/previsions-financieres-projet-durable.xlsx', 0),
  (UUID(), 'Présentation de Projet - FGVEJ', 'Template de présentation pour soumettre votre projet à FGVEJ', 'PPTX', 3670016, '/templates/presentation-projet-fgvej.pptx', 0);
