import Filter from "./Filter"

export default shape_designer.filter.FanoutFilter = class FanoutFilter extends Filter {

  constructor() {
    super()
    this.NAME = "shape_designer.filter.FanoutFilter"
  }

  insertPane(figure, $parent) {
    let cssScope = this.NAME.replace(/[.]/g, "_")

    $parent.append('<div id="' + cssScope + '_container" class="panel panel-default">' +
      ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + cssScope + '_width_panel">' +
      '     Maximal fan out' +
      '</div>' +

      ' <div class="panel-body collapse in" id="' + cssScope + '_width_panel">' +
      '   <div class="form-group">' +
      '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_' + cssScope + '_fanout" type="text" value="' + figure.getMaxFanOut() + '" name="filter_' + cssScope + '_fanout" class="form-control" />' +
      '   </div>' +
      ' </div>' +
      '</div>')

    $("input[name='filter_" + cssScope + "_fanout']").TouchSpin({
      min: 0,
      max: 50,
      step: 1,
      maxboostedstep: 1,
      postfix: 'px'
    })
    $("input[name='filter_" + cssScope + "_fanout']").on("change", $.proxy(function () {
      this.setMaxFanOut(parseInt($("input[name='filter_" + cssScope + "_fanout']").val()))
    }, figure))


  }

  removePane() {
  }

  onInstall(figure) {
  }
}




