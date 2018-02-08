const express = require('express');
const router = express.Router();
const Entry = require('../models').Entry;

const entries = [
  { id: 1, amt: 100.0, date: '01/20/18', description: 'BTC', type: 'debit' },
  { id: 2, amt: 47.50, date: '1/18/18', description: 'Utils', type: 'debit' },
  { id: 3, amt: 1050, date: '01/01/18', description: 'Paycheck', type: 'credit' },
]

router.get('/', (req, res) => {
  Entry.all()
  .then( entries => {
    return res.json(entries);
  })
  .catch( error => {
    return res.status(400).send(error)
  });

router.post('/', (req, res) => {
  const { amt, description, date, type } = req.body;
  Entry.create({ amt, description, date, type })
    .then( entry => {
      return res.json(entry);
    })
    .catch( error => {
      return res.status(400).send(error)
});

module.exports = router;