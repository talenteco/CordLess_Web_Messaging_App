const router = require('express').Router();
let Messages = require('../models/messages.model')

router.route('/').get((req, res)=>{
    console.log("Inside Get Request")
    Messages.find()
    .then(messages =>{ 
        console.log("retreiving messages")
        res.json(messages)
    })
    .catch(err => res.status(400).json('Error : '+err))
})

router.route('/post').post((req, res)=>{

    console.log("inside put request")
    console.log(req.body)
    Messages.create(req.body)
    res.json(req.body)

})

module.exports = router;