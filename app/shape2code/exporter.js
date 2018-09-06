var json=[
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "224a7916-067e-710f-bc40-d0ff40f3e7e4",
    "x": 7985,
    "y": 7984,
    "width": 30,
    "height": 32,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "baseClass": "draw2d.SetFigure",
      "code": "/**\n * by 'Draw2D Shape Designer'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ntestShape = testShape.extend({\n\n    init: function(attr, setter, getter){\n         this._super(attr, setter, getter);\n\n         this.attr({resizeable:false});\n         this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());\n         \n         var _this= this;\n         this.onChangeCallback = function(emitter, event){\n            if(event.value){\n                _this.layerAttr(\"circle\",{fill:\"#C21B7A\"});\n            }\n            else{\n                _this.layerAttr(\"circle\",{fill:\"#f0f0f0\"});\n            }\n            // set the LED on the Arduino on/off\n            hardware.webusb.set(3, !!event.value);\n         }\n    },\n    \n    calculate:function(){\n    },\n    \n    /**\n     *  Called if the simulation mode is starting\n     **/\n    onStart:function(){\n        this.getInputPort(0).on(\"change:value\", this.onChangeCallback);\n\n    },\n\n    /**\n     *  Called if the simulation mode is stopping\n     **/\n    onStop:function(){\n        this.getInputPort(0).off(\"change:value\", this.onChangeCallback);\n    }\n    \n});",
      "name": "circle",
      "markdown": "# High / Low Signal display\n\nsimple `HIGH`/ `LOW` display.\n\n    HIGH -> red\n \n    LOW -> gray"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#FFFFFF",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "f4d5683a-7c42-8771-5df4-e4e9da5b8b46",
    "x": 7979,
    "y": 7995.5,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Port",
      "type": "Input",
      "direction": 3
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#1C9BAB",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLine",
    "id": "6375bf0b-9ce4-1687-c8c2-0193fbfc2052",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Line"
    },
    "cssClass": "shape_designer_figure_ExtLine",
    "stroke": 1,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.VertexSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 7990.5221,
        "y": 7989.6824000000015
      },
      {
        "x": 8000.138100000002,
        "y": 8000.496800000001
      },
      {
        "x": 8009.754100000002,
        "y": 8011.311199999999
      }
    ],
    "router": "draw2d.layout.connection.VertexRouter",
    "radius": "",
    "filters": [
      {
        "name": "shape_designer.filter.StrokeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLine",
    "id": "3cba8df9-421c-ae49-3d29-0d907986c81d",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Line"
    },
    "cssClass": "shape_designer_figure_ExtLine",
    "stroke": 1,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.VertexSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 8010.944300000001,
        "y": 7989.062700000001
      },
      {
        "x": 7990.2832,
        "y": 8011.9637
      }
    ],
    "router": "draw2d.layout.connection.VertexRouter",
    "radius": "",
    "filters": [
      {
        "name": "shape_designer.filter.StrokeFilter"
      }
    ]
  }
];
var pkg='SBLed';
app.fileNew();

var reader = new draw2d.io.json.Reader();
reader.unmarshal(app.view,json);

var code = null;
var img  = null;
var customCode=app.getConfiguration("code");
var markdown = app.getConfiguration("markdown");
markdown = markdown?markdown:"";
var writer = new shape_designer.FigureWriter();
try {
    writer.marshal(app.view, pkg, function (js) {
        code = js;
        try {
            eval(js);
        }
        catch (exc) {
            console.log("Error in shape code. \nRemove error and try it again:\n\n>>    " + exc);
            throw exc;
        }
        var splash = $(
            '<div class="overlay-scale">' +
            '<div id="test_canvas">' +
            '</div>' +
            '<div>');

        // fadeTo MUSS leider sein. Man kann mit raphael keine paper.text elemente einfügen
        // wenn das canvas nicht sichtbar ist. In diesen Fall mach ich das Canvas "leicht" sichtbar und raphael ist
        // zufrieden.
        $("body").append(splash);
        var canvas = new draw2d.Canvas("test_canvas");
        var test = eval("new "+pkg+"()");
        canvas.add(test, 400, 160);
        canvas.commonPorts.each(function (i, p) {
            p.setVisible(false);
        });

        canvas.getBoundingBox = function () {
            var xCoords = [];
            var yCoords = [];
            this.getFigures().each(function (i, f) {
                var b = f.getBoundingBox();
                xCoords.push(b.x, b.x + b.w);
                yCoords.push(b.y, b.y + b.h);
            });
            var minX = Math.min.apply(Math, xCoords);
            var minY = Math.min.apply(Math, yCoords);
            var width = Math.max(10, Math.max.apply(Math, xCoords) - minX);
            var height = Math.max(10, Math.max.apply(Math, yCoords) - minY);

            return new draw2d.geo.Rectangle(minX, minY, width, height);
        };

        new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl, base64) {
            img = base64;
            splash.remove();
        }, canvas.getBoundingBox().scale(10, 10));
    });
}
catch(e){
    console.log(e);
    code="";
    img="";
}


