// from : https://www.youtube.com/watch?v=jMIPSWU1JUw
const express = require('express')
const cors = require('cors')
const twilio = require('twilio')

//twilio reqs
const accountSid = 'AC025035b111ebbc7253c6b332f2e4673b'
const authToken = '8c6f90fb9122e3d2a9abc27ea8efa60c'
const client = new twilio(accountSid, authToken); 

const app = express(); // alias

app.use(cors()); // blocks the browser from restricting any data

// Welcome page
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio text
app.get('/send-text', (req, res) => {
    const { recipient, textmessage } = req.query

    //send text
    client.messages.create({
        body: "Login Code: 554387",
        to: '+1' + recipient,
        from: '+17015811149'
    }).then((message) => console.log(message.body))
})

//Must have nodemon installed http://localhost:4000
app.listen(4000, () => console.log("Running on port 4000"));
