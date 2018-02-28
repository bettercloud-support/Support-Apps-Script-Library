// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.


function changeGroupPrimaryEmail() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var oldGroup = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues(); //put the email of the group you wish to change in column A
  var newGroup = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B1:B"+maxRows).getValues(); //put the new group email in column B
  
  
  for (var i=0;i<oldGroup.length;i++)
  {
    var oldGroupChange = oldGroup[i];
    var newGroupChange = newGroup[i];
    
    
try {
AdminDirectory.Groups.update({"email": newGroup[i]}, oldGroup[i]);
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue("SUCCESS")
}
catch(e) {
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue("FAILED")
}
  }
    
};

