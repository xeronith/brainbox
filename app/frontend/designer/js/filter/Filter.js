export default class Filter {

  constructor() {
  }

  /**
   * @method
   * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
   * can be used to identify the type of event which has occurred.
   *
   * @template
   *
   **/
  apply(figure, attributes) {
  }

  onInstall(figure) {
  }

  insertPane(figure, $parent) {

  }

  removePane() {
  }

  getPersistentAttributes(relatedFigure) {
    var memento = {}
    memento.name = this.NAME

    return memento
  }

  setPersistentAttributes(relatedFigure, memento) {
  }
}




