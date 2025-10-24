import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { Sequelize } from 'sequelize';

dotenv.config();
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// DB setup (Sequelize + MySQL)
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'db',
  dialect: 'mysql',
  logging: false
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/signals', (req, res) => {
  res.json([
    { id:1, pair:'BTC/USDT', type:'Buy', price:65000 },
    { id:2, pair:'ETH/USDT', type:'Sell', price:3500 }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
  } catch (err) {
    console.warn('DB connection failed (it may be initializing):', err.message);
  }
  console.log('🚀 Server running on port', PORT);
});
