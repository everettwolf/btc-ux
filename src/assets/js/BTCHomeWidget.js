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
        document.getElementById(divId).innerHTML = html;
        return;
    }
    var acl = [
        {site: "localhost", responsive: true},
        {site: "michaelgchan.com", responsive: false},
        {site: "kingfeatures.com", responsive: false},
        {site: "z_seattlepi.com", responsive: false},
        //"z_oregonlive.com",
        {site: "z_sfgate.com", responsive: false},
        //"z_interact.stltoday.com",
        //"z_jsonline.com",
        //"z_denverpost.com",
        {site: "chicagotribune.com", responsive: true},
        {site: "m.seattlepi.com", responsive: true},
        {site: "comics.azcentral.com", responsive: true}
        //"z_nj.com",
        //"z_newsok.com",
        //"z_philly.com",
        //"z_cleveland.com",
        //"z_mysanantonio.com",
        //"z_newsday.com"
    ];
    attribs.valid = true;
    attribs.responsive = false;
    for (var i = 0; i < acl.length; i++) {
        if (acl[i].site === (window.location.hostname.replace('www.', '').toLowerCase())) {
            attribs.valid = true;
            attribs.responsive = acl[i].responsive;
            break;
        }
    }
    if (!attribs.valid) {
        var divId = "btc-home-widget";
        var html = "<img src='" + attribs.env + "/assets/images/default.png'/>";
        var div = document.createElement('div');
        div.id = divId;
        var widget = document.getElementById(SCRIPT_ID);
        widget.parentNode.insertBefore(div, widget);
        document.getElementById(divId).innerHTML = html;
        return;
    }

    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", attribs.env + '/assets/js/head.load.min.js');
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

    //load YT
    if (window.YT) window.YT = null;
    script = document.createElement("SCRIPT");
    script.src = attribs.env + '/assets/js/youtube.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);


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
    function main() {
        var styles = attribs.responsive ? attribs.env + '/assets/css/homestyleresp.css' : attribs.env + '/assets/css/homestyle.css';
        head.js(
            attribs.env + '/assets/js/jquery.min.js',
            attribs.env + '/assets/js/jquery-ui.min.js',
            attribs.env + '/assets/js/youtube.js',
            styles,
            '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
            '//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css', function () {
                console.log("BTC Log: jQuery loaded.  Running version " + $.fn.jquery);

                var debug = true;// window.location.hostname == 'localhost' || window.location.hostname == 'dev.beyondthecomics.com' || window.location.hostname == 'run.plnkr.co' ? true : false;
                var $btc = window.jQuery.noConflict();
                var $btc_dp;// = window.jQuery.datepicker;

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
                container_div.id = 'btc_container';
                var content = $d.getElementById(SCRIPT_ID);
                content.parentNode.insertBefore(container_div, content);

                //Initialize global variables
                var BTC, pl, src, C, datesWithVideos, mobileEnabled;

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
                loadCSS('//fonts.googleapis.com/css?family=Permanent+Marker');
                loadCSS('//fonts.googleapis.com/css?family=Oswald');

                var jqueryloadinitiated = new Date().getTime();
                var loadtries = 0;

                /****************
                 FUNCTIONS
                 *****************/
                var logToConsole = function (msg, val) {
                    if (debug) console.log("BTC Log: " + msg, val);
                };
                var formatDate = function (format, datetoformat) {
                    var tempDate = new Date(datetoformat);
                    var monthNames = [
                        "January", "February", "March",
                        "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"
                    ];
                    var monthNamesResponsive = [
                        "Jan", "Feb", "Mar",
                        "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep",
                        "Oct", "Nov", "Dec"
                    ];
                    var datestring = tempDate.getDate().toString();
                    var paddeddate = datestring.length < 2 ? '0' + datestring : datestring;
                    var month = attribs.responsive ? monthNamesResponsive[tempDate.getMonth()] : monthNames[tempDate.getMonth()];
                    var year = tempDate.getFullYear();
                    switch (format) {
                        case 'dd MM yy':
                            return paddeddate + ' ' + month + ' ' + year;
                        case 'MM d, yy':
                            return month + ' ' + datestring + ', ' + year;
                        default:
                            return datetoformat;
                    }
                };

                var isOSx = navigator.userAgent.match(/(iPhone|iPad)/i) ? true : false;
                var mobileenabled = false;

                var CONSTS = {
                    CAROUSEL_HEIGHT: 500,
                    CALENDAR_HEIGHT: 420,
                    CALENDAR_SLIDE_HEIGHT: 365,
                    COMIC_HEADLINE: "NEW! COMIC VIDEOS"
                };


                var loadDatesWithVideos = function (mydate) {
                    var returngood = [true, "available"];
                    var returnbad = [false, "unavailable"];
                    $checkdate = formatDate('dd MM yy', mydate);
                    if (mydate > new Date()) return returnbad;
                    for (var i = 0; i < datesWithVideos.length; i++) {
                        if (datesWithVideos[i].date == $checkdate) {
                            return returngood
                        }
                    }
                    return returnbad
                };
                var findVideoIndex = function (dateKey, myArray) {
                    for (var i = 0; i < myArray.length; i++) {
                        if (myArray[i].date === dateKey) {
                            return i;
                        }
                    }
                    return -1;
                };

                var loadDate = function (mydate) {

                    if (typeof($btc('#btc-datepicker').datepicker) != 'undefined') {
                        $btc('#btc-datepicker').datepicker().datepicker("setDate", new Date(mydate));
                    } else {
                        window.jQuery('#btc-datepicker').datepicker().datepicker("setDate", new Date(mydate));
                    }

                    btc_ga('send', 'event', 'KF Widget', 'dateswitched_location', window.location.href);

                    var date = new Date(mydate);

                    $btc("#btc-cal-date").html(formatDate('MM d, yy', date));

                    var idx = findVideoIndex(mydate, datesWithVideos); //$btc.inArray(mydate, datesWithVideos.date);
                    logToConsole("idx", idx);
                    logToConsole("length", datesWithVideos.length);
                    $btc("#btc-widget-open-title-comic").html(datesWithVideos[idx].comic);
                    $btc("#btc-widget-open-title-with").html("with");
                    $btc("#btc-widget-open-title-talent").html(datesWithVideos[idx].talent);
                    $btc("#btc-widget-open-title-joke").html('"' + datesWithVideos[idx].joke + '"');
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
                    loadOrCueVideo(datesWithVideos[idx].videoId);
                };
                var populateDatesWithVideos = function () {
                    var date;
                    var numDates = 1;
                    $btc.each(datesWithVideos, function (idx, val) {
                        if (!date) {
                            date = new Date(val.date);
                            logToConsole("date", date);
                            $btc("#btc-cal-date").html(formatDate('MM d, yy', date));
                        }
                        if (numDates++ > 1) $btc("#btc-cal-arrow-left").addClass("btc-cal-arrow-active").removeClass("btc-cal-arrow-inactive");
                    });
                };

                var searchForDay = function (dateKey, myArray, direction) {
                    logToConsole("MYARRAY", myArray);
                    logToConsole("DATEKEY", dateKey);
                    for (var i = 0; i < myArray.length; i++) {
                        logToConsole("compare", myArray[i].date + ", " + dateKey);
                        if (myArray[i].date === dateKey) {
                            logToConsole("idx", i + direction);
                            if (i + direction > myArray.length - 1) {
                                return myArray[0].date;
                            }
                            if (i + direction < 0) {
                                return myArray[myArray.length - 1].date;
                            }
                            return myArray[i + direction].date;
                        }
                    }
                    return null;
                };

                var switchDay = function (dir) {

                    var date = formatDate('dd MM yy', $btc("#btc-cal-date").html());

                    var prev = searchForDay(date, datesWithVideos, +1);// datesWithVideos[($btc.inArray(date, datesWithVideos) + 1) % datesWithVideos.length].date;
                    var next = searchForDay(date, datesWithVideos, -1);//datesWithVideos[($btc.inArray(date, datesWithVideos) - 1 + datesWithVideos.length) % datesWithVideos.length].date;
                    logToConsole("prev", prev);
                    logToConsole("next", next);

                    if (dir === "next") loadDate(next);
                    if (dir === "prev") loadDate(prev);
                };
                var createDateObject = function (json) {
                    datesWithVideos = new Array();
                    $btc.each(json, function (key, val) {
                        logToConsole("val.publishedAt", val.publishedAt);
                        var vid = val;
                        datesWithVideos.push({
                            'date': formatDate('dd MM yy', val.publishedAt),
                            'videoId': val.videoId,
                            'comic': val.comic,
                            'talent': val.talent,
                            'joke': val.joke,
                            'thumb': val.thumb
                        });
                    });
                    datesWithVideos.sort(function (x, y) {
                        return new Date(y.date) - new Date(x.date);
                    });
                    logToConsole("datesWithVideos", datesWithVideos);
                };
                var showCalendar = function (json) {
                    logToConsole("showing calendar", typeof($btc_dp));
                    populateDatesWithVideos();

                    $btc('#btc-widget-open-bground').height(CONSTS.CALENDAR_HEIGHT);
                    $btc('#btc-widget-open-slide').height(CONSTS.CALENDAR_SLIDE_HEIGHT);
                    $btc('#btc-widget-open-title-joke').show();
                    $btc("#btc-widget-open-title-comic").html(datesWithVideos[0].comic);
                    $btc("#btc-widget-open-title-with").html("with");
                    $btc("#btc-widget-open-title-talent").html(datesWithVideos[0].talent);
                    $btc("#btc-widget-open-title-joke").html('"' + datesWithVideos[0].joke + '"');

                    $btc('#btc-archive').css({"display": "inline-block"});
                    var dateFormat = attribs.responsive ? 'dd M yy' : 'dd MM yy';
                    if (typeof($btc('#btc-datepicker').datepicker) != 'undefined') {
                        $btc('#btc-datepicker').datepicker({
                            showOn: "both",
                            dateFormat: dateFormat,
                            beforeShowDay: loadDatesWithVideos,
                            onSelect: loadDate
                        });
                    } else {
                        window.jQuery('#btc-datepicker').datepicker({
                            showOn: "both",
                            dateFormat: dateFormat,
                            beforeShowDay: loadDatesWithVideos,
                            onSelect: loadDate
                        });
                    }
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
                    $btc("#btc-widget-open-title-comic").html($btc("#btc-vid-item_" + idx).attr('data-comic'));
                    $btc("#btc-widget-open-title-with").html("with");
                    $btc("#btc-widget-open-title-talent").html($btc("#btc-vid-item_" + idx).attr('data-talent'));
                    $btc(".btc-vid-item").css("opacity", "");
                    $btc(".btc-vid-overlay").css("display", "");
                    $btc("#btc-vid-item_" + idx).css("opacity", "0.25");
                    $btc("#btc-vid-overlay_" + idx).css("display", "inline-block");
                };
                var buildCarousel = function (json) {
                    logToConsole("building carousel", json);
                    $btc('#btc-widget-open-bground').height(CONSTS.CAROUSEL_HEIGHT);
                    var i = 0;
                    var carouselWidth = 0;
                    C = 0;
                    $btc(".btc-vid-list").html('');
                    $btc.each($btc(json).toArray(), function (key, val) {
                        carouselWidth += 154 * 2;
                        $btc("<div>", {
                            class: "btc-vid-slide",
                            id: "btc-vid-slide_" + i
                        }).appendTo(".btc-vid-list");
                        $btc("<div>", {
                            class: "btc-vid-item",
                            id: "btc-vid-item_" + i,
                            'data-comic': val.comic,
                            'data-talent': val.talent,
                            'data-videoId': val.videoId
                        }).appendTo("#btc-vid-slide_" + i);
                        $btc("<div>", {
                            class: "thumb",
                            id: "thumb_" + i
                        }).appendTo("#btc-vid-item_" + i);
                        $btc("<img>", {
                            src: val.thumb
                        }).appendTo("#thumb_" + i);
                        $btc("<div>", {
                            class: "joke",
                            text: val.joke
                        }).appendTo("#btc-vid-item_" + i);
                        $btc("<div>", {
                            class: "btc-vid-overlay",
                            id: "btc-vid-overlay_" + i
                        }).append("Now<br/>Playing").appendTo("#btc-vid-slide_" + i);
                        i++;
                    });

                    loadSlide(0);

                    if (carouselWidth > 1232) {
                        $btc(".btc-arrow-right").css("display", "inline");
                    }

                    $btc(".btc-vid-item").bind("click", function (event) {
                        var idx = this.id.split("_")[1];
                        loadSlide(idx);
                        logToConsole("vid data", $btc(this).attr('data-videoId'));
                        loadOrCueVideo($btc(this).attr('data-videoId'));
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
                var loadOrCueVideo = function (videoId) {
                    if (!isOSx) {
                        BTC.loadVideoById(videoId);
                    } else {
                        BTC.cueVideoById(videoId);
                    }
                }

                var videoPlayable = function () {
                    if ($btc('#btc-widget-open-bground').is(':visible') && !isOSx && !attribs.responsive) {
                        return true;
                    }
                    return false;
                };
                var onPlayerReady = function (event) {
                    logToConsole("open?", $btc('#btc-widget-open-bground').is(':visible'));
                    if (videoPlayable()) {
                        event.target.playVideo();
                    }
                    logToConsole("player ready", event);
                };

                var onPlayerStateChange = function (event) {
                    logToConsole("event changed", event.target.getVideoData().title);
                    if (event.data == 1) {
                        mobileenabled = true;
                        btc_ga('send', 'event', 'KF Widget', 'playstarted_title', event.target.getVideoData().title);
                        btc_ga('send', 'event', 'KF Widget', 'playstarted_location', window.location.href);
                    }
                };

                var loadYTPlayer = function (video) {
                    checkYTPlayerReady(function ($) {
                        BTC = new YT.Player('btc-widget-open-player', {
                            videoId: video.videoId,
                            controls: 1,
                            showinfo: 0,
                            modestbranding: 1,
                            playerVars: {rel: 0, showinfo: 0, playsinline: 1},
                            wmode: 'transparent',
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onPlayerStateChange
                            }
                        });
                    });
                    btc_ga('send', 'event', 'KF Widget', 'loaded_title', video.joke);
                    btc_ga('send', 'event', 'KF Widget', 'loaded_location', window.location.href);

                };

                var constructWidget = function (props) {
                    logToConsole("constructing video", props);

                    $btc('#btc-widget-display').html("<img id='btc-widget-thumb' src='" + props.thumb + "'>");
                    $btc('#btc-widget-title-name').html(props.comic);
                    $btc('#btc-widget-title-talent').html("with " + props.talent);
                    $btc(".btc-widget-facebook").bind("click", function () {
                        btc_ga('send', 'event', 'KF Widget', 'facebook_location', window.location.href);
                        var url = 'https://www.facebook.com/dialog/feed';
                        url += '?name=Joke of the Day with Dana Carvey ' + formatDate('MM d, yy', new Date());
                        url += '&caption=Beyond the Comics & King Features';
                        url += '&link=' + window.location.href;
                        url += '&app_id=1669023343337111';
                        url += '&redirect_uri=http://beyondthecomics.com/social.html';
                        url += '&picture=http://beyondthecomics.com/assets/images/thumb.png';
                        url += '&description=Watch as Dana Carvey reads the news as fake newscaster Tom Rathkite!';
                        url += '&display=popup';
                        logToConsole("facebook url", url);
                        url = encodeURI(url);
                        logToConsole("facebook url", url);
                        var width = 550;
                        var height = 250;
                        var left = window.screenX + window.outerWidth / 2 - width / 2;
                        var top = window.screenY + window.outerHeight / 2 - height / 2;
                        var opts = 'width=' + width +
                            ',height=' + height +
                            ',top=' + top +
                            ',left=' + left;
                        window.open(url, 'fbshare', opts);
                    });
                    $btc(".btc-widget-twitter").bind("click", function () {
                        btc_ga('send', 'event', 'KF Widget', 'twitter_location', window.location.href);
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

                var loadPlayerProperties = function (json) {
                    logToConsole("player properties", json);
                    createDateObject(json);
                    logToConsole("initial video", datesWithVideos[0].videoId);
                    constructWidget({
                        "comic": datesWithVideos[0].comic,
                        "talent": datesWithVideos[0].talent,
                        "thumb": datesWithVideos[0].thumb
                    });
                    loadYTPlayer(datesWithVideos[0]);
                    logToConsole("archive type", attribs.archive);
                    btc_ga('send', 'pageview_location', window.location.href);
                    switch (attribs.archive) {
                        case "carousel":
                            buildCarousel(json);
                            break;
                        case "calendar":
                            $btc_dp = $btc.datepicker || window.jQuery.datepicker;
                            logToConsole("Native Date Picker", window.jQuery.datepicker);
                            logToConsole("No Conflict Date Picker", $btc.datepicker);
                            logToConsole("Initialized Date Picker", $btc_dp);
                            if (typeof($btc_dp) === 'undefined') {
                                buildCarousel(json);
                            } else {
                                showCalendar(json);
                            }
                            break;
                        default:
                            break;
                    }

                };

                var getPlayerProperties = function () {
                    var playerJsonUrl = attribs.ws + "/btc-svc/ws/getPlaylistProps/" + attribs.pl;
                    $btc.getJSON(playerJsonUrl, function (data) {
                        loadPlayerProperties($btc.parseJSON(data.json));
                    })
                        .fail(function (data) {
                            logToConsole("Error loading player properties", data);
                        });
                };

                var loadTemplate = function (json) {
                    $btc('#btc_container').html(json);
                    $btc('#btc-widget-header').html(CONSTS.COMIC_HEADLINE);
                    $btc('#btc-widget-open-header').html(CONSTS.COMIC_HEADLINE);

                    $btc('#btc-widget-header, #btc-widget-playbtn, #btc-widget-title').click(function () {
                        btc_ga('send', 'event', 'KF Widget', 'opened_location', window.location.href);
                        $btc('#btc-widget-open-bground').toggle("slow", function () {
                            logToConsole("mobileEnabled", mobileEnabled);
                            logToConsole("isOsx", isOSx);
                            $btc('#btc-widget-open-title-joke').show();
                            if (mobileEnabled == true || !isOSx) BTC.playVideo();
                        });
                    });

                    $btc("#btc-widget-open-close-btn").click(function () {
                        btc_ga('send', 'event', 'KF Widget', 'closed_location', window.location.href);
                        $btc('#btc-widget-open-bground').toggle("slow");
                        BTC.stopVideo();
                    });

                    /*** CSS Loaded and Configured, execute code ***/
                    getPlayerProperties();
                };

                var getTemplate = function () {
                    var templateUrl = attribs.ws + "/btc-svc/ws/getTemplate?templateType=HOME&callback=?";
                    $btc.getJSON(templateUrl, function (data) {
                        loadTemplate(data.json);
                    })
                        .fail(function (data) {
                            logToConsole("Error loading template", data);
                        });
                };

                getTemplate();
            }
        );

    }

})
();