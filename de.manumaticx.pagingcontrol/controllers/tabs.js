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

  $.tabs.applyProperties({
    left: 0,
    width: getWidth(),
    height: Ti.UI.FILL
  });

  args.titles.forEach(function(title){
    var t = Ti.UI.createView({
      width: $.tabWidth,
      height: Ti.UI.FILL
    });

    t.add(Ti.UI.createLabel({
      color: "#000",
      text: title
    }));

    $.tabs.add(t);

    // add divider
    $.tabs.add(Ti.UI.createView({
      backgroundColor: args.tabs.dividerColor,
      height: 32,
      width: 1
    }));
  });
}

function getWidth(){
  return $.tabWidth * opts.titles.length + opts.titles.length;
};

function refresh(){

};

exports.refresh = refresh;
exports.getWidth = getWidth;
