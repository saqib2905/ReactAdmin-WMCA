const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('books.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', 'Content-Range, X-Total-Count');
  next();
});


router.render = (req, res) => {
  const data = res.locals.data;

  if (Array.isArray(data)) {
    const pathParts = req.path.split('/');
    const resource = pathParts[1]; // "books"
    const total = router.db.get(resource).value().length;
    res.setHeader('Content-Range', `${resource} 0-${data.length - 1}/${total}`);
    res.setHeader('X-Total-Count', total); // <--fallback
  }

  res.json(data);
};


server.use(router);

server.listen(3001, () => {
  console.log('✅ JSON Server running at http://localhost:3001');
});
