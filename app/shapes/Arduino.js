// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var Arduino = draw2d.SetFigure.extend({

   NAME: "Arduino",

   init:function(attr, setter, getter)
   {
     var _this = this;
     this.tooltip = null;
     this.tooltipTimer = -1;

     this._super( $.extend({stroke:0, bgColor:null, width:104.51462500000162,height:240.7584999999999},attr), setter, getter);
     var port;
     // port_d2
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 30.528517165541412));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d2");
     port.setMaxFanOut(20);
     // port_d3
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 35.87796484859309));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d3");
     port.setMaxFanOut(20);
     // port_d4
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 41.32772051661729));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d4");
     port.setMaxFanOut(20);
     // port_d5
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 46.72732219215523));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d5");
     port.setMaxFanOut(20);
     // port_d6
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 52.51062786983545));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d6");
     port.setMaxFanOut(20);
     // port_d7
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 57.5265255432311));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d7");
     port.setMaxFanOut(20);
     // port_d8
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 62.92612721876903));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d8");
     port.setMaxFanOut(20);
     // port_d9
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 68.32572889430698));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d9");
     port.setMaxFanOut(20);
     // port_d10
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 73.72533056984491));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d10");
     port.setMaxFanOut(20);
     // port_d11
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 79.07477825289658));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d11");
     port.setMaxFanOut(20);
     // port_d12
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.784019461391095, 84.52453392092079));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d12");
     port.setMaxFanOut(20);
     // port_d13
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95.2159805386089, 84.52453392092079));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d13");
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
        this.tooltip= $('<div class="draw2d_tooltip">Arduino</div>')
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
      this.originalWidth = 104.51462500000162;
      this.originalHeight= 240.7584999999999;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L104.51462500000162,0 L104.51462500000162,240.7584999999999 L0,240.7584999999999");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.path('M4.499200000000201,8Q4.499200000000201,2 10.4992000000002, 2L93.4992000000002,2Q99.4992000000002,2 99.4992000000002, 8L99.4992000000002,217Q99.4992000000002,223 93.4992000000002, 223L10.4992000000002,223Q4.499200000000201,223 4.499200000000201, 217L4.499200000000201,8');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M49.11580719501342,124.22605905170875Q51.97016249999979,121.42379999999775 54.85751646216846, 124.1920462132434L79.77500853783516,148.08165378675815Q82.66236250000384,150.8499000000038 79.8134682223531, 153.65771078329544L54.77105677765258,178.3389892167088Q51.92216250000183,181.14680000000044 49.05715809483484, 178.3554294122114L24.278766905167295,154.2138705877887Q21.413762500000303,151.42249999999967 24.268117804986673, 148.62024094828868L49.11580719501342,124.22605905170875');
       shape.attr({"stroke":"#A1A1A1","stroke-width":1,"fill":"#000000","dasharray":null,"opacity":0.4});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M26.37539999999808,28.502800000000207Q26.37539999999808,21.502800000000207 33.37539999999808, 21.502800000000207L72.37539999999808,21.502800000000207Q79.37539999999808,21.502800000000207 79.37539999999808, 28.502800000000207L79.37539999999808,45.50280000000021Q79.37539999999808,52.50280000000021 72.37539999999808, 52.50280000000021L33.37539999999808,52.50280000000021Q26.37539999999808,52.50280000000021 26.37539999999808, 45.50280000000021L26.37539999999808,28.502800000000207');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M33.99059999999827,29.623599999999897Q33.99059999999827,27.623599999999897 35.99059999999827, 27.623599999999897L38.99059999999827,27.623599999999897Q40.99059999999827,27.623599999999897 40.99059999999827, 29.623599999999897L40.99059999999827,33.6235999999999Q40.99059999999827,35.6235999999999 38.99059999999827, 35.6235999999999L35.99059999999827,35.6235999999999Q33.99059999999827,35.6235999999999 33.99059999999827, 33.6235999999999L33.99059999999827,29.623599999999897');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M50.4457999999986,29.623599999999897Q50.4457999999986,27.623599999999897 52.4457999999986, 27.623599999999897L55.4457999999986,27.623599999999897Q57.4457999999986,27.623599999999897 57.4457999999986, 29.623599999999897L57.4457999999986,33.6235999999999Q57.4457999999986,35.6235999999999 55.4457999999986, 35.6235999999999L52.4457999999986,35.6235999999999Q50.4457999999986,35.6235999999999 50.4457999999986, 33.6235999999999L50.4457999999986,29.623599999999897');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M66.40659999999843,29.623599999999897Q66.40659999999843,27.623599999999897 68.40659999999843, 27.623599999999897L71.40659999999843,27.623599999999897Q73.40659999999843,27.623599999999897 73.40659999999843, 29.623599999999897L73.40659999999843,33.6235999999999Q73.40659999999843,35.6235999999999 71.40659999999843, 35.6235999999999L68.40659999999843,35.6235999999999Q66.40659999999843,35.6235999999999 66.40659999999843, 33.6235999999999L66.40659999999843,29.623599999999897');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M66.40659999999843,42.469199999999546Q66.40659999999843,40.469199999999546 68.40659999999843, 40.469199999999546L71.40659999999843,40.469199999999546Q73.40659999999843,40.469199999999546 73.40659999999843, 42.469199999999546L73.40659999999843,46.469199999999546Q73.40659999999843,48.469199999999546 71.40659999999843, 48.469199999999546L68.40659999999843,48.469199999999546Q66.40659999999843,48.469199999999546 66.40659999999843, 46.469199999999546L66.40659999999843,42.469199999999546');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M50.4997000000003,42.469199999999546Q50.4997000000003,40.469199999999546 52.4997000000003, 40.469199999999546L55.4997000000003,40.469199999999546Q57.4997000000003,40.469199999999546 57.4997000000003, 42.469199999999546L57.4997000000003,46.469199999999546Q57.4997000000003,48.469199999999546 55.4997000000003, 48.469199999999546L52.4997000000003,48.469199999999546Q50.4997000000003,48.469199999999546 50.4997000000003, 46.469199999999546L50.4997000000003,42.469199999999546');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M33.99059999999827,42.469199999999546Q33.99059999999827,40.469199999999546 35.99059999999827, 40.469199999999546L38.99059999999827,40.469199999999546Q40.99059999999827,40.469199999999546 40.99059999999827, 42.469199999999546L40.99059999999827,46.469199999999546Q40.99059999999827,48.469199999999546 38.99059999999827, 48.469199999999546L35.99059999999827,48.469199999999546Q33.99059999999827,48.469199999999546 33.99059999999827, 46.469199999999546L33.99059999999827,42.469199999999546');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M37.4992000000002,205.7584999999999Q37.4992000000002,202.7584999999999 40.4992000000002, 202.7584999999999L63.4992000000002,202.7584999999999Q66.4992000000002,202.7584999999999 66.4992000000002, 205.7584999999999L66.4992000000002,237.7584999999999Q66.4992000000002,240.7584999999999 63.4992000000002, 240.7584999999999L40.4992000000002,240.7584999999999Q37.4992000000002,240.7584999999999 37.4992000000002, 237.7584999999999L37.4992000000002,205.7584999999999');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Arduino');
       shape.attr({"x":27.87539999999808,"y":12.375,"text-anchor":"start","text":"Arduino","font-family":"\"Arial\"","font-size":15,"stroke":"none","fill":"#00979D","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":21.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":34.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":47.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":60.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":73.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":86.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":99.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":112.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":125.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":138.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":151.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":164.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":177.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":190.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":203.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":203.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":190.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":177.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":164.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":151.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":138.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":126.42379999999775,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":112.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":99.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":86.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":73.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":60.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":47.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":34.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":21.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#F2F2F2","dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D12');
       shape.attr({"x":11.5,"y":204.1171875,"text-anchor":"start","text":"D12","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D10');
       shape.attr({"x":12,"y":177.79081250000036,"text-anchor":"start","text":"D10","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D9');
       shape.attr({"x":11.663762500000303,"y":164.5,"text-anchor":"start","text":"D9","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D8');
       shape.attr({"x":12,"y":151.83881250000104,"text-anchor":"start","text":"D8","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D7');
       shape.attr({"x":12,"y":138.86281250000138,"text-anchor":"start","text":"D7","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D6');
       shape.attr({"x":12,"y":126.6171875,"text-anchor":"start","text":"D6","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D5');
       shape.attr({"x":12,"y":113.1171875,"text-anchor":"start","text":"D5","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D4');
       shape.attr({"x":12,"y":100.1199875000002,"text-anchor":"start","text":"D4","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D3');
       shape.attr({"x":12,"y":87.02048749999994,"text-anchor":"start","text":"D3","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D2');
       shape.attr({"x":12,"y":74.04448750000029,"text-anchor":"start","text":"D2","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D11');
       shape.attr({"x":12,"y":190.734375,"text-anchor":"start","text":"D11","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D13');
       shape.attr({"x":77.90659999999843,"y":203.1171875,"text-anchor":"start","text":"D13","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       

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

    getRequiredHardware: function(){
        return {
           raspi: false,
           arduino: false
        }
    },

    onDrop:function(dropTarget, x, y, shiftKey, ctrlKey)
    {
    	// Activate a "smart insert" If the user drop this figure on connection
    	//
    	if(dropTarget instanceof draw2d.Connection){
    		var additionalConnection = dropTarget.getCanvas().createConnection();
        var oldSource = dropTarget.getSource();
        var oldTarget = dropTarget.getTarget();
        if(oldSource instanceof draw2d.InputPort){
          oldSource = dropTarget.getTarget();
          oldTarget = dropTarget.getSource();
        }

        var stack = this.getCanvas().getCommandStack();
        var cmd = new draw2d.command.CommandReconnect(dropTarget);
        cmd.setNewPorts(oldSource, this.getInputPort(0));
        stack.execute(cmd);

        cmd = new draw2d.command.CommandConnect(oldTarget,this.getOutputPort(0));
        cmd.setConnection(additionalConnection);
        stack.execute(cmd);
    	}
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
Arduino = Arduino.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         this.attr({resizeable:false});
         this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
         
         var _this= this;
         this.onChangeCallback = function(emitter, event){
            if(event.value){
                _this.layerAttr("circle",{fill:"#C21B7A"});
            }
            else{
                _this.layerAttr("circle",{fill:"#f0f0f0"});
            }
            // set the LED on the Arduino on/off
            hardware.arduino.set(3, !!event.value);
         }
    },
    
    calculate:function(){
        this.propagate(2,  this.getPort("port_d2"));
        this.propagate(3,  this.getPort("port_d3"));
        this.propagate(4,  this.getPort("port_d4"));
        this.propagate(5,  this.getPort("port_d5"));
        this.propagate(6,  this.getPort("port_d6"));
        this.propagate(7,  this.getPort("port_d7"));
        this.propagate(8,  this.getPort("port_d8"));
        this.propagate(9,  this.getPort("port_d9"));
        this.propagate(10, this.getPort("port_d10"));
        this.propagate(11, this.getPort("port_d11"));
        this.propagate(12, this.getPort("port_d12"));
        this.propagate(13, this.getPort("port_d13"));
    },

    propagate: function(index, port){
        if(!port.getConnections().isEmpty()){
            var con = port.getConnections().first();
            var other = con.getSource()===port?con.getTarget():con.getSource()
            if(other instanceof draw2d.InputPort){
                
            }
            else {
                hardware.arduino.set(index,!!other.getValue())
            }
        }
    },
    
    /**
     *  Called if the simulation mode is starting
     **/
    onStart:function(){
    },

    /**
     *  Called if the simulation mode is stopping
     **/
    onStop:function(){
    //    this.getInputPort(0).off("change:value", this.onChangeCallback);
    },
    
    getRequiredHardware: function(){
      return {
        raspi: false,
        arduino: true
      }
    }
    
});