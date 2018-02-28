// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

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
