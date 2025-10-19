// app_server/controllers/travel.js
// I load data and render my HBS views from here (the "C" in MVC).

const path = require('path');
const trips = require(path.join(__dirname, '..', '..', 'data', 'trips.json'));

// I show the dynamic list of trips from JSON.
const tripsList = (req, res) => {
  res.render('trips', { title: 'Travlr Getaways', trips });
};

// I render a simple About page using the same header/footer partials.
const aboutPage = (req, res) => {
  res.render('about', {
    title: 'About Travlr',
    mission: 'I help travelers find memorable getaways with clear pricing and honest itineraries.',
    values: ['Customer-first service', 'Transparent pricing', 'Curated experiences']
  });
};

// I render a Contact page; I’m not saving anything server-side for this module.
const contactPage = (req, res) => {
  res.render('contact', {
    title: 'Contact Us',
    email: 'hello@travlr.example',
    phone: '(555) 123-4567',
    address: '123 Ocean Ave, Honolulu, HI'
  });
};

module.exports = { tripsList, aboutPage, contactPage };
