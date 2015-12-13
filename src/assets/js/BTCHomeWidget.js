(function () {
    /*****************************************************************************************/
    /*** Script ID Tag ***
     This should use a GUID eventually
     **********************/
    var SCRIPT_ID = 'BTCHomeWidget';
    /*** widget attributes ***
     env: Tells us the path to external resources
     width: The smallest possible width of the widget
     height: The smallest possible height of the widget
     open: How the widget opens. Possible values: up, left, right
     pl: The Playlist ID for videos to be played
     grid: Where to send the user if they click to see more comics
     ads: All ads or no ads show or are pre-rolled
     style: the theme of the widget
     -- possible styles --
     right-rail: widget plays in the far right ad column
     comics-kingdom: widget plays in Comics Kingdom widget
     ---------------------
     ws: the location of the back-end webservice from which to retrieve data
     /*************************/
    var attribs = {
        env: null,
        width: null,
        height: null,
        open: null,
        pl: null,
        grid: null,
        ads: null,
        style: null,
        ws: null
    };
    var errors = new Array;
    for (var key in attribs) {
        attribs[key] = attribs[key] ? attribs[key] : document.getElementById(SCRIPT_ID).getAttribute('data-' + key);
        if (!attribs[key]) errors.push('data-' + key);
    }
    if (errors.length > 0) {
        var divId = 'btc-home-widget';
        var html = 'The following attribute(s) for the BTC Widget is(are) missing or invalid:<p/><p/>' + errors.join(', ') +
            '<p/><b>Please copy this and put it in a request for an updated widget string to embed, with the proper attributes.</b>' +
            '<p/>Thank You!  ;-)<br/>The BTC Team';
        var div = document.createElement('div');
        div.id = divId;
        var widget = document.getElementById(SCRIPT_ID);
        widget.parentNode.insertBefore(div, widget);
        document.getElementById(divId).innerHTML = html
        return;
    }

    //Load jQuery
    var script = document.createElement('SCRIPT');
    script.src = attribs.env + '/assets/js/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    //load YT
    if (window.YT) window.YT = null;
    script = document.createElement("SCRIPT");
    script.src = attribs.env + '/assets/js/youtube.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);


    var jqueryloadinitiated = new Date().getTime();
    var checkJQueryReady = function (callback) {
        if (window.jQuery && window.jQuery.fn.jquery >= '2.1.4') {
            var codeloaded = new Date().getTime();
            var loaddelay = ((codeloaded - jqueryloadinitiated) / 1000).toFixed(3);
            console.log("BTC Log: Time to load jQuery: " + loaddelay);
            callback(true);
        } else {
            window.setTimeout(function () {
                checkJQueryReady(callback);
            }, 100);
        }
    };
    var ytplayerloadinitiated = new Date().getTime();
    var checkYTPlayerReady = function (callback) {
        if (window.YT && window.YT.Player) {
            var codeloaded = new Date().getTime();
            var loaddelay = ((codeloaded - ytplayerloadinitiated) / 1000).toFixed(3);
            console.log("BTC Log: Time to load YT Player: " + loaddelay);
            callback(true);
        } else {
            window.setTimeout(function () {
                checkYTPlayerReady(callback);
            }, 100);
        }
    };

    // Start polling...
    checkJQueryReady(function (jQuery) {
        console.log("BTC Log: jQuery loaded.  Running version " + $.fn.jquery);
        //Bootstrap the initial div into the DOM
        var $d = document;
        var container_div = $d.createElement('div');
        container_div.id = 'btc_container';
        var content = $d.getElementById(SCRIPT_ID);
        content.parentNode.insertBefore(container_div, content);

        //Initialize global variables
        var BTC, pl, src, C;
        var thumb = attribs.env + "/assets/images/thumb.png";
        var xml = {"comic": "Joke of the Day", "talent": "Dana Carvey", "thumb": thumb};

        //Load Stylesheets
        var loadCSS = function (href) {
            var cssLink = $("<link>");
            $("head").append(cssLink); //IE hack: append before setting href
            cssLink.attr({
                rel: "stylesheet",
                type: "text/css",
                href: href
            });
        };

        //Load Additional Javascript
        var loadJS = function (src) {
            var jsLink = $("<script type='text/javascript' src='" + src + "'>");
            $("head").append(jsLink);
        };

        loadCSS(attribs.env + '/assets/css/homestyle.css');
        loadCSS('//fonts.googleapis.com/css?family=Permanent+Marker');
        loadCSS('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');


        /****************
         FUNCTIONS
         *****************/

        var loadSlide = function (idx) {
            var comic_info = $("#btc-vid-item_" + idx).data();
            $(".comic").html(comic_info.comic);
            $(".talent").html(comic_info.talent);
            $(".btc-vid-item").css("background", "");
            $("#btc-vid-item_" + idx).css("background", "#f0f9ff");
        };
        var buildCarousel = function (json) {
            console.log("BTC building carousel", json);
            var i = 0;
            var carouselWidth = 0;
            C = 0;
            $(".btc-vid-list").html('');
            $.each(json, function (key, val) {
                carouselWidth += 154 * 2;
                $("<div>", {
                    class: "btc-vid-item",
                    id: "btc-vid-item_" + i,
                    data: {comic: val.comic, talent: val.talent}
                }).appendTo(".btc-vid-list");
                $("<div>", {
                    class: "thumb",
                    id: "thumb_" + i
                }).appendTo("#btc-vid-item_" + i)
                $("<img>", {
                    src: val.thumb
                }).appendTo("#thumb_" + i)
                $("<div>", {
                    class: "joke",
                    text: val.joke
                }).appendTo("#btc-vid-item_" + i)
                i++;
            });

            if (carouselWidth > 1232) {
                $(".btc-arrow-right").css("display", "inline");
            }

            $(".btc-vid-item").bind("click", function (event) {
                var idx = this.id.split("_")[1];
                loadSlide(idx);
                BTC.loadPlaylist({
                    list: attribs.pl,
                    listType: "playlist",
                    index: idx
                })

            });

            $(".btc-arrow-right").bind("click", function (event) {
                var scrollLength = 154;
                event.preventDefault();
                $(".btc-vid-list-container").stop().animate({
                    scrollLeft: "+=" + scrollLength
                }, 750);
                C += scrollLength;
                $(".btc-arrow-left").css("display", "inline");

            });

            $(".btc-arrow-left").bind("click", function (event) {
                var scrollLength = 154;
                event.preventDefault();
                $(".btc-vid-list-container").stop().animate({
                    scrollLeft: "-=" + scrollLength
                }, 750);
                C -= scrollLength;
                if (C <= 0) {
                    $(".btc-arrow-left").css("display", "none");
                }
            });
        };

        var onPlayerReady = function (event) {
            //event.target.playVideo();
        };

        var onPlayerStateChange = function (event) {
            console.log("BTC Event changed", event);
        };

        var loadYTPlayer = function () {
            checkYTPlayerReady(function ($) {
                BTC = new YT.Player('btc-widget-open-player', {
                    playerVars: {
                        listType: 'playlist',
                        list: attribs.pl,
                        controls: 1,
                        showinfo: 0,
                        modestbranding: 1,
                        rel: 0
                    },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            });
        };

        var constructWidget = function () {
            console.log("BTC Log: Constructing video", xml);

            $('#btc-widget-header').html("<div id='btc-widget-preview'><img id='btc-widget-thumb' src='" + xml.thumb + "'></div>");
            $('#btc-widget-thumb').css('width', '240px').css('height', '129px');
            $('#btc-widget-title-name').html(xml.comic);
            $('#btc-widget-title-with').html('with');
            $('#btc-widget-title-talent').html(xml.talent);
            $('#btc-widget-open-title').html(xml.comic + ' with ' + xml.talent);
        };

        var loadPlayerPropertiesSuccess = function (json) {
            console.log("BTC Log: Player properties", json);
            loadYTPlayer();
            buildCarousel(json);
            loadSlide(0);
        };

        var loadPlayerProperties = function () {
            var playerJsonUrl = attribs.ws + "/btc-svc/ws/getPlaylistProps/" + attribs.pl;
            $.getJSON(playerJsonUrl, function (data) {
                loadPlayerPropertiesSuccess($.parseJSON(data.json));
            })
                .fail(function (data) {
                    console.log("Error loading player properties", data);
                });
        };

        var loadTemplateSuccess = function (json) {
            $('#btc_container').html(json);

            $('#btc-widget-header, #btc-widget-playbtn, #btc-widget-title').click(function () {
                $('#btc-widget-open-bground').toggle("slow");
                console.log("BTC", BTC);
                BTC.playVideo();
            });

            $("#btc-widget-open-close-btn").click(function () {
                $('#btc-widget-open-bground').toggle("slow");
                BTC.pauseVideo().seekTo(0);
            });

            /*** CSS Loaded and Configured, execute code ***/
            loadPlayerProperties();
            constructWidget(xml);
        };

        var loadTemplate = function () {
            var templateUrl = attribs.ws + "/btc-svc/ws/getTemplate?templateType=HOME&callback=?";
            $.getJSON(templateUrl, function (data) {
                loadTemplateSuccess(data.json);
            })
                .fail(function (data) {
                    console.log("Error loading template", data);
                });
        };

        loadTemplate();
    });
})();