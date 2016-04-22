var client = require('twilio')( "AC3c08a8aa6a616c4b70dadb3e0ba98175", "e0dd7f2795760d32ec1b859309fe2746");
var twilio = require('twilio');
var resp = new twilio.TwimlResponse();
function call() {
  resp.say('Welcome to Twilio!');
  resp.say('Please let us know if we can help during your development.', {
      voice:'woman',
      language:'en-gb'
  });

  console.log(resp.toString());
  client.makeCall({
      to:"+819052330123", // Any number Twilio can call
      from: "+815031595871", // A number you bought from Twilio and can use for outbound communication
      url:   "https://demo.twilio.com/welcome/voice/ja/"
      // A URL that produces an XML document (TwiML) which contains instructions for the call

}, function(err, responseData) {
  console.log(err);
  //executed when the call has been initiated.
  console.log(responseData.from); // outputs "+14506667788"

  });
}
module.exports = call
