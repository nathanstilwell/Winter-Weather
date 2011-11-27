/*

    .:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.
    .                                             .
    .     HAPPY HOLIDAYS              .      .    .
    .      GILT GROUPE                _\/  \/_    .
    .                                  _\/\/_     .
    .                              _\_\_\/\/_/_/_ .
    .                               / /_/\/\_\ \  .
    .                                  _/\/\_     .
    .                                  /\  /\     .
    .                                 '      '    .
    .       Love,                                 .
    .         Nathan                              .
    .                                             .
    .:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.


<link href='http://fonts.googleapis.com/css?family=Montez' rel='stylesheet' type='text/css'>

*/


(function happyHolidays (global, doc, $, config, undefined){
  // Shim rAF
  global.requestAnimFrame = (function(){
    return  global.requestAnimationFrame       || 
            global.webkitRequestAnimationFrame || 
            global.mozRequestAnimationFrame    || 
            global.oRequestAnimationFrame      || 
            global.msRequestAnimationFrame     || 
            null;
  })();

  global.HappyHolidays = (function happyHolidaysMaker (config) {

    //  declare

    var snow = [],
        snowStorm,
        target,
        width,
        height,
        stopSnowing,
        music,
        song,
        ready,
        rand,
        fall,
        flakeGenerator,
        init,
        startSnow,
        stopSnow,
        pauseMusic,
        firstScript,
        seasonsGreetings,
        timeout;
/*

                                  )
                                 ( )
          )     )     )     )     +     )     )     )     )
         ( )   ( )   ( )   ( )   | |   ( )   ( )   ( )   ( )
          +     +     +     +    | |    +     +     +     +
         | |   | |   | |   | |   | |   | |   | |   | |   | |
         | |   | |   | |   | |   | |   | |   | |   | |   | |
         | |   | |   | |   | |   | |   | |   | |   | |   | |
         | |   | |   | |   | |   | |   | |   | |   | |   | |
         | |   | |   | |   | |   | |   | |   | |   | |   | |
         | |   | |   | |   | |   | |   | |   | |   | |   | |
         | |   | |   | |   | |   """   | |   | |   | |   | |
         | |   | |   | |   | |  {{'}}  | |   | |   | |   | |
         """   """   """   """  {{'}}  """   """   """   """
        {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}}
         {'}   {'}   {'}   {'}   {'}   {'}   {'}   {'}   {'}
        {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}}
        {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} {{'}} 
          \'\  \'\   \'\   \'\__ {'} __/'/   /'/   /'/   /'/
           \'\  \'\   \'\   \___{{'}}___/   /'/   /'/   /'/
            \'\  \'\   \'\______ {'} ______/'/   /'/   /'/
             \'\  \'\   \_______{{'}}_______/   /'/   /'/
              \'\  \'\__________ {'} __________/'/   /'/
               \'\  \___________{{'}}___________/   /'/
                \'\_____________ {'} ______________/'/
                 \______________{{'}}_______________/
                                 {'}
                                {{'}}
                              {{{'''}}}
                          ##\/\/\/\/\/\/\##
                        ##\/\/\/\/\/\/\/\/\##
                       ##===================##
*/
    // initialize
    target = $('body');
    height = target.height() || $(doc).height();
    music = config.music;
    ready = false;
    stopSnowing = false;
    width = target.width();
    firstScript = $('body script')[0];

    // functions

    rand = function rand(n) {
      return Math.floor(n * Math.random());
    };
  
    fall = function fall() {
      if (!stopSnowing) {
        requestAnimFrame(fall); 
      }

      $.each(snow, function (i, elem) {
        var top = parseInt(elem[0].style.top, 10),
            data = elem.data(),
            x,
            y;
        
        y = Math.floor ( top + data.sink );

        elem.css({
          "top" : y
        });
        
        if (y >= height || x >= width) {
          elem.css({
            "top" : rand(height) * -1,
            "left" : rand(width)
          });
        }
      });
    };
    

/*


           *             ,
                       _/^\_
                      <     >
     *                 /.-.\         *
              *        `/&\`                   *
                      ,@.*;@,
                     /_o.I %_\    *
        *           (`'--:o(_@;
                   /`;--.,__ `')             *
                  ;@`o % O,*`'`&\ 
            *    (`'--)_@ ;o %'()\      *
                 /`;--._`''--._O'@;
                /&*,()~o`;-.,_ `""`)
     *          /`,@ ;+& () o*`;-';\
               (`""--.,_0 +% @' &()\
               /-.,_    ``''--....-'`)  *
          *    /@%;o`:;'--,.__   __.'\
              ;*,&(); @ % &^;~`"`o;@();         *
              /(); o^~; & ().o@*&`;&%O\
              `"="==""==,,,.,="=="==="`
           __.----.---''#####---...___...-----._
         '`            `"""""`


ooo        ooooo
`88.       .888'
 888b     d'888   .ooooo.  oooo d8b oooo d8b oooo    ooo
 8 Y88. .P  888  d88' `88b `888""8P `888""8P  `88.  .8'
 8  `888'   888  888ooo888  888      888       `88..8'
 8    Y     888  888    .o  888      888        `888'
o8o        o888o `Y8bod8P' d888b    d888b        .8' 
                                             .o..P'
                                             `Y8P'
  .oooooo.   oooo                  o8o               .
 d8P'  `Y8b  `888                  `"'             .o8 
888           888 .oo.   oooo d8b oooo   .oooo.o .o888oo ooo. .oo.  .oo.    .oooo.    .oooo.o
888           888P"Y88b  `888""8P `888  d88(  "8   888   `888P"Y88bP"Y88b  `P  )88b  d88(  "8
888           888   888   888      888  `"Y88b.    888    888   888   888   .oP"888  `"Y88b.
`88b    ooo   888   888   888      888  o.  )88b   888 .  888   888   888  d8(  888  o.  )88b
 `Y8bood8P'  o888o o888o d888b    o888o 8""888P'   "888" o888o o888o o888o `Y888""8o 8""888P'
*/



    flakeGenerator = function flakeGenerator() {
      var flakeSizeRange = config.maxsize - config.minsize,
        size = rand(flakeSizeRange) + config.minsize,
        color = config.color[rand(config.color.length)],
        type = config.type[rand(config.type.length)],
        sink = config.speed * size,
        top = rand(height) * -1,
        left = rand(width),
        style,
        opacity = (Math.random() * (config.maxalpha - config.minalpha)) + config.minalpha;

      sink = Math.floor(sink) || 1;

      return $('<span class="flake">' + config.snowletter + '</span>')
        .css({
          'top' : top,
          'left' : left,
          'color' : color,
          'font-family' : type,
          'font-size' : size, 
          'opacity' : opacity
        })
        .data({
          'sink' : sink
        });
    };

    init = function init() {
      var max = config.flakes;

      snowStorm = $('<div />', {
        "id" : "happy-holidays",
        "class" : "snow-window",
        "height" : $(doc).height()
      });

      if (!!document.createElement('audio').canPlayType) {
        song = doc.createElement('audio');
        song.className = 'music';
        song.src = config.songsource;
        song.loop = true;
        song.controls = true; 
      }

      stopSnowing = false;

      for (flake = 0; flake < max; flake++) {
        snow[flake] = flakeGenerator();
        snowStorm.append(snow[flake]);
      }

      //
      //  Events
      //

      $(window).bind('resize.ns-snow', function windowResize(e){
        height = $(this).height();
        width = $(this).width();
        snowStorm.css('height', $(doc).height());
      });

      //
      // Start the Show
      //

      startSnow();
    };

    startSnow = function startSnow() {
      if (firstScript && firstScript.nodeType === 1) {
        $(firstScript).before(snowStorm);
      } else {
        target.append(snowStorm);
      }

      snowStorm.fadeIn('slow');
      fall();

      if (music && song && song.canPlayType) {
        if ( song.canPlayType('audio/mpeg') ){
          target.append(song);  
        } else if ( song.canPlayType('audio/ogg') ) {
          song.src = "http://uprightnetizen.com/christmastime.ogg";
          target.append(song);
        }
        song.play();
      }

      timeout = setTimeout(seasonsGreetings, 1000);
    };

    stopSnow = function stopSnow() {
      // clearTimeout(timer);
      stopSnowing = true;
      $('#happy-holidays').remove();
      $(song).remove();
    };

    seasonsGreetings = function seasonsGreetings () {
      var wishes = $('<div/>', {
        id : 'seasonsGreetingsFromNathanStilwell',
        'class' : 'seasonsGreetingsFromNathanStilwell'
      }).html('<p>Merry Christmas</p><p>from</p><p>Gilt Groupe</p>');

      snowStorm.append(wishes);
      wishes.fadeIn(5000);
    };

    return {
      init : init,
      start : init,
      stop : stopSnow
    };

  }(config));
  
}(this, this.document, this.jQuery, {
  flakes : 70,
  color : ['#aac', '#ddf', '#ccd', '#f3f3f3', 'f0ffff'],
  type : ['Times', 'Arial', 'Tahoma', 'Georgia', 'san-serif'],
  snowletter : '*',
  speed : 0.05,
  maxsize : 30,
  minsize : 8,
  maxalpha : 0.85,
  minalpha : 0.45,
  music : true,
  songsource : "http://uprightnetizen.com/christmastime.mp3"
}));
/*
                                                       ,....,
                                                    ,;;:o;;;o;;,
                                                  ,;;o;'''''';;;;,
                                                 ,;:;;        ;;o;,
                                                 ;o;;          ;;;;
                                                 ;;o;          ;;o;
                                                 ';;;,  _  _  ,;;;'
                                                  ';o;;/_\/_\;;o;'
                                                    ';;\_\/_/;;'
                                                       '//\\'
                                                       //  \\
                                                      |/    \|
*/

(function merryChristmasToOneAndAll (global, $) {
  $(function andGodBlessUsEveryone() {
    global.HappyHolidays.init();

    //
    // the 'off' button
    //
    $("#happy-holidays").bind('click.ns-snow', function holidayClickHandler() {
      global.HappyHolidays.stop();
    });
  });
})(this, this.jQuery);

