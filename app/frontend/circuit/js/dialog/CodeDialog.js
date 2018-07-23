export default class CodeDialog {

  constructor() {
  }

  show(js) {
    $('#codePreviewDialog .prettyprint').text(js)
    $('#codePreviewDialog .prettyprint').removeClass("prettyprinted")
    prettyPrint()
    $('#codePreviewDialog').modal('show')
  }
}
