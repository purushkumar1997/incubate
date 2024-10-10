function addString(numStr) {
    if (numStr == "") {
        return 0;
    }
    
    const splitStr = new RegExp('[,\n]');
    const numArray = numStr.split(splitStr);
    let sum = 0;
    numArray.forEach((val) => {
        sum += +val;
    })
    return sum;
}

module.exports = addString;