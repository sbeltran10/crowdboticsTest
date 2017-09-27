var router = require('express').Router();
var RandomName = require('../models/RandomName.js');

router.post('/', function (req, res) {
  var newName = new RandomName(req.body)
  newName.save(function (err, doc) {
    if (err) {
      console.log(err)
      res.status(500).send('The name could not be saved')
    }
    else {
      res.status(200).send(doc)
    }
  })

});

router.get('/:id', function (req, res) {
  RandomName.findById(req.params.id, function (err, doc) {
    if (err) {
      console.log(err)
      res.status(500).send('There was an error retrieving the name')
    }
    else if (!doc) {
      res.status(200).send('No name with that id was found')
    }
    else
      res.status(200).send(doc)
  })
});

router.put('/:id', function (req, res) {
  RandomName.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, doc) {
    if (err) {
      console.log(err)
      res.status(500).send('There was an error updating the name')
    }
    else if (!doc) {
      res.status(200).send('No name with that id was found')
    }
    else {
      res.status(200).send(doc)
    }
  })

});

router.delete('/:id', function (req, res) {
  RandomName.remove({ _id: req.params.id }, function (err, doc) {
    if (err) {
      console.log(err)
      res.status(500).send('There was an error deleting the name')
    }
    else if (!doc) {
      res.status(200).send('No name with that id was found')
    }
    else
      res.status(200).send('The name was deleted')
  })

});

router.get('/', function (req, res) {
  RandomName.find(function (err, docs) {
    if (err) {
      console.log(err)
      res.status(500).send('There was an error retrieving the list of names')
    }
    else
      res.status(200).send(docs)
  })

});

module.exports = router;
