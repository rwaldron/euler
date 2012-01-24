var fs = require("fs"),
_ = require("underscore"),
cp = require("child_process"),
exec = cp.exec,
spawn = cp.spawn,

me = _.last(__filename.split("/"));



fs.readdir(".", function( err, files ) {
	// console.log( files );

	files.filter(function( file ) {
		return !!~file.indexOf(".js") && !~file.indexOf(".json");
	}).forEach(function( file ) {

		var source, out;

		if ( !!~file.indexOf(".converted.js") ) {
			exec("rm " + file);
		}

		if ( file !== me ) {
			source = fs.readFileSync( file ).toString();
			//out = fs.openSync( file.replace(".js", ".converted.js"), "w+" );
			out = fs.openSync( file, "w+" );

			fs.writeSync( out, source.replace(/\t/g, "  ") );
		}
	});
});