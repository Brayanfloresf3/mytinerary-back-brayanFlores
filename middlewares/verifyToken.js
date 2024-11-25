import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }
  
  const tokenWithoutBearer = token.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(tokenWithoutBearer, process.env.SECRET);
    const { email } = decoded;
    const user = await User.findOne({ email }, 'name photoUrl email'); 

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    req.user = {
      name: user.name,
      photoUrl: user.photoUrl,
      email: user.email,
    };

    next();
  } catch (error) {
    console.error('Error al verificar el token o buscar al usuario:', error);
    return res.status(403).json({ message: 'Token no válido o expirado' });
  }
};

export default verifyToken;
