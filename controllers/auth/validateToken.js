const validateToken = (req, res) => {
  try {
    // Obtener los datos directamente de req.user
    const { name, photoUrl, email } = req.user;

    // Responder con la información del usuario
    res.json({
      message: 'Token es válido',
      user: {
       name: name,
        photoUrl: photoUrl,
       email: email
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al validar el token',
      error: error.message,
    });
  }
};

export default validateToken;
