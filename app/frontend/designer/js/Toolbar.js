import RectangleToolPolicy from "./policy/RectangleToolPolicy"
import CircleToolPolicy from "./policy/CircleToolPolicy"
import LineToolPolicy from "./policy/LineToolPolicy"
import TextToolPolicy from "./policy/TextToolPolicy"
import PortToolPolicy from "./policy/PortToolPolicy"
import SelectionToolPolicy from "./policy/SelectionToolPolicy"
import GeoUnionToolPolicy from "./policy/GeoUnionToolPolicy"
import GeoIntersectionToolPolicy from "./policy/GeoIntersectionToolPolicy"
import GeoDifferenceToolPolicy from "./policy/GeoDifferenceToolPolicy"

import FigureCodeEdit from "./dialog/FigureCodeEdit"
import FigureMarkdownEdit from "./dialog/FigureMarkdownEdit"
import FigureTest from "./dialog/FigureTest"

export default class Toolbar {

  constructor(app, elementId, view) {
    this.html = $("#" + elementId)
    this.view = view
    this.app = app


    // register this class as event listener for the canvas
    // CommandStack. This is required to update the state of
    // the Undo/Redo Buttons.
    //
    view.getCommandStack().addEventListener(this)

    // Register a Selection listener for the state handling
    // of the Delete Button
    //
    view.on("select", this.onSelectionChanged.bind(this))

    this.fileName = null

    let buttonGroup = $("<div class='group'></div>")
    this.html.append(buttonGroup)

    this.openButton = $('<img  data-toggle="tooltip" title="Load File <span class=\'highlight\'> [ Ctrl+O ]</span>" class="icon" src="./images/toolbar_download.svg"></img>')
    buttonGroup.append(this.openButton)
    this.openButton.on("click", () => {
      this.openButton.tooltip("hide")
      app.fileOpen()
    })
    Mousetrap.bindGlobal("ctrl+o", () => {
      this.openButton.click()
      return false
    })

    this.saveButton = $('<img data-toggle="tooltip" title="Save File <span class=\'highlight\'> [ Ctrl+S ]</span>" class="icon" src="./images/toolbar_upload.svg"/>')
    buttonGroup.append(this.saveButton)
    this.saveButton.on("click", () => {
      this.saveButton.tooltip("hide")
      app.fileSave()
    })
    Mousetrap.bindGlobal("ctrl+s", (event) => {
      this.saveButton.click()
      return false
    })


    // Inject the UNDO Button and the callbacks
    //
    buttonGroup = $('<div class="group"></div>')
    this.html.append(buttonGroup)
    this.undoButton = $('<img id="editUndo" data-toggle="tooltip" title="Undo <span class=\'highlight\'> [ Ctrl+Z ]</span>" class="icon disabled"  src="./images/toolbar_undo.svg"/>')
    buttonGroup.append(this.undoButton)
    $("#toolbar").delegate("#editUndo:not(.disabled)", "click",  () => {
      this.view.getCommandStack().undo()
    })
    Mousetrap.bindGlobal("ctrl+z", () => {
      this.undoButton.click()
      return false
    })


    // Inject the REDO Button and the callback
    //
    this.redoButton = $('<img id="editRedo" data-toggle="tooltip" title="Redo <span class=\'highlight\'> [ Ctrl+Y ]</span>"  class="icon disabled" src="./images/toolbar_redo.svg"/>')
    buttonGroup.append(this.redoButton)
    $("#toolbar").delegate("#editRedo:not(.disabled)", "click", () => {
      this.view.getCommandStack().redo()
    })
    Mousetrap.bindGlobal("ctrl+y", () => {
      this.redoButton.click()
      return false
    })

    // Inject the DELETE Button
    //
    this.deleteButton = $('<img  id="editDelete" data-toggle="tooltip" title="Delete <span class=\'highlight\'> [ Del ]</span>" class="icon disabled" src="./images/toolbar_delete.svg"/>')
    buttonGroup.append(this.deleteButton)
    $("#toolbar").delegate("#editDelete:not(.disabled)", "click",function () {
      view.getCommandStack().startTransaction(draw2d.Configuration.i18n.command.deleteShape)
      view.getSelection().each(function (index, figure) {
        let cmd = figure.createCommand(new draw2d.command.CommandType(draw2d.command.CommandType.DELETE))
        if (cmd !== null) {
          view.getCommandStack().execute(cmd)
        }
      })
      // execute all single commands at once.
      view.getCommandStack().commitTransaction()
    })
    Mousetrap.bindGlobal(["del", "backspace"], () => {
      this.deleteButton.click()
      return false
    })


    buttonGroup = $('<div class="group"></div>')
    this.html.append(buttonGroup)

    this.selectButton = $('<img id="editSelect" data-toggle="tooltip" title="Select mode <span class=\'highlight\'> [ spacebar ]</span>" class="icon" src="./images/toolbar_select.svg"/>')
    buttonGroup.append(this.selectButton)
    this.selectButton.on("click", () => {
      this.view.installEditPolicy(new SelectionToolPolicy())
    })
    Mousetrap.bindGlobal("space", () => {
      this.selectButton.click()
      return false
    })

    this.shapeButton = $(
      '<label id="tool_shape" class="dropdown">' +
      '    <img data-toggle="dropdown"  id="tool_shape_image" class="icon"  data-toggle="tooltip" title="Add a new object to your document"  src="./images/toolbar_insert.svg">' +
      '    <ul class="dropdown-menu" role="menu" >' +
      '       <li class="tool_shape_entry policyRectangleToolPolicy" data-toggle="tooltip" title="Rectangle <span class=\'highlight\'> [ R ]</span>"><a href="#"><img  src="./images/toolbar_rectangle.svg">Rectangle</a></li>' +
      '       <li class="tool_shape_entry policyCircleToolPolicy"     data-toggle="tooltip" title="Circle <span class=\'highlight\'> [ C ]</span>">   <a href="#"><img  src="./images/toolbar_circle.svg">Circle</a></li>' +
      '       <li class="tool_shape_entry policyLineToolPolicy"       data-toggle="tooltip" title="Line <span class=\'highlight\'> [ L ]</span>">     <a href="#"><img  src="./images/toolbar_line.svg">Line</a></li>' +
      '       <li class="tool_shape_entry policyTextToolPolicy"       data-toggle="tooltip" title="Text <span class=\'highlight\'> [ T ]</span>">     <a href="#"><img  src="./images/toolbar_text.svg">Text</a></li>' +
      '       <li class="tool_shape_entry policyPortToolPolicy"       data-toggle="tooltip" title="Port <span class=\'highlight\'> [ P ]</span>">     <a href="#"><img  src="./images/toolbar_rectangle.svg">Port</a></li>' +
      '    </ul>' +
      '</label>'
    )
    buttonGroup.append(this.shapeButton)

    $(".policyRectangleToolPolicy").on("click", () => {
      let p =new RectangleToolPolicy()
      p.executed=()=>{ this.selectButton.click()}
      this.view.installEditPolicy(p)
    })
    $(".policyCircleToolPolicy").on("click", () => {
      let p =new CircleToolPolicy()
      p.executed=()=>{ this.selectButton.click()}
      this.view.installEditPolicy(p)
    })
    $(".policyLineToolPolicy").on("click", () => {
      let p =new LineToolPolicy()
      p.executed=()=>{ this.selectButton.click()}
      this.view.installEditPolicy(p)
    })
    $(".policyTextToolPolicy").on("click", () => {
      let p =new TextToolPolicy()
      p.executed=()=>{ this.selectButton.click()}
      this.view.installEditPolicy(p)
    })
    $(".policyPortToolPolicy").on("click", () => {
      let p =new PortToolPolicy()
      p.executed=()=>{ this.selectButton.click()}
      this.view.installEditPolicy(p)
    })

    Mousetrap.bindGlobal(["R", "r"], () => {
      $('.policyRectangleToolPolicy1').click()
      return false
    })
    Mousetrap.bindGlobal(["C", "c"], () => {
      $('.policyCircleToolPolicy').click()
      return false
    })
    Mousetrap.bindGlobal(["T", "t"], () => {
      $('.policyTextToolPolicy').click()
      return false
    })
    Mousetrap.bindGlobal(["P", "p"], () => {
      $('.policyPortToolPolicy').click()
      return false
    })
    Mousetrap.bindGlobal(["L", "l"], () => {
      $('.policyLineToolPolicy').click()
      return false
    })

    this.unionButton = $('<span data-toggle="tooltip" title="Polygon Union <span class=\'highlight\'> [ U ]</span>"><img src="./images/toolbar_union.png"></span>')
    buttonGroup.append(this.unionButton)
    this.unionButton.on("click", () => {
      let selection = this.view.getSelection().getAll()
      let p = new GeoUnionToolPolicy()
      p.executed=()=>{ this.selectButton.click()}
      this.view.installEditPolicy(p)
      p.execute(this.view, selection)
    })
    Mousetrap.bindGlobal(["U", "u"], () => {
      this.unionButton.click()
      return false
    })

    this.differenceButton = $('<span data-toggle="tooltip" title="Polygon Difference <span class=\'highlight\'> [ D ]</span>"  ><img src="./images/toolbar_difference.png"></span>')
    buttonGroup.append(this.differenceButton)
    this.differenceButton.on("click", () => {
      this.view.installEditPolicy(new GeoDifferenceToolPolicy())
    })
    Mousetrap.bindGlobal(["D", "d"], () => {
      this.differenceButton.click()
      return false
    })

    this.intersectionButton = $('<span data-toggle="tooltip" title="Polygon Intersection <span class=\'highlight\'> [ I ]</span>" ><img src="./images/toolbar_intersect.png"></span>')
    buttonGroup.append(this.intersectionButton)
    this.intersectionButton.on("click", () => {
      this.view.installEditPolicy(new GeoIntersectionToolPolicy())
    })
    Mousetrap.bindGlobal(["I", "i"], () => {
      this.intersectionButton.click()
      return false
    })


    buttonGroup = $('<div class="group"></div>')
    this.html.append(buttonGroup)
    this.testButton = $('<span  data-toggle="tooltip" title="Test</span>" class="ion-easel icon"></span>')
    buttonGroup.append(this.testButton)
    this.testButton.on("click", () => {
      // if any error happens during the shape code create/execute -> goto the the JS editor
      try {
        new FigureTest().show()
      }
      catch (exc) {
        console.log(exc)
        new FigureCodeEdit().show()
      }
    })

    this.codeButton = $('<span data-toggle="tooltip" title="Edit JavaScript code</span>" class="ion-code icon"></span>')
    buttonGroup.append(this.codeButton)
    this.codeButton.on("click", () => {
      new FigureCodeEdit().show()
    })

    this.markdownButton = $('<span data-toggle="tooltip" title="Helpfile for this shape</span>"><img src="./images/toolbar_markdown.png"></span>')
    buttonGroup.append(this.markdownButton)
    this.markdownButton.on("click", () => {
      new FigureMarkdownEdit().show()
    })

    // enable the tooltip for all buttons
    //
    $('*[data-toggle="tooltip"]').tooltip({
      placement: "bottom",
      container: "body",
      delay: {show: 1000, hide: 10},
      html: true
    })
  }


  /**
   * @method
   * Called if the selection in the cnavas has been changed. You must register this
   * class on the canvas to receive this event.
   *
   * @param {draw2d.Figure} figure
   */
  onSelectionChanged(emitter, event) {
    if (event.figure === null) {
      $("#editDelete").addClass("disabled")
    }
    else {
      $("#editDelete").removeClass("disabled")
    }
  }

  /**
   * @method
   * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
   * can be used to identify the type of event which has occurred.
   *
   * @template
   *
   * @param {draw2d.command.CommandStackEvent} event
   **/
  stackChanged(event) {
    $("#editUndo").addClass("disabled")
    $("#editRedo").addClass("disabled")

    if (event.getStack().canUndo()) {
      $("#editUndo").removeClass("disabled")
    }

    if (event.getStack().canRedo()) {
      $("#editRedo").removeClass("disabled")
    }
  }
}
