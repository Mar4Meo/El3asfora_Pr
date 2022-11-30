// Express & DotEnv & Cors & Port \\

const express = require('express')

const app = express()

const dotenv = require('dotenv')

const cors = require('cors')

dotenv.config()

const Port = process.env.Port || 3003


//    Router    \\



// Configure File \\



//  Session & Connect-Flash & Passport  \\

const session = require('express-session')

const flash = require('connect-flash')

const passport = require('passport')

// Use Cors & express { urlencoded , Json } \\

app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

// Use Session & flash & Passport { initialize , session } \\

app.use(session({
    secret: '?El3asfora_Team#-!#@>',
    saveUninitialized: false,
    resave: true,
}))

app.use(flash())

app.use(passport.initialize())

app.use(passport.session())

// Use Express Static Folder & Set { Views Folder , View Engine } \\

app.use(express.static('public'))

app.set('views', './resources/views')

app.set('view engine', 'ejs')

// Home Page \\

app.get('/', (req , res) => {
    res.render('Index')
})


// Router Middleware \\



// Redirect Error 404 File \\

app.use((req , res) => {
    res.status(404).render('404')
})

// Listen Port  \\

app.listen(Port)