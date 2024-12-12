import jwt from 'jsonwebtoken'

const generarJWT = id => jwt.sign(
    {
        id, 
        developerName: 'Carlos Daniel Garcia Pluma',
        empresa: 'Universidad Tecnológica de Xicotepec de Juárez',
        tecnologias: 'Node.js'
    },
    process.env.JWT_SECRET, // Clave secreta desde el entorno
    {
        expiresIn: '1h' // Token válido por 1 hora
    }
)
const generateId = () => Date.now().toString(32) + Math.random().toString(32).substring(2)

export { generarJWT, generateId}