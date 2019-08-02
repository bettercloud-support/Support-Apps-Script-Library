function deleteEventsResource() {
  var resource = "cloudypotter.com_3239373334333736373039@resource.calendar.google.com" //change this to your Resource ID
  var d = new Date();
  var actualDate = new Date(d.setMonth(d.getMonth() + 3)).toISOString(); //Tells script to look for events 3 months ahead
  Logger.log(actualDate);
    var optionalArgs = {
    timeMin: actualDate,
    showDeleted: false,
    singleEvents: true,
    orderBy: 'startTime'
  }
    
  var events = Calendar.Events.list(resource, optionalArgs) //Passes event to a variable
  

  for (var i =0;i<events.items.length;i++) {
    
    var eventID = events.items[i].id; //isolates event ID from event list call
    
    try {
      Calendar.Events.remove(resource, eventID) //Delete event IDs passed from events variable
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A"+(i+2)).setValue(eventID+" has been deleted");
  }
    catch(e){
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A"+(i+2)).setValue("EVENT DOES NOT EXIST ON USER'S CALENDAR");
  }
    Logger.log(eventID+" has been deleted");
  }
    
  

}
