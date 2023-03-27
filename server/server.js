const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('./data/users/index.js');

server.get('/api/users', (req, res, next) => {
  res.status(200).send(userData.getUsers);
});

server.post('/api/users', (req, res, next) => {
  const user = req.body;
  userData.addUser(user);
  res.status(201).send();
});

server.listen(3000, () => {
  console.log('JSON server is listening on port 3000')
})