/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */
import Palette from "./Palette"
import View from "./View"
import Files from "./Files"
import FileOpen from "./dialog/FileOpen"
import FileSave from "./dialog/FileSave"
import conf from './Configuration'

class Application {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor() {
    this.localStorage = []

    try {
      if ('localStorage' in window && window.localStorage !== null) {
        this.localStorage = localStorage
      }
    } catch (e) {
    }

    this.palette = new Palette()
    this.view = new View("draw2dCanvas")
    this.filePane = new Files()

    $("#fileOpen, #editorFileOpen").on("click", () => {
      new FileOpen().show(this.view)
    })
    $("#fileNew").on("click", () => {
      this.fileNew()
    })
    $("#fileSave, #editorFileSave").on("click", () => {
      new FileSave().show(this.view, () => {
        this.filePane.render()
      })
    })

    $("#appHelp").on("click", () => {
      $("#leftTabStrip .gitbook").click()
    })
    $("#appAbout").on("click", () => {
      $("#leftTabStrip .about").click()
    })

    /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(e => {
      let $img = $(e)
      let imgURL = $img.attr('src')

      $.get(imgURL, data => {
        // Get the SVG tag, ignore the rest
        let $svg = $(data).find('svg')
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a')
        // Replace image with new SVG
        $img.replaceWith($svg)
      }, 'xml')
    })
  }


  dump() {
    let writer = new draw2d.io.json.Writer()
    writer.marshal(this.view, function (json) {
      console.log(JSON.stringify(json, undefined, 2))
    })
  }

  getParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
    let regexS = "[\\?&]" + name + "=([^&#]*)"
    let regex = new RegExp(regexS)
    let results = regex.exec(window.location.href)

    // the param isn't part of the normal URL pattern...
    //
    if (results === null) {
      // maybe it is part in the hash.
      //
      regexS = "[\\#]" + name + "=([^&#]*)"
      regex = new RegExp(regexS)
      results = regex.exec(window.location.hash)
      if (results === null) {
        return null
      }
    }

    return results[1]
  }

  fileNew(shapeTemplate) {
    $("#leftTabStrip .editor").click()

    this.view.clear()
    if (shapeTemplate) {
      new Reader().unmarshal(this.view, shapeTemplate)
    }
    this.view.centerDocument()
  }
}
let app = new Application()
export default app
