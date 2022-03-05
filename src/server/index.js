const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.disable('x-powered-by');

//This will create a middleware.
//When you navigate to the root page, it will use the built react-app
app.use(express.static(path.resolve(__dirname, '../../build')));

app.use(cors());
// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

// Set up a default "catch all" route to use when someone visits a route
// that we haven't built
app.get('*', (req, res) => {
    res.json({ ok: true });
});

const port = process.env.PORT || 80;
// Start our API server
app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`);
});
