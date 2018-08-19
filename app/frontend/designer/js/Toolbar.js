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
import FigureCodeExport from "./dialog/FigureCodeExport"
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

    this.html.append(
      '<span id="currentTool_container" class="media pull-left">' +
      ' <span class="pull-left" >' +
      '    <img id="currentTool_image" class="media-object" src="" >' +
      ' </span>' +
      ' <div class="media-body">' +
      '   <h4 id="currentTool_heading" class="media-heading">Media heading</h4>' +
      '    <div id="currentTool_message"></div>' +
      '  </div>' +
      '</span>')


    this.toolbarDiv = $("<div class=\"toolbarGroup pull-right\"></div>")
    this.html.append(this.toolbarDiv)


    // Inject the UNDO Button and the callbacks
    //
    buttonGroup = $('<div class="btn-group" title="Undo / Redo"></div>')
    this.toolbarDiv.append(buttonGroup)
    this.undoButton = $('<button  data-toggle="tooltip" title="Undo <span class=\'highlight\'> [ Ctrl+Z ]</span>" class=\"btn btn-default\" ><img src="./images/toolbar_undo.png"></button>')
    buttonGroup.append(this.undoButton)
    this.undoButton.on("click", () => {
      this.view.getCommandStack().undo()
    }).prop("disabled", true)

    Mousetrap.bindGlobal("ctrl+z", () => {
      this.undoButton.click()
      return false
    })


    // Inject the REDO Button and the callback
    //
    this.redoButton = $('<button data-toggle="tooltip" title="Redo <span class=\'highlight\'> [ Ctrl+Y ]</span>"  class=\"btn btn-default\" ><img src="./images/toolbar_redo.png"></button>')
    buttonGroup.append(this.redoButton)
    this.redoButton.on("click", () => {
      this.view.getCommandStack().redo()
    }).prop("disabled", true)
    Mousetrap.bindGlobal("ctrl+y", () => {
      this.redoButton.click()
      return false
    })


    buttonGroup = $('<div class="btn-group" data-toggle="buttons"  title="Tools and Shape"></div>')
    this.toolbarDiv.append(buttonGroup)


    // Inject the DELETE Button
    //
    this.deleteButton = $('<button  data-toggle="tooltip" title="Delete <span class=\'highlight\'> [ Del ]</span>" class=\"btn btn-default\" ><img src="./images/toolbar_delete.png"></button>')
    buttonGroup.append(this.deleteButton)
    this.deleteButton.on("click", function () {
      view.getCommandStack().startTransaction(draw2d.Configuration.i18n.command.deleteShape)
      view.getSelection().each(function (index, figure) {
        let cmd = figure.createCommand(new draw2d.command.CommandType(draw2d.command.CommandType.DELETE))
        if (cmd !== null) {
          view.getCommandStack().execute(cmd)
        }
      })
      // execute all single commands at once.
      view.getCommandStack().commitTransaction()
    }).prop("disabled", true)
    Mousetrap.bindGlobal(["del", "backspace"], () => {
      this.deleteButton.click()
      return false
    })


    this.selectButton = $('<label data-toggle="tooltip" title="Select mode <span class=\'highlight\'> [ spacebar ]</span>" class="btn btn-sm btn-primary active"><input type="radio" name="selected_tool" id="tool1" class="btn-default btn" ><img src="./images/tools/SELECT_TOOL_032.png"></label>')
    buttonGroup.append(this.selectButton)
    this.selectButton.on("click", () => {
      this.view.installEditPolicy(new SelectionToolPolicy())
    })
    Mousetrap.bindGlobal("space", () => {
      this.selectButton.click()
      return false
    })

    this.shapeButton = $(
      '<label id="tool_shape" class="dropdown btn btn-sm btn-primary">' +
      '    <input id="tool_shape_button"  class="btn-default btn"  type="radio">' +
      '    <img   id="tool_shape_image" class="policyRectangleToolPolicy1"  data-toggle="tooltip" title="Rectangle <span class=\'highlight\'> [ R ]</span>"  src="./images/tools/POLYGON_DIAGONALS_032.png">' +
      '    <span data-toggle="dropdown" role="button" href="#" id="tool_shape_caret"><span class="caret">&nbsp;</span></span>' +
      '    <ul class="dropdown-menu" role="menu" >' +
      '       <li class="tool_shape_entry policyRectangleToolPolicy2" data-toggle="tooltip" title="Rectangle <span class=\'highlight\'> [ R ]</span>"><a href="#"><img  src="./images/tools/POLYGON_DIAGONALS_032.png">Rectangle</a></li>' +
      '       <li class="tool_shape_entry policyCircleToolPolicy"    data-toggle="tooltip" title="Circle <span class=\'highlight\'> [ C ]</span>">   <a href="#"><img  src="./images/tools/CIRCLE_1_032.png">Circle</a></li>' +
      '       <li class="tool_shape_entry policyLineToolPolicy"      data-toggle="tooltip" title="Line <span class=\'highlight\'> [ L ]</span>">     <a href="#"><img  src="./images/tools/LINE_032.png">Line</a></li>' +
      '       <li class="tool_shape_entry policyTextToolPolicy"      data-toggle="tooltip" title="Text <span class=\'highlight\'> [ T ]</span>">     <a href="#"><img  src="./images/tools/TEXT_032.png">Text</a></li>' +
      '       <li class="tool_shape_entry policyPortToolPolicy"      data-toggle="tooltip" title="Port <span class=\'highlight\'> [ P ]</span>">     <a href="#"><img  src="./images/tools/PORT_032.png">Port</a></li>' +
      '    </ul>' +
      '</label>'
    )
    buttonGroup.append(this.shapeButton)
    $(".tool_shape_entry").on("click", (event) => {
      var $target = $(event.currentTarget)
      $("#tool_shape_image").attr("src", $target.find("img").attr("src"))
      $("#tool_shape_button").data("policy", $target.data("policy"))
      $("#tool_shape_image").click()

      $("#tool_shape_image")
        .attr('data-original-title', $target.data("original-title"))
        .tooltip('fixTitle')
    })

    $(".policyRectangleToolPolicy1").on("click", () => {
      this.view.installEditPolicy(new RectangleToolPolicy())
    })
    $(".policyRectangleToolPolicy2").on("click", () => {
      this.view.installEditPolicy(new RectangleToolPolicy())
    })
    $(".policyCircleToolPolicy").on("click", () => {
      this.view.installEditPolicy(new CircleToolPolicy())
    })
    $(".policyLineToolPolicy").on("click", () => {
      this.view.installEditPolicy(new LineToolPolicy())
    })
    $(".policyTextToolPolicy").on("click", () => {
      this.view.installEditPolicy(new TextToolPolicy())
    })
    $(".policyPortToolPolicy").on("click", () => {
      this.view.installEditPolicy(new PortToolPolicy())
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

    this.unionButton = $('<label data-toggle="tooltip" title="Polygon Union <span class=\'highlight\'> [ U ]</span>" class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="tool1" class="btn-default btn" ><img src="./images/toolbar_union.png"></label>')
    buttonGroup.append(this.unionButton)
    this.unionButton.on("click", () => {
      let selection = this.view.getSelection().getAll()
      let policy = new GeoUnionToolPolicy()
      this.view.installEditPolicy(policy)
      policy.execute(this.view, selection)
    })
    Mousetrap.bindGlobal(["U", "u"], () => {
      this.unionButton.click()
      return false
    })

    this.differenceButton = $('<label data-toggle="tooltip" title="Polygon Difference <span class=\'highlight\'> [ D ]</span>"  class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="tool2" class="btn-default btn" ><img src="./images/toolbar_difference.png"></label>')
    buttonGroup.append(this.differenceButton)
    this.differenceButton.on("click", () => {
      this.view.installEditPolicy(new GeoDifferenceToolPolicy())
    })
    Mousetrap.bindGlobal(["D", "d"], () => {
      this.differenceButton.click()
      return false
    })

    this.intersectionButton = $('<label data-toggle="tooltip" title="Polygon Intersection <span class=\'highlight\'> [ I ]</span>"  class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="too3" class="btn-default btn" ><img src="./images/toolbar_intersect.png"></label>')
    buttonGroup.append(this.intersectionButton)
    this.intersectionButton.on("click", () => {
      this.view.installEditPolicy(new GeoIntersectionToolPolicy())
    })
    Mousetrap.bindGlobal(["I", "i"], () => {
      this.intersectionButton.click()
      return false
    })


    let buttonGroup = $("<div class='btn-group'  title='File Operations'></div>")
    this.toolbarDiv.append(buttonGroup)


    this.openButton = $('<button  data-toggle="tooltip" data-size="xs" title="Load <span class=\'highlight\'> [ Ctrl+O ]</span>" class=\"btn btn-default\" ><img src="./images/toolbar_file_load.png"></button>')
    buttonGroup.append(this.openButton)
    this.openButton.on("click", () => {
      this.openButton.tooltip("hide")
      app.fileOpen()
    })
    Mousetrap.bindGlobal("ctrl+o", () => {
      this.openButton.click()
      return false
    })

    this.saveButton = $('<button data-toggle="tooltip" data-size="xs" title="Save <span class=\'highlight\'> [ Ctrl+S ]</span>" class=\"btn btn-default\" ><img src="./images/toolbar_file_save.png"></button>')
    buttonGroup.append(this.saveButton)
    this.saveButton.on("click", () => {
      this.saveButton.tooltip("hide")
      app.fileSave()
    })
    Mousetrap.bindGlobal("ctrl+s", (event) => {
      this.saveButton.click()
      return false
    })

    this.newButton = $('<button  data-toggle="tooltip" title="New Document <span class=\'highlight\'> [ Ctrl+N ]</span>" class=\"btn btn-default\" ><img src="./images/toolbar_file_new.png"></button>')
    buttonGroup.append(this.newButton)
    this.newButton.on("click", () => {
      app.fileNew()
    })
    Mousetrap.bindGlobal("ctrl+n", () => {
      this.undoButton.click()
      return false
    })

    buttonGroup = $('<div class="btn-group"  title="Test and Coding"></div>')
    this.toolbarDiv.append(buttonGroup)
    this.testButton = $('<button  data-toggle="tooltip" title="Test</span>" class=\"btn btn-default\" ><img src="./images/toolbar_test.png"></button>')
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

    this.codeButton = $('<button  data-toggle="tooltip" title="Edit JavaScript code</span>" class=\"btn btn-default\" ><img src="./images/toolbar_edit_js.png"></button>')
    buttonGroup.append(this.codeButton)
    this.codeButton.on("click", () => {
      new FigureCodeEdit().show()
    })

    this.exportButton = $('<button  data-toggle="tooltip" title="Export JavaScript code</span>" class=\"btn btn-default\" ><img src="./images/toolbar_export_js.png"></button>')
    buttonGroup.append(this.exportButton)
    this.exportButton.on("click", () => {
      new FigureCodeExport().show()
    })

    this.markdownButton = $('<button  data-toggle="tooltip" title="Helpfile for this shape</span>" class=\"btn btn-default\" ><img src="./images/toolbar_markdown.png"></button>')
    buttonGroup.append(this.markdownButton)
    this.markdownButton.on("click", () => {
      new FigureMarkdownEdit().show()
    })

    $(".toolbarGroup .btn-group").each((index, element) => {
      var $e = $(element)
      $e.prepend("<div class='info-text'>" + $e.attr("title") + "</div>")
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
    this.deleteButton.prop("disabled", event.figure === null)
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
    this.undoButton.prop("disabled", !event.getStack().canUndo())
    this.redoButton.prop("disabled", !event.getStack().canRedo())
  }

}
