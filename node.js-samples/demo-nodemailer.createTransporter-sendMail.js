var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jo-node.js@gmail.com',
    pass: 'jo-node.js'
  }
});

var mailOptions = {
  from: 'jo-node.js@gmail.com',
  to: 'joosthuizen@gmail.com, john.oosthuizen@me.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
