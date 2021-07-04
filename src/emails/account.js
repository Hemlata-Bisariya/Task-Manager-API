const api_key = process.env.API_KEY;
const domain = process.env.YOUR_DOMAIN_NAME;
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

const sendWelcomeEmail = (email, name) => {
  mailgun.messages().send(
    {
      to: email,
      from: "I am <bisariyahemlata@gmail.com>",
      subject: "Thanks for joining in !",
      text: `Welcome to the app , ${name}. Let me know how you get along with the app `,
    },
    function (error, body) {
      console.log(body);
    }
  );
};

const sendCancelationEmail = (email, name) => {
  mailgun.messages().send(
    {
      to: email,
      from: "I am <bisariyahemlata@gmail.com>",
      subject: "Sorry to see you go !",
      text: `GoodBye, ${name}. I hope to see you back sometime soon`,
    },
    function (error, body) {
      console.log(body);
    }
  );
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
