import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }
  
  const tokenWithoutBearer = token.replace('Bearer ', '');

  jwt.verify(tokenWithoutBearer, process.env.SECRET, (error, decoded) => {
    if (error) {
      
      return res.status(403).json({ message: 'Token no válido o expirado' });
    }

    req.user = decoded;

    next();
  });
};

export default verifyToken;
