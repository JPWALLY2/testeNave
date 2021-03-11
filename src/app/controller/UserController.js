const User = require("../model/users");
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

//função que vai gerar o token
function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });

}

// exporta a função index
exports.index = async (_req, res) => {
  const data = await User.find({},{"_id": 0, "id":1, "email":1, "password":1});
  return res.json(data);
}

// exporta a função store
exports.store = (_req, res) => {
  try{
    const user = { email, password } = _req.body;
    User.create(user);
    return res.json({
      user,
    token:generateToken({id: user.id}),
    });
  }catch(err){
    return res.status(400).send({error: 'Registration failed' + err});
  }
};

//exporta a função de login
exports.login = async (_req, res) => {
  const user = {email, password} = _req.body;
  const userl = await User.findOne({email}).select('+ password');

  //verifica se o usuario não existe
  if(!userl){
    return res.status(400).send({error: 'User not found'});
  }
  //verifica se a senha informada é a mesma que a cadastrada
  if(!(password === userl.password)){
    return res.status(400).send({error: 'Invalid password'});
  }
  return res.json({
    user,
  token:generateToken({id: user.id}),
  });
}

