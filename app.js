// app.js
// I'm wiring up Express, Handlebars, static assets, and my MVC routes.

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();

// I like logs in dev.
app.use(morgan('dev'));

// I expose /public so CSS/images/JS are web-accessible.
app.use(express.static(path.join(__dirname, 'public')));

// I register Handlebars as my view engine.
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: false, // tell HBS NOT to look for layouts/main.hbs
  partialsDir: path.join(__dirname, 'app_server', 'views', 'partials'),
  layoutsDir: false
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// I mount my routes.
const travelRouter = require('./app_server/routes/travel');
app.use('/', travelRouter);

// A tiny health check.
app.get('/health', (req, res) => res.json({ ok: true }));

// I start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Travlr server running at http://localhost:${PORT}`);
});
