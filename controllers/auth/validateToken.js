const validateToken = (req, res) => {
  try {
    const { name, photoUrl, email } = req.user;

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
