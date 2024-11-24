 const validateToken = (req, res) => {
    res.json({
      message: 'Token is válid',
      user: req.user, 
    });
  };
  
  export default validateToken
  