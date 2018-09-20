// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var draw2d_circuit_timer_Delay = CircuitFigure.extend({

   NAME: "draw2d_circuit_timer_Delay",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:84,height:69},attr), setter, getter);
     var port;
     // output_0
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.59523809523809, 52.11524637681209));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_0");
     port.setMaxFanOut(20);
     // input_0
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-5.357142857142857, 52.11524637681209));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_0");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 84;
      this.originalHeight= 69;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L84,0 L84,69 L0,69");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M84,67Q84,69 82, 69L2,69Q0,69 0, 67L0,2Q0,0 2, 0L82,0Q84,0 84, 2L84,67');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Delay');
       shape.attr({"x":39,"y":37.1796875,"text-anchor":"start","text":"Delay","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#D9D9D9","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M9.5 20.5L9.5,48.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M9.5 20.5L9.5,48.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#A8A8A8","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M35.5 57.5L35.5,27.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M35.5 57.5L35.5,27.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#C9C9C9","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // pulseline_top_shadow
       shape = this.canvas.paper.path('M4.5 19.5L9.5,19.5Q11.309437499999149,19.776879999997618 11.5, 17.5L11.5,8.5Q11.30943749999824,6.006239999996978 13.5, 6.5L39.5,6.5Q41.2756774999998,6.333919999997306 41.5, 8.5L41.5,16.5Q41.2756774999998,18.992499999997563 43.5, 19.5L75.5,19.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","pulseline_top_shadow");
       
       // pulseline_top
       shape = this.canvas.paper.path('M4.5 19.5L9.5,19.5Q11.309437499999149,19.776879999997618 11.5, 17.5L11.5,8.5Q11.30943749999824,6.006239999996978 13.5, 6.5L39.5,6.5Q41.2756774999998,6.333919999997306 41.5, 8.5L41.5,16.5Q41.2756774999998,18.992499999997563 43.5, 19.5L75.5,19.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","pulseline_top");
       
       // pulseline_bottom_shadow
       shape = this.canvas.paper.path('M3.5 59.5L33.5,59.5Q35.642557499997565,59.194799999995666 35.5, 57.5L35.5,48.5Q35.642557499997565,46.40719999999601 37.5, 46.5L63.5,46.5Q65.60879749999731,46.07951999999568 65.5, 48.5L65.5,56.5Q65.60879749999731,58.73809999999594 67.5, 58.5L78.5,58.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","pulseline_bottom_shadow");
       
       // pulseline_bottom
       shape = this.canvas.paper.path('M3.5 59.5L33.5,59.5Q35.642557499997565,59.194799999995666 35.5, 57.5L35.5,48.5Q35.642557499997565,46.40719999999601 37.5, 46.5L63.5,46.5Q65.60879749999731,46.07951999999568 65.5, 48.5L65.5,56.5Q65.60879749999731,58.73809999999594 67.5, 58.5L78.5,58.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","pulseline_bottom");
       
       // Line_shadow
       shape = this.canvas.paper.path('M11.5 33.5L11.5,42.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M11.5 33.5L11.5,42.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FF0569","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M33.5 38.5L30.5,42.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M33.5 38.5L30.5,42.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FF0569","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M29.5 34.5L33.5,37.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M29.5 34.5L33.5,37.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FF0569","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M11.5 38.5L33.5,38.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M11.5 38.5L33.5,38.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FF0569","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
draw2d_circuit_timer_Delay = draw2d_circuit_timer_Delay.extend({

    init: function(attr, setter, getter){
        var _this = this;
        
        this._super(attr, setter, getter);

        this.on("change:userData.delay",function(emitter, event){
            var value = event.value;
            _this.delayedValues = []; 
            _this.delayedValues.length = parseInt(parseInt(value)/10);
            _this.pointer=0;
            
        });
        this.attr({
            resizeable:false,
            "userData.delay":500
        });
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },
    
    /**
     * called every '10 [ms]' from the application.
     * 
     **/
    calculate:function()
    {
       this.getOutputPort(0).setValue(this.delayedValues[this.pointer]);
       this.delayedValues[this.pointer] = this.getInputPort(0).getValue();
       this.pointer = (this.pointer+1)%this.delayedValues.length; 
    },
    
    onStart:function()
    {
        this.currentTimer=0;
    },
    
    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [
        {
            name:"delay",
            label:"Delay [ms]",
            property:{
                type: "integer",
                min: 10,
                max: 15000,
                increment:10
        }
        
        }];
    }

});