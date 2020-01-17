// New York Times Search

// Objective: to retreive NYT articles based on the following criteria...
    // Search term
    // Number of records to be retreived
    // Start year for our search
    // End year for our search


// Layout
    // Header
    // User input section
        // Search term area (input box)
        // Number of records (drop down)
        // Start year (input box with data validation to ensure a year is entered)
        // End year (input box with data validation to ensure a year is entered)
    // Results diplay
    // Footer


// Psuedo Code
    // 1. The user interfaces with the above layout and enters in the appropriate search terms
        // user enters a string, chooses a drop down option and then enters 2 year inputs
    // 2. We next generate a queryURL from the user inputs
        // the queryURL is then concantenated together to form a suitable NYT api call
    // 3. We need to request the appropriate data from the NYT server
        // the queryURL is used in an AJAX "GET" request
    // 4. We retreive the response from NYT
        // we receive a response object from NYT
    // 5. We need to interept the response from NYT and retreive the appropriate info (i.e. article names)
        // we can use response.{item we need}
    // 6. We need to display the response in our results display
        // we can append text to specific HTML classes
    