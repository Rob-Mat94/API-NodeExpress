const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

router.post('/', stuffCtrl.createThing);

// Modification
router.put('/:id', stuffCtrl.modifyThing);

// Supression 
router.delete('/:id', stuffCtrl.deleteThing);

// Obtenir un objet particulier 
router.get('/:id', stuffCtrl.getThing);

// Obtenir la liste des objets
router.get('/', stuffCtrl.getAllThings);

module.exports = router;