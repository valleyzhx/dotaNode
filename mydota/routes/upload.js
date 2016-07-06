var express = require('express');
var router = express.Router();
var videoM3u8 = require('../model/videoM3u8');

router.get('/', function(req, res, next) {

	var videoId = req.query.videoId;
	var body = req.query.body;
	if (videoId && body) {
		videoM3u8.findOne({id:videoId},function(err,video){
		if (err) {
			res.render('error',{
				message:err.message,
				error:err
			});
		}else{
			
			if (!video) {
				var dic = JSON.parse(body);
				console.log(dic);
				videoM3u8.create({id:videoId,m3u8:dic});
			}
			res.send({'code':0,data:{}});

		}});

	}else{
		res.send({'code':-1,message:'丢失参数'});
	}

});

module.exports = router;