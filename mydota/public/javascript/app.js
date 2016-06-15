var main = function () {

  $.getJSON("https://api.youku.com/quality/video/by/category.json?client_id=e2306ead120d2e34&cate=10&count=12",
    function(result){
      var list = result["videos"];

      var rows = list.length/3;
      var index = 0;
      for (var i = 0; i < rows; i++) {
        var container =  $('.videoList').children().first();
            container.append("<div class ='row'></div>");
        var rowDiv = container.children().last();
        for (var j = 0; j < 3; j++) {
          var video = list[index];
          var title = video.title;
          var videoUrl = "http://www.idreams.club/mydota/video.html?videoid="+video.id;
          var thumbnail = video.thumbnail;
          var published = video.published;
          var minutes = video.seconds;
          var user_name = video.user.user_name;
          var view_count = video.view_count;

          var colDiv = $('<div class=\'col-sm-4\'></div>')
          rowDiv.append(colDiv);

          var vDiv = $('<div class=\'video\'></div>');
          colDiv.append(vDiv);

          var thumDiv = $('<div class=\'v-thumb\'><img></div>');
          var thum_tagrb = $('<div class=\'v-thumb-tagrb\'><span></span></div>');
          thumDiv.append(thum_tagrb);
          thumDiv.children("img").attr('src',thumbnail);
          thum_tagrb.children("span").text(minutes);
          vDiv.append(thumDiv);

          var linkDiv = $('<div class=\'v-link\'<a></a></div>');
          linkDiv.children("a").attr({'href':videoUrl,'target':"_blank"});
          vDiv.append(linkDiv);

          var mediaDiv = $('<div class=\'v-media\'</div>');
          var media_titleDiv = $('<div class=\'v-media-title\'><a></a></div>');
          media_titleDiv.children('a').attr({'href':videoUrl,'target':"_blank"});
          media_titleDiv.children('a').text(title);
          mediaDiv.append(media_titleDiv);

          var media_numDiv = $('<div class=\'v-num\'<span></span></div>');
          media_numDiv.children("span").text("播放:"+view_count);
          mediaDiv.append(media_numDiv);

          vDiv.append(mediaDiv);

          index++;
        }
      }


    });

};


$(document).ready(main);
