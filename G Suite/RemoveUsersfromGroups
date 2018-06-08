// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function removeGroupMembers() {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var maxRows = sheet.getLastRow();
  var groups = sheet.getRange("A1:A"+ maxRows).getValues(); //gets groups from spreadsheet
  var members = sheet.getRange("B1:B"+ maxRows).getValues(); //gets members from spreadsheet
  var logs = sheet.getRange("C1:C"+ maxRows).getValues(); //logs success or failure

  for (var i = 0; i < groups.length; i++)
  {
    try{
     AdminDirectory.Members.remove(groups[i], members[i]); //removes members from group
     sheet.getRange("C"+(i+1)).setValue("SUCCESS"); //adds success message to spreadsheet
      Logger.log(members[i] + " removed from " + groups[i] + " successfully");
    }
     catch (e)
     {
       sheet.getRange("C"+(i+1)).setValue(e);
       Logger.log(e + 'error');
    }
  }
}
