
import "../less/index.less"
import "font-awesome/css/font-awesome.css"
import "octicons/build/font/octicons.css"
import "./dialog/PopConfirm"

import global from "./global"

//require('webpack-jquery-ui/css');  //ommit, if you don't want to load basic css theme

// Resolve name collision between jQuery UI and Twitter Bootstrap
/*** Handle jQuery plugin naming conflict between jQuery UI and Bootstrap ***/
$.widget.bridge('uibutton', $.ui.button)
$.widget.bridge('uitooltip', $.ui.tooltip)


// required to be compatible with jquery.layout and jquery.handsontable
//
jQuery.uaMatch = function (ua) {
  ua = ua.toLowerCase()
  var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
    /(webkit)[ \/]([\w.]+)/.exec(ua) ||
    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
    /(msie) ([\w.]+)/.exec(ua) ||
    ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
    []
  return {
    browser: match[1] || "",
    version: match[2] || "0"
  }
}
if (!jQuery.browser) {
  let matched = jQuery.uaMatch(navigator.userAgent)
  let browser = {}
  if (matched.browser) {
    browser[matched.browser] = true
    browser.version = matched.version
  }
// Chrome is Webkit, but Webkit is also Safari.
  if (browser.chrome) {
    browser.webkit = true
  } else if (browser.webkit) {
    browser.safari = true
  }
  jQuery.browser = browser
}


import hardware from "./hardware"
import conf from './Configuration'

$(window).load(function () {
  socket = io(
  {
    path: '/circuit/socket.io'
  })
  // remove the fileOpen/Save stuff if we run in a"serverless" mode. e.g. on gh-pages
  // (fake event from the socket.io mock )
  socket.on("serverless", () => {
    $("#leftTabStrip .editor").click()
    $("#fileOpen, #editorFileOpen").remove();
    $("#fileSave, #editorFileSave").remove();
    $("#files_tab").remove();
  });


  // we must load the "shape/index.js" in the global scope.
  $.getScript(conf.shapes.url+"index.js",function(){

    // export all required classes for deserialize JSON with "eval"
    // "eval" code didn't sees imported class or code
    //
    for(var k in global) window[k]=global[k];
    app = require("./Application")
    hardware.init(socket)
  });

  global.inlineSVG.init()
});
