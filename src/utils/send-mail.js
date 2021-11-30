const transporter =require('../config/mail')

module.exports = (from,to,subject,text,html) =>{
    const mesaage = {
        from,
        to,
        subject,
        text,
        html
      };
      transporter.sendMail(mesaage) 
}
