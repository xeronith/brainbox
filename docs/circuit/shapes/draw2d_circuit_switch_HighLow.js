// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var draw2d_circuit_switch_HighLow = CircuitFigure.extend({

   NAME: "draw2d_circuit_switch_HighLow",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:42,height:42.90625},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 98.80952380952381, y: 52.43991260014567 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 42;
      this.originalHeight= 42.90625;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L42,0 L42,42.90625 L0,42.90625");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":4.5,"y":10.5,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#C21B7A","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'0');
       shape.attr({"x":4,"y":32.203125,"text-anchor":"start","text":"0","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":3,"ry":3.5,"cx":39,"cy":22.5,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // high_shadow
       shape = this.canvas.paper.path('M39.298300000000836 22.446912500003236L13.857399999999416,11.09151250000059');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","high_shadow");
       
       // high
       shape = this.canvas.paper.path('M39.298300000000836 22.446912500003236L13.857399999999416,11.09151250000059');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","high");
       
       // low_shadow
       shape = this.canvas.paper.path('M38.75319999999738 22.708312500000375L13.644500000000335,32.351312499998585');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","low_shadow");
       
       // low
       shape = this.canvas.paper.path('M38.75319999999738 22.708312500000375L13.644500000000335,32.351312499998585');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","low");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_switch_HighLow = draw2d_circuit_switch_HighLow.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);
        var _this = this;

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        
        this.value = false;
        this.on("click",function(){            
            _this.value = !_this.value;
            _this.layerShow("low" , !_this.value, 100);
            _this.layerShow("high",  _this.value, 100);
            _this.getOutputPort(0).setValue(_this.value);
        });

        this.on("added",function(){
            _this.layerShow("low" , !_this.value);
            _this.layerShow("high",  _this.value);
            _this.getOutputPort(0).setValue(_this.value);
        });
    },
    
    calculate: function()
    {
        // do nothing per default;
    }

});