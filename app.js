const cors = require("cors")
const express = require("express");
const { header } = require("express/lib/request");

const app = express()
const PORT = process.env.PORT || 3000

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}
   body={"status": "available"}
   res.status(200).send(body)
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

var objPeople = [
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