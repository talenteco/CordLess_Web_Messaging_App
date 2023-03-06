const router = require('express').Router();
let Messages = require('../models/messages.model')

router.route('/').get((req, res)=>{
    
    Messages.find()
    .then(messages =>{ 
        res.json(messages)
    })
    .catch(err => res.status(400).json('Error : '+err))
})

router.route('/post').post((req, res)=>{
    Messages.create(req.body).catch(err => res.status(400).json('Error : '+err))

})

module.exports = router;