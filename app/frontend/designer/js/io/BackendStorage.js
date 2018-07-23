import EventEmitter from "../util/EventEmitter"
import conf from '../Configuration'

export default class BackendStorage extends EventEmitter{

  /**
   * @constructor
   *
   */
  constructor() {
    super()
    this.fileName = ""
    Object.preventExtensions(this);
  }

  get currentDir(){
    return this.dirname(this.dirname())
  }

  get currentFile(){
    return this.basename(this.fileName)
  }

  set currentFile(name){
    this.fileName=name;
    this.emit("changed", {fileName:this.fileName})
  }

  getFiles(path){
      return $.ajax({
        url: conf.backend.file.list,
        xhrFields: {
          withCredentials: true
        },
        data: {
          path
        }
      }).then( (response)=>{
        let files = response.files
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
        return files;
      })
  }

  saveFile(json, imageDataUrl, fileName){
    return $.ajax({
        url: conf.backend.file.save,
        method: "POST",
        xhrFields: {
          withCredentials: true
        },
        data: {
          filePath: fileName,
          content: JSON.stringify({draw2d: json, image: imageDataUrl}, undefined, 2)
        }
      }
    )
  }

  /**
   * Load the file content of the given path
   *
   * @param fileName
   * @returns {*}
   */
  loadFile(fileName){
    console.log(fileName)
    return $.ajax({
      url: conf.backend.file.get,
      xhrFields: {
        withCredentials: true
      },
      data: {
        filePath: fileName
      }
    })
      .fail(function(error) {
        console.log(arguments)
      })
      .then((response)=>{
      console.log()
      if(response.draw2d)
        return response.draw2d
      return response
    })
  }

  dirname(path) {
    if (path===undefined || path===null || path.length === 0)
      return null

    var segments = path.split("/")
    if (segments.length <= 1)
      return null

    segments = segments.filter(n => n != "")
    path = segments.slice(0, -1).join("/")
    return (path === "") ? null : path + "/"

  }

  basename(path) {
    if(path === null || path==="" || path === undefined){
      return null;
    }
    return path.split(/[\\/]/).pop()
  }

}
