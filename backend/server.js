const express = require('express');
const app = express();
const passport = require('passport');
const mongo = require('mongoose');
const PORT = process.env.PORT || 2000;
const HOST = process.env.HOST || 'localhost';

const movieRoutes = require("./routes/movieRoutes.js")
const userRoutes = require("./routes/userRoutes.js")


/* Por definir si se utilizan o no:

const flash = require('express-flash')
const session = require('express-session')
*/

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

/*Mongoose logic to connect to db */

//Routes
app.use(userRoutes);
app.use(movieRoutes);


app.listen(PORT, () => console.log(`Estamos yuk en http://${HOST}:${PORT}`))