/*
    Author:           Damien Ellis
    Date completed:   2022/03/24
    Due date:         2022/03/24
    Task completed:   YES
    Task description: my developer portfolio index js functinality
*/

/*variable with random rgb colors*/
let safeColors = ['00','33','66','99','cc','ff'];

//set math random return to variable
let rand = function() {
    return Math.floor(Math.random()*6);
};

//set the random color to the variable
let randomColor = function() {

    //store values in variables
    let r = safeColors[rand()];
    let g = safeColors[rand()];
    let b = safeColors[rand()];

    //return rgb string
    return "#"+r+g+b;
};

//wait till document is ready
$(document).ready(function() {

    //wait till the button is clicked
    $('#button').click(function() {

        //apply to each h1 element
        $('h1').each(function() {

            //function involing chaining
            $(this).css('background',randomColor()).slideUp().slideDown();
        });
    });

    //sets the new mouse pointer to the documents cursor and add animation to the cursor
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

    //onclick of this show/hide drop down
    $(".notification").on('click',function(){

        //if the drop down is visible, hide it
        if($(".drpdwn").is(":visible")){

            //hide drop down
            $(".drpdwn").hide();
        } else{

            //show drop down
            $(".drpdwn").show();
        }
    });       
});

//when the page scroll has reached the bottom of the page, hide the bouncing arrow.
window.onscroll = function(ev) {

    /*when the inner pages height and
      scrollable height is greater than the
      pages offset height, hide the element.
    */
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById("bounce").style.visibility = 'hidden';
    }
};

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

//start by setting the bars to zero width
function SetBarsZero() {

    //loop through each span element in a .metered class
    $(".meter > span").each(function () {
    $(this)
        //set the width to zero
        .data("origWidth", $(this).width())
        .width(0)
    }); 
}

//set global animation status, to only play animation once
let animation = false;

//function to play the spans animation
function StartAnimation() {
    
    //if animaton is false play
    if (animation == false) {
        
        /*loop through each span element and change its width
          to what is finds in the data attribute
        */
        $(".meter > span").each(function () {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate(
                {
                    width: $(this).data("origWidth")
                },
                1200
            );
        });
    }
    //Stop playing the animation
    animation = true;
}

//Save for later function
function SaveForLater (id) {

    //initialize the items in storage
    let itemsInStorage = 0;
    
    //add the item to session storage
    sessionStorage.setItem(id, document.getElementById(id).innerHTML);

    //loopp through each item in session storage and increase counter
    Object.keys(sessionStorage).forEach(function(key){
        itemsInStorage++
    });

    //alert items in storage to user
    alert("Items in storage: " + itemsInStorage);
}