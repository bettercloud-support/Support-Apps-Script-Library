//how to get eventID: https://www.google.com/calendar/render?gsessionid=OK&eventdeb=1

function myFunction() {
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var users = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A2:A"+maxRows).getValues();
  var eventId = "mqvehcb0i8dphr93t208fa6i0o"; //enter eventID here
  
  for (var i = 0; i < users.length; i++){
  
  try{
  Calendar.Events.remove(users[i], eventId);
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+2)).setValue("EVENT REMOVED FROM USER'S CALENDAR")
  }
  catch(e){
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+2)).setValue("EVENT DOES NOT EXIST ON USER'S CALENDAR")
  }
  
  }

}
