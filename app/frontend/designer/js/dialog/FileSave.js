import conf from "./../Configuration"

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
  show(storage, canvas) {

    new draw2d.io.png.Writer().marshal(canvas, imageDataUrl => {
      $("#githubSaveFileDialog .githubFilePreview").attr("src", imageDataUrl)
      $("#githubSaveFileDialog .githubFileName").val(storage.currentFile?storage.currentFile:"NewDocument"+conf.fileSuffix)

      $('#githubSaveFileDialog').on('shown.bs.modal', (event) => {
        $(event.currentTarget).find('input:first').focus()
      })
      $("#githubSaveFileDialog").modal("show")
      Mousetrap.pause()

      // Button: Commit to GitHub
      //
      $("#githubSaveFileDialog .okButton").off('click').on("click", () => {
        Mousetrap.unpause()
        let writer = new draw2d.io.json.Writer()
        writer.marshal(canvas, json => {
          let newName = $("#githubSaveFileDialog .githubFileName").val()
          storage.saveFile(json, imageDataUrl, newName)
            .then(() => {
              storage.currentFile = newName
              $('#githubSaveFileDialog').modal('hide')
            });
        })
      })
    }, canvas.getBoundingBox().scale(20, 20))
  }
}
