const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('helperchallenge');
    if(err) {
        console.log('something went wrong . . . ');
    }
    const fileContents = data.toString();

    // solution for part 1 - what floor will he end up on?
    // ( = go up one floor
    // ) = go down one floor
    console.log(fileContents.split("(").length - fileContents.split(")").length);

    // solution for part 2 - when will he first enter the basement? (count = -1)
    let count = 0;
    for(let i = 0; i < fileContents.length; i++) {
        if(fileContents[i] === '(') {
            count += 1;
        } else {
            count -= 1;
            if(count === -1) {
                console.log(i + 1);
                break;
            }
        }
    }
    console.timeEnd('helperchallenge');
});