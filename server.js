const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('books.json');
const middlewares = jsonServer.defaults();

// ✅ Apply default middlewares
server.use(middlewares);

// ✅ Expose Content-Range for React Admin
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', 'Content-Range');
  next();
});


// Content-Range header for list requests
router.render = (req, res) => {
  const data = res.locals.data;
  if (Array.isArray(data)) {
    const resource = req.path.replace('/', '');
    const total = router.db.get(resource).value().length;
    res.setHeader('Content-Range', `${resource} 0-${data.length - 1}/${total}`);
  }
  res.json(data);
};

server.use(router);

server.listen(3001, () => {
  console.log('✅ JSON Server running at http://localhost:3001');
});
