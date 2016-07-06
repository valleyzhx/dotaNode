var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var func = req.query.func;

	if (func == "getConfigure") {
    var name = req.query.name;
    var url = 'http://www.zhanqi.tv/api/static/game.lives/10/20-1.json';
    if (name == 'lol') {
      url = 'http://www.zhanqi.tv/api/static/game.lives/6/30-1.json';
    }
    var dic = {'zqlist':url,'zqlive':'http://dlhls.cdn.zhanqi.tv/zqlive/','videojs':'function getVideoM3u8(type){ return BuildVideoInfo.m3u8src(type); }'};
    res.send({'code':0,data:dic});
	}else{
		res.send({'code':-1,message:'丢失参数'});
	}

});

module.exports = router;
