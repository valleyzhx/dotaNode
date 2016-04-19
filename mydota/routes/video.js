var express = require('express');
var router = express.Router();
var superagent = require('superagent');

var VideoM3u8 = require('../model/videoM3u8');

/* GET home page. */
router.get('/', function(req, res, next) {

var id = req.query.id;
if (id) {
	VideoM3u8.findOne({id:id},function(err,doc){
		if (err) {
			res.render('error',{
				message:err.message,
				error:err
			});
			return;
		}
		if (!doc) {
			res.send({'code':0,data:{}});
		}else{
			var result = {'id':doc.id,m3u8:doc.m3u8};
			res.send({'code':0,data:result});
		}
	});
}else{
	superagent.get('https://api.youku.com/quality/video/by/category.json?client_id=e2306ead120d2e34&cate=10&count=10')
			  .end(function(err,sres){
		  		if (err) {
					return next(err);
				}
				res.send(sres.text);
  	//res.render('video', { title: 'DotA视频' });

	});
}

});

module.exports = router;