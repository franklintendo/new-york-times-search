
// Psuedo Code
    // 1. The user interfaces with the above layout and enters in the appropriate search terms
        // user enters a string, chooses a drop down option and then enters 2 year inputs


// Search term
    var userString = "   test string";
    // once userstring is passed through a helper function it should look like "test+string"

    function cleanString (userString) {
        var cleanUserString = "";
        cleanUserString = userString.trim();
        cleanUserString = cleanUserString.replace(" ","+");
        
        return cleanUserString;
    };
        
    console.log(cleanString(userString));

// Number of searches
    var numberOfSearches = "";

// Start and End Year
    var startYear = "1999";
    var endYear = "2005";

    function cleanYear() {
        
    }
