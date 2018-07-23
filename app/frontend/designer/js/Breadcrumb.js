import ShapeSettings from "./dialog/ShapeSettings"

export default class Breadcrumb {

  constructor(app, elementId) {
    this.app =app
    this.html = $("#" + elementId)

    app.storage.addListener("changed", (data)=> this.update(data))
  }

  /**
   * @method
   * Called if the selection in the canvas has been changed. You must register this
   * class on the canvas to receive this event.
   *
   * @param {draw2d.Canvas} canvas the emitter of the event. In this case it is the canvas.
   * @param {draw2d.Figure} figure
   */
  update(data) {
    let path =""
    if (data.fileName !== null) {
      window.location.hash = "#file=" + data.fileName
      path = data.fileName.replace(/\//g, "<span class='separator'>/</span>")
    }
    path = path + "<span class='icon ion-ios-gear-outline'></span>"
    this.html.html(path)

    $("#breadcrumb .icon").on("click", () => {
      new ShapeSettings().show(this.app)
    })
  }
}


