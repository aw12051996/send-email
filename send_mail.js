const nodemailer = require("nodemailer");
const config = require("./config");
module.exports = {
  async sendMailExample(payload) {
    let output = `
    <!DOCTYPE html>
    <html
      lang="en"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <meta charset="utf-8" />
        <!-- utf-8 works for most cases -->
        <meta name="viewport" content="width=device-width" />
        <!-- Forcing initial-scale shouldn't be necessary -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting" />
        <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <meta
          name="format-detection"
          content="telephone=no,address=no,email=no,date=no,url=no"
        />
        <title></title>
        <style>
          html,
          body {
            margin: 0 auto !important;
            padding: 0 !important;
            font-family: sans-serif;
          }
          .email-container {
            max-width: 500px;
          }
          /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
          @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u ~ div .email-container {
              min-width: 320px !important;
            }
          }
          /* iPhone 6, 6S, 7, 8, and X */
          @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u ~ div .email-container {
              min-width: 375px !important;
            }
          }
          /* iPhone 6+, 7+, and 8+ */
          @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
              min-width: 414px !important;
            }
          }
        </style>
      </head>
      <body>
        <!-- container -->
        <div class="email-container">
          <span style="font-size:12px">Selamat </span>
          <span style="font-size:12px;font-weight:bold;">${payload.name}</span>
        </div>
        <!-- end container -->
      </body>
    </html>
        
    
    
                    `;

    const smtpTransport = nodemailer.createTransport(config.smtpTransport);

    const mail = {
      to: "aw12051996@gmail.com",
      from: "aw12051996@gmail.com",
      subject: "Tes send mail with gmail",
      generateTextFromHTML: true,
      html: output,
    };

    smtpTransport.sendMail(mail, async function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("store : %s", payload.email);
      }
    });
  },
};
