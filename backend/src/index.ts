import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import populateData from './populateData.js';
import routes from './routes/api.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';

const app = express();
const PORT = 5000;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // populateData();
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
