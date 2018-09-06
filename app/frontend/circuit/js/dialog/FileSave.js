
import storage from "../io/BackendStorage"

export default class FileSave {

  /**
   * @constructor
   *
   */
  constructor() {
  }

  /**
   * @method
   *
   * Open the file picker and load the selected file.<br>
   *
   * @param {Function} successCallback callback method if the user select a file and the content is loaded
   * @param {Function} errorCallback method to call if any error happens
   *
   * @since 4.0.0
   */
  show(canvas) {
    Mousetrap.pause()
    $("#githubSaveFileDialog .githubFileName").val(storage.currentFile)

    $('#githubSaveFileDialog').off('shown.bs.modal').on('shown.bs.modal', (event) => {
      $(event.currentTarget).find('input:first').focus()
    })
    $("#githubSaveFileDialog").modal("show")

    // Button: Commit to GitHub
    //
    $("#githubSaveFileDialog .okButton").off("click").on("click", () => {
      canvas.setCurrentSelection(null)
      new draw2d.io.png.Writer().marshal(canvas, imageDataUrl => {
        let writer = new draw2d.io.json.Writer()
        writer.marshal(canvas, json => {
          let name = $("#githubSaveFileDialog .githubFileName").val()
          name = storage.sanitize(name)
          storage.saveFile(json, imageDataUrl, name)
            .then(function () {
              Mousetrap.unpause()
              storage.currentFile = name
              $('#githubSaveFileDialog').modal('hide')
          })
        })
      }, canvas.getBoundingBox().scale(10, 10))
    })
  }
}
