//DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function deleteEventsResource() {
   SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().clear();
  var resource = "dundermifflin.net_2d4e594331343132423032@resource.calendar.google.com"; //change this to your Resource ID
  var d = new Date();
  var threeMonths = new Date(d.setMonth(d.getMonth() + 3)).toISOString(); //Tells script to look for events 3 months ahead
  var today = new Date().toISOString();
  //Logger.log(actualDate);
    var optionalArgs = {
    timeMax: threeMonths,
    timeMin: today,
    showDeleted: false,
    singleEvents: true,
    orderBy: 'startTime'
  }
    
  var events = Calendar.Events.list(resource, optionalArgs) //Passes event to a variable
  //Logger.log(events)
  for (var i =0;i<events.items.length;i++) {
    var eventID = events.items[i].id; //isolates event ID from event list call
    var eventName  = events.items[i].summary;
    try {
      Calendar.Events.remove(resource, eventID) //Delete event IDs passed from events variable
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A"+(i+2)).setValue(eventName+" has been deleted");
  }
    catch(e){
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A"+(i+2)).setValue("EVENT DOES NOT EXIST ON USER'S CALENDAR");
  }
    Logger.log(eventID+" has been deleted");
  }
    
  

}
