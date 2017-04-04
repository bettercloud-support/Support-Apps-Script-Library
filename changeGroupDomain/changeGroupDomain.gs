function changeGroupDomain() {
  
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues();//gets group from spreadsheet
  
  for (var i=0;i<groups.length;i++)
  {
    var group = groups[i].toString(); //get group
    var index = group.indexOf("@"); //get place of "@"
    var userName = group.substring(0,group.lastIndexOf("@")); //get user name
    try{
      AdminDirectory.Groups.update({"email": userName + "@c.gameofclouds.com"}, group); //update to subdomain
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("SUCCESS");
    }
    catch(e){
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("PASS -- Group does not exist");
    }
  }
};
