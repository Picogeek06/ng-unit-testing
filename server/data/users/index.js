const getUsers = require('./json/getUsers.json');
const addUser = (user) => {
  getUsers.data.users.push(user);
}

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
}