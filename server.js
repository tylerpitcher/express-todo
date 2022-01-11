/*
    Main file, contains routes available to user.
*/
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const passport = require('passport');
const db = require('./db/notes')
require('./passport');

const app = express();

/*
    Middleware authentication function used to see if users have logged in.
    If so it redirects them to the homepage otherwise they are redirected
    to login.
*/
function isAuthenticated(req, res, next) {
    return req.user ? next() : res.redirect('/login');
}

/* Middleware */
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

/* 
    Send users to login via google.
*/
app.get('/login', passport.authenticate('google', { scope: ['email', 'profile'] }));

/*
    Route to logout existing users and redirect them to login page.
*/
app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/login');
});

/*
    Users redirected here after attempting to login via google.
    If successful they are redirected to the homepage else they
    are sent back to the login page.
*/
app.get('/callback', passport.authenticate(
        'google',
        { 
            successRedirect: '/',
            failureRedirect: '/login'
        }
    )
);

/*
    Homepage for user's notes.
*/
app.get('/', isAuthenticated, async (req, res) => {
    const notes = await db.getNotes(req.user.email)
    res.status(200).render('index', { notes:notes });
});

/*
    Handles post requests from homepage to add new notes.
*/
app.post('/', isAuthenticated, async (req, res) => {
    await db.createNote(req.user.email, req.body.note);
    res.redirect('/');
});

/*
    Homepage sends post requests here to delete existing notes.
*/
app.post('/remove', async (req, res) => {
    await db.deleteNote(req.body.id);
    res.redirect('/');
});

app.listen(8081);