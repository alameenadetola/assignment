const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get('/', (req, res) => {
	res.send('hello');
});

app.post('/submit-form', (req, res) => {
	console.log(req.body);
	
});

app.listen(4000, () => {
	console.log('app is listening on port 4000');
});
