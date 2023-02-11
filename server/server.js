const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('./data/users');

server.get('/api/users', (req, res, next) => {
  res.status(200).send(userData.getUsers);
});

// TODO: Add a POST route to add a new user
// server.post('/api/users', (req, res, next) => {
//   const user = req.body;
//   userData.addUser(user);
//   res.status(201).send();
// });

server.listen(3000, () => {
  console.log('JSON server is listening on port 3000')
})