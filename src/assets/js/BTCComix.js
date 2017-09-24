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
    var errors = [];
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
            attribs.env + '/assets/js/comixad.js',
            attribs.env + '/assets/css/comixstyle.css',
            '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
            '//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css',
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

                    //Google Analytics API
                    (function (i, s, o, g, r, a, m) {
                        i.GoogleAnalyticsObject = r;
                        i[r] = i[r] || function () {
                                (i[r].q = i[r].q || []).push(arguments);
                            }, i[r].l = 1 * new Date();
                        a = s.createElement(o),
                            m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m);
                    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'btc_ga');
                    btc_ga('create', 'UA-50041591-1', 'auto');

                    //Bootstrap the initial div into the DOM
                    var $d = document;
                    var container_div = $d.createElement('div');
                    container_div.id = 'btc-comix-placement';
                    var content = $d.getElementById(SCRIPT_ID);
                    content.parentNode.insertBefore(container_div, content);

                    var logToConsole = function (msg, val) {
                        console.log("BTC Log: " + msg, !!val ? val : "");
                    };

                    var formatDate = function (format, datetoformat) {
                        return $btc.datepicker.formatDate(format, new Date(datetoformat));
                    };

                    var datesMatch = function (leftdate, rightdate) {
                        return formatDate('mmddyy', leftdate) === formatDate('mmddyy', rightdate);
                    };

                    var fontResize = function () {
                        var pct;
                        pct = parseInt($btc('#btc-comix-title').width()) / (CONSTS.TITLE_WIDTH / CONSTS.TITLE_FONT_SIZE);
                        $btc("#btc-comix-title").css('font-size', pct);
                        pct = parseInt($btc('#btc-comix-title').width()) / (CONSTS.TITLE_WIDTH / CONSTS.INFO_FONT_SIZE);
                        $btc('#btc-comix-comic-info').css('font-size', pct);
                    };
                    fontResize();

                    $btc(window).resize(function () {
                        fontResize();
                    });

                    var loadSlide = function (idx) {
                        $btc("#btc-comix-cal-date").html(formatDate('M d, yy', $btc("#btc-comix-vid-item_" + idx).attr('data-date')));
                        $btc("#btc-comix-comic").html($btc("#btc-comix-vid-item_" + idx).attr('data-comic'));
                        $btc("#btc-comix-talent").html('with ' + $btc("#btc-comix-vid-item_" + idx).attr('data-talent'));
                        $btc("#btc-comix-signature").html($btc("#btc-comix-vid-item_" + idx).attr('data-talent'));
                        $btc("#btc-comix-joke").html('"' + $btc("#btc-comix-vid-item_" + idx).attr('data-joke') + '"');
                        $btc(".btc-comix-vid-item").css("opacity", "");
                        $btc(".btc-comix-vid-overlay").css("display", "");
                        $btc("#btc-comix-vid-item_" + idx).css("opacity", "0.25");
                        $btc("#btc-comix-vid-overlay_" + idx).css("display", "inline");
                    };
                    var arrowActivation = function (dir, activate) {
                        var calleft = $btc("#btc-comix-cal-arrow-left");
                        var calright = $btc("#btc-comix-cal-arrow-right");
                        var activeClass = "btc-comix-cal-arrow-active";
                        var inactiveClass = "btc-comix-cal-arrow-inactive";
                        var calarrow = dir === "left" ? calleft : calright;
                        if (activate) {
                            calarrow.addClass(activeClass).removeClass(inactiveClass);
                        } else {
                            calarrow.addClass(inactiveClass).removeClass(activeClass);
                        }
                    };
                    var manageArrows = function () {

                        if (selectedItem <= 0) {
                            logToConsole("index is zero", selectedItem);
                            arrowActivation("left", true);
                            arrowActivation("right", false);
                            $btc(".btc-comix-arrow-left").css("display", "none");

                        }
                        if (selectedItem > 0 && selectedItem < totalItems - 1) {
                            logToConsole("index is between", selectedItem);
                            arrowActivation("left", true);
                            arrowActivation("right", true);
                            $btc(".btc-comix-arrow-left").css("display", "inline");
                            $btc(".btc-comix-arrow-right").css("display", "inline");
                        }
                        if (selectedItem >= totalItems - 1) {
                            logToConsole("index is length", selectedItem);
                            arrowActivation("left", false);
                            arrowActivation("right", true);
                            $btc(".btc-comix-arrow-right").css("display", "none");
                        }
                    };
                    var buildCarousel = function (json) {
                        logToConsole("Building carousel with this data:", json);
                        var i = 0;
                        var carouselItemsWidth = 0;
                        $btc(".btc-comix-vid-list").html('');
                        $btc.each($btc(json).toArray(), function (key, val) {
                            carouselItemsWidth += CONSTS.CAROUSEL_SCROLL_LENGTH;
                            $btc("<div>", {
                                class: "btc-comix-vid-slide",
                                id: "btc-comix-vid-slide_" + i
                            }).appendTo(".btc-comix-vid-list");
                            $btc("<div>", {
                                class: "btc-comix-vid-item",
                                id: "btc-comix-vid-item_" + i,
                                'data-date': val.publishedAt,
                                'data-comic': val.comic,
                                'data-talent': val.talent,
                                'data-joke': val.joke,
                                'data-videoId': val.videoId
                            }).appendTo("#btc-comix-vid-slide_" + i);
                            $btc("<img>", {
                                src: val.thumb
                            }).appendTo("#btc-comix-vid-item_" + i);
                            $btc("<div>", {
                                class: "btc-comix-vid-overlay",
                                id: "btc-comix-vid-overlay_" + i
                            }).append("Now<br/>Playing").appendTo("#btc-comix-vid-slide_" + i);
                            i++;
                            totalItems++;
                        });

                        loadSlide(0);

                        if (carouselItemsWidth > CONSTS.CAROUSEL_WIDTH) {
                            $btc(".btc-comix-arrow-right").css("display", "inline");
                        }

                        $btc(".btc-comix-vid-item").bind("click", function (event) {
                            var idx = this.id.split("_")[1];
                            logToConsole("selectedItem", idx);
                            if (idx == selectedItem) return;
                            logToConsole("idx::selectedItem", idx + '::' + selectedItem);
                            $btc(".btc-comix-vid-list-container").stop().animate({
                                scrollLeft: "+=" + ((idx - selectedItem) * CONSTS.CAROUSEL_SCROLL_LENGTH)
                            }, 750);
                            selectedItem = idx;
                            loadSlide(idx);
                            manageArrows();
                            logToConsole("vid data", $btc(this).attr('data-videoId'));
                            btc_ga('send', 'event', 'KF Widget', 'dateswitched_location', window.location.href);
                            loadOrCueVideo($btc(this).attr('data-videoId'));
                        });

                        $btc(".btc-comix-arrow-right").bind("click", function (event) {
                            var scrollLength = CONSTS.CAROUSEL_SCROLL_LENGTH;
                            event.preventDefault();
                            $btc(".btc-comix-vid-list-container").stop().animate({
                                scrollLeft: "+=" + scrollLength
                            }, 750);
                            selectedItem++;
                            manageArrows();
                            loadSlide(selectedItem);
                            btc_ga('send', 'event', 'KF Widget', 'dateswitched_location', window.location.href);
                            loadOrCueVideo($btc('#btc-comix-vid-item_' + selectedItem).attr('data-videoId'));
                        });

                        $btc(".btc-comix-arrow-left").bind("click", function (event) {
                            var scrollLength = CONSTS.CAROUSEL_SCROLL_LENGTH;
                            event.preventDefault();
                            $btc(".btc-comix-vid-list-container").stop().animate({
                                scrollLeft: "-=" + scrollLength
                            }, 750);
                            selectedItem--;
                            manageArrows();
                            loadSlide(selectedItem);
                            btc_ga('send', 'event', 'KF Widget', 'dateswitched_location', window.location.href);
                            loadOrCueVideo($btc('#btc-comix-vid-item_' + selectedItem).attr('data-videoId'));

                        });

                    };
                    var onPlayerReady = function (event) {
                        //event.target.playVideo();
                        console.log("player ready", event);
                    };
                    var loadOrCueVideo = function (videoId) {
                        if (!isOSx) {
                            BTC.loadVideoById(videoId);
                        } else {
                            BTC.cueVideoById(videoId);
                        }
                    };

                    var onPlayerStateChange = function (event) {
                        //logToConsole("event changed", event.target);
                    };

                    var loadYTPlayer = function (videoId) {
                        BTC = new YT.Player('btc-comix-player', {
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
                            logToConsole("YT Object loading", YT);
                            window.setTimeout(function () {
                                initYTPlayer(callback);
                            }, 100);
                        }
                    };

                    var loadDate = function (mydate, json) {
                        $btc('#btc-comix-datepicker').datepicker().datepicker("setDate", new Date(mydate));

                        btc_ga('send', 'event', 'KF Comix', 'dateswitched_location', window.location.href);

                        var date = new Date(mydate);

                        $btc("#btc-comix-cal-date").html(formatDate('M d, yy', date));
                        var idx = -1;
                        for (var i = 0; i < json.length; i++) {
                            if (datesMatch(mydate, json[i].publishedAt)) {
                                idx = i;
                                break;
                            }
                        }
                        logToConsole("mycalindex", idx);

                        $btc(".btc-comix-vid-list-container").stop().animate({
                            scrollLeft: "+=" + ((idx - selectedItem) * CONSTS.CAROUSEL_SCROLL_LENGTH)
                        }, 750);


                        selectedItem = idx;
                        loadSlide(idx);
                        manageArrows();
                        $btc('#btc-comix-datepicker .ui-datepicker-inline').hide();
                        loadOrCueVideo(json[idx].videoId);
                    };

                    var loadDatesWithVideos = function (mydate, json) {
                        var returngood = [true, "available"];
                        var returnbad = [false, "unavailable"];
                        if (mydate > new Date()) return returnbad;
                        for (var i = 0; i < json.length; i++) {
                            if (datesMatch(mydate, json[i].publishedAt)) {
                                return returngood;
                            }
                        }
                        return returnbad;
                    };

                    var searchForDay = function (dateKey, myArray, direction) {
                        for (var i = 0; i < myArray.length; i++) {
                            if (datesMatch(myArray[i].publishedAt, dateKey)) {
                                if (i + direction > myArray.length - 1) {
                                    return myArray[0].publishedAt;
                                }
                                if (i + direction < 0) {
                                    return myArray[myArray.length - 1].publishedAt;
                                }
                                return myArray[i + direction].publishedAt;
                            }
                        }
                        return null;
                    };

                    var switchDay = function (dir, json) {
                        var date = formatDate('dd MM yy', $btc("#btc-comix-cal-date").html());
                        var prev = searchForDay(date, json, +1);
                        var next = searchForDay(date, json, -1);
                        logToConsole("prev", prev);
                        logToConsole("next", next);

                        if (dir === "next") loadDate(next, json);
                        if (dir === "prev") loadDate(prev, json);
                    };

                    var buildCalendar = function (json) {
                        logToConsole("building calendar", json);
                        if (json.length > 1) {
                            $btc("#btc-comix-cal-arrow-left").addClass("btc-comix-cal-arrow-active").removeClass("btc-comix-cal-arrow-inactive");
                        }
                        $btc('#btc-comix-datepicker').datepicker({
                            showOn: "both",
                            dateFormat: 'dd M yy',
                            beforeShowDay: function (date) {
                                return loadDatesWithVideos(date, json);
                            },
                            onSelect: function (date) {
                                return loadDate(date, json);
                            }
                        });
                        var datePicker = $btc('#btc-comix-datepicker .ui-datepicker-inline');
                        datePicker.hide();
                        $btc('#btc-comix-calendar').hover(function () {
                            datePicker.fadeIn('fast');
                            datePicker.css({
                                marginTop: -datePicker.height() + 'px',
                                marginLeft: '20px'
                            });
                        }, function () {
                            datePicker.fadeOut('fast');
                        });

                        $btc("#btc-comix-cal-arrow-left").bind("click", function () {
                            if ($btc(this).hasClass("btc-comix-cal-arrow-inactive")) return;
                            switchDay("prev", json);
                        });

                        $btc("#btc-comix-cal-arrow-right").bind("click", function () {
                            if ($btc(this).hasClass("btc-comix-cal-arrow-inactive")) return;
                            switchDay("next", json);
                        });
                    };

                    var loadComixProperties = function (json) {

                        json.sort(function (x, y) {
                            return new Date(y.publishedAt) - new Date(x.publishedAt);
                        });

                        logToConsole("Comix Properties After Sort", json);

                        logToConsole("Initial Video", json[0].videoId);
                        initYTPlayer(function (player) {
                            loadYTPlayer(json[0].videoId);
                        });
                        buildCarousel(json);
                        buildCalendar(json);
                        //btc_ga('send', 'pageview_location', window.location.href);
                    };

                    var getComixProperties = function () {
                        var playerJsonUrl = attribs.ws + "/btc-svc/ws/getPlaylistProps/" + attribs.pl;
                        $btc.getJSON(playerJsonUrl, function (data) {
                            logToConsole("Comix Properties", $btc.parseJSON(data.json));
                            loadComixProperties($btc.parseJSON(data.json));
                        })
                            .fail(function (data) {
                                logToConsole("Error loading comix properties", data);
                            });
                    };

                    var loadTemplate = function (json) {
                        $btc('#btc-comix-placement').html(json);
                        $btc('#btc-comix-ad').html(comixad);
                        /*** CSS Loaded and Configured, execute code ***/
                        getComixProperties();
                    };

                    var getTemplate = function () {
                        var templateUrl = attribs.ws + "/btc-svc/ws/getTemplate?templateType=COMIX&callback=?";
                        $btc.getJSON(templateUrl, function (data) {
                            logToConsole("Template data:", data);
                            loadTemplate(data.json);
                        })
                            .fail(function (data) {
                                logToConsole("Error loading template", data);
                            });
                    };

                    var getTemplatePlunker = function () {
                        templateUrl = "template.html";
                        $btc.get(templateUrl, function (data) {
                            loadTemplate(data);
                        })
                            .fail(function (data) {
                                logToConsole("Error loading template", data);
                            });
                    };

                    getTemplate();
                });
            });
    }

})();