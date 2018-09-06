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
      files = files.map(file => { return { ...file, title: file.name.replace(conf.fileSuffix,"")} });

      let compiled = Hogan.compile(
        '<div class="col-lg-3 col-md-4 col-xs-6 thumbAdd">' +
        '    <div class="img-responsive ion-ios-plus-outline"></div>' +
        '    <h4>New</h4>' +
        '</div>'+
        '{{#files}}' +
        '<div class="col-lg-3 col-md-4 col-xs-6 thumb">' +
        '  <img class="deleteIcon svg"  data-toggle="confirmation"  data-name="{{name}}" src="./images/toolbar_delete.svg"/>' +
        '  <a class="thumbnail" data-name="{{name}}">' +
        '    <img class="img-responsive" src="' + conf.backend.file.image() + '{{name}}" data-name="{{name}}">' +
        '    <h4>{{title}}</h4>' +
        '  </a>' +
        '</div>' +
        '{{/files}}'
      )

      let output = compiled.render({
        files: files
      })

      $("#files .container > .row").html($(output))

      $("#files .container .deleteIcon").on("click", (event) => {
        let $el = $(event.currentTarget)
        let name = $el.data("name")
        storage.deleteFile(name).then( () => {
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
        Mousetrap.pause()
        let $el = $(event.currentTarget)
        let name = $el.parent().data("name")
        let $replaceWith = $('<input type="input" class="filenameInplaceEdit" value="' + name.replace(conf.fileSuffix,"") + '" />')
        $el.hide()
        $el.after($replaceWith)
        $replaceWith.focus()

        let fire = () =>{
          Mousetrap.unpause()
          let newName = $replaceWith.val()
          if (newName !== "") {
            // get the value and post them here
            newName = storage.sanitize(newName)
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
              $el.html(newName.replace(conf.fileSuffix,""))
              $el.show()
              $el.parent().parent().find("[data-name='"+name+"']" ).data("name", newName)
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
        let name = $el.parent().data("name")
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

      socket.on("brain:generated",  msg => {
        let preview = $("a[data-name='"+msg.filePath+"'] img")
        if(preview.length===0){
          this.render()
        }
        else {
          $("a[data-name='" + msg.filePath + "'] img").attr({src: conf.backend.file.image + "?filePath=" + msg.filePath + "&timestamp=" + new Date().getTime()})
        }
      });
    })
  }
}
