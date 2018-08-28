import FigureWriter from './../io/FigureWriter'
import "google-code-prettify/bin/prettify.min.css"

import {prettyPrint} from "google-code-prettify/bin/prettify.min"

export default class FigureCodeExport {

  constructor() {
  }

  show() {
    var writer = new FigureWriter()

    writer.marshal(shape_designer.app.view, "testShape", function (js) {

      var splash = $(
        '<div class="overlay-scale"><pre id="export_overlay" class="prettyprint">' +
        js +
        '</pre>' +
        ' <img title="Close" id="export_close" class="icon" src="./images/dialog_close.svg"/>' +
        ' <div title="Copy to Clipboard" id="export_clipboard"><i class="icon ion-clipboard"></i></div></div>'
      )
      $("body").append(splash)

      var removeDialog = function () {
        splash.removeClass("open")
        setTimeout(function () {
          splash.remove()
        }, 400)
      }

      $("#export_close").on("click", removeDialog)
      prettyPrint()

      setTimeout(function () {
        splash.addClass("open")
      }, 100)

      $("#export_clipboard").off("click").on("click", function (ev) {

        var copyElement = document.createElement('textarea')
        copyElement.innerHTML = js
        copyElement = document.body.appendChild(copyElement)
        copyElement.select()
        document.execCommand('copy')
        copyElement.remove()

        toastr.options = {
          "closeButton": false,
          "debug": false,
          "newestOnTop": false,
          "progressBar": false,
          "positionClass": "toast-top-right",
          "preventDuplicates": true,
          "onclick": null,
          "showDuration": "3000",
          "hideDuration": "2000",
          "timeOut": "500",
          "extendedTimeOut": "2000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }

        toastr.info("Code copied to clipboard")
      })
    })

  }
}
