//This is the array that would have the buttons show up//
var themes= ['cat','wargreymon','digimon','egg','tom','aliens'];


//This will be the button generator//
function buttonGen()
{
    $('#buttonSpot').empty();
    for (var i =0; i<themes.length; i++)
        {
//            $('#buttonSpot').append("<input class='btn' type='button' value= '" + themes[i] + "' data-name= '" + themes[i] + "'/>");
//            console.log(themes[i]);
            var a = $('<button>');
            a.addClass("theme");
            a.attr('data-name', themes[i]);
            a.text(themes[i]);
            $('#buttonSpot').append(a);
        }
}


//This is for the click button//
$('#inputted').on('click', function(){

//    var entered = $('#input').val();
//    console.log(entered);
//    console.log(themes);
//    themes.push(entered);
//    //The action below this would help generate the button only for the newly entered data from the array//
//    $('#buttonSpot').append("<input class='btn' type='button' value= '" + themes[themes.length-1] + "'data-name= '" + themes[themes.length-1] + "'/>");
//    $('#input').val("");
    var entered = $('#input').val().trim();
    themes.push(entered);
    $('#input').val('');
    buttonGen();
})


//This is where the giphy's are going to be pulled from//
function displayTheme(){
    var thing = $(this).attr('data-name');
    console.log(thing);
   var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'}).done(function(data){

        var results = response.data;
        console.log(response);
        for (var i = 0; i <results.length; i++)
            {

                var thingDiv = $('<div class ="theme">');
                var pOne = $('<p>').text("Rating: "+ results[i].rating);
                var image = $('<img>').attr("src", results[i].images.fixed_height.url);
                thingDiv.append(p);
                thingDiv.append(image);

                $('#gifs').prepend(thingDiv);

            }


    })


}
$('.theme').on('click',function(){
    displayTheme();
});





buttonGen();
