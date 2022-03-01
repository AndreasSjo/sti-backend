const cors = require("cors")
const express = require("express");
//const { header } = require("express/lib/request");

const app = express()
const PORT = process.env.PORT || 3001

class User{
   constructor(name, password){
      this.name = name
      this.password = password
   }
}

let users = []
users.push(new User("name1", "password1"))
users.push(new User("name2", "password2"))
users.push(new User("name3", "password3"))

let users2 = {} /* Fungerar inte */
console.log("we are going to loop!")
for(user in users){
   console.log(users[user].name)
   users2[users[user].name] = users[user].password 
}

app.get("/auth", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}
   let user = req.query.user
   let password = req.query.password
   let isAuth = req.query.password === "password"
   console.log(user)
   console.log(password)
   console.log(users2["user1"])
   res.send({"exits": isAuth})
})

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

app.get("/users", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}

   res.send(users)
   //res.sendFile(path.join(__dirname, '/users.json'));
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