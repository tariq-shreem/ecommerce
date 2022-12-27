const nodemailer = require("nodemailer");

async function sendEmail(dest,subject,message){



    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "shreemtariq@gmail.com", // generated ethereal user
          pass: "dwefdicmjaurhdzm", // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: ` " tariq shop" <${process.env.nodeMailerEmail}> `, // sender address
        to:dest, // list of receivers
        subject: subject, // Subject line
        html: message, // html body
      });
      
      return info;

}

module.exports={sendEmail};