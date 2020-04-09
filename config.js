require("dotenv").config();
module.exports = {
  smtpTransport: {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  },
};
