import conf from '../Configuration'
import axios from 'axios'

let sanitize = require("sanitize-filename")

class BackendStorage {

  /**
   * @constructor
   *
   */
  constructor() {
  }

  getFiles(path){
    return this.__getFiles( conf.backend.file.list(path))
  }

  getDemos(path){
    return this.__getFiles( conf.backend.demo.list(path))
  }

  __getFiles(path) {
    return axios.get(path)
      .then((response) => {
        // happens in "serverless" mode on the gh-pages/docs installation
        //
        let files = []
        if (typeof response === "string")
          files = JSON.parse(response).data.files
        else
          files = response.data.files

      // sort the result
      // Directories are always on top
      //
      files.sort(function (a, b) {
        if (a.type === b.type) {
          if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1
          if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1
          return 0
        }
        if (a.type === "dir") {
          return -1
        }
        return 1
      })
      return files
    })
  }


  saveFile(json, fileName) {
    let data = {
      filePath: fileName,
      content: JSON.stringify(json, undefined, 2)
    }
    return axios.post(conf.backend.file.save, data)
  }

  loadFile(fileName) {
    return this.loadUrl(conf.backend.file.get(fileName))
  }

  loadDemo(fileName) {
    return this.loadUrl(conf.backend.demo.get(fileName))
  }

  /**
   * Load the file content of the given path
   *
   * @param fileName
   * @returns {*}
   */
   loadUrl(url) {
    return axios.get(url)
      .then((response) => {
        // happens in "serverless" mode on the gh-pages/docs installation
        //
        if (typeof response === "string")
          return JSON.parse(response).data

        return response.data
      })
  }

  deleteFile(fileName) {
    return $.ajax({
        url: conf.backend.file.del,
        method: "POST",
        xhrFields: {
          withCredentials: true
        },
        data: {
          filePath: fileName
        }
      }
    )
  }

  dirname(path) {
    if (path === undefined || path === null || path.length === 0)
      return null

    let segments = path.split("/")
    if (segments.length <= 1)
      return null

    segments = segments.filter(n => n !== "")
    path = segments.slice(0, -1).join("/")
    return (path === "") ? null : path + "/"

  }

  sanitize(file) {
    file = sanitize(file, "_")
    file = file.replace(conf.fileSuffix, "")
    // I don't like dots in the name to
    file = file.replace(RegExp("[.]", "g"), "_")
    return file
  }

  basename(path) {
    if (path === null || path === "" || path === undefined) {
      return null
    }
    return path.split(/[\\/]/).pop()
  }
}

let storage = new BackendStorage()
export default storage
