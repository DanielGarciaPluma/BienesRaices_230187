import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config({path: '.env'})

const registerEmail = async (datos) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS       
        }
    });

    const { email, nombre, token } = datos

    // ? Enviar el email

    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu Cuenta en Bienes Raices',
        text: 'Confirma tu Cuenta en Bienes Raices',
        html: `
                    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirma tu Cuenta en Bienes Raíces</title>
        </head>
        <body style="background-color: #8D91C7; color: #000000; font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; position: relative;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); position: relative;">

                <h1 style="color: #ee7956; text-align: center; font-size: 24px; font-weight: bold; margin: 0 0 20px;">
                    ¡Nos alegra tenerte con nosotros!
                </h1>

                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="cid:casa" alt="Bienvenido" style="max-width: 100px; height: auto;">
                </div>

                <p style="color: #636363; margin: 10px 0;">
                    ¡Hola, <strong>${nombre}</strong>! Nos complace que hayas decidido formar parte de nuestra comunidad.
                </p>

                <p style="color: #636363; margin: 10px 0;">
                    Tu cuenta está casi lista. Solo falta que la confirmes haciendo clic en el siguiente enlace:
                </p>

                <div style="text-align: center; margin: 20px 0;">
                    <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmAccount/${token}" 
                        style="background-color: #054A91; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: bold; display: inline-block;">
                        Confirmar Cuenta
                    </a>
                </div>

                <p style="color: #636363; margin: 10px 0;">
                    Una vez confirmes tu cuenta, podrás acceder a todos nuestros servicios y explorar las mejores opciones de bienes raíces. ¡Estamos emocionados de tenerte con nosotros!
                </p>

                <p style="color: #636363; margin: 10px 0;">
                    Si no creaste esta cuenta, puedes ignorar este mensaje. ¡No te preocupes, nada sucederá!
                </p>

                <div style="margin-top: 20px; text-align: center; font-size: 14px; font-style: italic; color: #636363;">
                    <p>Atentamente,</p>
                    <img src="cid:firma" alt="Firma del equipo de Bienes Raíces" style="width: 150px; height: auto; margin-top: 10px;">
                    <p><strong>El equipo de Bienes Raíces</strong></p>
                </div>

                <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #636363;">
                    &copy; 2024 BienesRaices.com - Todos los derechos reservados. 
                    <br>
                    <a href="#politicas" style="color: #636363;">Políticas de Privacidad</a> | <a href="#terminos" style="color: #636363;">Términos de Servicio</a>
                </footer>

            </div>
        </body>
        </html>
    `,
    attachments: [
        {
            filename: 'logo_BR.png', 
            path: './public/assets/logo.png', 
            cid: 'logoBR' 
        },
        {
            filename: 'firma.png', 
            path: './public/assets/firma.png', 
            cid: 'firma'
        },
        {
            filename: 'casa.png', 
            path: './public/assets/casa.png', 
            cid: 'casa'
        }
    ]

    })
}

const passwordRecoveryEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const { email, name, token } = data;

    // Enviar el email
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Recupera tu contraseña - BienesRaices.com',
        text: `Hola, ${name}. Hemos recibido una solicitud para restablecer tu contraseña.`,
        html: `
           <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solicitud de cambio de contraseña en Bienes Raices</title>
</head>
<body style="background-color: #8D91C7; color: #000000; font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; position: relative;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); position: relative;">

        <h1 style="color: #ee7956; text-align: center; font-size: 24px; font-weight: bold; margin: 0 0 20px;">Bienes Raices
        </h1>

        <div style="text-align: center; margin-bottom: 20px;">
            <img src="cid:casa" alt="" style="max-width: 100px; height: auto;">
        </div>

        <p style="color: #636363; margin: 10px 0;">
            ¡Hola, <strong>${nombre}</strong>! 
        </p>

        <p style="color: #636363; margin: 10px 0;">
            Hemos recibido una solicitud de cambio de contraseña, haz click en el boton para poder restablecer tu contraseña y seguir siendo parte de esta gran comunidad
        </p>

        <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/passwordRecovery/${token}" asdx
                style="background-color: #054A91; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: bold; display: inline-block;">
                Confirmar Cuenta
            </a>
        </div>
        <p style="color: #636363; margin: 10px 0; text-align: center;">
            Si no solicitaste este correo, haz caso omiso a este.
        </p>

        <div style="margin-top: 20px; text-align: center; font-size: 14px; font-style: italic; color: #636363;">
            <p>Atentamente,</p>
            <img src="cid:firma" alt="Firma del equipo de Bienes Raíces" style="width: 150px; height: auto; margin-top: 10px;">
            <p>Carlos Daniel Garcia Pluma</p>
            <p><strong>El equipo de Bienes Raíces</strong></p>
        </div>

        <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #636363;">
            &copy; 2024 BienesRaices.com - Todos los derechos reservados. 
            <br>
            <a href="#politicas" style="color: #636363;">Políticas de Privacidad</a> | <a href="#terminos" style="color: #636363;">Términos de Servicio</a>
        </footer>

    </div>
</body>
</html>
        `,,
        attachments: [
            {
                filename: 'logo_BR.png', 
                path: './public/assets/logo.png', 
                cid: 'logoBR' 
            },
            {
                filename: 'firma.png', 
                path: './public/assets/firma.png', 
                cid: 'firma'
            },
            {
                filename: 'casa.png', 
                path: './public/assets/casa.png', 
                cid: 'casa'
            }
        ]
    });
};

export { registerEmail }