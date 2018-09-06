export default class FileNew {

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
  show() {
    $("#githubNewFileDialog .githubFileName").val("NewDocument")
    $('#githubNewFileDialog').on('shown.bs.modal', function () {
      $(this).find('input:first').focus()
    })
    $("#githubNewFileDialog").modal("show")

    $("#githubNewFileDialog .okButton").on("click", function () {
      var name = $("#githubNewFileDialog .githubFileName").val()
      $('#githubNewFileDialog').modal('hide')
      app.fileNew(undefined, name)
    })
  }
}
