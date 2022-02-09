const fs = require('fs')
fs.readFile('create.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    else {
        var sorted_data = data.split('\r\n')
        sorted_data = sorted_data.map(Number).sort((a, b) => { return a - b })
        fs.writeFile('sorted_data.txt', sorted_data.join('\n'), (err) => {
            if (err) {
                throw err
            }
        })
    }
})
