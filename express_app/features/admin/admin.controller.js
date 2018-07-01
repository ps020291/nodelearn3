var pgdb = require('../../db/pgdb');
module.exports = {
    search: search,
    newGroup: newGroup,

}

function search(req, res) {

    pgdb.query('select * from groups', (err, users) => {
        if (err) {
            res.json({
                status: false,
                msg: err.message
            });
        } else {
            res.json({
                data: users.rows
            });
        }


    });
}

function newGroup(req, res) {
    var query = "insert into groups(group_name,active) values ($1,$2) returning id";
    var values = [req.params.groupname, true];
    pgdb.query(query, values, (err, row) => {
        if (err) {
            res.json({
                status: false,
                msg: err.message
            });
        } else {
            res.json({
                data: row
            });
        }
    });
}