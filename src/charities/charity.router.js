const CharityController = require('./charity.controller');
const { Router } = require('express');

var typeorm = require("typeorm"); 
var EntitySchema = typeorm.EntitySchema; 


connection = typeorm.createConnection({ 
   "type": "postgres", 
   "host": process.env.HOST, 
   "port": process.env.PORT, 
   "username": process.env.USERNAME, 
   "password": process.env.PASSWORD, 
   "database": process.env.DATABASE,
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
router.put('/charities/funds/:id', charityController.updateCharityFunds);
router.delete('/charities/:id', charityController.deleteCharity);

module.exports = router;
