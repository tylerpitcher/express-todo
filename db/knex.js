const knex = require('knex');

// Connect knex to database.
const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: 'db.sqlite'
    },
    useNullAsDefault: true
});

module.exports = connectedKnex;