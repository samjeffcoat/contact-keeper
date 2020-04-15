const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/Contact');
const router = express.Router();

// @ route          GET api/contacts
// @desc            Get all users contacts
// @access          Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ route          Post api/contacts
// @desc            add new contact
// @access          Private
router.post('/', (req, res) => {
  res.send('Get all contacts');
});

// @ route          Put api/contacts/:id
// @desc            Update contact
// @access          Private
router.put('/:id', (req, res) => {
  res.send('Update contact ');
});

// @ route          delete api/contacts/:id
// @desc            delete contact
// @access          Private
router.delete('/:id', (req, res) => {
  res.send('delete contact ');
});

module.exports = router;
