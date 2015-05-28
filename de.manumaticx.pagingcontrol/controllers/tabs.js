var opts = {};

init(arguments[0] || {});

function getTabWidth(num){
  var displayWidth = Ti.Platform.displayCaps.platformWidth,
      orientation = Ti.Gesture.orientation,
      denominator,
      width;

  OS_ANDROID && (displayWidth /= Ti.Platform.displayCaps.logicalDensityFactor);

  // there is more space in landscape, so we show more tabs then
  if (orientation == Ti.UI.LANDSCAPE_LEFT || orientation == Ti.UI.LANDSCAPE_RIGHT){
    denominator = num || 7;
  } else {
    denominator = num || 4;
  }
  
  width = Math.floor(displayWidth / denominator);
  
  return width;
}

function init(args){

  _.defaults(opts, args);
  
  // 'auto' makes the tabs fill the available width
  if (args.tabs.width === 'auto'){
    args.tabs.width = getTabWidth(args.titles.length);
  }

  $.tabWidth = args.tabs.width || getTabWidth();
  
  if(_.isString($.tabWidth) && $.tabWidth.indexOf('%')>0) {
    var newWidth = parseInt($.tabWidth.slice(0, $.tabWidth.indexOf('%')))/100;

    OS_ANDROID && (newWidth /= Ti.Platform.displayCaps.logicalDensityFactor);

    $.tabWidth = newWidth * Ti.Platform.displayCaps.platformWidth;
  }
  
  $.tabWidth = args.tabs.width || getTabWidth();

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
      text: args.titles[i].toUpperCase(),
      font : args.tabs.font
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
