const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const usersRouter = require('./routes/users');
const adsRouter = require('./routes/advertisements');
const newsRouter = require('./routes/news');

app.use('/dashboard/users', usersRouter);
app.use('/dashboard/advertisements', adsRouter);
app.use('/dashboard/news', newsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
