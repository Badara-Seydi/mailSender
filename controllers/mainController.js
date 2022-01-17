const nodeMail = require('../nodemailer');

const mainController = {
    homePage: (req, res) => {
        try {
            console.log('Homepage')
            res.render('apibirthday')
        } catch (error) {
            console.log(error)
        }
    },

    //création fonction d'envoi du mail 
    sendEmail: async (request, response) => {
        try {

            const data = request.body;
            // console.log(request.body.email);
            // console.log(data);
            const transporter = await nodeMail.createTransport();
            const configEmail = await nodeMail.createOptionMail(data);
            console.log(data)


            nodeMail.sendEmail(transporter, configEmail);
            
            response.render('sent', data);


        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = mainController