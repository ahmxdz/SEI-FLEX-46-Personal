const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  const user = new User(req.body);
  console.log(req.body)
  console.log(user)
  try {
    await user.save();
    const token = createJWT(user)
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  console.log(req.body)
  const email = req.body.email

  // User.findOne({ email: email}).then(user => {
  //   console.log(user)
  // })
  const user = await user.findOne({ email: email})
  if (!user){
    return res.status(401).json({err: 'Bad Credentials'})
  }

  user.comparePassword
  res.send('User login works')
}

/* ---- Helper Functions ----*/

function createJWT(user) {
  return jwt.sign(
    { user },
    SECRET,
    {expiresIn: '24h'}
  )
}