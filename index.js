let fs = require("fs"),
    path = require("path"),
    loaderUtils = require("loader-utils"),
    Velocity = require("velocityjs"),
    Compile = Velocity.Compile,
    configPath = path.join(process.cwd(), "./velocity.config.js"),
    orginPath, context;

if (fs.existsSync(configPath)) {
    context = require(configPath);
} else {
    throw "velocity.config.js hasn't been found ,please check it ";
    return ""
}

let macros = {
    parse: function(filePath) {
        return this.eval(macros.include(filePath), context);

    },
    include: function(filePath) {
        var rFilePath = path.relative(path.dirname(orginPath), filePath);
        filePath = path.join(path.dirname(orginPath), filePath);
        if (!filePath || typeof filePath !== "string") return ""
        if (fs.existsSync(filePath)) {
            var rs = fs.readFileSync(filePath, "utf8");
           return rs.replace(/(#parse\s*\(\s*|#include\s*\(\s*|\s+src=|\s+href=)('([\.]{1,2}\/.*)'|"([\.]{1,2}\/.*)")/ig ,function(...args){
               
               
              var rPath= path.relative(path.dirname(rFilePath),args[3] || args[4]) ;

              if(args[3])return args[0].replace(args[3],rPath);
              return args[0].replace(args[4],rPath);


            })



        }
        return ""
    }

}


module.exports = function(content) {

    this.cacheable && this.cacheable();
    var loader = this;
    var file = loader.resourcePath;
    var params = loaderUtils.getOptions(loader) || {};
    var configPath;
    orginPath = file;

    if (context === undefined) {
        throw "velocity.config.js hasn't been found ,please check it ";
        return ""
    }

    let asts = Velocity.parse(content);

    return (new Compile(asts)).render(context, macros);




};
