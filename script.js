
// Psuedo Code
    // 1. The user interfaces with the above layout and enters in the appropriate search terms
        // user enters a string, chooses a drop down option and then enters 2 year inputs

var userString = "   test string";
// once userstring is passed through a helper function it should look like "test+string"

function cleanString (userString) {
    var cleanUserString = "";
    cleanUserString = userString.trim();
    cleanUserString = cleanUserString.replace(" ","+");
    
    return cleanUserString;
};
    
console.log(cleanString(userString));

