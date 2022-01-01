const express = require('express');
const app = express();
const cors = require('cors');
const port = 7000;

app.use(cors());

/* we can use body parser as middleware */
app.use(express.json());

const users=[
    {id:'0', name:"mehedi" , profession:'baperHotel'},
    {id:'1', name:"hasan" , profession:'baperHotel'},
    {id:'2', name:"hridoy" , profession:'baperHotel'},
    {id:'3', name:"jhony" , profession:'baperHotel'},
    {id:'4', name:"Adnan" , profession:'baperHotel'},
    {id:'5', name:"Adnan" , profession:'baperHotel'},
    {id:'6', name:"Adnan" , profession:'baperHotel'},
    {id:'7', name:"Adnan" , profession:'baperHotel'},
    {id:'8', name:"Adnan" , profession:'baperHotel'},
    {id:'9', name:"Adnan" , profession:'baperHotel'},
];
/* app.get('/users', (req, res)=>{
    res.send(users);
});
// dynamic  api params 
app.get("/users/:id",(req,res)=>{
    const id = req.params.id ;
    const user = users[id];
    res.send(user)
    console.log(req.params.id);
}); */

/* -----post method ------ */
app.post("/users",(req,res)=>{
    const newUser = req.body; 
    newUser.id = users.length;
    console.log(req.body)
    res.send(JSON.stringify(newUser));
    /* shortCut version
        res.json(newUser);
    */
});

/* --------- ------------- */
app.get("/fruits", (req,res)=>{
    res.send(["mangos, banana, apple(not iphone)"])
});
app.get("/fruits/mango", (req, res)=>{
    res.send("yammy mango")
});
// access query 

app.get("/users", (req,res)=>{
    const search = (req.query.search);
    console.log(req.query)
    if(search){
        const searchReasult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchReasult);
    }
    else{
        res.send(users);
    }
});



app.listen(port, ()=>{
    console.log("port listen", port);
});


