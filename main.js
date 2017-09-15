/**
 * Created by Kavya Sree.
 */




/* MAP - JET ANIMATION*/

/**
 * SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * SVG path for plane icon
 */
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

var planeSVG1 = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";


/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "light",

    "projection": "winkel3",
    "dataProvider": {
        "map": "worldLow",

        "lines": [ {
            "id": "line1",
            "arc": -0.85,
            "alpha": 0.3,
            "latitudes": [ 48.8567,  1.3521, 34.3, 1.3521, 23 ],
            "longitudes": [ 2.3510, 103.8198, -118.15, 103.8198, -82 ]
        }, {
            "id": "line2",
            "alpha": 0,
            "color": "#000000",
            "latitudes": [ 48.8567,  1.3521, 34.3,  1.3521,  23 ],
            "longitudes": [ 2.3510, 103.8198, -118.15, 103.8198, -82 ]
        } ],
        "images": [ {
            "svgPath": targetSVG,
            "title": "Phuket",
            "latitude": 7.9843,
            "longitude": 98.3307
        }, {
            "svgPath": targetSVG,
            "title": "Singapore",
            "latitude": 1.3521,
            "longitude": 103.8198
        },{
            "svgPath": targetSVG,
            "title": "Paris",
            "latitude": 48.8567,
            "longitude": 2.3510
        }, {
            "svgPath": targetSVG,
            "title": "Singapore",
            "latitude": 1.3521,
            "longitude": 103.8198
        }, {
            "svgPath": targetSVG,
            "title": "Los Angeles",
            "latitude": 34.3,
            "longitude": -118.15
        }, {
            "svgPath": targetSVG,
            "title": "Singapore",
            "latitude": 1.3521,
            "longitude": 103.8198
        },

            {
                "svgPath": targetSVG,
                "title": "Havana",
                "latitude": 23,
                "longitude": -82
            }, {
                "svgPath": planeSVG,
                "positionOnLine": 0,
                "color": "#000000",
                "alpha": 0.1,
                "animateAlongLine": true,
                "lineId": "line2",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 2
            }, {
                "svgPath": planeSVG,
                "positionOnLine": 0,
                "color": "#585869",
                "animateAlongLine": true,
                "lineId": "line1",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 2.5
            }, {
                "svgPath": planeSVG1,
                "positionOnLine": 1,
                "color": "#000000",
                "alpha": 0.1,
                "animateAlongLine": true,
                "lineId": "line2",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 2
            }, {
                "svgPath": planeSVG1,
                "positionOnLine": 1,
                "color": "#585869",
                "animateAlongLine": true,
                "lineId": "line1",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 2.5
            } ]
    },

    "areasSettings": {
        "unlistedAreasColor": "#8dd9ef"
    },

    "imagesSettings": {
        "color": "#585869",
        "rollOverColor": "#585869",
        "selectedColor": "#585869",
        "pauseDuration": 0.35,
        "animationDuration": 4,
        "adjustAnimationSpeed": true
    },

    "linesSettings": {
        "color": "#585869",
        "alpha": 0.4
    },

    "export": {
        "enabled": true
    }

} );



/* Main Page Animations*/
$(document).ready(function() {

    var animationName1 = 'animated zoomIn';
    var animationName2 = 'animated fadeInRightBig';
    var animationName3 = 'animated bounceInDown';
    var animationName4 = 'animated fadeIn';
    var animationName5 = 'animated flash';
    animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


    $('#chartdiv').addClass(animationName1);
    $('.clip-triangle').css({'display':'block','animation-delay':'2.5s'}).addClass(animationName2);
    $('.logo').css('animation-delay','4s').addClass(animationName3);
    $('.main-content').css('animation-delay','4.5s').addClass(animationName4);
    $('.main-button').css('animation-delay','5s').addClass(animationName5).one(animationend,function() {
        $('.main-button').removeClass(animationName5);
        $('.main-content').removeClass(animationName4);
        $('.logo').removeClass(animationName3);
        $('.clip-triangle').removeClass(animationName2);
        $('#chartdiv').removeClass(animationName1);
    });

});



$(document).ready(function() {

    var animationName1 = 'animated zoomIn';
    var animationName4 = 'animated fadeIn';
    var animationName6 = 'animated fadeOutRight';
    var animationName7 = 'animated zoomOut';
    var animationName8 = 'animated slideInDown';


    $('.main-button').click(function() {
        $('.clip-triangle ').css({'animation-delay':'0.3s','animation-duration':'1.5s'}).addClass(animationName6);
        $('#chartdiv').css('animation-delay','2s').addClass(animationName7).one(animationend,function() {
            $('.clip-triangle').removeClass(animationName6);
            $('#chartdiv').removeClass(animationName7);
            $('#chartdiv').css('display','none');
            $('.clip-triangle').css('display','none');
            $('.panel-container').css('display','none');
            $('.clouds-wrap, .booking-wrap').css({'display':'block','animation-delay':'0.5s'}).addClass(animationName4);
            $('jet-img-wrap').css({'display':'block','animation-delay':'0.5s'}).addClass(animationName4);
            $('.navbar').css({'display':'block','animation-delay':'0.5s'}).addClass(animationName8);
            $('.info-box').css({'display':'block','animation-delay':'3s'}).addClass(animationName1);
        });
    });

});

