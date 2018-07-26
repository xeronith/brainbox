const fs = require('fs')
const glob = require("glob");
const path = require('path');

const brainDirHOME =  process.env.HOME + "/.brainbox/";
const brainDirUserHOME = brainDirHOME+"brain/";
const shapeDirUserHOME = brainDirHOME+"shapes/";


/**
 * Ensure that the required storage folder exists
 *
 */
try {
  function ensure(dirToEnsure) {
    if (!fs.existsSync(dirToEnsure)) {
      fs.mkdirSync(dirToEnsure);
    }
  }
  ensure(brainDirHOME)
  ensure(brainDirUserHOME)
  ensure(shapeDirUserHOME)
}
catch (e) {
  console.log(e)
}


module.exports = {
  brainDirUserHOME: brainDirUserHOME,
  shapeDirUserHOME: shapeDirUserHOME,

  listFiles: function (baseDir, subDir, res) {
    glob(baseDir + subDir + "*", {}, function (er, files) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        files: files.map(function (f) {
          let isDir = fs.lstatSync(f).isDirectory();
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
        let readStream = fs.createReadStream(baseDir + subDir)
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
      let contents = fs.readFileSync(baseDir + subDir);
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
    return fs.rename(baseDir  + from, baseDir + to, err => {
      if(err) console.log(err)
      res.send('true')
    });
  },

  deleteFile: function (baseDir, subDir, res) {
    return fs.unlink(baseDir + subDir, err => {
      if(err) console.log(err)
      res.send('true')
    })
  }
};

