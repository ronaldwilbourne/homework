//connectoig to the server?loading express
const express = require('express')

//call the function and return express that you istalled by "npm instal express" app(object)
const app = express()

//create your port
const port = 3000

//set up a fruits array
//task use queries (req.queries to fileter the data back to client
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    },
    {
        name: 'lemon',
        color: 'yellow',
        readyToEat: false
    },
    {
        name: 'lime',
        color: 'green',
        readyToEat: false
    }
];

//assumed its a root route so setting it up using ('/') 
//pass it 2 arguments one is path and rhe second is ewuth the homies req and res
//
app.get('/fruits', (req,res)=> {
    res.send(fruits[req.params.indexOfFruitsArray])

})
//app.listen method will spin up our server it might be 8800 and then pass it a call 
//back fuction becaecus it takes alot of time good for dev to know vertything is working finr 
//for https request from clients 
app.listen(port, ()=>{
    console.log('listening on port:', port)
})
