const Naver = require("../model/navers");
// user: _req.userId

// exporta a função index
exports.index  = async (_req, res) => {
  // let sq = {};
  // sq.name = _req.params.name;
  // sq.job_role = _req.params.job_role;
  // sq = 'sq';
  // const data = await Naver.find({$or: [{'name': {'$regex': '<i class="fal fa-square-full    "></i>', '$options': 'i'}}, {'job_role': {'$regex': 'sq', '$options': 'i'}}]}, 'name birthdate admission_date job_role projects id -_id');
  // return res.json(data);
  //retorna os dados parametrizando o chamado find e retirando da visualização o _id
  const data = await Naver.find({'name': {'$regex': _req.params.name, '$options': 'i'}}, 'name birthdate admission_date job_role projects id -_id');
  return res.json(data);
}

// exporta a função show
exports.show  = async (_req, res) => {
  const data = await Naver.find({id: _req.params.id}, 'name birthdate admission_date job_role projects id -_id');
  // const data = await Naver.find({id: _req.params.id}, 'name birthdate admission_date job_role projects id -_id').populate('projects');
  return res.json(data);
}

// exporta a função store
exports.store = async (_req, res) => {
  try{
    const navers = { name, birthdate,  admission_date, job_role, projects} = _req.body;
    await Naver.create(navers);
    // await Naver.create({...navers, users: _req_userId});
    return res.json(navers);
  }catch(err){
    return res.status(400).send({error: 'Error creating new naver ' + err});
  }
};

// exporta a função update
exports.update = async (_req, res) => {
  const dados = await Naver.findOneAndUpdate({id: _req.params.id}, 
    {$set: _req.body}); 
    return res.json(dados);
};

// exporta a função delete
exports.delete = async (_req, res) => {
  const dados = await Naver.findOneAndRemove({id: _req.params.id}); 
    return res.json(dados);
};


