$( function () {
    const hamburger = $( "#mobile-nav" );
    const mobileMenu = $( ".mobile-menu" );
    
    hamburger.on( "click", function () {
        mobileMenu.toggle();
    } )
} );
