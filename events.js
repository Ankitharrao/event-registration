/*

Create a RESTful API using Node.js and Express to manage events and registrations
*/
const express = require('express')

const app=express()
app.use(express.json())
let id=1;
//creating events
let events=[]
app.post('/events',(request,response)=>{
    events.push({
    'title':request.body.title,
    'description':request.body.description,
    date: Date.parse(request.body.date),
    capacity:request.body.capacity,

})

console.log(events)
response.send(200);
})
//getting all events
app.get('/events',(request,response)=>{
    response.json(events);
    response.send(200);
})
//getting event by title
app.put('/events',(request,response)=>{
    let evntObj = events.find((event)=>event.title===request.body.title)
    if(evntObj){
        evntObj.description=request.body.description || evntObj.description
        evntObj.date= Date.parse(request.body.date) || evntObj.date
        evntObj.capacity=request.body.capacity || evntObj.capacity
        response.send('Event updated successfully!');
    }
    else{
        response.send('Event not found!');
    }



})
//deleting event by title

app.delete('/events',(request,response)=>{
    events=events.filter((event)=>event.title!=request.body.title) //delete event by title
    response.send('Event deleted successfully!');
  
}) 
let registration=[];
//creating registration
app.post('/registration',(request,res)=>{
    let user=registration.find(reg=>reg.name===request.body.name)
    if(user){
        return res.send('User already REGESISTED.');
    }
    else{
        let eventReg=events.find(event=>event.title===request.body.competetion)
        if(eventReg.capacity===0){
            return res.send('No seats available for this event.');
        }
        else{
            registration.push({
                'id':id++,
                'name':request.body.name,
                'competetion':request.body.competetion,
                'email':request.body.email
            })
            console.log(registration)
            eventReg.capacity-=1;
        }



    }
   res.send('Registration successful!');

    
})
//getting all registrations
app.get('/registration',(request,response)=>{
    response.json(registration);
    response.send(200);
})
//getting registration by name
app.get('/registration/:id',(request,response)=>{
    const uid=parseInt(request.params.id);

    const regObj=registration.find(reg=>reg.id===uid)
    if(regObj){
        response.json(regObj);
    }
    else{
        response.send('Registration not found');
    }
    
})
//updating registration 
app.put('/registration/:id',(request,response)=>{
    const uid=parseInt(request.params.id);

    const regObj=registration.find(reg=>reg.id===uid)
    if(regObj){
        regObj.name=request.body.name || regObj.name;
        regObj.competetion=request.body.competetion || regObj.competetion;
        regObj.email=request.body.email || regObj.email;
        response.send('Registration updated successfully');
    }
    else{
        response.send('Registration not found');
    }           
})
//deleting registration(CANCELLING by name)
app.delete('/registration',(request,response)=>{    
    
    const regObj=registration.find(reg=>reg.name===request.body.name)
    if(regObj){
        const eventReg=events.find(event=>event.title===regObj.competetion)
        eventReg.capacity+=1;
        registration=registration.filter(reg=>reg.name!=request.body.name)
        response.send('Registration deleted successfully!');
    }
    else{
        response.send('Registration not found!');
    }           
})
//listening to server
app.listen(9002,()=>{
    console.log('i have started')
})

//example input for events and registration
/*
{
    "title":"coding",
    "description":"24 hours coding",
    "date":"2025-05-05",
    "capacity":50
    
}
    {
    "name":"Anitha",
    "competetion":"coding",
    "email":"anitha@123"
}
    */