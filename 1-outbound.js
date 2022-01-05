const Vonage = require("@vonage/server-sdk");
require("dotenv").config();

const Vonage_API_KEY = process.env.API_KEY;
const Vonage_API_SECRET = process.env.API_SECRET;
const Vonage_APPLICATION_ID = process.env.APPLICATION_ID;
const Vonage_PRIVATE_KEY = process.env.PRIVATE_KEY;

const vonage = new Vonage({
  apiKey: Vonage_API_KEY,
  applicationId: Vonage_APPLICATION_ID,
  privateKey: Vonage_PRIVATE_KEY
}, {debug: true});

const ncco = [
     {
      "action": "talk",
      "text": "<speak> \
					<p>Welcome to V-pizza!We are happy to help you!</p>\
				</speak>"
	}
];

vonage.calls.create(
    {
      to: [{type: "phone", number: process.env.CUSTOMER_NUMBER}],
      from: {type: "phone", number: process.env.VONAGE_NUMBER},
      ncco,
    },
    (err, result) => {
      console.log(err || result);
    },
);