// const api_key = process.env.API_KEY;
// const domain = process.env.YOUR_DOMAIN_NAME;
// const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

// const sendWelcomeEmail = (email, name) => {
//   mailgun.messages().send(
//     {
//       to: email,
//       from: "I am <bisariyahemlata@gmail.com>",
//       subject: "Thanks for joining in !",
//       text: `Welcome to the app , ${name}. Let me know how you get along with the app `,
//     },
//     function (error, body) {
//       console.log(body);
//     }
//   );
// };

// const sendCancelationEmail = (email, name) => {
//   mailgun.messages().send(
//     {
//       to: email,
//       from: "I am <bisariyahemlata@gmail.com>",
//       subject: "Sorry to see you go !",
//       text: `GoodBye, ${name}. I hope to see you back sometime soon`,
//     },
//     function (error, body) {
//       console.log(body);
//     }
//   );
// };

// module.exports = { sendWelcomeEmail, sendCancelationEmail };


// PORT=4000
// YOUR_DOMAIN_NAME=sandbox46dccfbda7184e7ab91d586af77f41f1.mailgun.org
// API_KEY=e7ad7b938186952dffdbeb17368ac63c-aff8aa95-a0f498d4
// MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
// JWT_SECRET=thisismylaptop


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const sendWelcomeEmail = (email, name) => {
  sgMail.send(
    {
      to: email,
      from: "tineshwar.singh123@gmail.com",
      subject: "Thanks for joining in !",
      text: `Welcome to the app , ${name}. Let me know how you get along with the app `,
    }
  )
};

const sendCancelationEmail = (email, name) => {
  sgMail.send(
    {
      to: email,
      from: "tineshwar.singh123@gmail.com",
      subject: "Sorry to see you go !",
      text: `GoodBye, ${name}. I hope to see you back sometime soon`,
    },
  )
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
