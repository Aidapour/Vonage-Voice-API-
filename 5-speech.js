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
var url = 'https://voice-sep-amer-tmvrs.run-ap-south1.goorm.io'
const ncco = [
    {
      "action": "talk",
      "text": "<speak> \
					<p>Welcome to V-pizza!We are happy to help you!</p>\
				</speak>"
	},    
	{
      "action": "talk",
      bargeIn: true,
      "text": "<speak> \
					<p> Please place your order</p> \
					<p> Press 1 for veg pizza </p> \
					<p> Press 2 for cheese pizza </p> \
				</speak>"
	},
	{
		action: 'input',
		eventUrl: [url + '/webhooks/speech'],
		speech: {
		endOnSilence: 3,
		language: "en-US",
	  	}
	},
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

app.post('/webhooks/dtmf', (req, res) => {
		const dtmf = req.body.dtmf;
	console.log("customer said" + dtmf);
	var ncco = [
		{
			action: "talk",
			text: `You pressed ${dtmf}. Thank you for your order`,
		},
	];
  res.json(ncco);
});

app.post('/webhooks/speech', (req, res) => {
	console.log(req.body.speech.results);

  const speech = req.body.speech.results[0].text
  console.log('customer said ' + speech);
  const ncco = [{
	action: 'talk',
	text: `Thank you! your order for ${speech} with be ready shortly`
  }]

	res.json(ncco);
});
