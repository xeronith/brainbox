#!/usr/bin/env node
// Load the http module to create an http server.
const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, { path: '/socket.io'});
const gpio = require("gpio");
const path = require('path');
const childProcess = require('child_process')
const phantomjs = require('phantomjs')
const bodyParser = require('body-parser');
const glob = require("glob");

// application specific configuration settings
//
const deviceRegistry = require("./src/device-registry.js");
const storage= require("./src/storage.js");
const shapeDirApp = path.normalize(__dirname + '/../shapes/')



// Determine the IP:PORT to use for the http server
//
const address = require("./src/network");
const port = 7400;


// =======================================================================
// Check how many Arduinos are connected to serial port and
// ask to user which one to use.
//
// =======================================================================
deviceRegistry.init(runServer);
// forward the hardware/box events to the browser UI
deviceRegistry.on("register",    event => io.sockets.emit("bloc:register", event));
deviceRegistry.on("unregister",  event => io.sockets.emit("bloc:unregister", event));
deviceRegistry.on("value",       event => io.sockets.emit("bloc:value", event));



// =======================================================================
//
// The main HTTP Server and socket.io run loop. Serves the HTML files
// and the socket.io access point to change/read the GPIO pins if the server
// is running on an Raspberry Pi
//
// =======================================================================
function runServer() {
  // provide the  WebApp with this very simple
  // HTTP server. Good enough for an private raspi access
  //
  app.use('/assets/shapes', express.static(shapeDirApp));
  app.use(express.static(__dirname + '/../frontend'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/', (req, res) => res.redirect('/circuit'));

  // =================================================================
  // Handle brain files
  //
  // =================================================================
  app.get('/backend/brain/list',    (req, res) => storage.listFiles(storage.brainDirUserHOME,      req.query.path,     res));
  app.get('/backend/brain/get',     (req, res) => storage.getJSONFile(storage.brainDirUserHOME,    req.query.filePath, res));
  app.get('/backend/brain/image',   (req, res) => storage.getBase64Image(storage.brainDirUserHOME, req.query.filePath, res));
  app.post('/backend/brain/delete', (req, res) => storage.deleteFile(storage.brainDirUserHOME,     req.body.filePath, res));
  app.post('/backend/brain/rename', (req, res) => storage.renameFile(storage.brainDirUserHOME,     req.body.from, req.body.to, res));
  app.post('/backend/brain/save',   (req, res) => {
    fs.writeFile(storage.brainDirUserHOME + req.body.filePath, req.body.content,  (err) =>{
      res.send('true');
      io.sockets.emit("brain:generated", {
        filePath: req.body.filePath
      });
    });
  });


  // =================================================================
  // Handle shape files
  //
  // =================================================================
  app.get('/backend/shape/list',    (req, res) => storage.listFiles(shapeDirApp,      req.query.path,     res))
  app.get('/backend/shape/get',     (req, res) => storage.getJSONFile(shapeDirApp,    req.query.filePath, res))
  app.get('/backend/shape/image',   (req, res) => storage.getBase64Image(shapeDirApp, req.query.filePath, res))
  app.post('/backend/shape/delete', (req, res) => storage.deleteFile(shapeDirApp,     req.body.filePath, res))
  app.post('/backend/shape/rename', (req, res) => storage.renameFile(shapeDirApp,     req.body.from, req.body.to, res))
  app.post('/backend/shape/save',   (req, res) => {
    fs.writeFile(shapeDirApp + req.body.filePath, req.body.content,  (err) =>{
      if(err) throw err

      // file is saved...fine
      //
      res.send('true');

      // create the js/png/md async to avoid a blocked UI
      //
      let binPath = phantomjs.path
      let childArgs = [
        path.join(__dirname,'../shape2code/converter.js'),
        path.normalize(shapeDirApp + req.body.filePath)
      ]

      // inform the browser that the processing of the
      // code generation is ongoing
      //
      io.sockets.emit("shape:generating", {
        filePath: req.body.filePath
      });

      childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        if(err) throw err
        let pattern = (shapeDirApp + req.body.filePath).replace(".shape",".*")
        glob(pattern, {}, function (er, files) {
          files.forEach( file =>{
            fs.copyFile(file ,file.replace(shapeDirApp, storage.shapeDirUserHOME), (err) => {
              if (err) throw err;
            })
          })
        })

        io.sockets.emit("shape:generated", {
          filePath: req.body.filePath,
          imagePath: req.body.filePath.replace(".shape",".png"),
          jsPath: req.body.filePath.replace(".shape",".js")
        });
      })
    });
  });


  // =================================================================
  // The UI can request all registered devices at once.
  // Dynamic remove/add of devices are handled by socket.io events
  // =================================================================
  app.get('/backend/bloc/list', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(deviceRegistry.getAll(), undefined, 2));
  });

  // =================================================================

  let pins = {
    gpi_1:  gpio.export(1,  {direction: "out"}),
    gpi_2:  gpio.export(2,  {direction: "out"}),
    gpi_3:  gpio.export(3,  {direction: "out"}),
    gpi_4:  gpio.export(4,  {direction: "out"}),
    gpi_5:  gpio.export(5,  {direction: "out"}),
    gpi_6:  gpio.export(6,  {direction: "out"}),
    gpi_7:  gpio.export(7,  {direction: "out"}),
    gpi_8:  gpio.export(8,  {direction: "out"}),

    gpo_9:  gpio.export(9,  {direction: "in"}),
    gpo_10: gpio.export(10, {direction: "in"}),
    gpo_11: gpio.export(11, {direction: "in"}),
    gpo_12: gpio.export(12, {direction: "in"}),
    gpo_13: gpio.export(13, {direction: "in"}),
    gpo_14: gpio.export(14, {direction: "in"}),
    gpo_15: gpio.export(15, {direction: "in"}),
    gpo_16: gpio.export(16, {direction: "in"})
  };

  // Browser => GPIO output pin
  //
  io.on('connection', socket => {
    socket.on('gpi:set',  msg => {
      let pin = pins[msg.pin];
      pin.set(1 - msg.value);
    });
  });

  // GPIO input pin => Browser
  //
  pins.gpo_9.on("change",  val => io.sockets.emit("gpo:change", {pin: "gpo_9",  value: val}));
  pins.gpo_10.on("change", val => io.sockets.emit("gpo:change", {pin: "gpo_10", value: val}));
  pins.gpo_11.on("change", val => io.sockets.emit("gpo:change", {pin: "gpo_11", value: val}));
  pins.gpo_12.on("change", val => io.sockets.emit("gpo:change", {pin: "gpo_12", value: val}));
  pins.gpo_13.on("change", val => io.sockets.emit("gpo:change", {pin: "gpo_13", value: val}));
  pins.gpo_14.on("change", val => io.sockets.emit("gpo:change", {pin: "gpo_14", value: val}));
  pins.gpo_15.on("change", val => io.sockets.emit("gpo:change", {pin: "gpo_15", value: val}));
  pins.gpo_16.on("change", val => io.sockets.emit("gpo:change", {pin: "gpo_16", value: val}));


  http.listen(port, function () {
    console.log('+------------------------------------------------------------+');
    console.log('| Welcome to brainbox - the begin of something awesome       |');
    console.log('|------------------------------------------------------------|');
    console.log('| System is up and running. Copy the URL below and open this |');
    console.log('| in your browser: http://' + address + ':' + port + '/                |');
    console.log('+------------------------------------------------------------+');
  });
}
