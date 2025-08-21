jQuery(document).ready(function($) {
    // Function to check scroll position and toggle class
    function toggleNavClass() {
        if ($(window).scrollTop() > 70) {
            $('nav.navbar').addClass('is-sticky');
        } else {
            $('nav.navbar').removeClass('is-sticky');
        }
    }

    // Run the function on page load
    toggleNavClass();

    // Run the function on scroll
    $(window).scroll(function() {
        toggleNavClass();
    });
    const text = $('#text-container').text(); // Store the text
    $('#text-container').text(""); // Clear the container initially
    let index = 0;
    let removing = false; // Track if we're removing or adding
    
    function animateText() {
        if (!removing) {
            if (index < text.length) {
                $('#text-container').append(text.charAt(index));
                index++;
                setTimeout(animateText, 100);
            } else {
                // Pause for 1 second before removing letters
                setTimeout(() => { removing = true; animateText(); }, 1000);
            }
        } else {
            if (index > 0) {
                $('#text-container').text(text.substring(0, index - 1));
                index--;
                setTimeout(animateText, 100);
            } else {
                // Pause for 1 second before restarting
                removing = false;
                setTimeout(animateText, 1000);
            }
        }
    }
    
    // Start the animation
    animateText();
    
    $('.Div-List-services li').hover(
        function() {
           $('.Div-List-services li').removeClass('show');  
          $(this).addClass('show');  
        } 
    );

 
    $('.navbar-toggler').click(function() {
        $('body').toggleClass('open-menu'); 
    });
   
});