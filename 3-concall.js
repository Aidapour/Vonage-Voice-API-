var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
const ncco = [
    {
      "action": "talk",
      "text": "<speak> \
					<p>Welcome! We will connect you shortly</p>\
				</speak>"
	},    
    {
      action: "conversation",
      name: "CON-sreekanth-kolamala"
    }
  ];
app.get('/', (req, res) => {
  res.json(200);
});

app.get('/webhooks/inbound-call', (req, res) => {
  res.json(ncco);
});

app.get('/webhooks/status', (req, res) => {
  res.json(200);
});
