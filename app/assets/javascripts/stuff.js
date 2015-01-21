(function($, window){

    var $w = $(window);
    var $body = $('body');
    var tk = {
        setup : {
            test : function() {
                return true;
            },
            run : function() {

            }
        },
        navScroll : {
            test : function() {
                return true;
            },
            run : function() {
                var $header = $('.site__header');
                $w.on('scroll', function(e){
                    if ($w.scrollTop() > 50){
                        $body.addClass('scrolled');
                    } else {
                        $body.removeClass('scrolled');
                    }
                });
            }
        }
    };

    for (var key in tk){
        if (tk[key].test()){
            console.log(key);
            tk[key].run();
        }
    }

}(jQuery, window));