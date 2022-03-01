const cors = require("cors")
const express = require("express");
//const { header } = require("express/lib/request");

const app = express()
const PORT = process.env.PORT || 3001
/********************/ 
const path = require('path');
/******************* */
app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

 app.get("/movies", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}

   res.sendFile(path.join(__dirname, '/movies.json'));
}) 

app.post("/users", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}

   res.sendFile(path.join(__dirname, '/users.json'));
}) 

app.get("/ratings", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}

   res.sendFile(path.join(__dirname, '/ratings.json'));
}) 

app.put("/ratings", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}

   res.sendFile(path.join(__dirname, '/ratings.json'));
}) 
       

  

app.listen(PORT , ()=>{
     console.log(`STARTED LISTENING ON PORT ${PORT}`)
});


/* ------------------------------- Login Script --------------------------------- */

/* app.get("/user", (req ,res)=>{
   headers={"http_status":200, "cache-control": "no-cache"}
   body=
   [
      {
         "id": 1,
         "username": "Quentin",
         "password": "KillBill"
      },
      {
         "id": 2,
         "username": "Kate",
         "password": "Titanic"
      },
      {
         "id": 3,
         "username": "Morgan",
         "password": "Shawshank"
      },
      {
         "id": 4,
         "username": "Brad",
         "password": "Se7en"
      }
   ]
}) */

var objUser = [
   {
      id: 1,
      username: "Quentin",
      password: "KillBill"
   },
   {
      id: 2,
      username: "Kate",
      password: "Titanic"
   },
   {
      id: 3,
      username: "Morgan",
      password: "Shawshank"
   },
   {
      id: 4,
      username: "Brad",
      password: "Se7en"
   }
]

var objUserRating = [
   {
      id: 1,
   }
]

function getInfo(){
   var username = document.getElementById("username").value
   var password = document.getElementById("password").value

   for(i = 0; i < objPeople.length; i++){
      if(username ==objPeople[i].username && password == objPeople[i].password){
         console.log(username + " är inloggad")
         return
      }
   }
   console.log("Felaktigt användarnamn eller lösenord")
}