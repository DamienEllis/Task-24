/*
    Author:           Damien Ellis
    Date completed:   2022/03/24
    Due date:         2022/03/24
    Task completed:   YES
    Task description: my developer portfolio contact me JS functionality
*/

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

//se the new mouse pointer to the documents cursor and add animation to the cursor
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