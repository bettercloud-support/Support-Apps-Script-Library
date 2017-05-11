//To get the eventID, follow this link: https://www.google.com/calendar/render?gsessionid=OK&eventdeb=1
//You'll need to enter the part of the eventID before the underscore(e.g: 35rdwer3524rqwe13_)

function myFunction() {
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var users = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A2:A"+maxRows).getValues();
  var eventId = "ENTER_YOUR_EVENTID_HERE"; //enter eventIDprior to the underscore here
  
  for (var i = 0; i < users.length; i++){
  
  try {
  Calendar.Events.remove(users[i], eventId);
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+2)).setValue("EVENT REMOVED FROM USER'S CALENDAR")
  }
  catch(e){
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+2)).setValue("EVENT DOES NOT EXIST ON USER'S CALENDAR")
  }
  
  }

}
