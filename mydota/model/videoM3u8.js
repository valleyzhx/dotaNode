var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/videodb');

var Schema = mongoose.Schema;
var videoSchema = new Schema({
	id: String,
	m3u8:{
		mp3:String,
		hd2:String
	}
});

var VideoM3u8 = mongoose.model('VideoM3u8',videoSchema);
module.exports = VideoM3u8;

