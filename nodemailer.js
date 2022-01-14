const nodemailer = require("nodemailer");
const mainController = require('./controllers/mainController')


const nodeMail={

    createTransport: async () => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'devolutionoclock@gmail.com',
          pass: 'greenmoney75!',
        },
      })
      return await transporter;
    },

    createOptionMail: async (data) => {
 

      const mailOptions = {
        from: process.env.SENDER, 
        to: data.email,
        subject: "Joyeux Anniversaire", 
        text: data.expediteur +` tiens a vous souhaiter chaleureusement votre anniversaire`,
        html: `<body style="background-color: bisque;width: 100%; height: 100%;"><h1 style="color: cadetblue;text-align: center;margin-bottom: 4%; width: 100%;">Joyeux Anniversaire à toi Yasmine </h1><img src="https://fichiers.joliecarte.com/images/cartes/fr/cartes-virtuelles/anniversaire_amour/joyeux-anniversaire-poeme.jpg" alt="" srcset="" style="align-items: center; width:600px;height:800px"> <h2 style="text-align: center; font-size: xx-large; border: solid 2px royalblue; margin-top: 4%;margin-left:50%;height: 15%; width: 60%;color: tomato;">Une merveilleuse année pour tes 31 ans</h2></body>`, // html body
      };
      return await mailOptions
    },

    sendEmail: async (transporter, mailOptions) => {
    
      transporter.sendMail(mailOptions, function (error,info){
        if (error){
            return console.log(error)
        }else {
            return console.log('Email sent : ' + info.response);
        }
    })
  },


}

module.exports=nodeMail;