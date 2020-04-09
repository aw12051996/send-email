const express = require("express");
const app = express();
const cron = require("node-cron");
const send = require("./send_mail");
require("dotenv").config();

// import data
const data = require("./data");

// setting cronjob
const task = cron.schedule(
  "*/10 * 0-23 * * Thuesday",
  async () => {
    try {
      for (let i = 0; i < data.length; i++) {
        let output = {};
        output.id = data[i].id;
        output.name = data[i].name;
        output.email = data[i].email;

        // send email blash
        await send.sendMailExample(output);
      }
    } catch (error) {
      console.log(error);
    }
  },
  {
    scheduled: true,
    timezone: "Asia/Jakarta",
  }
);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
