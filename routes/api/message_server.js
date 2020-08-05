// const http = require('http');
// const twilio = require('twilio');
// const express = require('express');
// const sslRedirect = require('heroku-ssl-redirect');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const bodyParser = require('body-parser');

// const querystring = require('querystring');

// const app = express();

// if (process.env.NODE_ENV === 'production') {
//     app.use(sslRedirect());
// }

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/test', (req, res) => res.json({ msg: 'this is a test route' }));

// // Success webhook route for receiving messages,
// // Responds with a success message to the receivers number
// app.post('/message', (req, res) => {
//     const twilioSignature = req.headers['x-twilio-signature'];
//     const url = 'https://tarikgul.com';
//     const { body } = req;

//     // Authenticating the request when in production
//     // Otherwise ngrok is used for secure TCP tunnelling
//     // The terminal commands for development
//     // -$ twilio login
//     // -$ twilio phone-numbers:update "+1${twilioNumber}" --sms-url="http://localhost:1337/message"
//     // -$ node message_server.js
//     if(process.env.NODE_ENV === 'production') {
//         const requestIsValid = twilio.validateRequest(
//             process.env.TWILIO_AUTH_TOKEN,
//             twilioSignature,
//             url,
//             body
//         );
    
//         if (!requestIsValid) {
//             return res.status(401).send('Unauthorized');
//         }

//         res.set({
//             'Content-Type': 'text/plain'
//         });
//     }

//     // Creating a URL querystring to be passed along as a post request to the 
//     // locations api route. The internal route is the internalRequest is then made 
//     // to the correct host/path, and written in the database. The reason we 
//     // are making an internal request is becuase this server is listening on a
//     // different port. 
//     const postData = querystring.stringify({
//         location: body.Body
//     });

//     const port = process.env.PORT || 5000;
    
//     let host = (process.env.NODE_ENV === 'production') ? 'www.tarikgul.com' : 'localhost';
    
//     const options = {
//         hostname: host,
//         port: port,
//         path: '/api/locations/location',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Content-Length': Buffer.byteLength(postData)
//         }
//     };
    
//     const internalRequest = http.request(options, (res) => {
//         console.log(`STATUS: ${res.statusCode}`);
//         console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//         res.setEncoding('utf8');
//         res.on('data', (chunk) => {
//             console.log(`BODY: ${chunk}`);
//         });
//         res.on('end', () => {
//             console.log('No more data in response.');
//         });
//     });
    
//     internalRequest.on('error', (e) => {
//         console.error(`problem with request: ${e.message}`); 
//     });
    
//     // Write the necessary data in the request
//     internalRequest.write(postData);Ad
//     internalRequest.end();
    
//     // Send a response back to the origin phone number.
//     const twiml = new MessagingResponse();

//     twiml.message(`Your lat/long was successfully received from ${body.From}, and being saved in the DB`);

//     res.writeHead(200, { 'content-type': 'text/xml' });
//     res.end(twiml.toString());
// });

// module.exports = app;