//load in express
const express = require('express')

//INDUCES I-INDEX, N-NEW, D-DELETE/DESTROY, U-UPDATE, C-CREATE, E-EDIT, S-SHOW.
 

//use express object and a special method called router to return us a roter object that it will do a request for us.

const router = express.Router()

//lets load our fruits data
const fruits = require('../models/fruits.js')


//set up a fruits array
//task use queries (req.queries to fileter the data back to client


//assumed its a root route so setting it up using ('/') 
//pass it 2 arguments one is path and rhe second is ewuth the homies req and res

//router.get('/index/:name', (req,res)=> {
  //  res.send(fruits[req.params.index])
    //console.log(req.query)

//})

//set up 'root' toute(homepage)
router.get('/',(req,res) =>{
    res.send('<h1>hello world</h1>')

})

    //set up "index" route(product page)
router.get('/',(req,res)=>{
    res.send(fruits)

})
    //set up "new" route display html form for creating a new photo
router.get('/new',(req,res)=>{//u dont need to use new u can use createANewFruit
    res.send('<Form>create photo</Form>')
})

    //set up "create" route creates a new photo
router.post('/',(req,res)=>{
    res.send('create a new fruit!')
})

    //set up "show route"(specific product)

router.get('/:index', (req,res)=>{
    //req object is what the client isasking the server that could be an array(params(numbers))/queries((names&color)key value pair)
    //it does that using console.log(req.param/req.query)
    //on the other hand hommie res is responding to the client from the server
    // it does that using res.send.
    //instead of req.param being an empty object it will be an object with the property of index
    //same routerlies to queries if the client has a query()
    //console.log(req.params, ': parameters')
    //console.log(req.query, ': queries')
  
    //res.send(fruits['req.params.index'])
    res.render('Show')
})
    //set up "edit" route return an HTML form for editing a photo
router.get('/:index/edit',(req,res)=>{
    res.send('<form>edit fruit</form>')
})

    //set up "update" route update a specific photo
router.put('/:index',(req,res)=>{
    res.send('updating a fruit at index!(in db)')
})
    //set up "destroy route"
router.delete('/:index', (req,res)=>{
    res.send('Deleting a fruit at an index!(in db)')
})

module.exports = router

//router.listen method will spin up our server it might be 8800 and then pass it a call 