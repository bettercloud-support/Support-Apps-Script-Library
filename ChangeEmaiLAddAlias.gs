function changePrimaryAndAddAlias() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues();
  
  
  for (var i=0;i<groups.length;i++)
  {
    var userName = groups[i];
    Logger.log(userName);
    //Logger.log(userName);
    //var string = userName.toString();
    //Logger.log(string);
    AdminDirectory.Groups.update({"email": userName + "@c.gameofclouds.com"}, userName + "@b.gameofclouds.com");
    AdminDirectory.Groups.Aliases.insert({"alias": userName + "@b.gameofclouds.com"}, userName + "@c.gameofclouds.com");
  }
    
};
