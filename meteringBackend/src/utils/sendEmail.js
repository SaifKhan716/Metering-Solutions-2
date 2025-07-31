
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // or your SMTP provider
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });



const nodemailer = require("nodemailer");
require("dotenv").config();


console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  host:"smtp.gmail.com",
//   host: "smtp.privateemail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
    //     user: "saif.khan@labryssolutions.com", 
    // pass: "txhv xlyn swqy jxhu", 
  },
});

module.exports = transporter;

// const sendEmail = async (to, subject, text) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   };

//   await transporter.sendMail(mailOptions);
// };


const sendEmail = async (to, subject, content, isHtml = false) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    [isHtml ? 'html' : 'text']: content,
  };

  await transporter.sendMail(mailOptions);
};



// const sendEmail = require('./src/utils/sendMail'); // Update path

// (async () => {
//   try {
//     await sendEmail(
//       'safkhan0715@gmail.com', // <-- Change this to the recipient's email
//       'Test Email Subject Issue in env',    // <-- Subject line
//       'Hello, this is a test email sent using Node.js and Nodemailer!' // <-- Email body
//     );
//     console.log('Email sent successfully!');
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// })();
module.exports = sendEmail;
