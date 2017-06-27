var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'overwatchdb.cnfimyrdxarp.us-east-2.rds.amazonaws.com',
    user: 'usradmin',
    password: 'vir2017.',
    database: 'vir'
});

module.exports = {

    getCategories(req, res) {

        connection.connect(function (error) {
            if (error) {
                connection.end();
                res.status(500).send({ message: error.message });
            }
            else {
                var cat = req.params.category;
                var query = "select * from Advertiser_Campaigns where category = " + cat + " and status = 1";
                //Run query
                connection.query(query, function (error, results, fields) {
                    connection.end();
                    if (error) {
                        res.status(500).send({ message: error.message });
                    }
                    else {
                        res.status(200).send({ result: results });
                    }
                });
            }
        });

    },
};