import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Asegúrate de que el modelo esté correctamente importado

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }
  
  const tokenWithoutBearer = token.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(tokenWithoutBearer, process.env.SECRET);

    // Extrae el email del token decodificado
    const { email } = decoded;

    // Realiza la consulta a la base de datos
    const user = await User.findOne({ email }, 'name photoUrl email'); // Selecciona solo los campos necesarios

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Añade los datos del usuario a la solicitud
    req.user = {
      name: user.name,
      photoUrl: user.photoUrl,
      email: user.email,
    };

    next();
    console.log(req.user);
  } catch (error) {
    console.error('Error al verificar el token o buscar al usuario:', error);
    return res.status(403).json({ message: 'Token no válido o expirado' });
  }
};

export default verifyToken;
