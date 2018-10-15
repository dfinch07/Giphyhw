$(document).ready(function(){

    $('button').on('click', function() {
        var superhero = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=kQXed3CfJ8pdNm2nyFTnaaLtdaKz2ZdP&q=superhero&limit=10&offset=0&rating=PG-13&lang=en";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var heroesDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var heroImage = $('<img/>');

                    heroImage.addClass('anImg')

                    heroImage.attr('src', results[i].images.fixed_height.url);

                    heroImage.attr('data-still', results[i].images.fixed_height_still.url)

                    heroImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    heroesDiv.append(p);

                    heroesDiv.append(heroImage);

                    heroesDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var heroes = [''];

    
        
        $('#theButton').on('click', function(){
            var heroButton = $("#gif-input").val();
            

            var newButton = $("<button/>").addClass( "btn btn-info heroes").attr('data-name',heroButton).html(heroButton).css({'margin': '9px'});
            
            $("#heroButtons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?api_key=kQXed3CfJ8pdNm2nyFTnaaLtdaKz2ZdP&q=superhero button&limit=10&offset=0&rating=PG-13&lang=en";
                console.log(heroButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var heroesDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var heroesImage = $('<img/>');

                    heroesImage.addClass('anImg')

                    heroesImage.attr('src', results[i].images.fixed_height_still.url);

                    heroesImage.attr('data-still', results[i].images.fixed_height_still.url)

                    heroesImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    heroesDiv.append(p);

                    heroesDiv.append(animalImage);

                    heroesDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});