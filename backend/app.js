const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const cookie = require('cookie-parser');
const router = require('./router/route');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 9000;
require('./database/connectDatabase');

const allowedOrigins = [
  `${process.env.FRONTEND_URL}`, 
  'https://the-code-bird-website.vercel.app', 
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookie());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
