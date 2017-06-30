// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.

function changePrimaryAndAddAlias() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues();
  
  
  for (var i=0;i<groups.length;i++)
  {
    var userName = groups[i];
    
try {   
  
  //This is taking a group on @dundermifflin.net and changing it to sub.dundermifflin.net
  //Please change all instances of dundermifflin.net to your own domains.
  
AdminDirectory.Groups.update({"email": userName + "@sub.dundermifflin.net"}, userName + "@dundermifflin.net"); // @dundermifflin.net--->sub.dundermifflin.net
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("SUCCESS")
}
catch(e){
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("PASS -- Group does not exist");
}
  }
  }
