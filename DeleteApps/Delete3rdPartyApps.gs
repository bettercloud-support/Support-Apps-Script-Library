// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose

function deleteApps() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var user = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues(); //Enter user email in column A
  var clientId = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B1:B"+maxRows).getValues(); //Enter domain in column B
  
  
  for (var i=0;i<user.length;i++)
  {
    
try{
  AdminDirectory.Tokens.remove(user[i], clientId[i])
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue("SUCCESS")
}
catch(e){
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue("FAILED")
}
  }
    
};
