const Project = require("../model/projects");

// exporta a função index
exports.index  = async (_req, res) => {
  //retorna o name e o id parametrizando o chamado find e retirando da visualização o _id
  const data = await Project.find({'name': {'$regex': _req.params.name, '$options': 'i'}}, 'name id navers users -_id');
  return res.json(data);
}

// exporta a função show
exports.show  = async (_req, res) => {
  try{
    const data = await Project.find({id: _req.params.id}, 'name id -_id').populate('navers', 'name');
    return res.json(data);

  }catch(err){
    return res.status(400).send({error: 'Error loading projects ' + err})

  }
}

// exporta a função store
exports.store = async (_req, res) => {
  try{
   
    const projects = {name, navers} = _req.body;
    await Project.create({...projects, users: _req.userId});
    return res.json(projects);

  }catch(err){
    return res.status(400).send({error: 'Error creating new project' + err})
  }
};

// exporta a função update
exports.update = async (_req, res) => {
  const dados = await Project.findOneAndUpdate({id: _req.params.id}, 
    {$set: _req.body}); 
    return res.json(dados);
};

// exporta a função delete
exports.delete = async (_req, res) => {
  try{
    const dados = await Project.findOneAndRemove({id: _req.params.id}); 
      return res.json(dados);
  }catch(err){
    return res.status(400).send({error: 'Error deleting project' + err})
  }
};



