# Express Todo List
Todo list created with express.js.

```
├── LICENSE
├── README.md
├── node_modules
├── package.json
├── db
│   ├── knex.js            ======> Connects SQL query builder with db.sqlite
│   └── notes.js           ======> SQL queries for notes table
├── static
│   ├── css
│   │   ├── responsive.css ======> Modifies website for mobile viewing
│   │   └── style.css      ======> Main style file
│   └── notes.js
│       └── remove.js      ======> Sends delete requests to backend
├── views
│   └── index.ejs
├── .gitignore
├── .env                   ======> Blank enviroment file for Google credentials
├── db.sqlite              ======> Blank db file
├── passport.js            ======> Handles Google auth
└── server.js              ======> Main server file
```

## Screenshot
<img src="https://i.imgur.com/2uwGWbi.png" height="400">
