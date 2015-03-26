# PagingControl [![gittio](http://img.shields.io/badge/gittio-0.4.2-00B4CC.svg)](http://gitt.io/component/de.manumaticx.pagingcontrol)

Alloy Widget for a page indication on ScrollableViews.

![](demo.gif)

## Quick Start

### Installation

Via gittio:
```
gittio install de.manumaticx.pagingcontrol
```

### Usage

Here's the complete example from the above gif:

`index.xml`
```xml
<Alloy>
  <Window class="container" >
    <Widget id="paging" src="de.manumaticx.pagingcontrol" onSelect="tabHandler" />
    <ScrollableView id="scrollableView">
      <View title="Yellow" backgroundColor="yellow" />
      <View title="Orange" backgroundColor="orange" />
      <View title="Red" backgroundColor="red" />
      <View title="Purple" backgroundColor="purple" />
      <View title="Blue" backgroundColor="blue" />
    </ScrollableView>
	</Window>
</Alloy>
```
`index.tss`
```javascript
".container" : {
	backgroundColor: "#fff",
	layout: "vertical"
},
"#paging" : {
	top: 0,
	indicatorColor: "#09c",
	tabs: true
}
```
`index.js`
```javascript
function tabHandler(e) {
  console.log('selected tab ', e.tab);
}
$.paging.setScrollableView($.scrollableView);
$.index.open();
```

## API

#### Properties

* `scrollableView` - reference the scrollableView
* `indicatorColor` - Color of the indicator
* `indicatorHeight` - Thickness the indicator
* `tabs` (Boolean) - wether to use tabs or only the indicator
* `tabWidth` - if not passed a default tabWidth of a quarter of the total with is used
* `dividerColor` - Color of the divider between the tabs
* `findScrollableView` - whether should widget is find scrollableView

#### Methods

* `setScrollableView( )` - lets you set the scrollableView after creation
* `cleanup( )` - call this to remove EventListeners

#### Events

* `select` - lets you know when a tab was pressed and which one was

## License

    The MIT License (MIT)

    Copyright (c) 2014 Manuel Lehner

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
