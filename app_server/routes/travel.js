// app_server/routes/travel.js
// I define URLs and wire them to controllers (the "R" in MVC).

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/travel');

// I like landing people on the dynamic page.
router.get('/', (req, res) => res.redirect('/trips'));

// Dynamic pages
router.get('/trips', ctrl.tripsList);
router.get('/about', ctrl.aboutPage);
router.get('/contact', ctrl.contactPage);

module.exports = router;
