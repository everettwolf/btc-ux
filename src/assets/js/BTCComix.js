(function () {
    /*****************************************************************************************/
    /*** Script ID Tag ***/
    var SCRIPT_ID = 'BTCComix';
    /*** widget attributes ***
     env: Tells us the path to external resources
     pl: The Playlist ID for videos to be played
     ws: the location of the back-end webservice from which to retrieve data
     /*********************/
    var attribs = {
        env: null,
        pl: null,
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
            '<p/><b>Please copy this message and put it in a request for an updated widget string to embed, with the proper attributes.</b>' +
            '<p/>Thank You!  ;-)<br/>The BTC Team';
        var div = document.createElement('div');
        div.id = divId;
        var widget = document.getElementById(SCRIPT_ID);
        widget.parentNode.insertBefore(div, widget);
        document.getElementById(divId).innerHTML = html;
        return;
    }
    /*****************************************************************************************/

    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", attribs.env + "/assets/js/head.js");
    if (script_tag.readyState) {
        script_tag.onreadystatechange = function () { // For old versions of IE
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                scriptLoadHandler();
            }
        };
    } else { // Other browsers
        script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);


    /******** Called once Head.js has loaded ******/
    function scriptLoadHandler() {
        main();
    }

    /******** Our main function ********/
    function main() {
        head.js(attribs.env + '/assets/js/jquery.min.js',
            attribs.env + '/assets/js/jquery-ui.min.js',
            attribs.env + '/assets/js/youtube.js',
            attribs.env + '/assets/css/comixstyle.css',
            '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
            '//fonts.googleapis.com/css?family=Permanent+Marker|Oswald|Architects+Daughter|Homemade+Apple',
            function () {
                jQuery(document).ready(function ($) {

                    var $btc = window.jQuery.noConflict();
                    var isOSx = navigator.userAgent.match(/(iPhone|iPad)/i) ? true : false;
                    var selectedItem = 0;
                    var totalItems = 0;
                    var CONSTS = {
                        TITLE_WIDTH: 448,
                        TITLE_FONT_SIZE: 16,
                        INFO_FONT_SIZE: 12,
                        CAROUSEL_WIDTH: 430,
                        CAROUSEL_SCROLL_LENGTH: 133
                    };


                    var html = '<div class="btc-box"> \
                <div id="btc-container"> \
                  <div id="btc-copyright">&copy; 2014, Beyond the Comics</div> \
                  <div id="btc-widget"> \
                    <div id="btc-title"> \
                      <div id="btc-comic"></div> \
                      <div id="btc-talent"></div> \
                    </div> \
                    <div id="btc-player-wrapper"> \
                      <div id="btc-player"></div> \
                    </div> \
                  </div> \
                  <div id="btc-comic-info"> \
                    <div id="btc-date">Mar 6, 2016</div> \
                    <div id="btc-joke"></div> \
                  </div> \
                  <div class="btc-vid-list-container"> \
                    <div class="btc-vid-list"></div> \
                  </div> \
                  <div class="btc-arrows"> \
                    <div class="btc-arrow-left"> \
                      <i class="fa fa-chevron-left fa-lg btc-chevron"></i> \
                    </div> \
                    <div class="btc-arrow-right"> \
                      <i class="fa fa-chevron-right fa-lg"></i> \
                    </div> \
                  </div> \
                  <div id="btc-archive"></div> \
                  <div id="btc-signature"></div> \
                </div> \
              </div>';

                    //Bootstrap the initial div into the DOM
                    var $d = document;
                    var container_div = $d.createElement('div');
                    container_div.id = 'btc_container';
                    var content = $d.getElementById(SCRIPT_ID);
                    content.parentNode.insertBefore(container_div, content);
                    $("#btc_container").html(html);

                    var json = [{
                        "playlistId": "PLLVtQiMiCJeFo48auR_WzdQlA_76VIMLb",
                        "videoId": "rER3K5vGwbQ",
                        "thumb": "https://i.ytimg.com/vi/rER3K5vGwbQ/mqdefault.jpg",
                        "comic": "Sketchy Coffee",
                        "joke": "Peg Leg, Coaster",
                        "talent": "Sarah Silverman",
                        "publishedAt": "2016-01-28T00:00:00Z"
                    }, {
                        "playlistId": "PLLVtQiMiCJeHYIqFdQiQ2SlHUTh12io-1",
                        "videoId": "ZiGv5ZLw1Js",
                        "thumb": "https://i.ytimg.com/vi/ZiGv5ZLw1Js/mqdefault.jpg",
                        "comic": "Note to Self",
                        "joke": "Send Flowers",
                        "talent": "Julianne Moore",
                        "publishedAt": "2016-02-02T00:00:00Z"
                    }, {
                        "playlistId": "PLLVtQiMiCJeGWZ21zwXRPSmw2sZrUp6en",
                        "videoId": "7Cj7oaGMLSg",
                        "thumb": "https://i.ytimg.com/vi/7Cj7oaGMLSg/mqdefault.jpg",
                        "comic": "Deep Thoughts",
                        "joke": "Two Sacks",
                        "talent": "Jack Handey",
                        "publishedAt": "2016-01-31T00:00:00Z"
                    }, {
                        "playlistId": "PLLVtQiMiCJeGpDb4hDe8dqx-5OIW0o-oD",
                        "videoId": "OsqdeVU4Zak",
                        "thumb": "https://i.ytimg.com/vi/OsqdeVU4Zak/mqdefault.jpg",
                        "comic": "Cursing on Cellphones",
                        "joke": "Buried",
                        "talent": "Dennis Miller",
                        "publishedAt": "2016-01-30T00:00:00Z"
                    }, {
                        "videoId": "fY52hbwTwmo",
                        "thumb": "https://i.ytimg.com/vi/fY52hbwTwmo/mqdefault.jpg",
                        "comic": "Two Minute Talk Show",
                        "joke": "Two Minute Talk Show",
                        "talent": "Dana Carvey",
                        "publishedAt": "Sun Mar 06 13:38:24 PST 2016"
                    }, {
                        "playlistId": "PLLVtQiMiCJeGf0DP7UgvPpQ6zmcwXfjqz",
                        "videoId": "SgRX3tzxtxg",
                        "thumb": "https://i.ytimg.com/vi/SgRX3tzxtxg/mqdefault.jpg",
                        "comic": "Mall Show",
                        "joke": "On the Mall",
                        "talent": "David Spade",
                        "publishedAt": "2016-01-30T00:00:00Z"
                    }];

                    var logToConsole = function (msg, val) {
                        console.log("BTC Log: " + msg, val);
                    };
                    logToConsole("hey", YT);


                    var fontResize = function () {
                        var pct;
                        logToConsole("btc-title", $btc('#btc-title').width());
                        pct = parseInt($btc('#btc-title').width()) / (CONSTS.TITLE_WIDTH / CONSTS.TITLE_FONT_SIZE);
                        $btc("#btc-title").css('font-size', pct);
                        logToConsole("title font size", pct);
                        pct = parseInt($btc('#btc-title').width()) / (CONSTS.TITLE_WIDTH / CONSTS.INFO_FONT_SIZE);
                        $btc('#btc-comic-info').css('font-size', pct)
                        logToConsole("info font size", pct);
                    };
                    fontResize();

                    $btc(window).resize(function () {
                        fontResize();
                    });

                    var loadSlide = function (idx) {
                        console.log("loading slide", idx);
                        $btc("#btc-comic").html($btc("#btc-vid-item_" + idx).attr('data-comic'));
                        $btc("#btc-talent").html('with ' + $btc("#btc-vid-item_" + idx).attr('data-talent'));
                        $btc("#btc-signature").html($btc("#btc-vid-item_" + idx).attr('data-talent'));
                        $btc("#btc-joke").html('"' + $btc("#btc-vid-item_" + idx).attr('data-joke') + '"');
                        $btc(".btc-vid-item").css("opacity", "");
                        $btc(".btc-vid-overlay").css("display", "");
                        $btc("#btc-vid-item_" + idx).css("opacity", "0.25");
                        $btc("#btc-vid-overlay_" + idx).css("display", "inline");
                    };
                    var manageArrows = function () {
                        logToConsole("arrow management", 'selectedItem: ' + selectedItem + ', totalItems' + totalItems);
                        if (selectedItem <= 0) {
                            $btc(".btc-arrow-left").css("display", "none");
                        }
                        if (selectedItem > 0) {
                            $btc(".btc-arrow-left").css("display", "inline");
                        }
                        if (selectedItem >= (totalItems - 1)) {
                            $btc(".btc-arrow-right").css("display", "none");
                        }
                        if (selectedItem < (totalItems - 1)) {
                            $btc(".btc-arrow-right").css("display", "inline");
                        }
                    };
                    var buildCarousel = function (json) {
                        logToConsole("Building carousel", json);
                        var i = 0;
                        var carouselItemsWidth = 0;
                        $btc(".btc-vid-list").html('');
                        $btc.each($btc(json).toArray(), function (key, val) {
                            carouselItemsWidth += CONSTS.CAROUSEL_SCROLL_LENGTH;
                            logToConsole("carousel width", carouselItemsWidth);
                            $btc("<div>", {
                                class: "btc-vid-slide",
                                id: "btc-vid-slide_" + i
                            }).appendTo(".btc-vid-list");
                            $btc("<div>", {
                                class: "btc-vid-item",
                                id: "btc-vid-item_" + i,
                                'data-comic': val.comic,
                                'data-talent': val.talent,
                                'data-joke': val.joke,
                                'data-videoId': val.videoId
                            }).appendTo("#btc-vid-slide_" + i);
                            $btc("<img>", {
                                src: val.thumb
                            }).appendTo("#btc-vid-item_" + i);
                            $btc("<div>", {
                                class: "btc-vid-overlay",
                                id: "btc-vid-overlay_" + i
                            }).append("Now<br/>Playing").appendTo("#btc-vid-slide_" + i);
                            i++;
                            totalItems++;
                        });

                        loadSlide(0);

                        if (carouselItemsWidth > CONSTS.CAROUSEL_WIDTH) {
                            $btc(".btc-arrow-right").css("display", "inline");
                        }

                        $btc(".btc-vid-item").bind("click", function (event) {
                            var idx = this.id.split("_")[1];
                            if (idx == selectedItem) return;
                            logToConsole("idx::selectedItem", idx + '::' + selectedItem);
                            $btc(".btc-vid-list-container").stop().animate({
                                scrollLeft: "+=" + ((idx - selectedItem) * CONSTS.CAROUSEL_SCROLL_LENGTH)
                            }, 750);
                            selectedItem = idx;
                            loadSlide(idx);
                            manageArrows();
                            logToConsole("vid data", $btc(this).attr('data-videoId'));
                            loadOrCueVideo($btc(this).attr('data-videoId'));
                        });

                        $btc(".btc-arrow-right").bind("click", function (event) {
                            var scrollLength = CONSTS.CAROUSEL_SCROLL_LENGTH;
                            event.preventDefault();
                            $btc(".btc-vid-list-container").stop().animate({
                                scrollLeft: "+=" + scrollLength
                            }, 750);
                            selectedItem++;
                            manageArrows();
                            loadSlide(selectedItem);
                            loadOrCueVideo($btc('#btc-vid-item_' + selectedItem).attr('data-videoId'));
                        });

                        $btc(".btc-arrow-left").bind("click", function (event) {
                            var scrollLength = CONSTS.CAROUSEL_SCROLL_LENGTH;
                            event.preventDefault();
                            $btc(".btc-vid-list-container").stop().animate({
                                scrollLeft: "-=" + scrollLength
                            }, 750);
                            selectedItem--;
                            manageArrows();
                            loadSlide(selectedItem);
                            loadOrCueVideo($btc('#btc-vid-item_' + selectedItem).attr('data-videoId'));

                        });

                    };
                    var onPlayerReady = function (event) {
                        console.log("open?");

                        //event.target.playVideo();
                        console.log("player ready", event);
                        buildCarousel(json);
                    };
                    var loadOrCueVideo = function (videoId) {
                        if (!isOSx) {
                            BTC.loadVideoById(videoId);
                        } else {
                            BTC.cueVideoById(videoId);
                        }
                    };

                    var onPlayerStateChange = function (event) {
                        console.log("event changed", event.target);
                        console.log("playerState", event.data);
                    };

                    var loadYTPlayer = function (videoId) {
                        BTC = new YT.Player('btc-player', {
                            videoId: videoId,
                            controls: 1,
                            showinfo: 0,
                            modestbranding: 1,
                            playerVars: {
                                rel: 0,
                                showinfo: 0,
                                playsinline: 1
                            },
                            wmode: 'transparent',
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onPlayerStateChange
                            }
                        });
                    };
                    var initYTPlayer = function (callback) {
                        if (YT && YT.loaded == 1) {
                            callback(true);
                        } else {
                            logToConsole("YT", YT);
                            window.setTimeout(function () {
                                initYTPlayer(callback);
                            }, 100);
                        }
                    };
                    initYTPlayer(function (player) {
                        loadYTPlayer(json[0].videoId);
                    });
                });
            });
    }

})();