import nodemail from 'nodemailer';

function sendMail(name, email, subject, message, res, PageGenerator, mailName, mailPass) {
  const transporter = nodemail.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: mailName,
      pass: mailPass
    },
    secure: false
  });
  const mailData = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: subject,
    text: `<p>You got a message from</p>
    <p>Email : ${email}</p>
    <p>Name: ${name}</p>
    <p>Subject: ${subject}</p>
    <p>Message: ${message}</p>`,
    html: `<p>You got a message from</p>
    <p>Email : ${email}</p>
    <p>Name: ${name}</p>
    <p>Subject: ${subject}</p>
    <p>Message: ${message}</p>`
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      const errorMessage = 'An error has occurred. Please try again later.';
      console.log(err)
      res.send(PageGenerator.contactPage(errorMessage, ''));
    } else {
      console.log(info);
      const successMessage = 'Your message has been sent successfully.';
      res.send(PageGenerator.contactPage('', successMessage));
    }
  });
}

export default {
  sendMail
};
