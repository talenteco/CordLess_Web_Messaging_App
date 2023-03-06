const router = require('express').Router();
let Messages = require('../models/messages.model')

router.route('/').get((req, res)=>{
    
    Messages.find()
    .then(messages =>{ 
        //console.log("Inside Get Request "+messages)
        res.json(messages)
    })
    .catch(err => res.status(400).json('Error : '+err))
})

router.route('/post').post((req, res)=>{

    console.log("inside put request")
    console.log(req.body)
    Messages.create(req.body).catch(err => res.status(400).json('Error : '+err))
    //res.json({"Message":"Success:", "Data": req.body})

})

module.exports = router;