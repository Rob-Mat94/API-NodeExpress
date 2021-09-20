const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../controllers/middleware/auth');
router.post('/', auth, stuffCtrl.createThing);

// Modification
router.put('/:id', auth, stuffCtrl.modifyThing);

// Supression 
router.delete('/:id', auth, stuffCtrl.deleteThing);

// Obtenir un objet particulier 
router.get('/:id', auth, stuffCtrl.getThing);

// Obtenir la liste des objets
router.get('/', auth,  stuffCtrl.getAllThings);

module.exports = router;