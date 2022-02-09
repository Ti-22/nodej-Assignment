const fs = require('fs')
const readline = require('readline')

const file = readline.createInterface({
    input : fs.createReadStream('document.txt')
})

let array = []
file.on('line', (line) => {
    let data = line.split('#')[1].split(' ')[0]
    array.push(data)
})
file.on('close', () => {
    const count = {}
    array.forEach(ele => { 
        if(count[ele] == null){
            count[ele] = 1
        }else{
            count[ele] += 1
        }
    });
    for (const [key, value] of Object.entries(count))
    {
        console.log(key,'action ran ',value, 'times');
    }
})

/* here file is read line one by one and spliting it and checking for function name, if function is present then count function and then show count */