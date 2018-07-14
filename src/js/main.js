'use strict';

function $( element )
{
    return document.querySelectorAll( element );
}

function toggleBackgroundMenu()
{
    var pageTop = 0;

    if ( window.scrollY != undefined )
    {
        pageTop = window.scrollY;
    }
    else
    {
        pageTop = document.documentElement.scrollTop;
    }

    if ( window.innerHeight / 2 > $( '#menu' )[ 0 ].clientHeight + pageTop )
    {
        $( '#menu' )[ 0 ].classList.remove( 'bgc-black-transparence' );
    }
    else
    {
        $( '#menu' )[ 0 ].classList.add( 'bgc-black-transparence' );
    }
}

function collapse()
{
    var element = event.target.getAttribute( 'data-collapse' );

    $( element )[ 0 ].classList.add( 'full-width' );
    document.body.classList.add( 'o-h' );
}

function collapsed()
{
    var collapse = $( '.collpase' );

    for ( var i = 0; i < collapse.length; i++ )
    {
        collapse[ i ].classList.remove( 'full-width' );
    }

    document.body.classList.remove( 'o-h' );
}

function scrollSmooth( event )
{
    event.preventDefault();

    var target = document.querySelector( event.target.hash );
    var end = target.offsetTop;
    var begin = window.pageYOffset;
    var time = 10;
    var old = window.pageYOffset;

    var interval = setInterval( function ()
    {
        end > begin ? begin += 25 : begin -= 25;
        old = window.pageYOffset;

        window.scrollTo( 0, begin );

        if ( window.pageYOffset < end + 50 && window.pageYOffset > end - 50 || window.pageYOffset == old )
        {
            clearInterval( interval );
        }
    }, time );
}

window.addEventListener( 'load', function ( event )
{
    toggleBackgroundMenu();

    var triggerCollapse = $( '[data-collapse*="#"]' );

    for ( var i = 0; i < triggerCollapse.length; i++ )
    {
        triggerCollapse[ i ].addEventListener( 'click', collapse );
    }

    var collapses = $( '.collpase' );

    for ( var i = 0; i < collapses.length; i++ )
    {
        collapses[ i ].addEventListener( 'click', collapsed );
    }

    var ancor = $( '.collpase a' );

    for ( var i = 0; i < ancor.length; i++ )
    {
        ancor[ i ].addEventListener( 'click', collapsed );
    }

    var ancor = $( 'a[href*="#"]' );

    for ( var i = 0; i < ancor.length; i++ )
    {
        ancor[ i ].addEventListener( 'click', scrollSmooth );
    }

    window.addEventListener( 'scroll', toggleBackgroundMenu );

    window.addEventListener( 'resize', collapsed );
} );