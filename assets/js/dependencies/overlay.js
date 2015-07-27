
    (function ($) {
        'use strict';

        $(function () {
            window.addEventListener('popstate', function() {
                // there is a bug in the popstate event: http://stackoverflow.com/questions/10742422/prevent-browser-scroll-on-html5-history-popstate
                $('.overlay .js-overlay-close').click();
            });

            $('.js-open-overlay').click(function () {

                var linkUrl = $(this).attr('href');
                var oldUrl = window.location.href;

                $.ajax({
                    url: linkUrl,
                    success: function (data) {
                        var overlayContent = $(data).find('.js-ajax-content').html(),
                            $overlay = $('<div/>', {class: 'overlay'});

                        if (overlayContent === undefined) {
                            overlayContent = $(data).filter('.js-ajax-content').html();
                        }

                        if (overlayContent === undefined) {
                            overlayContent = data;
                        }

                        $overlay.hide().append(overlayContent);
                        $('.content-wrapper').after($overlay);

                        $('.overlay').popup({
                            autoopen: true,
                            type: 'overlay',
                            scrolllock: true,
                            color: '#000',
                            opacity: 0.8,
                            autozindex: false,
                            detach: true,
                            //transition: 'all 0.5s',
                            closeelement: '.js-overlay-close',
                            vertical: 'top',
                            keepfocus: true,
                            onopen: function () {

                                var videoLoader = require('videoLoader');
                                videoLoader.createVideoTag();

                                $(document)
                                    .one('click', '[data-filter-link]', function () {
                                        $('html, body').animate({
                                            scrollTop: $('.gloassar-filter-tags, .tags-filter').offset().top - 200
                                        }, 100);
                                        $('.overlay .js-overlay-close').click();
                                    });
                            },
                            closetransitionend: function () {
                                // clear the dom, because "detach" doesnt work well
                                $('.overlay, .popup_wrapper, .popup_background').remove();
                                if (window.history && window.history.replaceState) {
                                    window.history.replaceState({path: oldUrl}, '', oldUrl);
                                }
                            }
                        });
                    },
                    error: function() {
                        var $overlay = $('<div/>', {class: 'overlay'}),
                            $errorText = $('<div/>', {text: 'Feedback-Link did not work.', class: 'feedback-error'});
                        $overlay.hide().append($errorText);
                        $('.content-wrapper').after($overlay);

                        $('.overlay').popup({
                            autoopen: true,
                            type: 'overlay',
                            scrolllock: true,
                            color: '#000',
                            opacity: 0.8,
                            autozindex: false,
                            detach: true,
                            //transition: 'all 0.5s',
                            closeelement: '.js-overlay-close',
                            vertical: 'top',
                            keepfocus: true,
                            onopen: function () {},
                            closetransitionend: function () {
                                // clear the dom, because "detach" doesnt work well
                                $('.overlay, .popup_wrapper, .popup_background').remove();
                                if (window.history && window.history.replaceState) {
                                    window.history.replaceState({path: oldUrl}, '', oldUrl);
                                }
                            }
                        });
                    },
                    complete: function() {
                        $(document).trigger('navigation:close');
                    }
                });

                if (linkUrl !== window.location) {
                    if (window.history && window.history.pushState) {
                        window.history.pushState({path: linkUrl}, '', linkUrl);
                    }
                }

                return false;
            });
        });
    }
)(jQuery);
