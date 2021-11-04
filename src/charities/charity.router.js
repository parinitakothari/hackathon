const CharityController = require('./charity.controller');
const { Router } = require('express');

var typeorm = require("typeorm"); 
var EntitySchema = typeorm.EntitySchema; 


connection = typeorm.createConnection({ 
   "type": "postgres", 
   "host": "localhost", 
   "port": 54320, 
   "username": "postgres", 
   "password": "cibona2!", 
   "database": "typeorm_charity_db",
   "synchronize": true, 
   "logging": false, 
   entities: [ new EntitySchema(require("../entity/charity.json")) 
   ] 
});

const charityController = CharityController();

const router = Router();

router.post('/charities', charityController.createCharity);
router.get('/charities/:id', charityController.getCharityById);
router.get('/charities/funds/:id', charityController.getCharityFundsById);
router.get('/charities', charityController.getAllCharities);
router.put('/charities/:id', charityController.updateCharity);
router.delete('/charities/:id', charityController.deleteCharity);

module.exports = router;
