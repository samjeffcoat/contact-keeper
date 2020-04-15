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
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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
