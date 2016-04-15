var express = require('express');
var router = express.Router();
var superagent = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {

	superagent.get('https://api.youku.com/quality/video/by/category.json?client_id=e2306ead120d2e34&cate=10&count=10')
	.end(function(err,sres){
		if (err) {
			return next(err);
		}
	res.send(sres.text);
  	//res.render('video', { title: 'DotA视频' });

	});

});

module.exports = router;