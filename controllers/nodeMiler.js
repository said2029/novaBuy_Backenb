const nodemailer = require("nodemailer");
const express = require("express");
const route = express.Router();


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // 587 or 465
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const SendEmail = async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: req.body.from || process.env.EMAIL,
      to: req.body.to,
      subject: req.body.subject,
      html: req.body.html,
    });
    res.json({ info: info });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


route.post("/send",SendEmail)

module.exports =  route ;
