// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function listEvents() {
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
