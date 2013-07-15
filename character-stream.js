var fs = require('fs')
,   stream = require('stream')

module.exports = function createCharacterReadStream(path) {

	var readStream = fs.createReadStream(path, {flags:'r', encoding:'utf-8', mode:0666, bufferSize:1 })
    ,   charReadStream = new stream.Readable({encoding:'utf-8'})

    charReadStream._read = function(something) {
        // noop? console.log('something', something)
    }
    
    readStream.on('readable', function() {
        var data
        while (data = readStream.read()) {
            var chars = data.split('')
            chars.forEach(function(char, i) {
                charReadStream.push(char)
            })
        }
    })

    return charReadStream
}
