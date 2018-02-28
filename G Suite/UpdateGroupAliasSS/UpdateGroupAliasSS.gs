// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function updateGroupAlias() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues();
  var gAlias = "@dylan.dundermifflin.net"; //enter desired alias domain in place of this.
  
  
  for (var i=0;i<groups.length;i++)
  {
    var userName = groups[i];
    Logger.log(userName);
    
    try {
      
      AdminDirectory.Groups.Aliases.insert({"alias": userName + gAlias}, userName + "@sub.dundermifflin.net"); //takes a group on sub.dudnermifflin.net and adds an alias under dylan.dundermifflin.net 
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("SUCCESS");
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue(userName+gAlias); //Column C will update with the new alias
    }
    catch(e) {
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("PASS -- Group does not exist");
    
    }
   
  }
    
};
