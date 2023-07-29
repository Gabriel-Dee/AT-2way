// Define application constants
const message = 'Thank you for registering for the event! We look forward to seeing you there!'
// Your login credentials
const shortCode = '15054'
const username = 'mama_furaha'
const apikey = '1691559f2282acfc218a1a2de3956c9710c7b84f7e67eae387d800c30d42b664'
const options = {
apiKey: apikey,
username: username
}
const AfricasTalking = require('africastalking')(options)
const sms = AfricasTalking.SMS

exports.received = (req, res) => {
    // select needed properties from post object
    var body = { ...req.body };
  
    // Respond to message if from appropriate shortcode
    if (body.to === '15054') {
      sendResponse(body.from, message);
    } else {
      console.log('Something is wrong with the incoming message');
    }
  };
  
  exports.register = (req, res) => {
    const { name, email, phone } = req.body;
  
    // Save the registration details to a database (you can use a database library like Mongoose)
  
    // Send an SMS to the registered user
    const smsMessage = `Dear ${name}, thank you for registering for the event! We look forward to seeing you there!`;
    sendResponse(phone, smsMessage);
  
    // Respond to the user with a success message
    res.render('registrationSuccess', { name });
  };
  
  function sendResponse(recipient, message) {
    var opts = {
      from: shortCode,
      to: recipient,
      message: message,
    };
  
    sms
      .send(opts)
      .then(() => {
        console.log('Message sent successfully');
      })
      .catch((error) => {
        console.log('Something went wrong with message sending', error);
      });
  }