const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({ message: 'Data endpoint' });
});

module.exports = router;
