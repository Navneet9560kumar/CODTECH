const express = require('express');
require('dotenv').config();
const { sequelize } = require('./models'); // This imports sequelize + models associations

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));

// Test DB Connection
sequelize.authenticate()
  .then(() => console.log('✅ PostgreSQL connected successfully!'))
  .catch((err) => console.error('❌ DB connection error:', err));

// Sync models and start server
sequelize.sync({ alter: true }) // use { force: true } only in dev to drop tables
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to sync database:', err);
  });
