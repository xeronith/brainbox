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
import storage from './io/BackendStorage'

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

    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    let file = this.getParam("file")
    if (file) {
      $("#leftTabStrip .editor").click()
      this._load(file)
    }

    // listen on the history object to load files
    //
    window.onpopstate = (event) => {
      if (history.state && history.state.id === 'editor') {
        // Render new content for the hompage
        $("#leftTabStrip .editor").click()
        this._load(history.state.file)
      }
    }
  }

  _load(file) {
    storage.loadFile(file)
      .then((content) => {
        storage.currentFile = file
        this.view.clear()
        new draw2d.io.json.Reader().unmarshal(this.view, content)
        this.view.getCommandStack().markSaveLocation()
        this.view.centerDocument()
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


  fileNew(shapeTemplate, fileName) {
    $("#leftTabStrip .editor").click()

    this.view.clear()
    if (shapeTemplate) {
      new Reader().unmarshal(this.view, shapeTemplate)
    }
    
    if (fileName) {
      storage.currentFile = storage.sanitize(fileName)
    }
    else {
      storage.currentFile = "CircuitDiagram.brain"
    }
    this.view.centerDocument()
  }
}

let app = new Application()
export default app
