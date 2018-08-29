var json=[
  {
    "type": "shape_designer.figure.ExtPolygon",
    "id": "deca748f-5f68-724b-54a1-a8aae5ce28c8",
    "x": 7947.5,
    "y": 7870.25,
    "width": 105,
    "height": 259.5,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "baseClass": "draw2d.SetFigure",
      "code": "/**\n * by 'Draw2D Shape Designer'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ntestShape = testShape.extend({\n\n    init: function(attr, setter, getter){\n         this._super(attr, setter, getter);\n\n         // your special code here\n    },\n\n    /**\n     *  Called by the simulator for every calculation\n     *  loop\n     *  @required\n     **/\n    calculate:function()\n    {\n        this.getInputPorts().each(function(index,port){\n            if(port.hasChangedValue() && port.getConnections().getSize()>0){\n                raspi.gpio.set(port.getName(), port.getValue());\n            }\n        });\n        this.getOutputPorts().each(function(index,port){\n            port.setValue(raspi.gpio.get(port.getName()));\n        });\n    },\n\n\n    /**\n     *  Called if the simulation mode is starting\n     *  @required\n     **/\n    onStart:function()\n    {\n    },\n\n    /**\n     *  Called if the simulation mode is stopping\n     *  @required\n     **/\n    onStop:function()\n    {\n    }\n});",
      "name": "Rectangle",
      "markdown": "# RaspBerry Pi GPIO \n\n## About GPIO\nThe Raspberry Pi provides Input/Outport ports \nintended to control or monitor other devices and \nsubsystem modules. These `GPIO` (general purpose I/O) \nsignals on the 2×13 header pins on the RPi motherboad  \ninclude SPI, I2C, serial UART, 3V3 and 5V power.\n\n## Interaction\nYou can control these GPIO pins on the raspi if you have installed\nthe DigitalTrainingStudio on your Raspberry via node.js\n\n## Install\n\n```\nsudo npm install -g digitalstudio\n````\n\nThis takes a whiule on a raspbery B+ 2 but should success.\n\n## Start the server on the raspi\nafter this you can start the DigitalTrainingStudio server on the raspberry\nwith\n\n```\ndigitalstudio \n```\n\n## Connect with the browser\n\nAfter this the DigitalTrainingStudio echos the url on the console \nhow to connect with your browser to the Raspi.\n\nNow you can drive the GPIO pins on raspi with the DigitalTrainingStudio\n\n"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#FFFFFF",
    "color": "#303030",
    "stroke": 1,
    "radius": 2,
    "dasharray": null,
    "vertices": [
      {
        "x": 8039.040000000001,
        "y": 7916.25
      },
      {
        "x": 8052.5,
        "y": 7916.25
      },
      {
        "x": 8052.5,
        "y": 7870.25
      },
      {
        "x": 7947.5,
        "y": 7870.25
      },
      {
        "x": 7947.5,
        "y": 7916.25
      },
      {
        "x": 7962.240000000001,
        "y": 7916.25
      },
      {
        "x": 7962.240000000001,
        "y": 8129.75
      },
      {
        "x": 8039.040000000001,
        "y": 8129.75
      },
      {
        "x": 8039.040000000001,
        "y": 7916.25
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "374670fc-e214-ae4c-2c21-41eff7d2fb66",
    "x": 7956.1518602441965,
    "y": 7937.422084535721,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_1",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "ec1b1a42-9200-8b60-6d78-ce6b9ffb8ff8",
    "x": 7956.1518602441965,
    "y": 7962.75,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_2",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "97efc72a-c9ad-f50b-e7ca-ba6a168eda02",
    "x": 7956.1518602441965,
    "y": 7986.530425,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_3",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "59d900da-9d6d-2389-86b5-cc14d2a24513",
    "x": 7956.1518602441965,
    "y": 8010.501174999999,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_4",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "2d728a2e-374a-0ecf-1d20-dd42f0ebf62a",
    "x": 7956.1518602441965,
    "y": 8033.324875,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_5",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "b63caa07-5dc6-5566-62c2-f2975cfa2c99",
    "x": 7956.1518602441965,
    "y": 8057.25,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_6",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "bb6288f8-25aa-e53b-0457-e8c1135fe7bf",
    "x": 7977.4364602441965,
    "y": 7873.6865,
    "width": 33.5625,
    "height": 21.015625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "GPIO",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "1d0b5415-6131-c884-8a84-a8c95f52e4de",
    "x": 7956.1518602441965,
    "y": 8082.657625,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_7",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "f3ee5e55-735a-0890-fbd3-817e5c584636",
    "x": 7956.1518602441965,
    "y": 8105.742324999999,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpi_8",
      "type": "Input",
      "direction": 3,
      "fanout": 1
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "e8b1c86f-e639-4ceb-2005-a718a1bfaa89",
    "x": 7966.1518602441965,
    "y": 7929.922084535721,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "1",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "095d97b3-aa94-7a52-f908-6b73628ee844",
    "x": 7968.1518602441965,
    "y": 7955.25,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "2",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "753d3c24-6196-80a0-b470-4a344361f7df",
    "x": 7968.1518602441965,
    "y": 7979.108875,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "3",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "69cf1c85-0090-43a9-c52a-3f7626442075",
    "x": 7968.1518602441965,
    "y": 8002.108875,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "4",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "ff804450-ebd7-bf66-211e-31bce79a379c",
    "x": 7968.1518602441965,
    "y": 8025.483275,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "5",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "11559508-7363-cd07-e737-f15858989ae9",
    "x": 7968.1518602441965,
    "y": 8051.251375,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "6",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "9baf5722-89dd-628d-e0d4-39bae1316611",
    "x": 7968.1518602441965,
    "y": 8076.25,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "7",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "2e2aa124-27f2-b41b-71a6-b63b7b325bd1",
    "x": 7968.1518602441965,
    "y": 8097.803749999999,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "8",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "901b96e7-19ba-81f5-9c02-8599dbd64c2b",
    "x": 7984.4764602441965,
    "y": 7913.148874999999,
    "width": 31,
    "height": 33,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#000000",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "918554d3-5d1a-c476-655d-56fcaa50e03f",
    "x": 7994.419360244197,
    "y": 7910.524625,
    "width": 11.141120000000228,
    "height": 9.830400000000736,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#000000",
    "color": "#303030",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "vertices": [
      {
        "x": 8005.560480244198,
        "y": 7920.355025000001
      },
      {
        "x": 7994.419360244197,
        "y": 7920.355025000001
      },
      {
        "x": 7994.419360244197,
        "y": 7910.524625
      },
      {
        "x": 8005.560480244198,
        "y": 7910.524625
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "8355e815-33ab-61ee-3f40-fcddb68252fb",
    "x": 7992.247561552356,
    "y": 7940.003398649999,
    "width": 14.171798691840195,
    "height": 8.837371771443031,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 5,
    "dasharray": null,
    "vertices": [
      {
        "x": 7992.247561552356,
        "y": 7941.571208564317
      },
      {
        "x": 7999.567110458294,
        "y": 7940.003398649999
      },
      {
        "x": 8006.027665905031,
        "y": 7941.356166496962
      },
      {
        "x": 8006.4193602441965,
        "y": 7946.303634930122
      },
      {
        "x": 7998.989863514596,
        "y": 7948.840770421442
      },
      {
        "x": 7993.214868662526,
        "y": 7946.303634930122
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "b76f1f2c-4b36-c11e-9972-def4e0c60dc3",
    "x": 8002.949472980197,
    "y": 7902.088599607998,
    "width": 18.986734080001952,
    "height": 14.457275392001975,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#6B8E23",
    "color": "#000000",
    "stroke": 2,
    "radius": 4,
    "dasharray": null,
    "vertices": [
      {
        "x": 8015.540134582849,
        "y": 7916.545875
      },
      {
        "x": 8003.492284649639,
        "y": 7916.1914468740015
      },
      {
        "x": 8002.949472980197,
        "y": 7907.391013914051
      },
      {
        "x": 8007.781846555991,
        "y": 7903.263411753026
      },
      {
        "x": 8013.687961955784,
        "y": 7902.088599607998
      },
      {
        "x": 8021.936207060199,
        "y": 7903.12098328975
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "ec0bfd07-0974-75a8-cec7-26676326f4a1",
    "x": 7994.419360244197,
    "y": 7929.850275,
    "width": 11,
    "height": 11,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
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
    "type": "shape_designer.figure.PolyCircle",
    "id": "53a44861-b93e-277a-7230-2b3117b59744",
    "x": 8000.838860244197,
    "y": 7921.570425,
    "width": 8,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "7504563b-fb58-e81a-db91-58deaba8e0ff",
    "x": 7992.338860244197,
    "y": 7921.070425,
    "width": 8,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "3237a6cf-13dd-a5b8-66e1-b80c8de4e3c2",
    "x": 7982.271968662526,
    "y": 7901.545875,
    "width": 22,
    "height": 15,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#6B8E23",
    "color": "#000000",
    "stroke": 2,
    "radius": 10,
    "dasharray": null,
    "vertices": [
      {
        "x": 8001.021968662526,
        "y": 7913.099929054054
      },
      {
        "x": 7993.021968662524,
        "y": 7916.545875
      },
      {
        "x": 7988.334468662527,
        "y": 7914.721550675675
      },
      {
        "x": 7985.146968662526,
        "y": 7910.870199324323
      },
      {
        "x": 7982.271968662526,
        "y": 7903.370199324323
      },
      {
        "x": 7994.021968662526,
        "y": 7901.545875
      },
      {
        "x": 8004.271968662526,
        "y": 7905.599929054053
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "d5ded4b5-5027-e1f6-f52e-39fddae0735b",
    "x": 7984.271968662526,
    "y": 7929.850275,
    "width": 10,
    "height": 13,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7985.3984845786945,
        "y": 7929.850275
      },
      {
        "x": 7993.6972391864365,
        "y": 7933.888405734331
      },
      {
        "x": 7994.271968662526,
        "y": 7941.638459498454
      },
      {
        "x": 7988.764288886356,
        "y": 7942.850275
      },
      {
        "x": 7984.271968662526,
        "y": 7938.6511697432325
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "a6b803b8-ba32-d0ee-99cd-468538588d7e",
    "x": 8005.662901398584,
    "y": 7931.460641348286,
    "width": 9.717104971893605,
    "height": 11.453381035394159,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8007.536957192048,
        "y": 7933.60769425824
      },
      {
        "x": 8015.3800063704775,
        "y": 7931.460641348286
      },
      {
        "x": 8015.234416378347,
        "y": 7933.264958350651
      },
      {
        "x": 8013.919360244197,
        "y": 7941.358609498454
      },
      {
        "x": 8005.662901398584,
        "y": 7942.91402238368
      },
      {
        "x": 8005.895045200359,
        "y": 7939.917507969794
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "46ff341a-d7c2-bc18-3345-bedc33f4d125",
    "x": 8008.419360244197,
    "y": 7919.070425,
    "width": 10,
    "height": 13,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8009.545876160366,
        "y": 7919.070425
      },
      {
        "x": 8017.844630768108,
        "y": 7923.108555734331
      },
      {
        "x": 8018.419360244197,
        "y": 7930.858609498454
      },
      {
        "x": 8012.911680468027,
        "y": 7932.070425
      },
      {
        "x": 8008.419360244197,
        "y": 7927.8713197432335
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "0c9eb891-48b8-4dd8-6403-65c1415ee66b",
    "x": 8002.338860244197,
    "y": 7913.148874999999,
    "width": 10,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 8003.465376160366,
        "y": 7913.148874999999
      },
      {
        "x": 8011.764130768108,
        "y": 7915.94450396992
      },
      {
        "x": 8012.338860244197,
        "y": 7921.309925806621
      },
      {
        "x": 8006.831180468027,
        "y": 7922.148874999999
      },
      {
        "x": 8002.338860244197,
        "y": 7919.241802129929
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "8ac7f75a-c167-c3fd-f699-09791f3926af",
    "x": 7982.271968662526,
    "y": 7918.070425,
    "width": 10.456062674948043,
    "height": 13.944892805120617,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7989.4973381390155,
        "y": 7918.070425
      },
      {
        "x": 7992.728031337474,
        "y": 7921.76495835065
      },
      {
        "x": 7990.639881090043,
        "y": 7930.459904919893
      },
      {
        "x": 7984.2732078546705,
        "y": 7932.0153178051205
      },
      {
        "x": 7982.271968662526,
        "y": 7922.748151139074
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "bca87bbc-9e34-23f4-0521-dd7f67ea13cd",
    "x": 7990.52383561313,
    "y": 7912.148874999999,
    "width": 12.081641637145367,
    "height": 8.429496729600942,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7998.620728147938,
        "y": 7912.148874999999
      },
      {
        "x": 8002.605477250276,
        "y": 7914.26837976911
      },
      {
        "x": 7999.583734132353,
        "y": 7919.256555262895
      },
      {
        "x": 7990.52383561313,
        "y": 7920.5783717296
      },
      {
        "x": 7991.605477250276,
        "y": 7913.458034893415
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "c0263337-e446-a1b8-226f-5f6e1f745a14",
    "x": 8035.240000000001,
    "y": 7937.39,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_9",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "7ac95f2b-2bf2-9095-1b66-2cb7610b497d",
    "x": 8035.240000000001,
    "y": 7962.75,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_10",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "949fa180-3319-426e-6e55-97b70b13e790",
    "x": 8035.240000000001,
    "y": 7986.530425,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_11",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "e80701b4-989b-0afa-6008-0c8ef4f6f890",
    "x": 8035.240000000001,
    "y": 8010.501174999999,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_12",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "aa559daf-c4e6-ce1f-8a08-ee57d79ba884",
    "x": 8035.240000000001,
    "y": 8033.324875,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_13",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "898639f4-8b79-0ade-8c2d-a52dff31ec59",
    "x": 8035.240000000001,
    "y": 8058.25,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_14",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "9cdc2f58-fd29-f4be-84fe-7821b0f308dd",
    "x": 8035.240000000001,
    "y": 8082.657625,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_15",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "d73d3576-a22c-bddf-3ab8-483ca609ed41",
    "x": 8035.240000000001,
    "y": 8105.742324999999,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_16",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
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
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "7ca5348b-49eb-c647-9dab-dbdd367e16ae",
    "x": 8015.4764602441965,
    "y": 7929.850275,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "9",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "1c732687-3e0d-e704-2336-227e44ffd521",
    "x": 8008.380006370477,
    "y": 7955.25,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "10",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "2019df10-90de-85f7-0e60-faa206ef4b27",
    "x": 8009.380006370477,
    "y": 7979.108875,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "11",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "25ea6ffd-20ec-f93a-d843-4a19a5a0d3ee",
    "x": 8009.4764602441965,
    "y": 8002.108875,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "12",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "1270a0bf-b14f-6758-2285-d77af15c92f6",
    "x": 8009.4764602441965,
    "y": 8025.483275,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "13",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "a9871042-ca1e-3c83-b2c3-65ca4da07dcc",
    "x": 8009.380006370477,
    "y": 8049.251375,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "14",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "016f18ce-21b7-efa2-9902-ea72cbb588d4",
    "x": 8010.380006370477,
    "y": 8075.25,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "15",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "bdfb8591-d3bf-900f-2695-eecf93b3d536",
    "x": 8010.380006370477,
    "y": 8097.803749999999,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "16",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLine",
    "id": "1ab2ef18-5dba-f3e5-a43d-6f32a31efdc8",
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
        "x": 8012.670252052199,
        "y": 7908.722252279998
      },
      {
        "x": 8009.557292052201,
        "y": 7910.406003191999
      },
      {
        "x": 8007.012660244198,
        "y": 7913.799457272002
      }
    ],
    "router": "draw2d.layout.connection.VertexRouter",
    "radius": 2,
    "filters": [
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLine",
    "id": "3c3dfd1c-cb05-2bb9-f82b-4d515d365750",
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
        "x": 7996.199220244198,
        "y": 7912.295275000001
      },
      {
        "x": 7993.929053204198,
        "y": 7909.158722039998
      },
      {
        "x": 7989.779837972195,
        "y": 7906.290604536
      }
    ],
    "router": "draw2d.layout.connection.VertexRouter",
    "radius": 4,
    "filters": [
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  }
];
var pkg='draw2d_circuit_hardware_RaspiGPIO';
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


