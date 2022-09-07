const mailer = require("nodemailer");

const homePage = (req, res) => {
  res.status(200).render("index");
};

const recipePage = (req, res) => {
  res.status(200).render("recipes");
};

const aboutPage = (req, res) => {
  res.status(200).render("aboutme");
};

let transporter = mailer.createTransport({
  host: "smtp.gmail.com",
  port: process.env.MAIL_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (req, res) => {
  try {
    const { name, lastname, email } = req.body;
    var message = {
      from: process.env.EMAIL,
      to: email,
      subject: "Thank you",
      text: `Thank you, ${name} ${lastname}`,
    };
    let info = await transporter.sendMail(message);
    console.log(info);
    res.status(200).send(`Message successfully sent`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { homePage, recipePage, aboutPage, sendMail };
