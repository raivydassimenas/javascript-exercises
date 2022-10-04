const caesar = function(string, shift) {
    let encodedString = "";

    for (let ch of string) {
        let encCh;
        if ("A".charCodeAt(0) <= ch.charCodeAt(0) && "Z".charCodeAt(0) >= ch.charCodeAt(0)) {
            let code = (ch.charCodeAt(0) - "A".charCodeAt(0)+ shift) % 26
            while (code < 0) {
                code += 26;
            }
            encCh = String.fromCharCode(code + "A".charCodeAt(0));
        } else if ("a".charCodeAt(0) <= ch.charCodeAt(0) && "z".charCodeAt(0) >= ch.charCodeAt(0)) {
            let code = (ch.charCodeAt(0) - "a".charCodeAt(0)+ shift) % 26
            while (code < 0) {
                code += 26;
            }
            encCh = String.fromCharCode(code + "a".charCodeAt(0));
        } else {
            encCh = ch;
        }
        encodedString += encCh;
    }

    return encodedString;
};

// Do not edit below this line
module.exports = caesar;
