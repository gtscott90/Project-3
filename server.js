const express = require('express');

const mongoose = require('mongoose');
// const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }
// Add routes, both API and view

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/devsync',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> Serving on PORT ${PORT}!`);
});
