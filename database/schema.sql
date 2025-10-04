-- Economic data time series
CREATE TABLE economic_data (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  indicator VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  value DECIMAL(15,6) NOT NULL,
  source VARCHAR(50) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(indicator, date)
);

-- Interest rate regime classifications
CREATE TABLE rate_regimes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  
  start_date DATE NOT NULL,
  end_date DATE,
  regime_type VARCHAR(50) NOT NULL,
  characteristics TEXT,
  confidence_score DECIMAL(3,2)
);

-- Macro thesis tracking
CREATE TABLE macro_theses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  created_date DATE NOT NULL,
  decision_date DATE NOT NULL,
  confidence_score DECIMAL(3,2) NOT NULL,
  current_score DECIMAL(3,2),
  status VARCHAR(20) DEFAULT 'active',
  outcome VARCHAR(20),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Thesis indicators and tracking
CREATE TABLE thesis_indicators (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  thesis_id INTEGER NOT NULL,
  indicator_name VARCHAR(100) NOT NULL,
  target_value DECIMAL(15,6),
  current_value DECIMAL(15,6),
  status VARCHAR(20), -- 'met', 'pending', 'missed'
  weight DECIMAL(3,2) DEFAULT 1.0,
  FOREIGN KEY (thesis_id) REFERENCES macro_theses(id)
);

-- Research articles
CREATE TABLE research_articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(300) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  published_date DATE NOT NULL,
  tags TEXT, -- JSON array of tags
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);