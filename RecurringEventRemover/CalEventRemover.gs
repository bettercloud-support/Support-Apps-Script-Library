// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.


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
