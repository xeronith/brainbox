/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */
import Palette from "./Palette"
import View from "./View"
import Files from "./view/FilesScreen"
import FileOpen from "./dialog/FileOpen"
import FileSave from "./dialog/FileSave"
import storage from './io/BackendStorage'
import conf from "./Configuration"
import reader from "./io/Reader"

/**
 * wait asyn that an DOM element is present
 * Usage: checkElement("<selector>").then(function(){alert("element found")})
 *
 * @returns {Promise<any>}
 */
function rafAsync() {
  return new Promise(resolve => {
    requestAnimationFrame(resolve); //faster than set time out
  });
}
function checkElement(selector) {
  if (document.querySelector(selector) === null) {
    return rafAsync().then(() => checkElement(selector));
  } else {
    return Promise.resolve(true);
  }
}


class Application {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor() {
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
      new FileSave().show(this.view, this.fileName)
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
    this.fileName = this.getParam("file")
    if (this.fileName) {
      $("#leftTabStrip .editor").click()
      this.load(conf.backend.file.get(this.fileName))
    }

    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    let demo = this.getParam("demo")
    if (demo) {
      $("#leftTabStrip .editor").click()
      this.load(conf.backend.demo.get(demo))
    }

    // listen on the history object to load files
    //
    window.onpopstate = (event) => {
      if (history.state && history.state.id === 'editor') {
        // Render new content for the homepage
        $("#leftTabStrip .editor").click()
        this.load(history.state.file)
      }
    }
  }

  load(file) {
    this.view.clear()
    $("#leftTabStrip .editor").click()
    return storage.loadUrl(file)
      .then((content) => {
        this.view.clear()
        reader.unmarshal(this.view, content)
        this.view.getCommandStack().markSaveLocation()
        this.view.centerDocument()

        // check if a tutorial exists for the named file and load/activate them
        //
        storage.loadUrl(file.replace(conf.fileSuffix, ".guide"))
          .then( content => {
            if(typeof content === "string"){
              content = JSON.parse(content)
            }
            $(content.screen).click()
            checkElement("#paletteElementsScroll").then( ()=>{
                let anno = new Anno(content.steps)
                anno.show()
            })
          })
          .catch( error => {
            // ignore 404 HTTP error silently
          })
        return content
      })
  }

  historyDemo(file){
    history.pushState({
      id: 'editor',
      file: name
    }, 'Brainbox Simulator | ' + name, window.location.href.split('?')[0] + '?demo=' + file)
  }

  historyFile(file){
    this.fileName = file
    history.pushState({
      id: 'editor',
      file: name
    }, 'Brainbox Simulator | ' + name, window.location.href.split('?')[0] + '?file=' + file)
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
      this.fileName = storage.sanitize(fileName)+conf.fileSuffix
    }
    else {
      this.fileName = "MyNewBrain" + conf.fileSuffix
    }
    this.view.centerDocument()
  }
}

let app = new Application()
export default app
