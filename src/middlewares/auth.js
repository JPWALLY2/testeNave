const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (_req, res, next) => {
    //buscando o header autorization da requisição
    const authHeader = _req.headers.authorization;

    //verificar se tem um token
    if(!authHeader)
        return res.status(401).send({error: 'No token provided'});
    

    //se esta no formato certo
    const parts = authHeader.split(' ');

    //verificar se esta em duas partes
    if(!parts.length === 2)
        return res.status(401).send({error: 'Token error'});
    

    const [ scheme, token] = parts;

    //verifica se começa com Bearer, com o regex
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Token malformatted'}); 
    

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({error: 'Invalid token'});
        

        _req.userId = decoded.id;

        return next();
    })
    

};