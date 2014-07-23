var args = _.defaults(arguments[0] || {}, {
    indicatorColor: "#000",
    height: 5,
    width: Ti.UI.FILL,
    bottom: 0
});

// apply properties of Ti.UI.View that can be applied to paging control view
[
    "backgroundColor",
    "backgroundImage",
    "backgroundLeftCap",
    "backgroundRepeat",
    "backgroundTopCap",
    "borderRadius",
    "borderWidth",
    "bottom",
    "height",
    "horizontalWrap",
    "left",
    "opacity",
    "right",
    "top",
    "visible",
    "width",
    "zIndex"
].forEach(function(prop){ _.has(args, prop) && ($.pagingcontrol[prop] = args[prop]); });

// NOTE: THIS DOES NOT WORK ANYMORE WITH ALLOY 1.4.0
// try to find scrollable view as child of parent
// this should work, if pagingcontrol is scrollable view have the same parent
// otherwise you can pass it with args or setScrollableView
if (args.__parentSymbol){
    args.__parentSymbol.children.length > 0 &&
    ($.scrollableView = _.find(args.__parentSymbol.children, function(child){
        return child.apiName === "Ti.UI.ScrollableView";
    }));
}

// assign passed reference of scrollable view
(_.has(args, "scrollableView")) && ($.scrollableView = args.scrollableView);

if ($.scrollableView){
    postLayout(init);
}

/**
 * calls back after postlayout
 */
function postLayout(callback){
    // wait for postlayout event to get the pagingcontrol size
    $.pagingcontrol.addEventListener('postlayout', function onPostLayout(){

        // callback
        callback();

        // remove eventlistener
        $.pagingcontrol.removeEventListener('postlayout', onPostLayout);
    });
}

/**
 * initialization method
 */
function init(){

    // create the indicator view
    $.indicator = Ti.UI.createView({
        backgroundColor: args.indicatorColor,
        height: $.pagingcontrol.getHeight(),
        width: Ti.UI.SIZE,
        left: 0
    });

    onOrientationChange();

    // add the indicator
    $.pagingcontrol.add($.indicator);

    // add scroll listener to scrollable view
    $.scrollableView.addEventListener('scroll', onScroll);
    Ti.Gesture.addEventListener('orientationchange', onOrientationChange);
}

/**
 * Callback for scroll event
 */
function onScroll(e){
    // here is where the magic happens, as simple as that
    $.indicator.setLeft(e.currentPageAsFloat * $.iWidth);
}

/**
 * Callback for orientationchange event
 */
function onOrientationChange(e){
    postLayout(function(){
        $.iWidth = Math.floor($.pagingcontrol.size.width / $.scrollableView.views.length);
        $.indicator.setWidth($.iWidth);
        $.indicator.setLeft($.scrollableView.getCurrentPage() * $.iWidth);
    });
}

/**
 * if you need to set it in the controller
 * @param {Ti.UI.Scrollableview} scrollable view
 */
exports.setScrollableView = function(_sv){
    $.scrollableView = _sv;
    postLayout(init);
};

/**
 * removes orientationchange Listener
 */
exports.destroy = function(){
    Ti.Gesture.removeEventListener('orientationchange', onOrientationChange);
};
