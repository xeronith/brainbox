// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var draw2d_circuit_flipflop_TFlipFlop = draw2d.SetFigure.extend({

   NAME: "draw2d_circuit_flipflop_TFlipFlop",

   init:function(attr, setter, getter)
   {
     var _this = this;
     this.tooltip = null;
     this.tooltipTimer = -1;

     this._super( $.extend({stroke:0, bgColor:null, width:40,height:52.552974999999606},attr), setter, getter);
     var port;
     // output_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.52031250000073, 19.770526787494724));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q");
     port.setMaxFanOut(20);
     // output_q_not
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.52031250000073, 79.79698104626927));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q_not");
     port.setMaxFanOut(20);
     // input_t
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-6.207600000000184, 48.5224670915399));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(20);
     this.persistPorts=false;
     this.zoomCallback = $.proxy(this.positionTooltip,this);

     this.on("dragstart", function() {
      _this.hideTooltip(true)
    })

    this.on("mouseenter", function() {
      _this.tooltipTimer = window.setTimeout(function() {
        _this.tooltipTimer = -1
        _this.showTooltip()
      }, 500)
    })

    this.on("mouseleave", function(){
      _this.hideTooltip()
    })

    this.on("move", function(){
      _this.positionTooltip()
    })

   },

    setCanvas: function(canvas)
    {
        if(this.canvas !==null) this.canvas.off(this.zoomCallback);
        this._super(canvas);
        if(this.canvas !==null) this.canvas.on("zoom",this.zoomCallback);
    },

    hideTooltip: function (fast) {
      if (this.tooltipTimer !== -1) {
        window.clearTimeout(this.tooltipTimer)
        this.tooltipTimer = -1
      }
      else if(this.tooltip!==null){
        if(fast) {
          this.tooltip.remove()
        }
        else{
          this.tooltip.fadeOut(500, function () {
            $(this).remove()
          })
        }
        this.tooltip = null
      }
    },

    showTooltip:function()
    {
        this.tooltip= $('<div class="draw2d_tooltip">T Flip Flop</div>')
            .appendTo('body')
            .hide()
            .fadeIn(1000);
        this.positionTooltip();
    },


    positionTooltip: function()
    {
        if( this.tooltip===null){
            return;
        }

        var width =  this.tooltip.outerWidth(true);
        var pos = this.canvas.fromCanvasToDocumentCoordinate(
                this.getAbsoluteX()+this.getWidth()/2-width/2+8,
                this.getAbsoluteY()+this.getHeight() + 10);

        // remove the scrolling part from the tooltip because the tooltip is placed
        // inside the scrolling container
        pos.x +=this.canvas.getScrollLeft();
        pos.y +=this.canvas.getScrollTop();

        this.tooltip.css({'top': pos.y, 'left': pos.x});
    },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 40;
      this.originalHeight= 52.552974999999606;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L40,0 L40,52.552974999999606 L0,52.552974999999606");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,1.5Q0,0.5 1, 0.5L39,0.5Q40,0.5 40, 1.5L40,49.5Q40,50.5 39, 50.5L1,50.5Q0,50.5 0, 49.5L0,1.5');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":26.78125,"y":10.6796875,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":26.28125,"y":41.873287499999606,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M0.5 20.371000000000095L12.541999999999462 25.276999999999134L0.5 30.628999999999905Z');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"none","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Line_shadow
       shape = this.canvas.paper.path('M26.5 35.5L33.5,35.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M26.5 35.5L33.5,35.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
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
draw2d_circuit_flipflop_TFlipFlop = draw2d_circuit_flipflop_TFlipFlop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.last_t = false;
    },
    
    calculate:function()
    {
        var t = this.getInputPort("input_t").getValue();
        
        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");
        
        var rising = this.last_t===false && t===true; 
        
        if(rising===true){
            var v = q.getValue();
            q.setValue(!v);
            q_.setValue(v)
        }
        this.last_t = t;
    }
});