const cors = require("cors")
const express = require("express");
const { header } = require("express/lib/request");

const app = express()
const PORT = process.env.PORT || 3001

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

/* app.get("/", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}
   body={"status": "available"}
   res.status(200).send(body)
}) */


   app.get("/", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}
   body=
   [
      {    
      "title" : "Jaws",
      "description": "When a killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
      "imageurl": "https://images-na.ssl-images-amazon.com/images/I/81NA9YKJQRL.jpg"
  },
  {
      "title" : "Pulp Fiction",
      "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "imageurl": "https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/2212/original.jpg"
  },
  {
      "title" : "Back to the future",
      "description": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown",
      "imageurl": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
      "title" : "Star Wars",
      "description": "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
      "imageurl": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
  }
]
   res.set('Content-Type', 'application/json');
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