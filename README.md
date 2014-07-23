# PagingControl [![gittio](http://img.shields.io/badge/gittio-0.2.0-00B4CC.svg)](http://gitt.io/component/de.manumaticx.pagingcontrol)

Alloy Widget for a line page indication on ScrollableViews.

![](demo.gif)

[![Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/) [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)
## Quick Start

### Installation [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/de.manumaticx.pagingcontrol)
Download the latest distribution ZIP-file and consult the [Titanium Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Using_a_Module) on how install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install de.manumaticx.pagingcontrol`

### Usage
Just put it in the same container as the ScrollableView:
```xml
<Alloy>
	<Window class="container" >
		<ScrollableView id="scrollableView">
		    <ImageView image="/images/image01.jpg" />
		    <ImageView image="/images/image02.jpg" />
		    <ImageView image="/images/image03.jpg" />
		    <ImageView image="/images/image04.jpg" />
		</ScrollableView>
		<Widget id="paging" src="de.manumaticx.pagingcontrol" />
	</Window>
</Alloy>
```
You can also pass a reference to the ScrollableView as `scrollableView` at creation or later with `$.paging.setScrollableView($.scrollableView)`. ~~But as long as the pagingControl widget and the ScrollableView have the same parent view, it should initialize itself.~~

**NOTE:** Auto-initialization doesn't work anymore with Alloy 1.4.0 - you have to pass a reference to the scrollableView or call `$.paging.setScrollableView($.scrollableView)`

Use `indicatorColor` to define the color.

Call `$.paging.destroy()` to remove the orientationChangeListener when you're done with the window.

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
