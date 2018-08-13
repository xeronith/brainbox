// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var draw2d_circuit_pulse_Delay = draw2d.SetFigure.extend({

   NAME: "draw2d_circuit_pulse_Delay",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:84,height:69},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.59523809523809, 52.11524637681209));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.1904761904761905, 52.11524637681209));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     this.persistPorts=false;
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
       shape = this.canvas.paper.path('M84 69L0 69L0 0L84 0Z');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'delay');
       shape.attr({"x":40.265625,"y":34.4921875,"text-anchor":"start","text":"delay","font-family":"\"Arial\"","font-size":13,"stroke":"none","fill":"#D4D4D4","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M3.5 18.5L7.5,18.5L10.5,18.5L10.5,5.5L40.5,5.5L40.5,17.5L74.5,17.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M3.5 18.5L7.5,18.5L10.5,18.5L10.5,5.5L40.5,5.5L40.5,17.5L74.5,17.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M2.5 60.5L35.5,60.5L35.5,47.5L50.5,47.5L65.5,47.5L65.5,60.5L78.5,60.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M2.5 60.5L35.5,60.5L35.5,47.5L50.5,47.5L65.5,47.5L65.5,60.5L78.5,60.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M9.5 30.5L9.5,46.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M9.5 30.5L9.5,46.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FF0569","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M32.5 38.5L28.5,45.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M32.5 38.5L28.5,45.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FF0569","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M9.5 38.5L32.5,38.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M9.5 38.5L32.5,38.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FF0569","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M26.5 30.5L32.5,37.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M26.5 30.5L32.5,37.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FF0569","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M10.5 20.5L10.5,28.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M10.5 20.5L10.5,28.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#A8A8A8","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M35.5 45.5L35.5,27.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M35.5 45.5L35.5,27.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#C9C9C9","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

       return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [];
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
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
draw2d_circuit_pulse_Delay = draw2d_circuit_pulse_Delay.extend({

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
            "userData.delay":1500
        });
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },
    
    /**
     * called every '10 [ms]' from the application. do a little bit calculation
     * to change the state every 100ms (10Hz)
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
                max: 100,
                increment:10
        }
        
        }];
    }

});