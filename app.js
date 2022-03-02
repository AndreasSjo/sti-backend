const cors = require("cors")
const express = require("express");
//const { header } = require("express/lib/request");

const app = express()
const PORT = process.env.PORT || 3001

const session = require('express-session');
const mysql = require('mysql');
var path = require('path')
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'filmerDB'
});



app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

 app.get("/movies", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}

   res.sendFile(path.join(__dirname, '/movies.json'));
}) 

app.put('/auth', function(request, response) {
	console.log("auth anropet fungerar")
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		console.log("username och password fungerar ")
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/index.html');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/index', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

app.post("/users", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}
	console.log("koppling fungerar")
   /* res.sendFile(path.join(__dirname, '/users.json')); */
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


