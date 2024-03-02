const nodemailer = require('nodemailer');

const sendMail =  (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Configuración del transporte SMTP para enviar el correo electrónico
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tu_correo@gmail.com',
            pass: 'tu_contraseña',
        },
    });

    // Opciones del correo electrónico
    const mailOptions = {
        from: 'tu_correo@gmail.com',
        to: 'destinatario@example.com',
        subject: 'Nuevo mensaje desde el formulario de contacto',
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
    };

    // Envío del correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).send('Error al enviar el correo electrónico');
        } else {
            console.log('Correo electrónico enviado:', info.response);
            res.status(200).send('Correo electrónico enviado');
        }
    });
};

module.exports = sendMail;