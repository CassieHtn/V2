$(document).ready(function(){

$(".musiques").click(function(){

});

$.getJSON(" https://api.airtable.com/v0/appppJm5kCAs0HjO8/musics?api_key=keynjL8mX74AKNlHU",
					function(data) {
          console.log(data);
          $.each(data.records, function(key,val)  {

            $("<div class='col-md-3'><iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe></div>").appendTo('#musiques');

        });


      }

  );

  $(function(){
    $(".fancy-button").mousedown(function(){
      $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
          $(this).removeClass('active');
      })
       $(this).addClass("active");
    });
  });

});
