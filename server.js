
const express = require('express')

const app=express()
app.use(express.json())

app.get('/resume',(request,response)=>{
    const resume={
        'name':"harshini"
    }
    response.json(resume)
})

app.get('/bio',(request,response)=>{
    const bio={
        'name':"harsh"
    }
    response.json(bio)
})
app.get('/skill',(request,response)=>{
    const skill={
        'skill':"html,css,js,ml"
    }
    response.json(skill)
})
app.get('/users/:userid',(request,respond)=>{
    const userId=request.params.userid
    console.log (userId)
    response.status(200)

})
app.post('/login',(request,response)=>{
    const email=request.body.emailId;
    const password=request.body.password;
    console.log(email)
    console.log(password)
    response.send(200)
})
app.get('/movie',(request,response)=>{
    const title=request.query.title;
    const producer=request.query.producer;
    console.log(title)
    console.log(producer)
    response.send(200)
})
app.listen(9002,()=>{
    console.log('i have started')
})