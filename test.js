var cs = require('./character-stream')

var readCharStream = cs(require('path').join(__dirname, 'readme.md'))

readCharStream.on('readable', function() {
        var data
        while (data = readCharStream.read()) {
            console.log(data)
        }

})
