const skills = [
    {id: 1, skill: 'HTML/CSS', useful: true},
    {id: 2, skill: 'JavaScript', useful: true},
    {id: 3, skill: 'GIT', useful: true},
    {id: 4, skill: 'Debugging', useful: true},
    {id: 5, skill: 'Command Line', useful: true}
  ];
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.useful = true;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };