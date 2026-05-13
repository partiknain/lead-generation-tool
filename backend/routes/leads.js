const express = require('express');

const router = express.Router();

const { searchLeads } = require('../services/scraper');

router.get('/', async (req, res) => {
  try {
    const data = await searchLeads();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;