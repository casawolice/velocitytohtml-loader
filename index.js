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
    throw "velocityConfig.json hasn't been found ,please check it ";
    return ""
}

let macros = {
    parse: function(filePath) {
        return this.eval(macros.include(filePath), context);

    },
    include: function(filePath) {
        filePath = path.join(path.dirname(orginPath), filePath);
        if (!filePath || typeof filePath !== "string") return ""
        if (fs.existsSync(filePath)) {
            return fs.readFileSync(filePath, "utf8")

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
        throw "velocityConfig.json hasn't been found ,please check it ";
        return ""
    }

    let asts = Velocity.parse(content);

    return (new Compile(asts)).render(context, macros);




};
