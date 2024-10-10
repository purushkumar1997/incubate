function addString(numStr) {
    if (numStr == "") {
        return 0;
    }
    
    let splitStr = new RegExp('[,\n]');

    if (numStr.startsWith("//")) {
        const newLine = numStr.indexOf("\n");
        const customDelim = numStr.substring(2, newLine);
        splitStr = new RegExp(customDelim);
        numStr = numStr.substring(newLine + 1);
    }
    const numArray = numStr.split(splitStr);
    let sum = 0;
    numArray.forEach((val) => {
        sum += +val;
    })
    return sum;
}

module.exports = addString;