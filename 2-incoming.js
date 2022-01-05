var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
app.use(logger(' '));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config({path: __dirname + '/../.env'})
const Vonage = require('@vonage/server-sdk');
app.listen(3000);

const Vonage_API_KEY = process.env.API_KEY;
const Vonage_API_SECRET = process.env.API_SECRET;
const Vonage_APPLICATION_ID = process.env.APPLICATION_ID;
const Vonage_PRIVATE_KEY = process.env.PRIVATE_KEY;



var url = 'https://voice-workshop-aidap-cyprc.run-us-west2.goorm.io'

// app.get('/', (req, res) => {
//   res.json(200);
// });


// const ncco = [
// 		{
//       "action": "talk",
//       "text": "<speak> \
// 					<p>Hello you have reached Aida's number she cannot come to the phone right no Please leave a message after the tone. </p>\
// 				</speak>"
// 	},
// 		{
// 	 "action": "record",
// 	 "EndOnSilence": 3,
//      beepStart:true,
// 	 format:"mp3",
// 	 "endOnKey":"#",
//      eventUrl: [url + '/webhooks/recording'],
// 	 "eventMethod": "POST"		
// 	}


       
// 	// {
// 	// "action": "talk",
// 	// "text": "<speak> \
// 	// 				<p> Please place your order</p> \
// 	// 				<p> Press 1 for veg pizza </p> \
// 	// 				<p> Press 2 for cheese pizza </p> \
// 	// 			</speak>"
// 	// }
//   ];
// app.get('/', (req, res) => {
//   res.json(200);
// });

// const onRecording = (request, response) => {
//   const recording_url = request.body.recording_url
//   console.log(`Recording URL = ${recording_url}`)

//   response.status(204).send()
// }

	
// app.get('/', (req, res) => {
//   res.json(200);
// });

// app.get('/webhooks/answer', (req, res) => {
//   res.json(ncco);
// });


// app.get('/webhooks/recordings', (req, res) => {
// 	console.log ()
//   res.json(200);
 
// });

//   if(err) { console.error(err); }
//   else {
//       console.log(res);
//   }

//   (err, result) => {
//       console.log(err || result);
//     },
// )


const onInboundCall = (req, res) => {
  const ncco = [{
      action: 'talk',
      text: 'Please leave a message after the tone, then press #. We will get back to you as soon as we can.'
    },
    {
      action: 'record',
      endOnKey: '#',
      beepStart: 'true',
      endOnSilence: "3",
      eventUrl: [
        `${request.protocol}://${request.get('host')}/webhooks/recordings`
      ]
    },
    {
      action: 'talk',
      text: 'Thank you for your message. Goodbye.'
    }
  ]

  response.json(ncco)
}

const onRecording = (req, resp) => {
  const recording_url = request.body.recording_url
  console.log(`Recording URL = ${recording_url}`)

  response.status(204).send()
}


 app.get('/webhooks/answer', onInboundCall)
 app.post('/webhooks/recordings', onRecording)




// const vonage = new Vonage({
//   apiKey: Vonage_API_KEY,
//   applicationId: Vonage_APPLICATION_ID,
//   privateKey: Vonage_PRIVATE_KEY
// }, {debug: true});


// vonage.files.save(recording_url, 'test.mp3', (err, res) => {
//   if(err) { console.error(err); }
//   else {
//       console.log(res);
//   }
// });




