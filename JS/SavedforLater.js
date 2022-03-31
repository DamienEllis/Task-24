/*
    Author:           Damien Ellis
    Date completed:   2022/03/24
    Due date:         2022/03/24
    Task completed:   YES
    Task description: my developer portfolio save for later js functionality
*/

//wait till document is ready
$(document).ready(function () {

    //initialize line number
    let lineNo = 1;

    //iterate through the session storage object and get all keys
    Object.keys(sessionStorage).forEach(function(key){

        //build table consisting of session storage item, commecnt form and like button
        markup = "<tr><td width='60%' align='left' style='padding-right:50px;margin-left:30'>" 
            + sessionStorage.getItem(key) + "</td><td><form><a class='button'><span class='number'>0</span><span class='label'>Like</span></a></form></td>"
            +"<td><form><label>Comment</label><br><input type='text'></form></td></tr>";
        
        //initialize table body
        tableBody = $("#MySavedContent");

        //append table content to table body
        tableBody.append(markup);

        //increment line number
        lineNo++;
    }); 
    
    //set onclik listener to each a.button class
    $('a.button').click(function () {

        //if clicked class has been activated, remove and change wording
        if ($(this).hasClass('clicked')) {

            //remove class
            $(this).removeClass('clicked');

            //substract 1 from the wording
            $(this).find('span.number').html(parseInt($(this).find('span.number').html()) - 1);
            
            //change wording to like
            $(this).find('span.label').html('Like');
        }
        else {
            
            //add the clicked class and + 1 to wording
            $(this).addClass("clicked");$(this).find('span.number').html(parseInt($(this).find('span.number').html()) + 1);

            //change wording to dislike
            $(this).find('span.label').html('Dislike');
        }
    });
});

//set the new mouse pointer to the documents cursor and add animation to the cursor
$(document).mousemove(function(e) {
                    
    //set the image source of the cursor
    pointer = $('<img>').attr(
        {'src':'chrome://branding/content/about-logo.png'}
    );

    //set height and width prperties of the cursor
    pointer.height(30);
    pointer.width(30);

    //and append them to document
    $(document.body).append(pointer); 

    //show them at mouse position & fade out slowly
    pointer.css({
        'position':'absolute',
        top: e.pageY +2 ,    //offsets
        left: e.pageX +2   //offsets
    }).fadeOut(1500);
});

/*helper function the play the spotify div, just hides and displays 
the play music button. and changes the iframes link to stop music.
*/
function PlayMusic() {

    //get the spotify element
    let Spotify = document.getElementById("Spotify");

    //get its display status
    if (window.getComputedStyle(Spotify).visibility === "hidden") {

        //change the iframes' url
        document.getElementById("spotifyControl").src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator";

        //set visibility of the element to show
        document.getElementById("Spotify").style.visibility = "visible";

        //increase elements margin
        document.getElementById("Playmusic").style.marginTop = "100px";

        //change elements text
        document.getElementById("MusicText").innerHTML = "Turn Music Off";
    } else {
        //change the iframes' url
        document.getElementById("spotifyControl").src = "#";

        //decrease elements margin
        document.getElementById("Playmusic").style.marginTop = "-80px";

        //change elements text
        document.getElementById("MusicText").innerHTML = "Turn Music On";

        //set visibility of the element to hide
        document.getElementById("Spotify").style.visibility = "hidden";
    }   
}