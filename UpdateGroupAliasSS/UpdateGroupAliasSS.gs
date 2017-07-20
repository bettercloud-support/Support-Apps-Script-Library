// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.

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
