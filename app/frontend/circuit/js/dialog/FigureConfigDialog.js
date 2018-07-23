//"private" variables
import Hogan from "hogan.js"

var currentFigure = null

//"public" stuff
var dialog = null

export default dialog= new class FigureConfigDialog {
  constructor(){
  }

  show(figure, pos) {
    currentFigure = figure

    var settings = figure.getParameterSettings().slice(0)
    $.each(settings, function (i, el) {
      el.value = currentFigure.attr("userData." + el.name)
      el.hasblocid =  el.type === "blocid"
    })
    var compiled = Hogan.compile(
      '  <div class="header">Object Configuration</div>   ' +
      '  {{#settings}}               ' +
      '      {{#hasblocid}}      ' +
      '         <div class="form-group">' +
      '           <label for="figure_property_{{name}}">{{label}}</label>' +
      '           <select class="form-control" id="figure_property_{{name}}" data-name="{{name}}" size="4"> ' +
      '               <option value="-unconnected-">no device selected</option>   ' +
      '               {{#../blocs_push}}               ' +
      '               <option data-name="{{name}}" value="{{blocId}}">Push {{blocNr}}</option>   ' +
      '               {{/../blocs_push}}               ' +
      '           </select>   ' +
      '         </div>                  ' +
      '{{/hasblocid}}             ' +
      '      {{^hasblocid}}      ' +
      '         <div class="form-group">' +
      '           <label for="figure_property_{{name}}">{{label}}</label>' +
      '           <input type="text" class="form-control" id="figure_property_{{name}}" data-name="{{name}}" value="{{value}}" placeholder="{{label}}">' +
      '         </div>                  ' +
      '{{/hasblocid}}                  ' +
      '  {{/settings}}                  ' +
      '<button class="submit">Ok</button> '
    )
    var output = compiled.render({
      settings: settings,
      blocs_push: hardware.bloc.connected().filter(function (val) {
        return val.blocType === "Push"
      })
    })

    $("#figureConfigDialog").html(output)
    $("#figureConfigDialog").show().css({top: pos.y, left: pos.x, position: 'absolute'})
    $("#figureConfigDialog input, #figureConfigDialog select").focus()

    $("#figureConfigDialog input").keypress((e) => {
      if (e.which == 13) {
        this.hide()
      }
    })
    $("#figureConfigDialog .submit").on("click",  () => {
      this.hide()
    })

    $.each(settings, (index, setting) =>{
      var figureValue = currentFigure.attr("userData." + setting.name)
      $('#figureConfigDialog select[data-name="' + setting.name + '"] option[value="' + figureValue + '"]').attr('selected', 'selected')
    })
  }

  hide() {
    if (currentFigure !== null) {
      $("#figureConfigDialog input, #figureConfigDialog select").each(function (i, element) {
        element = $(element)
        var value = element.val()
        var name = element.data("name")

        currentFigure.attr("userData." + name, value)
      })
    }
    $("#figureConfigDialog").hide()
    $("#figureConfigDialog").html("")

    currentFigure = null
  }
}()

