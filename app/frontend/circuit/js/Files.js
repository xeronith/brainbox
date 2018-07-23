import conf from "./Configuration"
import FileNew from "./dialog/FileNew"
import Hogan from "hogan.js"
import storage from "./io/BackendStorage"

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */

export default class Files {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor() {
    this.render()
  }

  render() {
    storage.getFiles("").then((files) => {
      let compiled = Hogan.compile(
        '<div class="col-lg-3 col-md-4 col-xs-6 thumbAdd">' +
        '    <div class="img-responsive ion-ios-plus-outline"></div>' +
        '    <h4>New</h4>' +
        '</div>'+
        '{{#files}}' +
        '<div class="col-lg-3 col-md-4 col-xs-6 thumb">' +
        '  <span class="ion-ios-close-outline deleteIcon"  data-toggle="confirmation"  data-name="{{name}}"></span>' +
        '  <a class="thumbnail" data-name="{{name}}">' +
        '    <img class="img-responsive" src="' + conf.backend.file.image + '?filePath={{name}}" data-name="{{name}}">' +
        '    <h4 data-name="{{name}}">{{name}}</h4>' +
        '  </a>' +
        '</div>' +
        '{{/files}}'
      )

      let output = compiled.render({
        files: files
      })

      $("#files .container > .row").append($(output))

      $("#files .container .deleteIcon").on("click", (event) => {
        let $el = $(event.currentTarget)
        let name = $el.data("id")
        app.fileDelete(name, () => {
          let parent = $el.parent()
          parent.hide('slow', () =>  parent.remove())
        })
      })

      $("[data-toggle='confirmation']").popConfirm({
        title: "Delete File?",
        content: "",
        placement: "bottom" // (top, right, bottom, left)
      })


      $("#files .container .thumbnail h4").on("click", (event) =>{
        let $el = $(event.currentTarget)
        let name = $el.data("name")
        let $replaceWith = $('<input type="input" class="filenameInplaceEdit" value="' + name + '" />')
        $el.hide()
        $el.after($replaceWith)
        $replaceWith.focus()

        let fire = () =>{
          let newName = $replaceWith.val()
          if (newName !== "") {
            // get the value and post them here
            $.ajax({
                url: conf.backend.file.rename,
                method: "POST",
                xhrFields: {withCredentials: true},
                data: {
                  from: name,
                  to: newName
                }
              }
            ).then( () =>{
              $replaceWith.remove()
              $el.html(newName)
              $el.show()
              $el.data("name", newName)
              $(".thumb [data-id='" + name + conf.fileSuffix + "']").data("id", newName + conf.fileSuffix)
            })

          }
          else {
            // get the value and post them here
            $replaceWith.remove()
            $el.show()
          }
        }
        $replaceWith.blur(fire)
        $replaceWith.keypress( (e) =>{
          if (e.which === 13) {
            fire()
          }
        })
      })

      $("#files .container .thumbnail img").on("click", (event) =>{
        let $el = $(event.currentTarget)
        let name = $el.data("name")
        storage.loadFile(name)
          .then((content) => {
            $("#leftTabStrip .editor").click()
            storage.currentFile = name
            app.view.clear()
            new draw2d.io.json.Reader().unmarshal(app.view, content)
            app.view.getCommandStack().markSaveLocation()
            app.view.centerDocument()
          })
      })

      $("#files .thumbAdd").on("click",  () =>{
        new FileNew().show()
      })
    })
  }
}
