const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Coming soon...');
});

router.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.name + '".');
});

module.exports = router;

