const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Coming soon...');
});

module.exports = router;

