
// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

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
