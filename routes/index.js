const express = require('express') //importing express library
const router = express.Router()
const randomWYRQuestion = require('../model/wyr_questions')//The '..' backs out of the folder this file is apart of. Gets to the same level as the 'model' folder to access it. 
//randomWYRQuestion represents a function definition.

router.get('/', function(req, res, next) {
    res.send('Placeholder for home page')
})//need a route to handle home page. So the user can make a request to access the wyr question.

//get request for the question
router.get('/wyr', function(req, res, next){
    // const wyr = {
    //     'question': 'Live in a circle house or a triangle house',
    //     'answer1': 'Circle house',
    //     'answer2': 'Triangle house'
    // } 
    //Control + K + C on highlighted code to comment out.
    
    const wyr = randomWYRQuestion()
    res.json(wyr)//send a response in the form of JSON. Used instead of res.render() in a previous project

})

module.exports = router //create router. Export get response