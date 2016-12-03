var themes= ['cat','wargreymon','digimon','egg','tom','aliens'];

//main function to display the themes
// $('#buttonSpot').on('click', function(){
function displayTheme(thing){
    // for (j=0; j<themes.length;j++){
    // var test = themes[i];
    // var thing = $('.themers').data('name');//this is to store the data name value//
    // var thing = $(this).data('name');
    // if (test==thing)
    // {


    console.log(thing);//to check if it works//

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'}).done(function(response){
        console.log(queryURL);

        //Storing the data from the AJAX request in the results variable//
        var results = response.data;
//        this is a test to see if it gives anything
        console.log(response);
//        going through a loop to find exactly what we were looking for//
        for (var i = 0; i <results.length; i++)
            {   //This rating system is to filter out the uncessary images that are rated "r" //
                if (results[i].rating !== 'r' && results[i].rating !== 'pg-13'){
                    //We are creating a paragraph variable//
                var p = $('<p>');
//                    storing the rating of the giff
                var ratings = results[i].results;
//                    assigning a div section
                var thingDiv = $('<div class ="theme">');
//                    storing the results
                var pOne = $('<p>').text("Rating: "+ results[i].rating);
//                    storing the giffs
                var image = $('<img class="gif">').attr("src", results[i].images.fixed_height.url);
//                var image = $('<img>').attr('data-still', results[i].images.fixed_width_still.url);



//                    outputting to the HTML file
                thingDiv.append(p);
                thingDiv.append(pOne);
                thingDiv.append(image);
//                    They are all outputted here//
                $('#gifsGoHere').prepend(thingDiv);

            }
            }


    })



// e}







}

//with this function the giffs would stay still//
$('.gif').on("click", function(){
        var state = $(this).attr('data-state');
        if (state ==='still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }
        else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });


//This is the button generator that would help us to generate buttons //
function buttonGen()
{
    $('#buttonSpot').empty();//to clear the functions otherwise we would see the same buttons twice//
    for (var i =0; i<themes.length; i++)
        {
//            a button is generated
            var a = $('<button>');
//            we are adding a class
            a.addClass("themers");
            // adding an 'id' to the button//
            a.attr('id', themes[i]);
            //
            a.attr('data-name', themes[i]);
            a.text(themes[i]);
            $('#buttonSpot').append(a);
        }
}
//This function would take the data from the textbox area and place into the array where it would then generate another button//
$('#inputted').on('click', function(){

    var entered = $('#input').val().trim();
    themes.push(entered);
    console.log(themes);
    $('#input').val('');
    buttonGen();//
    // var a = $('<button>');
    // a.addClass("themers");
    // a.attr('id', themes[themes.length-1]);
    // a.attr('data-name', themes[themes.length-1]);
    // a.text(themes[themes.length-1]);
    // $('#buttonSpot').append(a);
    return false;
})

$('#buttonSpot').on('click','button','name', function(){
    $('#gifsGoHere').empty();
    var thing = $(this).data('name');
    displayTheme(thing);
})

// displayTheme();
buttonGen();
// displayTheme();


