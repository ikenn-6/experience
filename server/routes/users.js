var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	global.connection.query('SELECT * from experiences', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({/*"status": 200, "error": null, "response": results*/
				 results			
		}));
			});
		});

module.exports = router;
