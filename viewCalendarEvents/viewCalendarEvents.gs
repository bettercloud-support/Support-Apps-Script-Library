function listNext10Events() {
  var now = new Date();
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var id = SpreadsheetApp.getActiveSheet().getRange("A1:A"+ maxRows).getValues();
 
  var h=0;
  while ( h < id.length)
  {
   var events = Calendar.Events.list(id[h]);

  if (events.items && events.items.length > 0) {
    for (var i = 0; i < events.items.length; i++) {
      var event = events.items[i];
      var creator = events.items[i].creator.email;
       if (creator == "albert@dundermifflin.net") //add the email of the event creator here 
      {
        Logger.log("Creator: " + creator);
       Logger.log("Event name: " + event.summary);
        Logger.log("Resource name: " + events.summary);
        
        SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("Creator: " + creator);
        SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue("Event name: " + event.summary);
        SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("D"+(i+1)).setValue("Resource name: " + events.summary);
        h++;   
      }
      else
      {
        h++;
      }
      }
  } else {
   // Logger.log('No events found.');
    h++;
  }
}


/**
 * Parses an RFC 3339 date or datetime string and returns a corresponding Date
 * object. This function is provided as a workaround until Apps Script properly
 * supports RFC 3339 dates. For more information, see
 * https://code.google.com/p/google-apps-script-issues/issues/detail?id=3860
 * @param {string} string The RFC 3339 string to parse.
 * @return {Date} The parsed date.
 */
function parseDate(string) {
  var parts = string.split('T');
  parts[0] = parts[0].replace(/-/g, '/');
  return new Date(parts.join(' '));
}
};
