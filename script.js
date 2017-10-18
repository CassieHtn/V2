$(document).ready(function(){

$(".test").click(function(){
  $("header").toggle(1000);
  $("header").toggle(1000);
});

$.getJSON(" https://api.airtable.com/v0/appppJm5kCAs0HjO8/musics?api_key=keynjL8mX74AKNlHU",
					function(data) {
          console.log(data);
          $.each(data.records, function(key,val)  {
            console.log(val.fields.title);
            $('<li>'+val.fields.title+'</li>').appendTo('#musiques');


        });


      }

  );

});
