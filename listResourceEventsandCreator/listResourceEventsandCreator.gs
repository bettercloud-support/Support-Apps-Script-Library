// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.

function listResourceEventsAndCreator() {
    var now = new Date();
    var now = now.toISOString();
 
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

  var resource = "dundermifflin.net_2d3435303239313732333332@resource.calendar.google.com"; //please change this to your own Calendar Resource ID.
 

   var events = Calendar.Events.list(resource);

  if (events.items && events.items.length > 0) {
    for (var i = 0; i < events.items.length; i++) {
      var event = events.items[i];
      var creator = events.items[i].creator.email;
      var date = events.items[i].start.dateTime;
     if (date > now)
      {
       ss.getRange("A1").setValue(creator);
       ss.getRange("B1").setValue(event.summary);
       ss.getRange("C1").setValue(events.summary);
        ss.insertRowBefore(1);
       Logger.log("Creator: " + creator);
       Logger.log("Event name: " + event.summary);
       Logger.log("Resource name: " + events.summary);
      Logger.log("Date:" + date);
      }
      }
  } else {
    Logger.log('No events found.');
  }
}
