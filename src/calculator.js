function addString(numStr) {
    if (numStr == "") {
        return 0;
    }
    
    const numArray = numStr.split(",");
    let sum = 0;
    numArray.forEach((val) => {
        sum += +val;
    })
    return sum;
}

module.exports = addString;