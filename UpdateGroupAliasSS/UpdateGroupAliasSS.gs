function updateGroupAlias() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues();
  
  
  for (var i=0;i<groups.length;i++)
  {
    var userName = groups[i];
    Logger.log(userName);
    //Logger.log(userName);
    //var string = userName.toString();
    //Logger.log(string);
    AdminDirectory.Groups.Aliases.insert({"alias": userName + "@c.gameofclouds.com"}, userName + "@b.gameofclouds.com"); //enter subdomains here 
  }
    
};
