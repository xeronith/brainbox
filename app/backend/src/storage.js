const fs = require('fs').promises
const {lstatSync, readFileSync, existsSync, mkdirSync, createReadStream} = require('fs')
const glob = require("glob");
const path = require('path');

const brainDir = process.env.HOME + "/.brainbox/brain";
const shapeDir = process.env.HOME + "/.brainbox/shapes";


/**
 * Ensure that the required storage folder exists
 *
 */
try {
  function ensure(dirToEnsure) {
    if (!existsSync(dirToEnsure)) {
      mkdirSync(dirToEnsure);
    }
  }

  ensure(brainDir)
  ensure(shapeDir)
}
catch (e) {
  console.log(e)
}


module.exports = {
  brainDir,
  shapeDir,
  listFiles: function (baseDir, subDir, res) {
    glob(baseDir + "/" + subDir + "*", {}, function (er, files) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        files: files.map(function (f) {
          let isDir = lstatSync(f).isDirectory();
          return {
            name: path.basename(f) + (isDir ? "/" : ""),
            type: isDir ? "dir" : "file"
          };
        })
      }));
    });
  },

  getJSONFile: function (baseDir, subDir, res) {
    return new Promise((resolve, reject) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        let readStream = createReadStream(baseDir + "/" + subDir)
        readStream.on('end', resolve);
        readStream.on('error', reject);
        readStream.pipe(res);
      }
      catch(exc){
        reject(exec)
      }
    });
  },

  getBase64Image: function (baseDir, subDir, res) {
    return new Promise((resolve, reject) => {
      let contents = readFileSync(baseDir + "/" + subDir);
      let json = JSON.parse(contents);
      let base64data = json.image.replace(/^data:image\/png;base64,/, '');
      let img = new Buffer(base64data, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
      });
      res.end(img);
      resolve()
    });
  },

  renameFile: function (baseDir, from, to, res) {
    return fs.rename(baseDir + "/" + from, baseDir + "/" + to)
      .then(() => res.send('true'));
  },

  deleteFile: function (baseDir, subDir, res) {
    return fs.unlink(baseDir + "/" + subDir)
      .then(() => res.send('true'))
  }
};

