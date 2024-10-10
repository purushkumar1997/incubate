function addString(numStr) {
    if (numStr == "") {
        return 0;
    }
    // +(string) is used to convert string to number
    return +numStr;
}

module.exports = addString;