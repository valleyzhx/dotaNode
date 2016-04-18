var express = require('express');
var router = express.Router();
var superagent = require('superagent');

var VideoM3u8 = require('../database/videoM3u8');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {

	  var id = req.query.id;
	  var type = req.query.type;
	  if (!type) {type = 'mp4'};
if (id) {
	VideoM3u8.findOne({id:id},function(err,doc){
		if (err) {
			console.log(err);
		}
		if (!doc) {
			superagent.get('http://v.youku.com/v_show/id_'+id+'.html')
			.set('User-Agent','Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E230 Safari/601.1')
			.end(function(err,sres){
				// var $ = cheerio.load(sres.text);
				// var src = $.BuildVideoInfo.m3u8src(type);
				// console.log('src == ' + src);
				// if (src) {
				// 	req.send(src);
				// 	return;
				// }
				res.send(sres.text);
			});
		}else{
			res.send(doc);
		}
	});
	return;
}


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