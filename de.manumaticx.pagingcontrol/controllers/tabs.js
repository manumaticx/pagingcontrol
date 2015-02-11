var opts = {};

init(arguments[0] || {});

function getTabWidth(){
  var displayWidth = Ti.Platform.displayCaps.platformWidth,
      orientation = Ti.Gesture.orientation;

  OS_ANDROID && (displayWidth /= Ti.Platform.displayCaps.logicalDensityFactor);

  if (orientation == Ti.UI.LANDSCAPE_LEFT || orientation == Ti.UI.LANDSCAPE_RIGHT){
    return Math.floor(displayWidth / 7);
  } else {
    return Math.floor(displayWidth / 4);
  }
}

function init(args){

  _.defaults(opts, args);

  $.tabWidth = args.tabs.width || getTabWidth();
  
  if(_.isString($.tabWidth) && $.tabWidth.indexOf('%')>0) {
    var newWidth = parseInt($.tabWidth.slice(0, $.tabWidth.indexOf('%')))/100;

    OS_ANDROID && (newWidth /= Ti.Platform.displayCaps.logicalDensityFactor);

    $.tabWidth = newWidth * Ti.Platform.displayCaps.platformWidth;
  }

  $.tabs.applyProperties({
    left: 0,
    width: getWidth(),
    height: Ti.UI.FILL
  });

  for (i = 0; i < args.titles.length; i++){
    var t = Ti.UI.createView({
      width: $.tabWidth,
      height: Ti.UI.FILL
    });

    t.add(Ti.UI.createLabel({
      color: "#000",
      text: args.titles[i]
    }));

    (function(index){
      t.addEventListener('click', function(){
        var view = this;
        $.trigger('select', { tab: index, view: view });
      });
    })(i);

    $.tabs.add(t);

    if (i < args.titles.length - 1){
      // add divider
      $.tabs.add(Ti.UI.createView({
        backgroundColor: args.tabs.dividerColor,
        height: 32,
        width: 1
      }));
    }
  }
}

function getWidth(){
  return $.tabWidth * opts.titles.length + opts.titles.length;
};

exports.getWidth = getWidth;
