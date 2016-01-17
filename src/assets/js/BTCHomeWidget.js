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
     carousel: whether or not to show an archive carousel [true|false]
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
        ws: null,
        archive: null
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
        document.getElementById(divId).innerHTML = html
        return;
    }

    //Load jQuery
    (function (window, document) {
        var loader = function () {
            var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
            script.src = attribs.env + '/assets/js/jquery.min.js';
            tag.parentNode.insertBefore(script, tag);
        };
        window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
    })(window, document);

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

            //Load JQuery UI
            var script = document.createElement('SCRIPT');
            script.src = attribs.env + '/assets/js/jquery-ui.min.js'
            //script.src = '//code.jquery.com/ui/1.11.2/jquery-ui.mi  n.js'
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);
            callback(true);
        } else {
            window.setTimeout(function () {
                console.log(window.jQuery.ui);
                console.log("BTC LOADING");
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

            var $btc = window.jQuery.noConflict();

            //Facebook API
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            //Twitter API
            window.twttr = (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function (f) {
                    t._e.push(f);
                };

                return t;
            }(document, "script", "twitter-wjs"));

            //Bootstrap the initial div into the DOM
            var $d = document;
            var container_div = $d.createElement('div');
            container_div.id = 'btc_container';
            var content = $d.getElementById(SCRIPT_ID);
            content.parentNode.insertBefore(container_div, content);

            //Initialize global variables
            var BTC, pl, src, C, datesWithVideos;
            var thumb = attribs.env + "/assets/images/thumb.png";
            var xml = {"comic": "Joke of the Day", "talent": "Dana Carvey", "thumb": thumb};

            //Load Stylesheets
            var loadCSS = function (href) {
                var cssLink = $btc("<link>");
                $btc("head").append(cssLink); //IE hack: append before setting href
                cssLink.attr({
                    rel: "stylesheet",
                    type: "text/css",
                    href: href
                });
            };

            //Load Additional Javascript
            var loadJS = function (src) {
                var jsLink = $btc("<script type='text/javascript' src='" + src + "'>");
                $btc("head").append(jsLink);
            };

            loadCSS(attribs.env + '/assets/css/homestyle.css');
            loadCSS('//fonts.googleapis.com/css?family=Permanent+Marker');
            loadCSS('//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
            loadCSS('//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css');

            /****************
             FUNCTIONS
             *****************/
            var logToConsole = function (msg, val) {
                console.log("BTC Log: " + msg, val);
            };

            var CONSTS = {
                CAROUSEL_HEIGHT: 500,
                CALENDAR_HEIGHT: 410,
                CALENDAR_SLIDE_HEIGHT: 365
            };


            var loadDatesWithVideos = function (mydate) {
                var returngood = [true, "available"];
                var returnbad = [false, "unavailable"];
                $checkdate = $btc.datepicker.formatDate('dd MM yy', mydate);
                if (mydate > new Date()) return returnbad;
                for (var i = 0; i < datesWithVideos.length; i++) {
                    if (datesWithVideos[i] == $checkdate) {
                        return returngood
                    }
                }
                return returnbad
            };
            var loadDate = function (mydate) {
                var date = new Date(mydate);
                $btc("#btc-cal-date").html($btc.datepicker.formatDate('MM d, yy', date));
                var idx = $btc.inArray(mydate, datesWithVideos);
                logToConsole("idx", idx);
                logToConsole("length", datesWithVideos.length);
                if (idx === 0) {
                    logToConsole("index is zero", idx);
                    $btc("#btc-cal-arrow-left").addClass("btc-cal-arrow-active").removeClass("btc-cal-arrow-inactive");
                    $btc("#btc-cal-arrow-right").addClass("btc-cal-arrow-inactive").removeClass("btc-cal-arrow-active");
                }
                if (idx > 0 && idx < datesWithVideos.length - 1) {
                    logToConsole("index is between", idx);
                    $btc("#btc-cal-arrow-left").addClass("btc-cal-arrow-active").removeClass("btc-cal-arrow-inactive");
                    $btc("#btc-cal-arrow-right").addClass("btc-cal-arrow-active").removeClass("btc-cal-arrow-inactive");
                }
                if (idx === datesWithVideos.length - 1) {
                    logToConsole("index is length", idx);
                    $btc("#btc-cal-arrow-left").addClass("btc-cal-arrow-inactive").removeClass("btc-cal-arrow-active");
                    $btc("#btc-cal-arrow-right").addClass("btc-cal-arrow-active").removeClass("btc-cal-arrow-inactive");
                }
                $btc('#btc-datepicker .ui-datepicker-inline').hide();
                BTC.loadPlaylist({
                    list: attribs.pl,
                    listType: "playlist",
                    index: idx
                });
            };
            var populateDatesWithVideos = function () {
                var date;
                var numDates = 1;
                $btc.each(datesWithVideos, function (idx, val) {
                    if (!date) {
                        date = new Date(val);
                        logToConsole("date", date);
                        $btc("#btc-cal-date").html($btc.datepicker.formatDate('MM dd, yy', date));
                    }
                    if (numDates++ > 1) $btc("#btc-cal-arrow-left").addClass("btc-cal-arrow-active").removeClass("btc-cal-arrow-inactive");
                });
            };

            var switchDay = function (dir) {
                var date = $btc.datepicker.formatDate('dd MM yy', new Date($btc("#btc-cal-date").html()));

                var prev = datesWithVideos[($btc.inArray(date, datesWithVideos) + 1) % datesWithVideos.length];
                var next = datesWithVideos[($btc.inArray(date, datesWithVideos) - 1 + datesWithVideos.length) % datesWithVideos.length];

                if (dir === "next") loadDate(next);
                if (dir === "prev") loadDate(prev);
            };
            var createDateObject = function (json) {
                datesWithVideos = new Array();
                $btc.each(json, function (key, val) {
                    logToConsole("val.publishedAt", val.publishedAt);
                    var vid = val;
                    datesWithVideos.push($btc.datepicker.formatDate('dd MM yy', new Date(val.publishedAt)));
                });
                datesWithVideos.sort(function (x, y) {
                    return new Date(y) - new Date(x);
                });
                logToConsole("datesWithVideos", datesWithVideos);
            };
            var showCalendar = function (json) {
                createDateObject(json);
                populateDatesWithVideos();

                $btc('#btc-widget-open-bground').height(CONSTS.CALENDAR_HEIGHT);
                $btc('#btc-widget-open-slide').height(CONSTS.CALENDAR_SLIDE_HEIGHT);

                $btc('#btc-archive').css({"display": "inline-block"})
                $btc('#btc-datepicker').datepicker({
                    showOn: "both",
                    dateFormat: 'dd MM yy',
                    beforeShowDay: loadDatesWithVideos,
                    onSelect: loadDate
                });
                dp = $btc('#btc-datepicker .ui-datepicker-inline');
                dp.hide();
                $btc('#btc-calendar').hover(function () {
                    dp.fadeIn('fast');
                    dp.css({
                        marginTop: -dp.height() + 'px',
                        marginLeft: '20px'
                    });
                }, function () {
                    dp.fadeOut('fast');
                });

                $btc("#btc-cal-arrow-left").bind("click", function () {
                    if ($btc(this).hasClass("btc-cal-arrow-inactive")) return;
                    switchDay("prev");
                });

                $btc("#btc-cal-arrow-right").bind("click", function () {
                    if ($btc(this).hasClass("btc-cal-arrow-inactive")) return;
                    switchDay("next");
                });
            };

            var loadSlide = function (idx) {
                var comic_info = $btc("#btc-vid-item_" + idx).data();
                $btc(".comic").html(comic_info.comic);
                $btc(".talent").html(comic_info.talent);
                $btc(".btc-vid-item").css("background", "");
                $btc("#btc-vid-item_" + idx).css("background", "#f0f9ff");
            };
            var buildCarousel = function (json) {
                logToConsole("building carousel", json);
                $btc('#btc-widget-open-bground').height(CONSTS.CAROUSEL_HEIGHT);
                var i = 0;
                var carouselWidth = 0;
                C = 0;
                $btc(".btc-vid-list").html('');
                $btc.each(json, function (key, val) {
                    carouselWidth += 154 * 2;
                    $btc("<div>", {
                        class: "btc-vid-item",
                        id: "btc-vid-item_" + i,
                        data: {comic: val.comic, talent: val.talent}
                    }).appendTo(".btc-vid-list");
                    $btc("<div>", {
                        class: "thumb",
                        id: "thumb_" + i
                    }).appendTo("#btc-vid-item_" + i)
                    $btc("<img>", {
                        src: val.thumb
                    }).appendTo("#thumb_" + i)
                    $btc("<div>", {
                        class: "joke",
                        text: val.joke
                    }).appendTo("#btc-vid-item_" + i)
                    i++;
                });

                loadSlide(0);

                if (carouselWidth > 1232) {
                    $btc(".btc-arrow-right").css("display", "inline");
                }

                $btc(".btc-vid-item").bind("click", function (event) {
                    var idx = this.id.split("_")[1];
                    loadSlide(idx);
                    BTC.loadPlaylist({
                        list: attribs.pl,
                        listType: "playlist",
                        index: idx
                    });
                });

                $btc(".btc-arrow-right").bind("click", function (event) {
                    var scrollLength = 154;
                    event.preventDefault();
                    $btc(".btc-vid-list-container").stop().animate({
                        scrollLeft: "+=" + scrollLength
                    }, 750);
                    C += scrollLength;
                    $btc(".btc-arrow-left").css("display", "inline");

                });

                $btc(".btc-arrow-left").bind("click", function (event) {
                    var scrollLength = 154;
                    event.preventDefault();
                    $btc(".btc-vid-list-container").stop().animate({
                        scrollLeft: "-=" + scrollLength
                    }, 750);
                    C -= scrollLength;
                    if (C <= 0) {
                        $btc(".btc-arrow-left").css("display", "none");
                    }
                });
            };

            var onPlayerReady = function (event) {
                //event.target.playVideo();
            };

            var onPlayerStateChange = function (event) {
                logToConsole("event changed", event);
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
                            rel: 0,
                            wmode: 'transparent'
                        },
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                });
            };

            var constructWidget = function () {
                logToConsole("constructing video", xml);

                var protocol = window.location.protocol + '//';
                var hostname = window.location.hostname;
                var pathname = window.location.pathname;
                url = protocol + hostname + pathname;
                logToConsole("url", url);
                logToConsole("href", window.location.href);

                $btc('#btc-widget-header').html("<div id='btc-widget-preview'><img id='btc-widget-thumb' src='" + xml.thumb + "'></div>");
                $btc('#btc-widget-thumb').css('width', '240px').css('height', '129px');
                $btc('#btc-widget-title-name').html(xml.comic);
                $btc('#btc-widget-title-with').html('with');
                $btc('#btc-widget-title-talent').html(xml.talent);
                $btc('#btc-widget-open-title #btc-widget-open-title-comic').html(xml.comic);
                $btc('#btc-widget-open-title #btc-widget-open-title-talent').html('&nbsp;with ' + xml.talent);
                $btc("#btc-widget-open-facebook").bind("click", function () {
                    var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
                    var width = 550;
                    var height = 250;
                    var left = window.screenX + window.outerWidth / 2 - width / 2;
                    var top = window.screenY + window.outerHeight / 2 - height / 2;
                    var opts = 'width=' + width +
                        ',height=' + height +
                        ',top=' + top +
                        ',left=' + left;
                    window.open(url, 'facebookShareWindow', opts);
                });
                $btc("#btc-widget-open-twitter").bind("click", function () {
                    var text = 'Joke of the Day with Dana Carvey - ' + $btc("#btc-cal-date").html();
                    var link = encodeURIComponent(window.location.href);
                    var url = 'http://twitter.com/share?url=' + link + '&text=' + text;
                    var width = 550;
                    var height = 250;
                    var left = window.screenX + window.outerWidth / 2 - width / 2;
                    var top = window.screenY + window.outerHeight / 2 - height / 2;
                    var opts = 'status=1' +
                        ',width=' + width +
                        ',height=' + height +
                        ',top=' + top +
                        ',left=' + left;
                    window.open(url, 'twitter', opts);
                });
            };

            var loadPlayerPropertiesSuccess = function (json) {
                logToConsole("player properties", json);
                loadYTPlayer();
                logToConsole("archive type", attribs.archive);
                switch (attribs.archive) {
                    case "carousel":
                        buildCarousel(json);
                        break;
                    case "calendar":
                        showCalendar(json);
                        break;
                    default:
                        break;
                }

            };

            var loadPlayerProperties = function () {
                var playerJsonUrl = attribs.ws + "/btc-svc/ws/getPlaylistProps/" + attribs.pl;
                $btc.getJSON(playerJsonUrl, function (data) {
                    loadPlayerPropertiesSuccess($btc.parseJSON(data.json));
                })
                    .fail(function (data) {
                        logToConsole("Error loading player properties", data);
                    });
            };

            var loadTemplateSuccess = function (json) {
                $btc('#btc_container').html(json);

                $btc('#btc-widget-header, #btc-widget-playbtn, #btc-widget-title').click(function () {
                    $btc('#btc-widget-open-bground').toggle("slow");
                    BTC.playVideo();
                });

                $btc("#btc-widget-open-close-btn").click(function () {
                    $btc('#btc-widget-open-bground').toggle("slow");
                    BTC.pauseVideo().seekTo(0);
                });

                /*** CSS Loaded and Configured, execute code ***/
                loadPlayerProperties();
                constructWidget(xml);
            };

            var loadTemplate = function () {
                var templateUrl = attribs.ws + "/btc-svc/ws/getTemplate?templateType=HOME&callback=?";
                $btc.getJSON(templateUrl, function (data) {
                    loadTemplateSuccess(data.json);
                })
                    .fail(function (data) {
                        logToConsole("Error loading template", data);
                    });
            };

            loadTemplate();
        }
    );

})
();