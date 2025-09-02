// I’m setting up my Express server here to serve the Travlr website.

const path = require('path');
const express = require('express');
const app = express();

// I want everything inside "public" to load in the browser
app.use(express.static(path.join(__dirname, 'public')));

// When I go to localhost:3000, this will show index.html
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Quick check route so I know my server is running
app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

// I’m starting the server here
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Travlr server running at http://localhost:${PORT}`);
});
